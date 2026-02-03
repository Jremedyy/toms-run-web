import styled, { keyframes } from "styled-components";
import { PrimaryButton, SecondaryButton } from "@/styles/globals";
import { EVENT_INFO, IMAGES, SEALS, DOCUMENTS } from "@/constants";

const HeroSection = () => {
  return (
    <>
      <HeroWrapper>
        <HeroOverlay />
        <HeroContent>
          <DetailsWrapper>
            <EventBadge>{EVENT_INFO.year} Annual</EventBadge>
            <H1>
              Tom&apos;s Run
              <TitleAccent>Relay</TitleAccent>
            </H1>
            <Paragraph>
              A 200-mile team-building fitness event in memory of
              <MemorialHighlight> CWO4 Tom Brooks</MemorialHighlight>, U.S. Coast Guard
            </Paragraph>
            <DateWrapper>
              <DateIcon>📅</DateIcon>
              <DateText>
                <span>{EVENT_INFO.dates}</span>
                <span>Cumberland, MD → Alexandria, VA</span>
              </DateText>
            </DateWrapper>
            <ButtonGroup>
              <PrimaryButton
                href={DOCUMENTS.teamApplication}
                target="_blank"
              >
                Register Your Team
              </PrimaryButton>
              <SecondaryButton
                href={DOCUMENTS.courseMap}
                target="_blank"
              >
                View Course Map
              </SecondaryButton>
            </ButtonGroup>
          </DetailsWrapper>
        </HeroContent>
        <HeroImageWrapper>
          <HeroImageContainer>
            <HeroImage
              src={IMAGES.heroImage}
              alt="Tom's Run Relay runners on the C&O Canal towpath"
            />
            <ImageGradient />
          </HeroImageContainer>
          <FloatingStats>
            <StatItem>
              <StatNumber>200</StatNumber>
              <StatLabel>Miles</StatLabel>
            </StatItem>
            <StatDivider />
            <StatItem>
              <StatNumber>{EVENT_INFO.yearNumber}</StatNumber>
              <StatLabel>Years</StatLabel>
            </StatItem>
            <StatDivider />
            <StatItem>
              <StatNumber>1</StatNumber>
              <StatLabel>Team</StatLabel>
            </StatItem>
          </FloatingStats>
        </HeroImageWrapper>
      </HeroWrapper>
      <SealsSection>
        <SealsTitle>Proudly Supported By</SealsTitle>
        <SealGroupWrapper>
          {SEALS.map((seal, index) => (
            <SealWrapper key={index} $index={index}>
              <Img src={seal} alt="Coast Guard Organization Logo" />
            </SealWrapper>
          ))}
        </SealGroupWrapper>
      </SealsSection>
    </>
  );
};

export default HeroSection;

// ============================================
// ANIMATIONS
// ============================================
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// ============================================
// STYLED COMPONENTS
// ============================================
const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - var(--nav-height-mobile));
  flex-direction: column;
  grid-column: 1 / span 4;
  position: relative;
  overflow: hidden;

  /* Topographic background pattern */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.03'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 702 838 886 700 1016 860 1031 690 914 615 786 716 1032 616 1019 767 891 650' /%3E%3Cpath d='M-52 158L76 122 106 74 51 0 114 38 147 99 94 149 69 176 0 207 96 214 57 264 -41 216 35 177 -75 140 -1 245' /%3E%3Cpath d='M295 247L383 171 454 210 399 290 335 310 283 248 356 189 267 136 286 212 197 234 240 303 151 317 205 258 119 273 186 170 261 195 260 136 182 79 270 110' /%3E%3Cpath d='M633 404L577 524 571 646 643 605 693 538 700 445 718 368 670 416 595 376 541 423 500 367 549 292 614 320 686 343 621 415 555 350' /%3E%3Cpath d='M1028 313L1117 350 1120 269 1041 220 1027 152 1054 68 1131 120 1176 215 1149 287 1099 344 1168 377 1108 445 1031 425 1073 339 1009 266' /%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }

  @media only screen and (min-width: 768px) {
    grid-column: 1 / span 8;
    min-height: auto;
    padding: 2rem;
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    grid-column: 1 / span 12;
    gap: 40px;
    padding: 3rem 2rem;
    align-items: center;
    min-height: 85vh;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(24, 28, 38, 0.95) 0%,
    rgba(24, 28, 38, 0.7) 50%,
    rgba(24, 28, 38, 0.4) 100%
  );
  pointer-events: none;

  @media only screen and (min-width: 1024px) {
    background: linear-gradient(
      90deg,
      rgba(24, 28, 38, 0.98) 0%,
      rgba(24, 28, 38, 0.85) 40%,
      rgba(24, 28, 38, 0.3) 100%
    );
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  z-index: 2;
  flex: 1 1 45%;
  padding: 2rem 1rem;

  @media only screen and (min-width: 1024px) {
    justify-content: flex-start;
    padding: 3rem;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 600px;
  animation: ${fadeInUp} 0.8s ease forwards;

  @media only screen and (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;
    gap: 1.75rem;
  }
`;

const EventBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  font-family: var(--font-display);
  font-size: 1rem;
  letter-spacing: 0.15em;
  border-radius: 50px;
  text-transform: uppercase;
  animation: ${scaleIn} 0.6s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
`;

const H1 = styled.h1`
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 0.95;
  margin: 0;
  padding: 0;
  letter-spacing: 0.02em;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;

  @media only screen and (min-width: 768px) {
    font-size: 5rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 6rem;
  }
`;

const TitleAccent = styled.span`
  display: block;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Paragraph = styled.p`
  font-family: var(--font-body);
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 500px;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;

  @media only screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const MemorialHighlight = styled.span`
  color: var(--accent-secondary);
  font-weight: 600;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.5s;
  opacity: 0;
`;

const DateIcon = styled.span`
  font-size: 1.5rem;
`;

const DateText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-family: var(--font-body);
  font-size: 1rem;

  span:first-child {
    font-weight: 700;
    color: var(--text-primary);
  }

  span:last-child {
    font-size: 0.875rem;
    color: var(--text-muted);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.6s;
  opacity: 0;

  @media only screen and (min-width: 480px) {
    flex-direction: row;
    width: auto;
  }
`;

const HeroImageWrapper = styled.div`
  flex: 1 1 55%;
  position: relative;
  z-index: 1;
  display: none;

  @media only screen and (min-width: 1024px) {
    display: block;
    animation: ${slideInRight} 1s ease forwards;
    animation-delay: 0.3s;
    opacity: 0;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
`;

const HeroImage = styled.img`
  width: 100%;
  height: 550px;
  object-fit: cover;
  display: block;
`;

const ImageGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(218, 75, 63, 0.2) 0%,
    transparent 50%,
    rgba(24, 28, 38, 0.4) 100%
  );
  pointer-events: none;
`;

const FloatingStats = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 2.5rem;
  background: rgba(24, 28, 38, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-lg);
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: 1s;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

const StatNumber = styled.span`
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--accent-primary);
  line-height: 1;
`;

const StatLabel = styled.span`
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
`;

// ============================================
// SEALS SECTION
// ============================================
const SealsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  grid-column: 1 / span 4;
  padding: 3rem 1rem;
  gap: 2rem;

  @media only screen and (min-width: 768px) {
    grid-column: 1 / span 8;
    padding: 4rem 2rem;
  }

  @media only screen and (min-width: 1024px) {
    grid-column: 1 / span 12;
  }
`;

const SealsTitle = styled.span`
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const SealGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;

  @media only screen and (min-width: 768px) {
    gap: 3rem;
  }

  @media only screen and (min-width: 1024px) {
    gap: 4rem;
  }
`;

const SealWrapper = styled.div<{ $index: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  width: 100px;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all var(--transition-normal);
  animation: ${scaleIn} 0.5s ease forwards;
  animation-delay: ${({ $index }) => 0.8 + $index * 0.1}s;
  opacity: 0;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: var(--shadow-md);
  }

  @media only screen and (min-width: 768px) {
    width: 140px;
    padding: 1rem;
  }

  @media only screen and (min-width: 1024px) {
    width: 160px;
    padding: 1.25rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0.9);
  transition: filter var(--transition-normal);

  ${SealWrapper}:hover & {
    filter: brightness(1);
  }
`;
