"use client";

import { useSearchParams } from "next/navigation";
import { UpdatePasswordForm } from "@/components/update-password-form";
import Image from "next/image";
import { AppPreview } from "@/components/app-preview";

export default function UpdatePasswordPage() {
  const searchParams = useSearchParams();
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left column */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* Branding */}
        <div className="flex justify-center gap-2 md:justify-start">
          <a
            href="https://neubond.co.uk/"
            className="flex items-center gap-2 font-medium"
          >
            <Image
              src="/neubond_logo.png"
              alt="Neubond logo"
              width={180}
              height={0}
              sizes="100vw"
              style={{ height: "auto" }}
            />
          </a>
        </div>

        {/* Form container */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <UpdatePasswordForm token_hash={token_hash} type={type} />
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="relative hidden lg:flex flex-col items-center justify-center bg-[#8A65BA] p-10 text-white">
        <div className="max-w-md text-center mb-8">
          <h2 className="text-2xl font-semibold">
            Create a new password to regain access to your account.
          </h2>
        </div>

        <AppPreview />
      </div>
    </div>
  );
}
