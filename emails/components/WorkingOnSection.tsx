// /emails/components/WorkingOnSection.tsx
import { Section } from "@react-email/components";

export default function WorkingOnSection() {
  return (
    <Section className="nb-section-working">
      <h1 className="nb-section-title">What we’ve been working on</h1>

      <p className="nb-body">
        Over the past few months, we’ve been building the foundations of{" "}
        <strong>Loop I</strong> — our first wearable companion designed to help
        stroke survivors practise exercises independently and confidently.
      </p>

      <p className="nb-body">
        Our focus has been on creating a system that can sense movement
        accurately and provide meaningful feedback, while remaining simple and
        intuitive to use.
      </p>

      <p className="nb-body">
        We’ve been working closely with clinicians, therapists, and stroke
        survivors to ensure Loop I supports real rehabilitation needs — not just
        theoretical ones.
      </p>
    </Section>
  );
}
