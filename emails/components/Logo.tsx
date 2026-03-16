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
          src="https://app.neubond.co.uk/email/neubond_logo.jpg"
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
