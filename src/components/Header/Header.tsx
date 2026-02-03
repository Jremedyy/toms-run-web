import styled, { keyframes } from "styled-components";
import { PrimaryButton } from "@/styles/globals";
import { EVENT_INFO, IMAGES, DOCUMENTS } from "@/constants";

const Header = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <LogoSection>
          <LogoWrapper>
            <Logo src={IMAGES.logo} alt="Tom's Run Logo" />
          </LogoWrapper>
          <LogoText>
            <LogoTitle>Tom&apos;s Run</LogoTitle>
            <LogoSubtitle>{EVENT_INFO.year} Annual Relay</LogoSubtitle>
          </LogoText>
        </LogoSection>

        <NavSection>
          <NavLinks>
            <NavLink href="#about" onClick={(e) => scrollToSection(e, "about")}>About</NavLink>
            <NavLink href="#course" onClick={(e) => scrollToSection(e, "course")}>Course</NavLink>
            <NavLink href="#details" onClick={(e) => scrollToSection(e, "details")}>Details</NavLink>
          </NavLinks>
          <RegisterButton
            href={DOCUMENTS.teamApplication}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </RegisterButton>
        </NavSection>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;

// ============================================
// ANIMATIONS
// ============================================
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// ============================================
// STYLED COMPONENTS
// ============================================
const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  width: 100%;
  background: rgba(24, 28, 38, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  animation: ${fadeInDown} 0.6s ease forwards;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  height: var(--nav-height-mobile);
  padding: 0 1rem;

  @media only screen and (min-width: 768px) {
    padding: 0 2rem;
  }

  @media only screen and (min-width: 1024px) {
    height: var(--nav-height-desktop);
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoWrapper = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  transition: transform var(--transition-normal);

  &:hover {
    transform: scale(1.05);
  }

  @media only screen and (min-width: 1024px) {
    width: 60px;
    height: 60px;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LogoText = styled.div`
  display: none;
  flex-direction: column;
  gap: 0;

  @media only screen and (min-width: 480px) {
    display: flex;
  }
`;

const LogoTitle = styled.span`
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text-primary);
  letter-spacing: 0.02em;
  line-height: 1;
`;

const LogoSubtitle = styled.span`
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: var(--accent-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const NavSection = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media only screen and (min-width: 768px) {
    gap: 2rem;
  }
`;

const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 0.5rem;

  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--text-muted);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  letter-spacing: 0.05em;
  transition: all var(--transition-fast);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: var(--accent-primary);
    border-radius: 1px;
    transition: width var(--transition-normal);
  }

  &:hover {
    color: var(--text-primary);

    &::after {
      width: 60%;
    }
  }
`;

const RegisterButton = styled(PrimaryButton)`
  padding: 0.625rem 1.25rem;
  font-size: 0.9375rem;

  @media only screen and (min-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
`;
