import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap"
          rel="stylesheet"
        />
        
      </Head>
      <body>
        <div className="container">
          <div className="wrapper">
            <Main />
            <NextScript />
          </div>
        </div>
      </body>
    </Html>
  );
}
