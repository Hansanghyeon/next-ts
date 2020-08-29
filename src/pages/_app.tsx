import { AppProps } from 'next/app';

// const name = '[Your Name]';
export const siteTitle = 'Next.js Sample Website';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

App.getInitialProps = async ({ Component, ctx }: any) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = {
      ...pageProps,
      ...(await Component.getInitialProps(ctx)),
    };
  }

  return {
    pageProps,
  };
};

export default App;
