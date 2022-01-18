import Link from "next/link";
import { useContext } from "react";
import { ContextApp } from "../context";
import { useRouter } from "next/router";
import display from "../data/display.json";
import * as S from "../styles/index";

export default function Navbar() {
  const { asPath } = useRouter();
  const { theme, setTheme, lang, setLang } = useContext(ContextApp);
  function changeTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  function changeLang() {
    lang === "pt-BR" ? setLang("en-US") : setLang("pt-BR");
  }
  return (
    <S.Header>
      <S.Nav>
        <section>
          <ul>
            {display.navbar[lang].items.map((item, i) => (
              <S.LiNav
                colorTheme={theme}
                active={asPath === display.navbar[lang].links[i]}
                key={i}
              >
                <Link href={display.navbar[lang].links[i]}>
                  <a>{item}</a>
                </Link>
              </S.LiNav>
            ))}
          </ul>
        </section>
        <section>
          <S.SwitchTheme colorTheme={theme} onClick={changeLang}>
            {lang === "en-US" ? "en" : "pt"}
          </S.SwitchTheme>
          <S.SwitchTheme colorTheme={theme} onClick={changeTheme}>
            {theme === "light" ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </S.SwitchTheme>
        </section>
      </S.Nav>
    </S.Header>
  );
}
