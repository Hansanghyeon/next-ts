import { AppProps } from 'next/app';
// import Head from 'next/head';

// const name = '[Your Name]';
export const siteTitle = 'Next.js Sample Website';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

App.getInitialProps = async () => {
  return {
    a: 1,
  };
};

export default App;
