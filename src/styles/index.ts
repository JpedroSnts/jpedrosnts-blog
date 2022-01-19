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
    html, #__next{
      height: 100%;
    }
    body{
      min-height:100%;
      position:relative;
        margin-bottom:50px;
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
    article[aria-label] {
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
      font-size: 0.9em;
      color: ${(props) =>
        props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB"};
      border: solid 2px
        ${(props) => (props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB")};
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
  min-height: 100%;
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

export const CbTheme = styled.span<themeProp>`
  align-self: center;
  margin-left: 20px;
  border: solid 2px
    ${(props) => (props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB")};
  padding: 3px 8px;
  border-radius: 50px;
  width: 57px;
  .checkbox {
    display: none;
  }
  .label {
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 20px;
    transform: scale(1.5);
  }

  .label .ball {
    background-color: ${(props) =>
      props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB"};
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    height: 14px;
    width: 14px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .label .ball {
    transform: translateX(17px);
  }

  .fa-moon {
    color: ${(props) => (props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB")};
    font-size: 10px;
  }

  .fa-sun {
    color: ${(props) => (props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB")};
    font-size: 10px;
  }
`;

export const SwitchLang = styled.select<themeProp>`
  width: 55px;
  height: 30px;
  border-radius: 200px;
  font-size: 17px;
  outline: none;
  border: solid 2px
    ${(props) => (props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB")};
  color: ${(props) => (props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB")};
  background-color: transparent;
  align-self: center;
  text-align: center;
  cursor: pointer;

  option {
    color: #2c2c2c;
  }
`;

export const CardPost = styled.article`
  margin-bottom: 20px;
  h1 {
    font-size: 30px;
    display: inline;
  }
  small {
    font-weight: 700;
    display: block;
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

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

export const Footer = styled.footer<themeProp>`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  position: absolute;
  bottom: 0px;
  border-top: solid 1px
    ${(props) => (props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB")};
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(600px, 100%);
    margin: auto;
    height: 100%;
  }
`;

export const FooterIcon = styled.a<themeProp>`
  font-size: 35px;
  margin-left: 20px;
  text-decoration: none;
  color: ${(props) => (props.colorTheme === "dark" ? "#BD93F9" : "#6D16EB")};
`;

export const FooterGhost = styled.div`
  height: 60px;
`;
