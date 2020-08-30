import React from 'react';
import Head from 'next/head';
import SignIn from '@molecule/SignIn';

const Home = () => {
  return (
    <>
      <Head>
        <title>Main Home</title>
      </Head>
      <SignIn />
    </>
  );
};

export default Home;
