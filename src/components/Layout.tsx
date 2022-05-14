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
