import { Img } from "@react-email/components";

interface Props {
  src: string;
  alt: string;
}

const SectionImage = ({ src, alt }: Props) => (
  <Img
    src={src}
    alt={alt}
    style={{
      display: "block",
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "0px",
      borderTopLeftRadius: "6px",
      borderTopRightRadius: "6px",
    }}
  />
);

export default SectionImage;
