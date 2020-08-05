import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

const name = '[Your Name]';
export const siteTitle = 'Next.js Sample Website';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
