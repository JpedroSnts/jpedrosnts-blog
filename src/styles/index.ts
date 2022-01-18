import styled, { createGlobalStyle } from "styled-components";

interface themeProp {
  colorTheme: string;
}

export const GlobalStyles = createGlobalStyle<themeProp>`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto Slab', serif;
    }
    body{
        background-color: ${(props) =>
          props.colorTheme === "dark" ? "#282A36" : "#fff"};
        color: ${(props) => (props.colorTheme === "dark" ? "#fff" : "#2C2C2C")};
    }
    a {
      text-decoration: none;
    }
    h1{
      font-size: 35px;
    }
    h1,h2,h3,h4,h5,h6{
      color: ${(props) =>
        props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB"};
    }
    ul{
      list-style: inside;
    }
    [aria-label] {
    position: relative;
      &::after {
        content: attr(aria-label);
        display: none;
        position: absolute;
        top: 110%;
        left: 0px;
        z-index: 5000;
        pointer-events: none;
        padding: 2px 10px;
        border-radius: 5px;
        text-decoration: none;
        font-size: .9em;
        color: ${(props) =>
          props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB"};
          border: solid 2px ${(props) =>
            props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB"};
        font-weight: 600;
        font-size: 16px;
      }

      &:hover::after {
        display: block;
      }
    }
`;

export const Container = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;600;700&display=swap");
  width: min(600px, 100%);
  padding: 20px;
  margin: auto;
`;

export const Header = styled.header`
  width: 100%;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

export const Nav = styled.nav`
  width: min(600px, 100%);
  height: 60px;
  padding: 20px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    font-size: 18px;
  }

  section {
    display: flex;
  }
`;

interface LiNavProps {
  active: boolean;
  colorTheme: string;
}

function colorActive(props: LiNavProps): string {
  if (props.active) {
    return props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB";
  } else {
    return props.colorTheme === "dark" ? "#fff" : "#2C2C2C";
  }
}

export const LiNav = styled.li<LiNavProps>`
  a {
    text-decoration: none;
    color: ${(props) => colorActive(props)};
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      color: ${(props) =>
        props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB"};
    }
  }
`;

export const SwitchTheme = styled.button<themeProp>`
  width: 40px;
  height: 40px;
  font-size: 20px;
  margin-left: 10px;
  color: ${(props) => (props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB")};
  border-radius: 20px;
  border: solid 2px
    ${(props) => (props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB")};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const CardPost = styled.article`
  margin-bottom: 20px;
  h1 {
    font-size: 30px;
  }
  small {
    font-weight: 700;
  }
  p {
    font-weight: 400;
  }
`;

export const Image = styled.img<themeProp>`
  width: 200px;
  border-radius: 100px;
  display: block;
  margin: auto;
  border: solid 4px
    ${(props) => (props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB")};
`;

export const TitleName = styled.h1<themeProp>`
  text-align: center;
  font-size: 40px;
  padding-bottom: 10px;
  border-bottom: solid 4px
    ${(props) => (props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB")}; ;
`;

export const Icon = styled.article<themeProp>`
  width: 50px;
  height: 50px;
  background-color: ${(props) =>
    props.colorTheme === "dark" ? "#725E97" : "#C5A2F7"};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icons = styled.section`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 35px;
`;
