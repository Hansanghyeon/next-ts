import React from 'react';
import DefLayout from '@template/Layout/Def';
// Components
import GNB from '@organism/GNB';
import TodoList from '@organism/Todo/TodoList';

const Title: React.FC = () => <h1>TODOs Base</h1>;
export default () => {
  const props = {
    GNB,
    Title,
    Main: () => <TodoList />,
  };

  return <DefLayout {...props} />;
};
