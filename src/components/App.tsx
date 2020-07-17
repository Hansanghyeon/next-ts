import React from 'react';
import DefLayout from '@template/DefLayout';
// Components
import GNB from '@organism/GNB';

const props = {
  GNB,
};
export default () => {
  return (
    <DefLayout {...props}>
      <h1>TODOs Base</h1>
    </DefLayout>
  );
};
