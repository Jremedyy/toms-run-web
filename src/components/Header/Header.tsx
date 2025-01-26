import styled from "styled-components";
import MobileTabletNav from "./MobileHeader";

const Header = () => {
  const menuItems = [
    {
      label: "Tool Box",
      href: "https://files.tomsrunrelay.org/Toms-Run-Files%2FMISC%2Ftomsruntoolbox.pdf",
    },
    {
      label: "Team Application",
      href: "https://files.tomsrunrelay.org/Toms-Run-Files%2FTeam%20Application%2Ftomsrunapplication%202024.pdf",
    },
  ];
  return (
    <HeaderWrapper>
      <LimitSize>
        <LogoWrapper>
          <img src="https://tomsrunrelay.org/Toms_Run_Logo.png" />
        </LogoWrapper>
        <NavLinkWrapper>
          {menuItems.map((link) => (
            <NavLink href={link.href} target="_blank" key={link.label}>
              {link.label}
            </NavLink>
          ))}
        </NavLinkWrapper>
      </LimitSize>
      <MobileTabletNav menuItems={menuItems} />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  grid-column: 1/5;
  background-color: var(--text-secondary);
  height: var(--nav-height-mobile);
  @media only screen and (min-width: 768px) {
    grid-column: 1/9;
  }
  @media only screen and (min-width: 1024px) {
    height: var(--nav-height-desktop);
    grid-column: 1/13;
    padding: 0 40px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  height: 80px;
  padding: 0.5rem;
`;

const NavLinkWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: end;
  gap: 20px;
  align-items: center;
`;

const NavLink = styled.a`
  color: var(--text-primary);
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const LimitSize = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;

  @media only screen and (min-width: 1024px) {
    display: flex;
  }
`;
