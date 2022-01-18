import type { NextPage } from "next";
import { useContext } from "react";
import { ContextApp } from "../context";
import Head from "next/head";
import display from "../data/display.json";
import Icon from "../components/Icon";
import * as S from "../styles";

const About: NextPage = () => {
  const { theme, lang } = useContext(ContextApp);
  return (
    <>
      <Head>
        <title>{display.about.title[lang]}</title>
        <meta name="description" content={display.about.description[lang]} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <S.Image
          src={display.about.image.src}
          alt={display.about.image.alt[lang]}
          colorTheme={theme}
        />
        <S.TitleName colorTheme={theme}>{display.about.name}</S.TitleName>
        <S.Icons>
          {display.about.icons.map((icon, i) => (
            <Icon
              key={i}
              src={icon.src}
              alt={icon.alt[lang]}
              title={icon.title}
              theme={theme}
            />
          ))}
        </S.Icons>
      </section>
      <section>
        <p>{display.about.text[lang]}</p>
      </section>
    </>
  );
};

export default About;
