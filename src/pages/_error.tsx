import Head from "next/head";
import { NextPageContext } from "next";
import { useContext } from "react";
import { ContextApp } from "../context";
import * as S from "../styles";

const Error = ({ statusCode }: { statusCode: number }) => {
  const { theme, lang } = useContext(ContextApp);
  const errorsData = {
    server: {
      "pt-BR": `Ocorreu um erro no servidor!`,
      "en-US": `An error occurred on server!`,
    },
    client: {
      "en-US": "An unknown error occurred on the client!",
      "pt-BR": "Ocorreu um erro desconhecido no cliente!",
    },
    "404": {
      "en-US": "Page not found!",
      "pt-BR": "Página não encontrada",
    },
  };

  if (statusCode === 404) {
    return (
      <>
        <Head>
          <title>Error 404!</title>
        </Head>
        <S.Error colorTheme={theme}>
          <section className="headerError">
            <h1>
              Error 404 <i className="fas fa-exclamation-triangle"></i>
            </h1>
          </section>
          <h3>{errorsData["404"][lang]}</h3>
        </S.Error>
      </>
    );
  }
  if (statusCode) {
    <>
      <Head>
        <title>Error {statusCode}!</title>
      </Head>
      <S.Error colorTheme={theme}>
        <section className="headerError">
          <h1>
            Error {statusCode} <i className="fas fa-exclamation-triangle"></i>
          </h1>
        </section>
        <h3>{errorsData.server[lang]}</h3>
      </S.Error>
    </>;
  }
  return (
    <>
      <Head>
        <title>Error!</title>
      </Head>
      <S.Error colorTheme={theme}>
        <section className="headerError">
          <h1>
            Error <i className="fas fa-exclamation-triangle"></i>
          </h1>
        </section>
        <h3>{errorsData.client[lang]}</h3>
      </S.Error>
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
