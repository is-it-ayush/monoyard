import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const url =
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000';

  const og = new URL(`${url}/api/og/`);

  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content="I think I might re-use these components. You can too."/>
        <link rel="icon" href="/favicon.ico" />
        <title>Components | Ayush</title>
        <meta name="og:site_name" content="Components | Ayush" />
        <meta name="og:title" content="Components | Ayush" />
        <meta name="og:description" content="I think I might re-use these components. You can too."/>
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://component-box.vercel.app/" />
        <meta name="og:image" content={og.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@is_it_ayush" />
        <meta name="twitter:creator" content="@is_it_ayush" />
        <meta property="og:image:alt" content="OG Image." />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:width" content="1200" />
        <link rel="canonical" href="https://component-box.vercel.app/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
