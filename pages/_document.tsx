import Document, { Head, Html, Main, NextScript } from "next/document";
import { ReactElement } from "react-markdown/lib/react-markdown";

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
