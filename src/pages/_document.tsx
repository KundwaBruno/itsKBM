import Document, { Head, Html, Main, NextScript } from 'next/document';
import { Fragment } from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
