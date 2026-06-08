import { type NextRequest } from "next/server";
import { list, get } from "@vercel/blob";
import { createClient } from "@/lib/supabase/server";

const NOINDEX = "noindex, nofollow";

const labelFor = (pathname: string) =>
  pathname.replace(/^ifu\//, "").replace(/\.pdf$/, "");

export async function GET(request: NextRequest) {
  if (process.env.IFU_REQUIRE_AUTH === "true") {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getClaims();
    if (error || !data?.claims) {
      return Response.redirect(new URL("/auth/login", request.url));
    }
  }

  const { blobs } = await list({
    prefix: "ifu/",
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  const versions = blobs
    .filter((b) => b.pathname.endsWith(".pdf"))
    .sort(
      (a, b) =>
        new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime(),
    );

  if (versions.length === 0) {
    return new Response("No IFU version has been published yet.", {
      status: 404,
      headers: { "X-Robots-Tag": NOINDEX },
    });
  }

  const current = versions[0];
  const result = await get(current.pathname, {
    access: "private",
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  if (!result || result.statusCode !== 200) {
    return new Response("IFU file not found.", {
      status: 404,
      headers: { "X-Robots-Tag": NOINDEX },
    });
  }

  const label = labelFor(current.pathname);

  return new Response(result.stream, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="IFU-${label}.pdf"`,
      "X-Robots-Tag": NOINDEX,
      "Cache-Control": "no-store",
    },
  });
}
