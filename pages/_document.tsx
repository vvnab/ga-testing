import React from 'react'
import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
} from 'next/document'

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage()

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
          </>
        ),
      }
    } finally {
    }
  }

  render() {
    return (
      <html lang="ru" prefix="og: https://ogp.me/ns#">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-S4V0BYK6CY`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S4V0BYK6CY');
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument
