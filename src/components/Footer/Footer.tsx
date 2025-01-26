import { SiteGrid } from "@/styles/globals";
import styled from "styled-components";

const Footer = () => {
  return (
    <SiteGrid>
      <Wrapper>{"Thanks for Scrolling!"}</Wrapper>
    </SiteGrid>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  grid-column: 1/5;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: var(--accent-color-primary);
  font-family: var(--header-font);
  @media only screen and (min-width: 768px) {
    grid-column: 1/9;
    font-size: 26px;
  }
  @media only screen and (min-width: 1024px) {
    grid-column: 1/13;
  }
`;
