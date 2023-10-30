import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="author" content="Kundwa Bruno M."></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="/logo.svg" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/drqtk4af2/image/upload/v1697038327/meta_kismhm.png"
          />
          <meta property="og:title" content="Kundwa Bruno Materne" />
          <meta
            property="og:description"
            content="Experienced Front-End Software Engineer from Rwanda 🇷🇼, dedicated to crafting accessible web and mobile solutions."
          />
          <meta property="og:url" content="https://itskbm.com/" />
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
