/**
 * Blog posts / guides for Tom's Run Relay.
 * To add an article, append an entry to ARTICLES. It gets its own page at
 * /articles/<slug> and shows up on /articles automatically.
 * Remember to add the new URL to public/sitemap.xml.
 */
import { CONTACT, DOCUMENTS, EVENT_INFO, EXTERNAL_LINKS, HOTEL } from "@/constants";

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "links"; items: { label: string; href: string }[] };

export interface ArticleSection {
  heading?: string;
  blocks: ArticleBlock[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // YYYY-MM-DD
  sections: ArticleSection[];
}

export const ARTICLES: Article[] = [
  {
    slug: "how-to-toms-run",
    title: "How to Tom's Run",
    description:
      "A first-timer's guide to Tom's Run Relay: what the event is, how to get your team ready, and what race weekend looks like.",
    publishedAt: "2026-10-05",
    sections: [
      {
        blocks: [
          {
            type: "paragraph",
            text: `Tom's Run Relay is a 200-mile team relay from Cumberland, Maryland to Alexandria, Virginia, held in memory of CWO4 Tom Brooks, U.S. Coast Guard. The ${EVENT_INFO.year} relay runs ${EVENT_INFO.shortDates}. If this is your first year, this guide covers what to expect and how to get your team ready.`,
          },
        ],
      },
      {
        heading: "It's not a race",
        blocks: [
          {
            type: "paragraph",
            text: "Tom's Run is a team-building, memorial fitness event. The point isn't to reach the finish line first. It's to reach it together, as close to 11:00 AM on Sunday as possible.",
          },
          {
            type: "paragraph",
            text: "The real challenge is logistics: choosing your start time and holding your team's pace so you finish on time. A little friendly trash talk between teams is encouraged.",
          },
        ],
      },
      {
        heading: "Before race weekend",
        blocks: [
          {
            type: "list",
            items: [
              "Register your team by filling out the team application.",
              "Plan who runs which legs with the leg planner spreadsheet.",
              "Study the course map, including directions to each exchange point.",
              "Check the recommended equipment list.",
              "Complete the disclaimer form.",
              `Book a room at the ${HOTEL.name} at the group rate of ${HOTEL.groupRate}. The deadline is ${HOTEL.bookingDeadline}.`,
            ],
          },
          {
            type: "links",
            items: [
              { label: "Team Application", href: DOCUMENTS.teamApplication },
              { label: "Leg Planner", href: DOCUMENTS.legPlanner },
              { label: "Course Map", href: DOCUMENTS.courseMap },
              { label: "Recommended Equipment", href: DOCUMENTS.equipment },
              { label: "Disclaimer Form", href: DOCUMENTS.disclaimer },
              { label: "Book the Hotel Group Rate", href: EXTERNAL_LINKS.hotelBooking },
            ],
          },
        ],
      },
      {
        heading: "The course",
        blocks: [
          {
            type: "paragraph",
            text: "The relay starts in Cumberland, Maryland after midnight on Friday. Runners take turns along the full length of the C&O Canal Towpath to Georgetown in Washington, DC. A bike escort accompanies every runner at all times.",
          },
          {
            type: "paragraph",
            text: "From Georgetown, the course follows the Potomac River waterfront past the Lincoln and Jefferson Memorials, crosses the river, and picks up the Mount Vernon Trail to Alexandria. The finish is at Fort Hunt Park near Mt. Vernon.",
          },
          {
            type: "links",
            items: [
              { label: "C&O Canal Towpath", href: EXTERNAL_LINKS.coCanal },
              { label: "Mount Vernon Trail", href: EXTERNAL_LINKS.mtVernonTrail },
              { label: "Fort Hunt Park", href: EXTERNAL_LINKS.fortHuntPark },
            ],
          },
        ],
      },
      {
        heading: "Questions?",
        blocks: [
          {
            type: "paragraph",
            text: `Email the organizers at ${CONTACT.email}.`,
          },
        ],
      },
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  ARTICLES.find((article) => article.slug === slug);
