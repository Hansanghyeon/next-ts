import React from 'react';
// components
import DefLayout from '@template/Layout/Def';
import GNB from '@organism/GNB';
import TodoList from '@organism/Todo/TodoList';

const Title: React.FC = () => <>Title</>;
const Main: React.FC = () => <TodoList />;
const Home = () => {
  const props = {
    GNB,
    Title,
    Main,
  };
  return <DefLayout {...props} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
