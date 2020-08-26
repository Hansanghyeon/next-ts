import { AppProps } from 'next/app';
// import Head from 'next/head';

// const name = '[Your Name]';
export const siteTitle = 'Next.js Sample Website';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
