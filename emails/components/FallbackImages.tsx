// /emails/components/FallbackImages.tsx
import { Img } from "@react-email/components";

export default function FallbackImages() {
  return (
    <>
      {/* HERO BACKGROUND */}
      <Img
        src="https://resend-attachments.s3.amazonaws.com/74bcd3f2-59e6-48bd-8212-a91b1dd5fc02"
        alt=""
        className="nb-hidden"
      />

      {/* SECTION BACKGROUND */}
      <Img
        src="https://resend-attachments.s3.amazonaws.com/2bd6f0ad-1031-4d05-af3c-1dfdf752d0d7"
        alt=""
        className="nb-hidden"
      />

      {/* TOP IMAGE */}
      <Img
        src="https://resend-attachments.s3.amazonaws.com/0d184667-ae65-42a2-a3df-d22f93d4bb76"
        alt=""
        className="nb-hidden"
      />

      {/* SOCIAL PREVIEW — LINKEDIN */}
      <Img
        src="https://resend-attachments.s3.amazonaws.com/5a1c2f2e-8e1a-4d8e-9d2f-1b0c8b3f9b77"
        alt=""
        className="nb-hidden"
      />

      {/* SOCIAL PREVIEW — WEBSITE */}
      <Img
        src="https://resend-attachments.s3.amazonaws.com/3c1d2f2e-9e1a-4d8e-9d2f-1b0c8b3f9b88"
        alt=""
        className="nb-hidden"
      />
    </>
  );
}
