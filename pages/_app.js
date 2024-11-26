import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google'

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Blissy</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://blissy.tech" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <GoogleAnalytics gaId="G-EZF20XSVDF" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
