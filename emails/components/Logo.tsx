// /emails/components/Logo.tsx
import { Section, Img, Link } from "@react-email/components";

export default function Logo() {
  return (
    <Section style={{ textAlign: "center" }}>
      <Link
        href="https://neubond.co.uk/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <Img
          src="https://resend-attachments.s3.amazonaws.com/10ac4e5e-d039-4f39-a151-2451c68bfa14"
          alt='Colorful gradient text displaying the word "new bond" in pink, purple, and blue hues.'
          width={337}
          height={69}
          className="nb-logo"
          style={{
            display: "block",
            margin: "24px auto",
            borderRadius: "8px",
            maxWidth: "100%",
          }}
        />
      </Link>
    </Section>
  );
}
