// /emails/components/VisionSection.tsx
import { Section } from "@react-email/components";

export default function VisionSection() {
  return (
    <Section className="nb-section--vision">
      <h1 className="nb-section-title">Our Vision</h1>

      <p className="nb-body">
        <strong>
          Neubond is on a mission to make rehabilitation more effective and
          accessible, helping people see that regaining control after a stroke
          is truly possible.
        </strong>
      </p>

      <p className="nb-body">
        <strong>What we are building – </strong>
        We are developing wearable technology that senses your movements and
        delivers personalised support based on them.
      </p>

      <p className="nb-body">
        <strong>Where we are starting – </strong>
        We are beginning with an exercise companion system in the form of a
        bracelet called <strong>Loop I</strong>, designed to help patients
        practise exercises independently while tracking their progress and
        performance.
      </p>
    </Section>
  );
}
