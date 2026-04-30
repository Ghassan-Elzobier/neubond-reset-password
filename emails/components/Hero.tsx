// /emails/components/Hero.tsx
import { Section, Img } from "@react-email/components";

export default function Hero() {
  return (
    <Section>
      <Img
        src="https://app.neubond.co.uk/email/Newsletter-2/Team_edited.jpg"
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
          Welcome to the latest edition of the Neubond Newsletter.
        </h2>

        <p>
          Over the next few editions, more and more readers will be subscribed
          to the newsletter. If this includes you, welcome to Neubond! We hope
          you find the information useful.
        </p>
        <p>
          We look forward to sharing updates about our development and making
          you a part of the journey.
        </p>
      </div>
    </Section>
  );
}
