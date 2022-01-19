import type { NextPage, GetStaticProps } from "next";
import { useContext } from "react";
import { ContextApp } from "../context";
import { AboutDataProps } from "../types";
import Head from "next/head";
import Icon from "../components/Icon";
import * as S from "../styles";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/display`);
  const data = await res.json();
  return { props: { about: data.about } };
};

interface AboutProps {
  about: AboutDataProps;
}

const About: NextPage<AboutProps> = ({ about }) => {
  const { theme, lang } = useContext(ContextApp);
  return (
    <>
      <Head>
        <title>{about.title[lang]}</title>
        <meta name="description" content={about.description[lang]} />
      </Head>
      <section>
        <S.Image
          src={about.image.src}
          alt={about.image.alt[lang]}
          colorTheme={theme}
        />
        <S.TitleName colorTheme={theme}>{about.name}</S.TitleName>
        <S.Icons>
          {about.icons.map((icon, i) => (
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
        <p>{about.text[lang]}</p>
      </section>
    </>
  );
};

export default About;
