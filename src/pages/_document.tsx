import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="author" content="Kundwa Bruno M."></meta>
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="/logo.svg" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dxyu6elli/image/upload/v1672685054/Screenshot_2023-01-02_at_20.43.14_ye0ihn.png"
          />
          <meta property="og:title" content="Kundwa Bruno Materne" />

          <meta
            property="og:description"
            content="Experienced front-end software engineer focused on
            building accessible products for the web and mobile"
          />
          <meta property="og:url" content="https://itskbm.com/" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
