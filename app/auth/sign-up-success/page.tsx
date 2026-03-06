// app/auth/sign-up-success/page.tsx

import { AppPreview } from "@/components/app-preview";

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#8A65BA] px-6 py-16 text-white">
      <div className="max-w-2xl text-center mb-12">
        <h1 className="text-3xl font-semibold mb-4">
          Your account is confirmed
        </h1>
        <p className="text-lg opacity-90">
          Thank you for verifying your email. You can now sign in to the Neubond
          app and continue your journey.
        </p>
      </div>

      <div className="w-full max-w-[700px]">
        <AppPreview />
      </div>
    </div>
  );
}
