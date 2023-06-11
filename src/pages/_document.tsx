import Document, { Html, Head, Main, NextScript } from "next/document";

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
            content="<b>Kundwa Bruno</b> is a passionate software engineer, familiar with a wide range of programming languages and frameworks and specializes in developing and maintaining websites of all sizes and complexity."
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
