import {
  SiteGrid,
  SectionContentWrapper,
  H3,
  SectionContent,
  SectionWrapper,
} from "@/styles/globals";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <>
      <Wrapper>
        <H3>{"About"}</H3>
        <SectionContentWrapper>
          <SectionContent>
            {
              "Tom's Run is held annually to promote fitness, team building, and community. The event is named in honor of CWO4 Tom Brooks, USCG, who contracted Amyotrophic Lateral Sclerosis (ALS) (also known as Lou Gehrig's disease) in early 1999.  Tom was an avid fitness promoter.  He had a reputation for persuading couch potatoes to get up and get moving.  When Tom was diagnosed with ALS, his friends decided to show their appreciation for Tom's innpiration by organizating this event in his honor.  So, Tom's Run is about people. Tom's Run is about who we are as runners and teammates and friends."
            }
          </SectionContent>
        </SectionContentWrapper>
      </Wrapper>
    </>
  );
};
export default AboutSection;

const Wrapper = styled(SectionWrapper)``;
