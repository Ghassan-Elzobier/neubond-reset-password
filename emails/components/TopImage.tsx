// /emails/components/TopImage.tsx
import { Section, Img } from "@react-email/components";

export default function TopImage() {
  return (
    <Section className="nb-topimage" style={{ padding: "0" }}>
      <Img
        src="https://resend-attachments.s3.amazonaws.com/0d184667-ae65-42a2-a3df-d22f93d4bb76"
        alt="An older woman with gray hair demonstrates a hand gesture to two younger people during an indoor discussion or training session."
        width="724"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
        }}
      />
    </Section>
  );
}
