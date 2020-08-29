import React from 'react';
import Head from 'next/head';
import firebase from '@/common/firebase';

const Home = () => {
  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        alert('login failed: ' + e.message);
        console.log(e);
      });
  };
  return (
    <>
      <Head>
        <title>Main Home</title>
      </Head>
      {process.env.apiKey}
      <div>
        <button onClick={login}>로그인</button>
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
