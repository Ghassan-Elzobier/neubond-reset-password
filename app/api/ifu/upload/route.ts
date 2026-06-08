import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { list } from "@vercel/blob";
import { type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { isAuthorizedPublisher } from "@/lib/ifu/auth";

const LABEL_RE = /^[a-zA-Z0-9._-]+$/;

export async function POST(request: NextRequest): Promise<Response> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      token: process.env.BLOB_READ_WRITE_TOKEN,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        const supabase = await createClient();
        const { data, error } = await supabase.auth.getClaims();
        if (error || !data?.claims) {
          throw new Error("Unauthorized: no valid session.");
        }
        if (!isAuthorizedPublisher(data.claims.email)) {
          throw new Error("Forbidden: your account is not authorized to publish IFU versions.");
        }

        const label = (clientPayload ?? "").trim();
        if (!label || !LABEL_RE.test(label)) {
          throw new Error(
            "Invalid version label. Use only letters, numbers, dots, hyphens, and underscores (e.g. v1.0, Rev-02).",
          );
        }

        const expectedPathname = `ifu/${label}.pdf`;
        if (pathname !== expectedPathname) {
          throw new Error("Pathname mismatch — do not modify the upload path.");
        }

        const { blobs } = await list({
          prefix: `ifu/${label}`,
          token: process.env.BLOB_READ_WRITE_TOKEN,
        });
        if (blobs.some((b) => b.pathname === expectedPathname)) {
          throw new Error(
            `Version "${label}" is already published. Published versions are permanent and cannot be overwritten.`,
          );
        }

        return {
          allowedContentTypes: ["application/pdf"],
          addRandomSuffix: false,
          allowOverwrite: false,
        };
      },
      onUploadCompleted: async ({ blob }) => {
        console.log("[IFU] Published:", blob.pathname, "at", new Date().toISOString());
      },
    });

    return Response.json(jsonResponse);
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Upload failed." },
      { status: 400 },
    );
  }
}
