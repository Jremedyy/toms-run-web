import styled, { keyframes } from "styled-components";
import { DOCUMENTS, EXTERNAL_LINKS } from "@/constants";

const CourseDetailsSection = () => {
  return (
    <>
      <Wrapper id="course">
        <ContentCard>
          <AccentBar />
          <CardContent>
            <SectionHeader>
              <IconBadge>🗺️</IconBadge>
              <H3>Course Details</H3>
            </SectionHeader>
            <TextContent>
              <Paragraph>
                The relay starts in <Strong>Cumberland, Maryland</Strong> after midnight
                on Friday. Runners, accompanied at all times by a bike escort, take turns
                in a 200-mile relay run entirely along the historic{" "}
                <StyledLink
                  href={EXTERNAL_LINKS.coCanal}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  C&O Canal Towpath
                </StyledLink>{" "}
                to Georgetown in Washington, DC.
              </Paragraph>
              <Paragraph>
                From there, the course continues down the Potomac River waterfront, past
                the <Highlight>Lincoln and Jefferson Memorials</Highlight>, crosses the
                Potomac River and connects with the{" "}
                <StyledLink
                  href={EXTERNAL_LINKS.mtVernonTrail}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mount Vernon Trail
                </StyledLink>{" "}
                to Alexandria, Virginia. The finish is at{" "}
                <Strong>Fort Hunt Park</Strong> near Mt. Vernon.
              </Paragraph>
              <RouteHighlight>
                <RouteIcon>📍</RouteIcon>
                <RouteText>
                  <RouteLabel>The Route</RouteLabel>
                  <RoutePath>Cumberland, MD → Georgetown, DC → Alexandria, VA</RoutePath>
                </RouteText>
              </RouteHighlight>
              <Paragraph>
                The run proceeds through Saturday and ends when the teams cross the
                finish line together as close to <Strong>11:00 AM on Sunday</Strong> as
                possible. For a detailed course description with directions to exchange
                points, view the{" "}
                <StyledLink
                  href={DOCUMENTS.courseMap}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Course Map PDF
                </StyledLink>
                .
              </Paragraph>
            </TextContent>
          </CardContent>
        </ContentCard>
      </Wrapper>

      <Wrapper>
        <ContentCard>
          <AccentBar $variant="secondary" />
          <CardContent>
            <SectionHeader>
              <IconBadge>🎯</IconBadge>
              <H3>Course Purpose</H3>
            </SectionHeader>
            <TextContent>
              <PurposeGrid>
                <PurposeItem>
                  <PurposeIcon>🏅</PurposeIcon>
                  <PurposeLabel>Honor</PurposeLabel>
                  <PurposeDesc>CWO4 Tom Brooks</PurposeDesc>
                </PurposeItem>
                <PurposeItem>
                  <PurposeIcon>🧩</PurposeIcon>
                  <PurposeLabel>Challenge</PurposeLabel>
                  <PurposeDesc>Logistics & Planning</PurposeDesc>
                </PurposeItem>
                <PurposeItem>
                  <PurposeIcon>🤝</PurposeIcon>
                  <PurposeLabel>Foster</PurposeLabel>
                  <PurposeDesc>Camaraderie</PurposeDesc>
                </PurposeItem>
              </PurposeGrid>
              <HighlightBox>
                <HighlightText>
                  Tom&apos;s Run is <em>NOT</em> a race. It is a team building, memorial
                  fitness event! The <Strong>POINT</Strong> is not to reach the finish
                  line first, but to reach it <Highlight>together</Highlight>.
                </HighlightText>
              </HighlightBox>
              <Paragraph>
                The challenge is being able to judge the start time and maintain the
                team&apos;s pace to finish precisely at 11 AM — and to have a lot of fun
                along the way. That said, a little trash-talking and competition among
                teams is probably a healthy thing that makes the event fun.
              </Paragraph>
            </TextContent>
          </CardContent>
        </ContentCard>
      </Wrapper>
    </>
  );
};

export default CourseDetailsSection;

// ============================================
// ANIMATIONS
// ============================================
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// ============================================
// STYLED COMPONENTS
// ============================================
const Wrapper = styled.section`
  display: flex;
  width: 100%;
  grid-column: 1 / span 4;
  padding: 1rem;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
  scroll-margin-top: 120px;

  @media only screen and (min-width: 768px) {
    grid-column: 3 / span 6;
    padding: 1.5rem;
  }

  @media only screen and (min-width: 1024px) {
    grid-column: 4 / span 9;
    padding: 2rem;
  }
`;

const ContentCard = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(218, 75, 63, 0.3);
  }
`;

const AccentBar = styled.div<{ $variant?: string }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: ${({ $variant }) =>
    $variant === "secondary"
      ? "linear-gradient(180deg, #4ecdc4, #44a3aa)"
      : "linear-gradient(180deg, var(--accent-primary), var(--accent-secondary))"};
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-left: 2.5rem;
  gap: 1.5rem;
  width: 100%;

  @media only screen and (min-width: 768px) {
    padding: 2.5rem;
    padding-left: 3rem;
    gap: 2rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconBadge = styled.span`
  font-size: 1.75rem;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const H3 = styled.h3`
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--text-primary);
  letter-spacing: 0.03em;
  margin: 0;

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Paragraph = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-primary);

  @media only screen and (min-width: 768px) {
    font-size: 1.0625rem;
  }
`;

const Strong = styled.strong`
  color: var(--text-primary);
  font-weight: 700;
`;

const Highlight = styled.span`
  color: var(--accent-secondary);
  font-weight: 600;
`;

const StyledLink = styled.a`
  color: var(--accent-secondary);
  text-decoration: none;
  font-weight: 600;
  position: relative;
  transition: all var(--transition-fast);

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent-secondary);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform var(--transition-normal);
  }

  &:hover {
    color: var(--accent-primary);

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const RouteHighlight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: rgba(218, 75, 63, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(218, 75, 63, 0.2);
`;

const RouteIcon = styled.span`
  font-size: 1.5rem;
`;

const RouteText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const RouteLabel = styled.span`
  font-family: var(--font-display);
  font-size: 0.875rem;
  color: var(--accent-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const RoutePath = styled.span`
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 600;

  @media only screen and (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const PurposeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const PurposeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.25rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all var(--transition-normal);

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-2px);
  }
`;

const PurposeIcon = styled.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const PurposeLabel = styled.span`
  font-family: var(--font-display);
  font-size: 1.125rem;
  color: var(--text-primary);
  letter-spacing: 0.05em;
`;

const PurposeDesc = styled.span`
  font-family: var(--font-body);
  font-size: 0.8125rem;
  color: var(--text-muted);
`;

const HighlightBox = styled.div`
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(68, 163, 170, 0.05));
  border-radius: 12px;
  border-left: 3px solid #4ecdc4;
`;

const HighlightText = styled.p`
  font-family: var(--font-body);
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--text-primary);
  margin: 0;

  em {
    font-style: normal;
    color: #4ecdc4;
    font-weight: 700;
  }
`;
