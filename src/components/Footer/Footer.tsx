import { SiteGrid } from "@/styles/globals";
import styled from "styled-components";

const Footer = () => {
  return (
    <SiteGrid>
      <Wrapper>{"Contact: tomsrunrelay@gmail.com"}</Wrapper>
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
  color: white;
  font-family: var(--header-font);
  border-top: 1px solid var(--text-primary);
  font-size: 20px;
  @media only screen and (min-width: 768px) {
    font-size: 26px;
    grid-column: 1/9;
  }
  @media only screen and (min-width: 1024px) {
    grid-column: 1/13;
  }
`;
