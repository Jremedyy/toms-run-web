import { createGlobalStyle, styled, keyframes, css } from "styled-components";

// ============================================
// KEYFRAME ANIMATIONS
// ============================================
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

// ============================================
// GLOBAL STYLES
// ============================================
const GlobalStyle = createGlobalStyle`
  :root {
    /* Core Colors */
    --color-primary: rgb(24, 28, 38);
    --color-secondary: rgb(236, 234, 215);
    --accent-primary: rgb(218, 75, 63);
    --accent-secondary: rgb(255, 107, 95);

    /* Text Colors */
    --text-primary: var(--color-secondary);
    --text-secondary: rgb(10, 20, 42);
    --text-muted: rgba(236, 234, 215, 0.7);

    /* Background Colors */
    --background-color-primary: var(--color-primary);
    --background-card: rgba(255, 255, 255, 0.03);
    --background-card-hover: rgba(255, 255, 255, 0.06);

    /* Typography */
    --font-display: 'Bebas Neue', sans-serif;
    --font-body: 'Nunito Sans', sans-serif;

    /* Spacing */
    --nav-height-mobile: 80px;
    --nav-height-desktop: 90px;
    --section-padding: 2rem;
    --card-radius: 12px;

    /* Shadows */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.15);
    --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.2);
    --shadow-lg: 0 8px 40px rgba(0, 0, 0, 0.3);
    --shadow-glow: 0 0 30px rgba(218, 75, 63, 0.3);

    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color-primary);
    color: var(--text-primary);
    line-height: 1.6;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    font-weight: 400;
    letter-spacing: 0.02em;
    line-height: 1.1;
  }

  /* Topographic Background Pattern */
  .topo-bg {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.03'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 702 838 886 700 1016 860 1031 690 914 615 786 716 1032 616 1019 767 891 650' /%3E%3Cpath d='M-52 158L76 122 106 74 51 0 114 38 147 99 94 149 69 176 0 207 96 214 57 264 -41 216 35 177 -75 140 -1 245' /%3E%3Cpath d='M295 247L383 171 454 210 399 290 335 310 283 248 356 189 267 136 286 212 197 234 240 303 151 317 205 258 119 273 186 170 261 195 260 136 182 79 270 110' /%3E%3Cpath d='M633 404L577 524 571 646 643 605 693 538 700 445 718 368 670 416 595 376 541 423 500 367 549 292 614 320 686 343 621 415 555 350' /%3E%3Cpath d='M1028 313L1117 350 1120 269 1041 220 1027 152 1054 68 1131 120 1176 215 1149 287 1099 344 1168 377 1108 445 1031 425 1073 339 1009 266' /%3E%3C/g%3E%3C/svg%3E");
  }
`;

export default GlobalStyle;

// ============================================
// ANIMATION UTILITIES
// ============================================
export const staggerDelay = (index: number, baseDelay: number = 0.1) => css`
  animation-delay: ${index * baseDelay}s;
`;

// ============================================
// LAYOUT COMPONENTS
// ============================================
export const SiteGrid = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  grid-auto-flow: row;
  justify-items: center;
  grid-template-rows: auto;
  padding: 0 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 20px;
    padding: 0 2rem;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1440px;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 24px;
  }
`;

// ============================================
// TYPOGRAPHY COMPONENTS
// ============================================
export const H3 = styled.h3`
  width: 100%;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-size: 2.5rem;
  text-align: left;
  padding: 0;
  margin-bottom: 1.5rem;
  position: relative;
  letter-spacing: 0.05em;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
    border-radius: 2px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

// ============================================
// SECTION COMPONENTS
// ============================================
export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: var(--text-primary);
  line-height: 1.8;
  font-family: var(--font-body);

  @media only screen and (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const DecorativeLine = styled.span`
  display: flex;
  flex-shrink: 0;
  width: 4px;
  height: 100%;
  min-height: 40px;
  background: linear-gradient(180deg, var(--accent-primary), transparent);
  border-radius: 2px;
`;

export const SectionContentWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-column: 1 / span 4;
  padding: 2rem;
  background: var(--background-card);
  border-radius: var(--card-radius);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-left: 3px solid var(--accent-primary);
  backdrop-filter: blur(10px);
  transition: all var(--transition-normal);
  animation: ${fadeInUp} 0.6s ease forwards;
  opacity: 0;

  &:hover {
    background: var(--background-card-hover);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  @media only screen and (min-width: 768px) {
    grid-column: 3 / span 6;
    padding: 2.5rem;
  }

  @media only screen and (min-width: 1024px) {
    grid-column: 4 / span 9;
    padding: 3rem;
  }
`;

// ============================================
// BUTTON COMPONENTS
// ============================================
export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 1rem 2rem;
  font-family: var(--font-display);
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  color: white;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-md);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: var(--shadow-glow), var(--shadow-lg);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.875rem 1.75rem;
  font-family: var(--font-display);
  font-size: 1.125rem;
  letter-spacing: 0.1em;
  color: var(--text-primary);
  background: transparent;
  border: 2px solid var(--accent-primary);
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition-normal);

  &:hover {
    background: var(--accent-primary);
    color: white;
    transform: translateY(-2px);
  }
`;
