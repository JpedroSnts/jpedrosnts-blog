import styled, { createGlobalStyle } from "styled-components";

interface GlobalStylesProps {
  colorTheme: string;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
    body{
        background-color: ${(props) =>
          props.colorTheme === "dark" ? "#282A36" : "#fff"};
        color: ${(props) => (props.colorTheme === "dark" ? "#fff" : "#2C2C2C")};
    }
`;

export const Container = styled.main``;
