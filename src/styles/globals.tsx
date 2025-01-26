import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
 :root {
  --color-primary: rgb(46,50,64);
  --color-secondary: rgb(236,234,215);
  --accent-primary: rgb(218,75,63);
  --text-primary: var(--color-secondary);
  --text-secondary: rgb(10,20,42);
  --background-color-primary: var(--color-primary);
  --nav-height-mobile: 60px;
  --nav-height-desktop: 80px;

}

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


`;

export default GlobalStyle;

export const SiteGrid = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 10px;
  grid-auto-flow: column;
  justify-items: center;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1440px;
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const H3 = styled.h3`
  width: 100%;
  color: white;
  font-size: 2rem;
  text-align: left;
  padding: 20px 0;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: white;
  line-height: 1.8;
  font-family: var(--body-font);
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const DecorativeLine = styled.span`
  display: flex;
  flex-shrink: 0;
  width: 25px;
  height: 3px;
  background-color: white;
  margin-top: 15px;
`;
export const SectionContentWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-column: 1 / span 4;
  padding: 1rem;
  @media only screen and (min-width: 768px) {
    grid-column: 1 / span 8;
  }
  @media only screen and (min-width: 1024px) {
    grid-column: 3 / span 8;
  }
`;
