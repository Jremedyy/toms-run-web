import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import styled from "styled-components";
import { NavbarLayout } from "@/layouts";
import {
  ARTICLES,
  getArticleBySlug,
  type Article,
  type ArticleBlock,
} from "@/content/articles";
import {
  PageWrapper,
  Eyebrow,
  PageTitle,
  Lede,
  ContentCard,
  BackLink,
} from "@/components/Articles/ArticleStyles";

interface ArticlePageProps {
  article: Article;
}

const formatDate = (isoDate: string) =>
  new Date(`${isoDate}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

const renderBlock = (block: ArticleBlock, index: number) => {
  switch (block.type) {
    case "paragraph":
      return <Paragraph key={index}>{block.text}</Paragraph>;
    case "list":
      return (
        <List key={index}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      );
    case "links":
      return (
        <LinkRow key={index}>
          {block.items.map(({ label, href }) => (
            <Pill key={label} href={href} target="_blank" rel="noopener noreferrer">
              {label} ↗
            </Pill>
          ))}
        </LinkRow>
      );
  }
};

export default function ArticlePage({ article }: ArticlePageProps) {
  const pageTitle = `${article.title} | Tom's Run Relay`;
  const pageUrl = `https://tomsrunrelay.org/articles/${article.slug}`;

  return (
    <NavbarLayout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={article.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={article.description} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={article.description} />
        <link rel="canonical" href={pageUrl} key="canonical" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: article.title,
              description: article.description,
              datePublished: article.publishedAt,
              url: pageUrl,
              author: { "@type": "Organization", name: "Tom's Run Relay" },
              publisher: { "@type": "Organization", name: "Tom's Run Relay" },
            }),
          }}
        />
      </Head>
      <PageWrapper>
        <BackLink href="/articles">← All articles</BackLink>
        <header>
          <Eyebrow>{formatDate(article.publishedAt)}</Eyebrow>
          <PageTitle>{article.title}</PageTitle>
        </header>
        <Lede>{article.description}</Lede>
        <ContentCard as="article">
          {article.sections.map((section, sectionIndex) => (
            <Section key={section.heading ?? sectionIndex}>
              {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
              {section.blocks.map(renderBlock)}
            </Section>
          ))}
        </ContentCard>
      </PageWrapper>
    </NavbarLayout>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: ARTICLES.map(({ slug }) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ArticlePageProps> = ({ params }) => {
  const article = getArticleBySlug(String(params?.slug));
  if (!article) return { notFound: true };
  return { props: { article } };
};

// ============================================
// STYLED COMPONENTS
// ============================================
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  & + & {
    margin-top: 2.5rem;
  }
`;

const SectionHeading = styled.h2`
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--text-primary);
  letter-spacing: 0.03em;

  @media only screen and (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Paragraph = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-primary);

  @media only screen and (min-width: 768px) {
    font-size: 1.0625rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1.25rem;
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-primary);

  li::marker {
    color: var(--accent-secondary);
  }
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Pill = styled.a`
  padding: 0.5rem 0.875rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--accent-secondary);
  background: rgba(218, 75, 63, 0.1);
  border: 1px solid rgba(218, 75, 63, 0.2);
  border-radius: 50px;
  text-decoration: none;
  transition: all var(--transition-fast);

  &:hover {
    background: rgba(218, 75, 63, 0.2);
    color: var(--text-primary);
  }
`;
