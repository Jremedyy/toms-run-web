/*
DO NOT DELETE

This class fixes css flickering caused by styled-components.
*/
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from 'styled-components'
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html
        lang={"en"}
        style={{ backgroundColor: "var(--background-color-primary)" }}
      >
        <Head>
          <link
            rel="icon"
            href="https://tomsrunrelay.org/Toms_Run_Logo.png"
            type="image/png"
            sizes="180x180"
          />
          <link
            rel="apple-touch-icon"
            href="/apple-touch-icon.png"
            type="image/png"
          />
          {/* Google Fonts - Athletic Display + Clean Body */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
            rel="stylesheet"
          />
          <meta name="robots" content="max-image-preview:large"></meta>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
