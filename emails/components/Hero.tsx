// /emails/components/Hero.tsx
import { Section } from "@react-email/components";

export default function Hero() {
  return (
    <Section className="nb-hero">
      <div className="nb-hero-image">
        <div className="nb-hero-inner">
          <div className="nb-hero-card">
            <h2 className="nb-hero-heading">
              Welcome to our first Neubond Newsletter!
            </h2>

            <p className="nb-hero-body">
              Thank you for joining our journey. We’re especially grateful to
              have you with us as we build a system designed to support
              rehabilitation in a meaningful, practical way.
            </p>

            <p className="nb-hero-body">
              We look forward to sharing updates about our development and
              making you a part of the journey.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
