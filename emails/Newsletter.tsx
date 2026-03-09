import { Body, Container, Head, Html, Preview } from "@react-email/components";

import TopBar from "./components/TopBar";
import Logo from "./components/Logo";
import Hero from "./components/Hero";
import VisionSection from "./components/VisionSection";
import WorkingOnSection from "./components/WorkingOnSection";
import LookingAheadSection from "./components/LookingAheadSection";
import SectionImage from "./components/SectionImage";
import SocialBlock from "./components/SocialBlock";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";

export default function Newsletter() {
  return (
    <Html>
      <Head />

      <Preview>Neubond Newsletter — Updates & Progress</Preview>

      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#F7F3FB",
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
          lineHeight: "1.5",
        }}
      >
        <Container
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            padding: 0,
          }}
        >
          <TopBar />
          <Logo />
          <Hero />
          <SectionImage
            src="/emails/static/hero_image_V2_compressed.jpg"
            alt="Fallback hero"
          />
          <VisionSection />
          <SectionImage
            src="/emails/static/Marketing-Test-User_cropped_v2_compressed.jpg"
            alt="Section header image"
          />
          <WorkingOnSection />
          <LookingAheadSection />
          <SocialBlock />
          <Footer />
          <Disclaimer />
        </Container>
      </Body>
    </Html>
  );
}
