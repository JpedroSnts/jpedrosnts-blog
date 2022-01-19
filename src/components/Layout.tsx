import Head from "next/head";
import { useContext } from "react";
import { ContextApp } from "../context";
import Navbar from "./Navbar";
import Footer from "./Footer";
import * as S from "../styles";

export default function Layout({ children }: { children: JSX.Element }) {
  const { theme } = useContext(ContextApp);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <link rel="apple-touch-icon" type="image/ico" href="/favicon.ico" />
      </Head>
      <Navbar />
      <S.Container>
        {children}
        <S.GlobalStyles colorTheme={theme} />
      </S.Container>
      <Footer />
    </>
  );
}
