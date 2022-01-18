import Image from "next/image";
import * as S from "../styles";

interface IconProps {
  theme: "dark" | "light";
  src: string;
  alt: string;
  title: string;
}

export default function Icon({ theme, src, alt, title }: IconProps) {
  return (
    <S.Icon aria-label={title} colorTheme={theme}>
      <Image src={src} alt={alt} width="30px" height="30px" />
    </S.Icon>
  );
}
