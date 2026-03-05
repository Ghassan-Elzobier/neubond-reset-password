"use client";

import Image from "next/image";

export function AppPreview() {
  return (
    <div className="relative hidden lg:flex flex-col items-center justify-center bg-[#8A65BA] p-10">
      <h2 className="text-white text-2xl font-semibold mb-6 text-center">
        A quick look at the Neubond app
      </h2>

      {/* iPad-style bezel */}
      <div className="bg-black rounded-[2rem] p-4 shadow-2xl border border-white/20 w-full max-w-[700px]">
        {/* Screen area */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/app-preview-img.png"
            alt="Neubond app preview"
            width={700}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
