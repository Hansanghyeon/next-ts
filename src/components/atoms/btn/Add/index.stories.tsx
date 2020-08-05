import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
// components
import CenterWrap from '@atom/wrap/Center';
import AddBtn from '.';

export default {
  title: '01. Atoms/Button/Add',
  component: AddBtn,
  decorators: [
    withKnobs,
    (storyFn: any) => (
      <CenterWrap style={{ padding: 0 }}>{storyFn()}</CenterWrap>
    ),
  ],
};

export const standard = () => {
  const Text = text('text', '');
  return <AddBtn>{Text}</AddBtn>;
};
