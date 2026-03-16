import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Img,
} from "@react-email/components";

import Footer from "./components/Footer";
import Logo from "./components/Logo";
import TopBar from "./components/TopBar";

export default function ResetPassword() {
  return (
    <Html>
      <Body
        style={{
          margin: 0,
          padding: 0,
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
          lineHeight: "1.5",
          fontSize: "17px",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: 0,
            backgroundColor: "#fff",
          }}
        >
          <Logo />
          <Img src="app.neubond.co.uk/email/Lock-Image_Compressed.jpg" />
        </Container>
      </Body>
    </Html>
  );
}
