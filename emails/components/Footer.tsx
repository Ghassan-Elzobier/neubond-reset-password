// /emails/components/Footer.tsx
import { Section, Img, Link, Row, Column } from "@react-email/components";

export default function Footer() {
  return (
    <Section
      style={{
        backgroundColor: "#8A65BA",
      }}
    >
      <Row>
        <Column
          align="center"
          style={{
            padding: "10px 0px",
          }}
        >
          <Img
            src="../static/Logo_white_Compressed.png"
            alt="Neubond Logo - White"
            width="200px"
          />
        </Column>
      </Row>
      <Row style={{ textDecoration: "none" }}>
        <Column align="center">
          <Link href="mailto:info@neubond.co.uk">
            <Img
              src="../static/mail_icon.png"
              alt="Mail Icon"
              width="16px"
              style={{
                display: "inline-block",
                padding: "10px",
              }}
            />
            info@neubond.co.uk
          </Link>
        </Column>
        <Column align="center">
          <Link href="neubond.co.uk">
            <Img
              src="../static/globe_icon.png"
              alt="globe Icon"
              width="16px"
              style={{
                display: "inline-block",
                padding: "10px",
              }}
            />
            neubond.co.uk
          </Link>
        </Column>
      </Row>
    </Section>
  );
}
