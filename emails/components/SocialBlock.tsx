// /emails/components/SocialBlock.tsx
import { Section, Row, Column, Img, Link } from "@react-email/components";

export default function SocialBlock() {
  return (
    <Section className="nb-social-block">
      <h2 className="nb-social-header">Stay connected with us</h2>

      <p className="nb-social-text">
        We’ll be sharing updates, behind‑the‑scenes progress, and insights into
        the development of Loop I and our wider rehabilitation technology.
      </p>

      <table
        className="nb-social-table"
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
      >
        <tr>
          {/* LEFT COLUMN — LinkedIn */}
          <td className="nb-social-col" width="50%">
            <Img
              src="https://resend-attachments.s3.amazonaws.com/5a1c2f2e-8e1a-4d8e-9d2f-1b0c8b3f9b77"
              alt="LinkedIn preview card"
              className="nb-social-preview"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "6px",
                display: "block",
              }}
            />

            <Link
              href="https://www.linkedin.com/company/neubond"
              target="_blank"
              className="nb-social-btn"
            >
              Follow us on LinkedIn
            </Link>
          </td>

          {/* RIGHT COLUMN — Website */}
          <td className="nb-social-col" width="50%">
            <Img
              src="https://resend-attachments.s3.amazonaws.com/3c1d2f2e-9e1a-4d8e-9d2f-1b0c8b3f9b88"
              alt="Website preview card"
              className="nb-social-preview"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "6px",
                display: "block",
              }}
            />

            <Link
              href="https://neubond.co.uk/"
              target="_blank"
              className="nb-social-btn"
            >
              Visit our website
            </Link>
          </td>
        </tr>
      </table>
    </Section>
  );
}
