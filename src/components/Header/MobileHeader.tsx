"use client";

import { CloseMenu, HamburgerMenu } from "../../Icons";

import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

interface MobileTabletNavProps {
  menuItems: { label: string; href: string }[];
}

const MobileTabletNav = ({ menuItems }: MobileTabletNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MenuContainer>
        <LogoWrapper>
          <img src="https://tomsrunrelay.org/Toms_Run_Logo.png" />
        </LogoWrapper>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseMenu /> : <HamburgerMenu />}
        </MenuButton>
      </MenuContainer>

      {isMenuOpen && (
        <MobileMenu>
          <MenuList>
            {menuItems.map(({ label, href }, index) => (
              <Link
                key={index}
                href={href}
                onClick={() => setIsMenuOpen(false)}
              >
                <MenuItem>{label}</MenuItem>
              </Link>
            ))}
          </MenuList>
        </MobileMenu>
      )}
    </>
  );
};

export default MobileTabletNav;

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  color: #1a202c;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: calc(var(--nav-height-mobile));
  left: 0;
  width: 100%;
  height: calc(100vh - var(--nav-height-mobile));
  z-index: 50;
  background-color: var(--color-primary);
  text-align: center;
  padding: 1.5rem;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
  font-size: 1rem;
  font-family: var(--font-primary);
  font-weight: 500;
  list-style-type: none;
`;

const MenuItem = styled.li`
  cursor: pointer;
  &:hover {
    color: #4a5568;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  height: 60px;
  padding: 0.25rem;
`;
