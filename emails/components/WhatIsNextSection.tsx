// /emails/components/LookingAheadSection.tsx
import { Section } from "@react-email/components";

export default function WhatIsNextSection() {
  return (
    <Section
      style={{
        backgroundColor: "#F7F3FB",
        padding: "10px 24px",
        marginBottom: "64px",
        borderRadius: "6px",
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
        What's coming next!
      </h1>

      <p>
        <strong>We'll be busy with our next phase of development:</strong>
      </p>

      <ul>
        <li>
          Finalising the design of <strong>Loop I</strong>
        </li>
        <li>
          Running <strong>small user tests</strong> to learn from real-world use
        </li>
        <li>
          <strong>Beginning early manufacturing</strong>
        </li>
      </ul>
    </Section>
  );
}
