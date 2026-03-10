// /emails/components/Hero.tsx
import { Section, Img } from "@react-email/components";

export default function Hero() {
  return (
    <Section>
      <Img
        src="https://app.neubond.co.uk/email/hero_image_V2_compressed.jpg"
        width="100%"
        alt="Welcome to Neubond Hero"
        style={{
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
        }}
      />
      <div
        style={{
          padding: "20px 40px",
          color: "#fff",
          backgroundColor: "#8A65BA",
          borderBottomLeftRadius: "6px",
          borderBottomRightRadius: "6px",
        }}
      >
        <h2
          style={{
            marginTop: "0px",
          }}
        >
          Welcome to our first Neubond Newsletter!
        </h2>

        <p>
          Thank you for joining our journey. We’re especially grateful to have
          you with us as we build a system designed to support rehabilitation in
          a meaningful, practical way.
        </p>

        <p>
          We look forward to sharing updates about our development and making
          you a part of the journey.
        </p>
      </div>
    </Section>
  );
}
