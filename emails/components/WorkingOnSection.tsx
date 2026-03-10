// /emails/components/LookingAheadSection.tsx
import { Section, Img } from "@react-email/components";

export default function WorkingOnSection() {
  return (
    <Section
      style={{
        backgroundColor: "#F7F3FB",
        padding: "10px 24px",
        marginBottom: "64px",
        borderBottomRightRadius: "6px",
        borderBottomLeftRadius: "6px",
      }}
    >
      <h1
        style={{
          color: " #8A65BA",
          fontSize: "30px",
          fontWeight: 600,
          marginBottom: "20px",
          marginTop: "5px",
        }}
      >
        What we've been working on
      </h1>

      <p>
        <strong>
          Over the past few months, we've been focused on the foundations:
        </strong>
      </p>

      <ul>
        <li>
          <strong>Defining the design of Loop I</strong> so it's safe, reliable,
          and ready for more people to try
        </li>
        <li>
          <strong>Developing the companion app,</strong> which will provide
          personalised exercises for patients that they can track
        </li>
        <li>
          <strong>Continuing early lab-based research</strong> to understand how
          Loop I can support rehabilitation in practice
        </li>
        <li>
          <strong>Growing our team</strong> across design, therapy, software,
          and neuroscience to accelerate our development
        </li>
      </ul>
      <p
        style={{
          color: "#8A65BA",
        }}
      >
        <strong>
          Each step brings us closer to creating a tool that enhances
          rehabilitation progress in clinical and home settings.
        </strong>
      </p>
    </Section>
  );
}
