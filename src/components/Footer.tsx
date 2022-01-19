import { useContext } from "react";
import { ContextApp } from "../context";
import * as S from "../styles/index";

const icons: Array<{ name: string; link: string }> = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/jo%C3%A3o-pedro-siqueira-santos-a82303222",
  },
  {
    name: "github",
    link: "https://github.com/JpedroSnts",
  },
];

export default function Footer() {
  const { theme } = useContext(ContextApp);
  return (
    <>
      <S.Footer colorTheme={theme}>
        <article>
          <section>&copy; JpedroSnts - 2022</section>
          <section>
            {icons.map((icon, i) => (
              <S.FooterIcon
                colorTheme={theme}
                href={icon.link}
                key={i}
                target="_blank"
              >
                <i className={`fab fa-${icon.name}`}></i>
              </S.FooterIcon>
            ))}
          </section>
        </article>
      </S.Footer>
      <S.FooterGhost />
    </>
  );
}
