interface Props {
  src: string;
  alt: string;
}

const SectionImage = ({ src, alt }: Props) => (
  <div className="w-full my-6">
    <img src={src} alt={alt} className="w-full rounded-md" />
  </div>
);

export default SectionImage;
