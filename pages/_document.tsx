import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"
          />
          <link
            rel="preload"
            href="/fonts/Inter.ttf"
            as="font"
            crossOrigin=""
            type="font/ttf"
          />
          <link
            rel="preload"
            href="/fonts/LilitaOne-Regular.ttf"
            as="font"
            crossOrigin=""
            type="font/ttf"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={`https://foodthings.shop`} />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
          <script
            defer
            src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
          ></script>
          <div
            id="snipcart"
            data-config-modal-style="side"
            data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
            hidden
          >
            <address-fields section="top">
              <div className="snipcart-form__field">
                <snipcart-label for="phone">Phone number</snipcart-label>
                <snipcart-input name="phone"></snipcart-input>
              </div>
            </address-fields>
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
