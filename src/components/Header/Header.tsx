import styled from "styled-components";

const Header = ({ onEventDetailClick }: { onEventDetailClick: () => void }) => {
  return (
    <HeaderWrapper>
      <LimitSize>
        <LogoWrapper>
          <img src="https://tomsrunrelay.org/Toms_Run_Logo.png" />
        </LogoWrapper>
        <NavLinkWrapper>
          <NavLink onClick={() => onEventDetailClick()}>
            {"Event Details"}
          </NavLink>
        </NavLinkWrapper>
      </LimitSize>
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
  display: none;
  color: var(--text-primary);
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  padding: 1rem;
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const LimitSize = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;

  @media only screen and (min-width: 1024px) {
    display: flex;
  }
`;
