// /emails/components/SocialBlock.tsx
import {
  Section,
  Row,
  Column,
  Img,
  Link,
  Container,
} from "@react-email/components";

export default function SocialBlock() {
  return (
    <Section
      style={{
        backgroundColor: "#8A65BA",
        color: "#fff",
        width: "100%",
        maxWidth: "700px",
        borderTopLeftRadius: "6px",
        borderTopRightRadius: "6px",
        tableLayout: "auto",
      }}
    >
      <Row>
        <Column
          style={{
            width: "310px",
            padding: "20px",
            display: "inline-block",
          }}
        >
          <Link href="https://www.linkedin.com/posts/neubond_happy-holidays-from-neubond-as-2025-comes-activity-7411864981874384896-ExA0?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMVNHcBJQtFf0DnDBvcvwmlaUGCsVYzdi0">
            <Img
              src="https://app.neubond.co.uk/email/LinkedIn_Post_Compressed.jpg"
              alt="LinkedIn preview card"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "6px",
              }}
            />
          </Link>
        </Column>
        <Column
          style={{
            width: "310px",
            padding: "20px",
            display: "inline-block",
          }}
        >
          <h1 style={{ marginTop: "2px", lineHeight: 1.1 }}>
            Stay connected with Neubond
          </h1>
          <p>
            From clinical milestones to company development and partnerships, we
            share these moments across the year. Follow our journey on LinkedIn!
          </p>
          <div
            style={{
              textAlign: "center",
              paddingTop: "10px",
            }}
          >
            <Link
              href="https://www.linkedin.com/company/neubond"
              style={{
                textDecoration: "none",
                color: "#8A65BA",
                backgroundColor: "#fff",
                padding: "10px 10px",
                borderRadius: "6px",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              <Img
                src="https://app.neubond.co.uk/email/linkedin_icon.png"
                alt="globe Icon"
                width="16px"
                style={{
                  verticalAlign: "middle",
                  display: "inline-block",
                  padding: "10px",
                }}
              />
              <span
                style={{
                  verticalAlign: "middle",
                }}
              >
                Follow us on LinkedIn →
              </span>
            </Link>
          </div>
        </Column>
      </Row>
    </Section>
  );
}
