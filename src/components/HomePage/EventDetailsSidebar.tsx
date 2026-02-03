import styled, { keyframes } from "styled-components";
import { IMAGES, DOCUMENTS, EXTERNAL_LINKS } from "@/constants";

interface EventDetailsSidebarProps {
  bottomRef: React.RefObject<HTMLDivElement | null>;
}

const EventDetailsSidebar = ({ bottomRef }: EventDetailsSidebarProps) => {
  const fileLinks = [
    {
      href: DOCUMENTS.teamApplication,
      label: "Team Application",
      icon: "📋",
    },
    {
      href: DOCUMENTS.courseMap,
      label: "Course Map PDF",
      icon: "🗺️",
    },
    {
      href: DOCUMENTS.legPlanner,
      label: "Leg Planner",
      icon: "📊",
    },
    {
      href: DOCUMENTS.equipment,
      label: "Recommended Equipment",
      icon: "🎒",
    },
    {
      href: DOCUMENTS.disclaimer,
      label: "Disclaimer Form",
      icon: "📝",
    },
  ];

  const trailLinks = [
    {
      href: EXTERNAL_LINKS.coCanal,
      label: "C&O Canal Towpath",
    },
    {
      href: EXTERNAL_LINKS.mtVernonTrail,
      label: "Mount Vernon Trail",
    },
    {
      href: EXTERNAL_LINKS.fortHuntPark,
      label: "Fort Hunt Park",
    },
  ];

  return (
    <Wrapper ref={bottomRef} id="details">
      <StickyContainer>
        <LogoSection>
          <LogoWrapper>
            <Logo src={IMAGES.logo} alt="Tom's Run Logo" />
          </LogoWrapper>
        </LogoSection>

        <Card>
          <CardHeader>
            <CardIcon>📍</CardIcon>
            <CardTitle>Start Location</CardTitle>
          </CardHeader>
          <CardBody>
            <LocationName>Fairfield Inn & Suites</LocationName>
            <LocationAddress>
              21 N Wineow Street<br />
              Cumberland, MD 21502
            </LocationAddress>
            <LocationPhone>📞 1-301-722-0340</LocationPhone>
            <HotelLink
              href={EXTERNAL_LINKS.hotelBooking}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HotelLinkIcon>🏨</HotelLinkIcon>
              <HotelLinkText>
                <span>Book Hotel (Special Rate)</span>
                <small>Good through April 30</small>
              </HotelLinkText>
            </HotelLink>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <CardIcon>📁</CardIcon>
            <CardTitle>Downloads</CardTitle>
          </CardHeader>
          <CardBody>
            <FileList>
              {fileLinks.map(({ href, label, icon }, index) => (
                <FileItem key={index}>
                  <FileLink href={href} target="_blank" rel="noopener noreferrer">
                    <FileIcon>{icon}</FileIcon>
                    <span>{label}</span>
                    <DownloadIcon>↓</DownloadIcon>
                  </FileLink>
                </FileItem>
              ))}
            </FileList>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <CardIcon>🥾</CardIcon>
            <CardTitle>Trail Information</CardTitle>
          </CardHeader>
          <CardBody>
            <TrailList>
              {trailLinks.map(({ href, label }, index) => (
                <TrailLink key={index} href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                  <ExternalIcon>↗</ExternalIcon>
                </TrailLink>
              ))}
            </TrailList>
          </CardBody>
        </Card>
      </StickyContainer>
    </Wrapper>
  );
};

export default EventDetailsSidebar;

// ============================================
// ANIMATIONS
// ============================================
const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// ============================================
// STYLED COMPONENTS
// ============================================
const Wrapper = styled.aside`
  display: flex;
  width: 100%;
  padding: 1rem;
  grid-column: 1 / span 4;
  animation: ${fadeInLeft} 0.8s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;
  scroll-margin-top: 120px;

  @media only screen and (min-width: 768px) {
    grid-column: 1 / span 2;
    grid-row: 3 / span 5;
    padding: 1.5rem 1rem;
  }

  @media only screen and (min-width: 1024px) {
    grid-column: 1 / span 3;
  }
`;

const StickyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  @media only screen and (min-width: 768px) {
    position: sticky;
    top: calc(var(--nav-height-desktop) + 2rem);
  }
`;

const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const LogoWrapper = styled.div`
  width: 120px;
  height: 120px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);

  &:hover {
    transform: scale(1.05);
    border-color: var(--accent-primary);
    box-shadow: 0 0 30px rgba(218, 75, 63, 0.2);
  }

  @media only screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  transition: all var(--transition-normal);

  &:hover {
    border-color: rgba(218, 75, 63, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const CardIcon = styled.span`
  font-size: 1.25rem;
`;

const CardTitle = styled.h4`
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--text-primary);
  letter-spacing: 0.05em;
  margin: 0;
`;

const CardBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const LocationName = styled.span`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const LocationAddress = styled.address`
  font-family: var(--font-body);
  font-size: 0.9375rem;
  font-style: normal;
  color: var(--text-muted);
  line-height: 1.5;
`;

const LocationPhone = styled.span`
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: var(--text-muted);
`;

const HotelLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  margin-top: 0.5rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 10px;
  text-decoration: none;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(218, 75, 63, 0.3);
  }
`;

const HotelLinkIcon = styled.span`
  font-size: 1.25rem;
`;

const HotelLinkText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  span {
    font-family: var(--font-display);
    font-size: 0.9375rem;
    color: white;
    letter-spacing: 0.05em;
  }

  small {
    font-family: var(--font-body);
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FileItem = styled.li``;

const FileLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 0.9375rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid transparent;
  transition: all var(--transition-fast);

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    transform: translateX(4px);
  }
`;

const FileIcon = styled.span`
  font-size: 1.125rem;
  flex-shrink: 0;
`;

const DownloadIcon = styled.span`
  margin-left: auto;
  font-size: 0.875rem;
  color: var(--text-muted);
  opacity: 0;
  transition: opacity var(--transition-fast);

  ${FileLink}:hover & {
    opacity: 1;
  }
`;

const TrailList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TrailLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 0.9375rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid transparent;
  transition: all var(--transition-fast);

  &:hover {
    background: rgba(78, 205, 196, 0.1);
    border-color: rgba(78, 205, 196, 0.2);
    color: #4ecdc4;
  }
`;

const ExternalIcon = styled.span`
  font-size: 0.875rem;
  opacity: 0.5;
  transition: opacity var(--transition-fast);

  ${TrailLink}:hover & {
    opacity: 1;
  }
`;
