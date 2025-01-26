import Head from "next/head";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globals";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{"Tom's Run Relay"}</title>
        <meta
          name="description"
          content="A 200-mile team-building fitness event in memory of CWO4 Tom Brooks U.S. Coast Guard"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
