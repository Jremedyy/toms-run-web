import Head from "next/head";
import styled from "styled-components";
import { NavbarLayout } from "@/layouts";
import { ARTICLES } from "@/content/articles";
import {
  PageWrapper,
  Eyebrow,
  PageTitle,
  Lede,
  ContentCard,
} from "@/components/Articles/ArticleStyles";

const pageTitle = "Articles & Guides | Tom's Run Relay";
const pageDescription =
  "Guides, tips, and stories for Tom's Run Relay teams, from first-timers to veterans.";
const pageUrl = "https://tomsrunrelay.org/articles";

export default function ArticlesIndex() {
  return (
    <NavbarLayout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} key="canonical" />
      </Head>
      <PageWrapper>
        <header>
          <Eyebrow>Articles & Guides</Eyebrow>
          <PageTitle>From the Trail</PageTitle>
        </header>
        <Lede>{pageDescription}</Lede>
        <ArticleList>
          {ARTICLES.map(({ slug, title, description }) => (
            <li key={slug}>
              <ArticleCardLink href={`/articles/${slug}`}>
                <ContentCard>
                  <ArticleTitle>{title}</ArticleTitle>
                  <ArticleDescription>{description}</ArticleDescription>
                  <ReadMore>Read article →</ReadMore>
                </ContentCard>
              </ArticleCardLink>
            </li>
          ))}
        </ArticleList>
      </PageWrapper>
    </NavbarLayout>
  );
}

// ============================================
// STYLED COMPONENTS
// ============================================
const ArticleList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ArticleCardLink = styled.a`
  display: block;
  text-decoration: none;
  transition: transform var(--transition-normal);

  &:hover {
    transform: translateY(-4px);
  }

  &:hover > div {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(218, 75, 63, 0.3);
  }
`;

const ArticleTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--text-primary);
  letter-spacing: 0.03em;
  margin-bottom: 0.75rem;
`;

const ArticleDescription = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 1rem;
`;

const ReadMore = styled.span`
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--accent-secondary);
  letter-spacing: 0.1em;
`;
