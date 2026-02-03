import styled from "styled-components";
import { IMAGES, DOCUMENTS, EXTERNAL_LINKS, CONTACT } from "@/constants";

const Footer = () => {
  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#course", label: "Course" },
    { href: DOCUMENTS.teamApplication, label: "Register", external: true },
  ];

  const resourceLinks = [
    { href: EXTERNAL_LINKS.coCanal, label: "C&O Canal" },
    { href: EXTERNAL_LINKS.mtVernonTrail, label: "Mt. Vernon Trail" },
    { href: DOCUMENTS.courseMap, label: "Course Map" },
  ];

  return (
    <FooterWrapper>
      <FooterContent>
        <TopSection>
          <BrandColumn>
            <LogoWrapper>
              <Logo src={IMAGES.logo} alt="Tom's Run Logo" />
            </LogoWrapper>
            <BrandText>
              <BrandName>{"Tom's Run Relay"}</BrandName>
              <BrandTagline>200 Miles. One Team. One Mission.</BrandTagline>
            </BrandText>
          </BrandColumn>

          <LinksSection>
            <LinkColumn>
              <ColumnTitle>Quick Links</ColumnTitle>
              <LinkList>
                {quickLinks.map(({ href, label, external }) => (
                  <LinkItem key={label}>
                    <FooterLink
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      {label}
                    </FooterLink>
                  </LinkItem>
                ))}
              </LinkList>
            </LinkColumn>

            <LinkColumn>
              <ColumnTitle>Resources</ColumnTitle>
              <LinkList>
                {resourceLinks.map(({ href, label }) => (
                  <LinkItem key={label}>
                    <FooterLink href={href} target="_blank" rel="noopener noreferrer">
                      {label}
                    </FooterLink>
                  </LinkItem>
                ))}
              </LinkList>
            </LinkColumn>

            <LinkColumn>
              <ColumnTitle>Contact</ColumnTitle>
              <ContactInfo>
                <ContactItem>
                  <ContactIcon>✉️</ContactIcon>
                  <ContactLink href={CONTACT.emailLink}>
                    {CONTACT.email}
                  </ContactLink>
                </ContactItem>
              </ContactInfo>
            </LinkColumn>
          </LinksSection>
        </TopSection>

        <Divider />

        <BottomSection>

          <Memorial>
            In memory of <Strong>CWO4 Tom Brooks</Strong>, U.S. Coast Guard
          </Memorial>
        </BottomSection>
      </FooterContent>

      {/* Decorative Trail Path */}
      <TrailDecoration>
        <TrailPath />
      </TrailDecoration>
    </FooterWrapper>
  );
};

export default Footer;

// ============================================
// STYLED COMPONENTS
// ============================================
const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(24, 28, 38, 0) 0%,
    rgba(10, 14, 20, 1) 100%
  );
  overflow: hidden;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  position: relative;
  z-index: 1;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const BrandColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const LogoWrapper = styled.div`
  width: 70px;
  height: 70px;
  flex-shrink: 0;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const BrandName = styled.span`
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text-primary);
  letter-spacing: 0.03em;
`;

const BrandTagline = styled.span`
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--text-muted);
`;

const LinksSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 4rem;
  }
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ColumnTitle = styled.h5`
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--accent-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LinkItem = styled.li``;

const FooterLink = styled.a`
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: all var(--transition-fast);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent-primary);
    transition: width var(--transition-normal);
  }

  &:hover {
    color: var(--text-primary);

    &::after {
      width: 100%;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContactIcon = styled.span`
  font-size: 1rem;
`;

const ContactLink = styled.a`
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--accent-secondary);
  }
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1) 20%,
    rgba(255, 255, 255, 0.1) 80%,
    transparent
  );
  margin: 3rem 0 1.5rem;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: right;
  }
`;

const Memorial = styled.span`
  font-family: var(--font-body);
  font-size: 0.8125rem;
  color: var(--text-muted);
`;

const Strong = styled.strong`
  color: var(--accent-secondary);
  font-weight: 600;
`;

const TrailDecoration = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  pointer-events: none;
  opacity: 0.05;
  overflow: hidden;
`;

const TrailPath = styled.div`
  position: absolute;
  bottom: 20px;
  left: -10%;
  right: -10%;
  height: 2px;
  background: repeating-linear-gradient(
    90deg,
    var(--accent-primary) 0px,
    var(--accent-primary) 20px,
    transparent 20px,
    transparent 30px
  );
`;
