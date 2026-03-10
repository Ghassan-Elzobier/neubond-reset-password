// /emails/components/VisionSection.tsx
import { Section } from "@react-email/components";

export default function VisionSection() {
  return (
    <Section
      style={{
        backgroundColor: " #FFFFFF",
        padding: "24px",
        margin: "64px 0",
        border: "4px solid #8A65BA",
        borderRadius: "6px",
      }}
    >
      <h1 style={{ color: " #8A65BA", marginTop: 0 }}>Our Vision</h1>

      <p>
        <strong>
          Neubond is on a mission to make rehabilitation more effective and
          accessible, helping people see that regaining control after a stroke
          is truly possible.
        </strong>
      </p>

      <p>
        <strong>What we are building – </strong>
        We are developing wearable technology that senses your movements and
        delivers personalised support based on them.
      </p>

      <p>
        <strong>Where we are starting – </strong>
        We are beginning with an exercise companion system in the form of a
        bracelet called <strong>Loop I</strong>, designed to help patients
        practise exercises independently while tracking their progress and
        performance.
      </p>
    </Section>
  );
}
