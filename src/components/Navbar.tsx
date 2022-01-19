import Link from "next/link";
import { NavbarProps } from "../types";
import { useContext, useEffect, useRef } from "react";
import { ContextApp } from "../context";
import { useRouter } from "next/router";
import * as S from "../styles/index";

const navbar: NavbarProps = {
  "pt-BR": {
    items: ["Home", "Sobre"],
    links: ["/", "/about"],
  },
  "en-US": {
    items: ["Home", "About"],
    links: ["/", "/about"],
  },
};

export default function Navbar() {
  let selectElement = null;
  let checkboxElement = null;
  if (typeof window !== "undefined") {
    selectElement = document.createElement("select");
  }
  const select = useRef<HTMLSelectElement>(selectElement);
  const checkbox = useRef<HTMLInputElement>(checkboxElement);
  const { asPath } = useRouter();
  const { theme, setTheme, lang, setLang } = useContext(ContextApp);
  function changeTheme(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.checked ? setTheme("light") : setTheme("dark");
  }
  function changeLang(e: React.ChangeEvent<HTMLSelectElement>) {
    const slctLang = e.target.value;
    if (slctLang === "pt-BR" || slctLang === "en-US") setLang(slctLang);
  }
  useEffect(() => {
    if (select.current) select.current.value = lang;
    if (checkbox.current) checkbox.current.checked = theme === "light";
  });
  return (
    <S.Header>
      <S.Nav>
        <section>
          <ul>
            {navbar[lang].items.map((item, i) => (
              <S.LiNav
                colorTheme={theme}
                active={asPath === navbar[lang].links[i]}
                key={i}
              >
                <Link href={navbar[lang].links[i]}>
                  <a>{item}</a>
                </Link>
              </S.LiNav>
            ))}
          </ul>
        </section>
        <section>
          <S.SwitchLang
            colorTheme={theme}
            ref={select}
            onChange={(e) => changeLang(e)}
          >
            <option value="pt-BR">Pt</option>
            <option value="en-US">En</option>
          </S.SwitchLang>
          <S.CbTheme colorTheme={theme}>
            <input
              type="checkbox"
              className="checkbox"
              ref={checkbox}
              id="chk"
              onChange={(e) => changeTheme(e)}
            />
            <label className="label" htmlFor="chk">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <div className="ball"></div>
            </label>
          </S.CbTheme>
        </section>
      </S.Nav>
    </S.Header>
  );
}
