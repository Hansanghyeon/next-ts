import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Main Home</title>
      </Head>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
