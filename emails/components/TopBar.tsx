import { Section, Row, Column } from "@react-email/components";

export default function TopBar() {
  return (
    <Section className="nb-topbar">
      <Row>
        <Column align="left" style={{ fontWeight: 600 }}>
          Neubond Newsletter
        </Column>
        <Column align="right" style={{ opacity: 0.9 }}>
          March 3, 2026
        </Column>
      </Row>
    </Section>
  );
}
