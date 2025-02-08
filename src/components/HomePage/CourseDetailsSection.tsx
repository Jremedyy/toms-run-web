import styled from "styled-components";
import {
  H3,
  SectionContent,
  SectionContentWrapper,
  SectionWrapper,
} from "@/styles/globals";

const CourseDetailsSection = () => {
  return (
    <>
      <Wrapper>
        <H3>{"Course Details"}</H3>
        <SectionContentWrapper>
          <Content>
            {
              "The relay starts in Cumberland, Maryland after midnight on Friday. Runners, accompanied at all times by a bike escort, take turns in a 200 mile relay run entirely along the historic "
            }
            <StyledLink
              href="https://www.nps.gov/choh/index.htm"
              target="_blank"
            >
              {"C&O Canal"}
            </StyledLink>
            {
              " towpath to Georgetown in Washington, DC. From there, the course continues down the Potomac River waterfront in Washington, DC, past the Lincoln and Jefferson Memorials, crosses the Potomac River and connects with the "
            }
            <StyledLink
              href="https://www.nps.gov/gwmp/planyourvisit/mtvernontrail.htm"
              target="_blank"
            >
              {"Mount Vernon Trail"}
            </StyledLink>
            {
              " to Alexandria, Virginia. The finish is at Fort Hunt Park near Mt. Vernon. The run proceeds through Saturday and ends when the teams cross the finish line together as close to 11:00 AM on Sunday as possible. Finishing at 11:00 AM presents the logistical challenge of determining the most advantageous time to start after midnight on Friday and get all the team members together for the finish. Runners are on the course during the entire run, including at night. Other logistical challenges are keeping everyone fed and rested, determining the best places along the course to exchange runners and bikers, and finding those places along the many difficult rural roads accessing the canal. For a copy of the course description with directions to the exchange points, click "
            }
            <StyledLink
              href="https://files.tomsrunrelay.org/Toms-Run-Files/MISC/tomsruncoursemap%202025.pdf"
              target="_blank"
            >
              {"HERE."}
            </StyledLink>
          </Content>
        </SectionContentWrapper>
      </Wrapper>
      <Wrapper>
        <H3>{"Course Purpose"}</H3>
        <SectionContentWrapper>
          <Content>
            {
              "Honor CWO4 Tom Brooks, Provide a logistics challenge, and Foster camaraderie. Tom's Run is NOT a race. It is a team building, memorial fitness event!!! The POINT is not to reach the finish line first, but to reach it together.  The challenge is being able to judge the start time and maintain the team's pace to finish precisely at 11 AM. ... and to have a lot of fun along the way. That said, a little trash-talking and competition among teams is probably a healthy thing that makes the event fun."
            }
          </Content>
        </SectionContentWrapper>
      </Wrapper>
    </>
  );
};
export default CourseDetailsSection;

const Wrapper = styled(SectionWrapper)``;

const Content = styled(SectionContent)`
  display: inline;
`;

const StyledLink = styled.a`
  color: #0070f3;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #005bb5;
  }
`;
