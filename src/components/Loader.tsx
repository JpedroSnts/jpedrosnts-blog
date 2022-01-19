import { useContext } from "react";
import { ContextApp } from "../context";
import * as S from "../styles";

export default function Loader() {
  const { theme } = useContext(ContextApp);
  return (
    <S.Loader colorTheme={theme}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </S.Loader>
  );
}
