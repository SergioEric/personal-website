import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <meta
          name="description"
          content="I'm Sergio Morales. Full-Stack Engineer helping teams ship scalable web products faster."
        />
        <meta name="keywords" content="Keywords" />
        <title>Devef - SergioEric</title>
        <meta name="twitter:site" content="@sergioemr"></meta>
        <link rel="canonical" href="https://devef.com/" />
        {/* <meta name="theme-color" content="#3fa8d1" /> */}
        {/* Minimal */}
        <link rel="icon" type="image/png" href="favicon@32.png" />
        <link rel="icon" sizes="192x192" href="icon@192.png" />
        <link rel="apple-touch-icon" href="icon@152.png" />
        <meta name="msapplication-square310x310logo" content="icon@310.png" />

        {/* Apple */}
        <link rel="apple-touch-icon" href="touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad-retina.png" />

        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css" /> */}
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
