import styled from "styled-components";
import { ReactNode } from "react";
import { Header, Footer } from "@/components";

export interface NavbarLayoutProps {
  children: ReactNode;
}

const NavbarLayout = (props: NavbarLayoutProps) => {
  return (
    <>
      <Wrapper>
        <Header />
        <Main>{props.children}</Main>
        <Footer />
      </Wrapper>
    </>
  );
};

export default NavbarLayout;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 61px);
  border: none;
  flex-shrink: 0;
  background-color: var(--background-color-primary);
`;
