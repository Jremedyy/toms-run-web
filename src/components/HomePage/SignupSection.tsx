import { H3, SectionContent, SectionContentWrapper, SectionWrapper, SiteGrid } from "@/styles/globals";
import styled from "styled-components";

const SignupSection = () => {
  return (
    <SiteGrid>
      <Wrapper>
        <H3>{"Event Sign Up"}</H3>
        <SectionContentWrapper>
          <SectionContent>
         
          </SectionContent>
        </SectionContentWrapper>
      </Wrapper>
    </SiteGrid>
  );
};

export default SignupSection;

const Wrapper = styled(SectionWrapper)``;
