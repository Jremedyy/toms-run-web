import styled from "styled-components";
import {
  SiteGrid,
  H3,
  SectionContent,
  SectionContentWrapper,
  SectionWrapper,
} from "@/styles/globals";

const CourseDetailsSection = () => {
  return (
    <SiteGrid>
      <Wrapper>
        <H3>{"Course Details"}</H3>
        <SectionContentWrapper>
          <Content>
            {
              "The relay begins after midnight on Saturday in Cumberland, MD, and follows the historic C&O Canal Towpath to Georgetown in Washington, DC."
            }{" "}
            <br /> {"From there:"}
            <StyledUl>
              <StyledLi>
                {"It continues along the Potomac River waterfront."}
              </StyledLi>
              <StyledLi>
                {"Passes the Lincoln and Jefferson Memorials."}
              </StyledLi>
              <StyledLi>{"Crosses the Potomac River."}</StyledLi>
              <StyledLi>
                {"Follows the Mount Vernon Trail to Alexandria, VA."}
              </StyledLi>
              <StyledLi>{"Ends at Fort Hunt Park near Mount Vernon."}</StyledLi>
            </StyledUl>
            {
              "Unique Challenge: Teams aim to finish together at 11:00 AM on Sunday. This requires strategic planning for start times, pacing, and logistics, including feeding, resting, and coordinating exchanges along rural roads.  For a detailed course description and exchange point directions, click HERE."
            }
          </Content>
        </SectionContentWrapper>
      </Wrapper>
      <Wrapper>
        <H3>{"The Point"}</H3>
        <SectionContentWrapper>
          <Content>
            {
              "Tom's Run is not a race—it's a team-building, memorial fitness event. The goal is to finish together, honoring Tom’s legacy and fostering camaraderie."
            }
            <StyledUl>
              <StyledLi>
                {
                  "Challenge: Teams must carefully plan their pace to finish at exactly 11:00 AM."
                }
              </StyledLi>
              <StyledLi>
                {
                  "Fun: A little friendly competition and trash-talking among teams adds to the excitement."
                }
              </StyledLi>
            </StyledUl>
          </Content>
        </SectionContentWrapper>
      </Wrapper>
    </SiteGrid>
  );
};
export default CourseDetailsSection;
const Wrapper = styled(SectionWrapper)``;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px 50px;
`;
const StyledLi = styled.li``;

const Content = styled(SectionContent)``;
