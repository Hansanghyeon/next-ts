import React from 'react';
import DefLayout from '@template/Layout/Def';
// Components
import GNB from '@organism/GNB';

const Title: React.FC = () => <h1>TODOs Base</h1>;
export default () => {
  const props = {
    GNB,
    Title,
    Main: () => <div></div>,
  };

  return <DefLayout {...props} />;
};
