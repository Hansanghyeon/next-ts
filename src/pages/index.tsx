import React from 'react';

const Home = () => {
  return <div>Hello Next.js</div>;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
