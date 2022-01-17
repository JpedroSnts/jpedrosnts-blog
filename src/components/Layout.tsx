import { useContext, useEffect } from "react";
import { ContextApp } from "../context";
import * as S from "../styles";

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  const { theme, setTheme, lang, setLang } = useContext(ContextApp);

  function changeTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  function changeLang() {
    lang === "pt-BR" ? setLang("en-US") : setLang("pt-BR");
  }

  return (
    <S.Container>
      {children}
      <div>
        <h1>{theme}</h1>
        <button onClick={changeTheme}>Change Theme</button>
      </div>
      <div>
        <h1>{lang}</h1>
        <button onClick={changeLang}>Change Lang</button>
      </div>
      <S.GlobalStyles colorTheme={theme} />
    </S.Container>
  );
}
