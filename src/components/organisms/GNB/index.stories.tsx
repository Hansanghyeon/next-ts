import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
// components
import CenterWrap from '@atom/wrap/Center';
import GNB from '.';

export default {
  title: '03. Organisms/GNB',
  component: GNB,
  decorators: [
    withKnobs,
    (storyFn: any) => (
      <CenterWrap className="pattern-grid-md" style={{ padding: 0 }}>
        {storyFn()}
      </CenterWrap>
    ),
  ],
};

export const standard = () => {
  const Title = text('타이틀', 'GNB');
  const props = {
    data: {
      title: Title,
    },
  };
  return <GNB {...props} />;
};
