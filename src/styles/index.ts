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
    h1,h2,h3,h4,h5,h6{
      color: ${(props) =>
        props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB"};
    }
`;

export const Container = styled.main``;
