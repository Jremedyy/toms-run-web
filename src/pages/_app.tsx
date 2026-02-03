import Head from "next/head";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globals";

const siteUrl = "https://tomsrunrelay.org";
const siteName = "Tom's Run Relay";
const siteDescription = "28th Annual Tom's Run Relay - A 200-mile team-building fitness event from Cumberland, MD to Alexandria, VA in memory of CWO4 Tom Brooks, U.S. Coast Guard. May 29-31, 2026.";
const siteImage = "https://images.tomsrunrelay.org/Toms-Run-Hero-Image.jpg";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        {/* Primary Meta Tags */}
        <title>{siteName} | 28th Annual 200-Mile Memorial Relay</title>
        <meta name="title" content={`${siteName} | 28th Annual 200-Mile Memorial Relay`} />
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content="Tom's Run, relay race, 200 mile relay, C&O Canal, team building, memorial run, Coast Guard, fitness event, Cumberland MD, Alexandria VA, running event 2026" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#181c26" />

        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={`${siteName} | 28th Annual 200-Mile Memorial Relay`} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={`${siteName} | 28th Annual 200-Mile Memorial Relay`} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteImage} />

        {/* Additional SEO */}
        <meta name="author" content="Tom's Run Relay" />
        <meta name="geo.region" content="US-MD" />
        <meta name="geo.placename" content="Cumberland, Maryland" />

        {/* Structured Data - Event Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsEvent",
              "name": "28th Annual Tom's Run Relay",
              "description": siteDescription,
              "image": siteImage,
              "url": siteUrl,
              "startDate": "2026-05-29T00:01:00-04:00",
              "endDate": "2026-05-31T11:00:00-04:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": [
                {
                  "@type": "Place",
                  "name": "Fairfield Inn & Suites Cumberland",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "21 N Wineow Street",
                    "addressLocality": "Cumberland",
                    "addressRegion": "MD",
                    "postalCode": "21502",
                    "addressCountry": "US"
                  }
                },
                {
                  "@type": "Place",
                  "name": "Fort Hunt Park (Finish Line)",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Alexandria",
                    "addressRegion": "VA",
                    "addressCountry": "US"
                  }
                }
              ],
              "organizer": {
                "@type": "Organization",
                "name": "Tom's Run Relay",
                "email": "tomsrunrelay@gmail.com",
                "url": siteUrl
              },
              "sport": "Running",
              "competitor": {
                "@type": "SportsTeam",
                "name": "Relay Teams"
              },
              "maximumPhysicalAttendeeCapacity": 200,
              "isAccessibleForFree": false,
              "offers": {
                "@type": "Offer",
                "price": "20.00",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2026-01-01",
                "url": "https://files.tomsrunrelay.org/Toms-Run-Files/MISC/28th%20Toms%20Run%20team%20application.pdf"
              }
            })
          }}
        />

        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tom's Run Relay",
              "url": siteUrl,
              "logo": "https://images.tomsrunrelay.org/Toms_Run_Logo.png",
              "description": "Annual 200-mile relay run in memory of CWO4 Tom Brooks, U.S. Coast Guard",
              "email": "tomsrunrelay@gmail.com",
              "foundingDate": "1999",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 39.0,
                  "longitude": -77.5
                },
                "geoRadius": "200 mi"
              }
            })
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
