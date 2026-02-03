import styled, { keyframes } from "styled-components";

const AboutSection = () => {
  return (
    <Wrapper id="about">
      <ContentCard>
        <AccentBar />
        <CardContent>
          <SectionHeader>
            <H3>About the Event</H3>
            <Subtitle>Honoring a Legacy of Fitness & Friendship</Subtitle>
          </SectionHeader>
          <TextContent>
            <Paragraph>
              Tom&apos;s Run is held annually to promote <Highlight>fitness</Highlight>,{" "}
              <Highlight>team building</Highlight>, and <Highlight>community</Highlight>.
              The event is named in honor of <Strong>CWO4 Tom Brooks, USCG</Strong>, who
              contracted Amyotrophic Lateral Sclerosis (ALS) — also known as Lou Gehrig&apos;s
              disease — in early 1999.
            </Paragraph>
            <Paragraph>
              Tom was an avid fitness promoter with a reputation for persuading couch
              potatoes to get up and get moving. When Tom was diagnosed with ALS, his
              friends decided to show their appreciation for Tom&apos;s inspiration by
              organizing this event in his honor.
            </Paragraph>
            <QuoteBlock>
              <QuoteText>
                &ldquo;Tom&apos;s Run is about people. It&apos;s about who we are as runners
                and teammates and friends.&rdquo;
              </QuoteText>
            </QuoteBlock>
          </TextContent>
        </CardContent>
        <IconDecoration>🏃</IconDecoration>
      </ContentCard>
    </Wrapper>
  );
};

export default AboutSection;

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

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
  animation-delay: 0.2s;
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

const AccentBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, var(--accent-primary), var(--accent-secondary));
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-left: 2.5rem;
  gap: 1.5rem;

  @media only screen and (min-width: 768px) {
    padding: 2.5rem;
    padding-left: 3rem;
    gap: 2rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

const Subtitle = styled.span`
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text-muted);
  letter-spacing: 0.02em;
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

const Highlight = styled.span`
  color: var(--accent-secondary);
  font-weight: 600;
`;

const Strong = styled.strong`
  color: var(--text-primary);
  font-weight: 700;
`;

const QuoteBlock = styled.blockquote`
  position: relative;
  margin: 1rem 0 0 0;
  padding: 1.5rem;
  background: rgba(218, 75, 63, 0.08);
  border-radius: 12px;
  border-left: 3px solid var(--accent-primary);
  animation: ${slideInLeft} 0.6s ease forwards;
  animation-delay: 0.5s;
  opacity: 0;
`;

const QuoteText = styled.p`
  font-family: var(--font-body);
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.6;
  color: var(--text-primary);
  margin: 0;

  @media only screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const IconDecoration = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2.5rem;
  opacity: 0.15;
  pointer-events: none;

  @media only screen and (min-width: 768px) {
    font-size: 4rem;
    top: 2rem;
    right: 2rem;
  }
`;
