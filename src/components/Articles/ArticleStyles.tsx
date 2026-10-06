import styled, { keyframes } from "styled-components";

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
// SHARED ARTICLE STYLES
// ============================================
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 3rem 1rem 4rem;
  animation: ${fadeInUp} 0.8s ease forwards;
  opacity: 0;

  @media only screen and (min-width: 768px) {
    padding: 4rem 2rem 5rem;
  }
`;

export const Eyebrow = styled.span`
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--accent-secondary);
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const PageTitle = styled.h1`
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--text-primary);
  letter-spacing: 0.03em;
  line-height: 1;

  @media only screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const Lede = styled.p`
  font-family: var(--font-body);
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-muted);
`;

export const ContentCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  padding-left: 2.5rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, var(--accent-primary), var(--accent-secondary));
  }

  @media only screen and (min-width: 768px) {
    padding: 2.5rem;
    padding-left: 3rem;
  }
`;

export const BackLink = styled.a`
  align-self: flex-start;
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--accent-secondary);
  }
`;
