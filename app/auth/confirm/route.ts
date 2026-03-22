import { type EmailOtpType } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  if (!token_hash || !type) {
    redirect(`/auth/error?error=No token hash or type`);
  }

  // ⭐ CASE 1: PASSWORD RESET (recovery)
  // Do NOT verify OTP here — pass it to the next page
  if (type === "recovery") {
    const url = new URL(next, request.url);
    url.searchParams.set("token_hash", token_hash);
    url.searchParams.set("type", type);
    redirect(url.toString());
  }

  // ⭐ CASE 2: SIGNUP or EMAIL CHANGE
  // These SHOULD be verified server-side
  const supabase = await createClient();
  const { error } = await supabase.auth.verifyOtp({
    type,
    token_hash,
  });

  if (!error) {
    if (type === "signup") {
      await supabase.auth.signOut();
    }

    redirect(next);
  } else {
    redirect(`/auth/error?error=${error.message}`);
  }
}
