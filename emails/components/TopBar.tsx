import { Section, Row, Column } from "@react-email/components";

export default function TopBar() {
  return (
    <Section
      style={{
        backgroundColor: "#8A65BA",
        color: "#fff",
        padding: "3px 5px",
      }}
    >
      <Row>
        <Column align="left">
          <strong>Neubond Newsletter</strong>
        </Column>
        <Column align="right">
          <strong>March 3, 2026</strong>
        </Column>
      </Row>
    </Section>
  );
}
