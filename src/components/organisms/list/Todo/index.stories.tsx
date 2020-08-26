import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
// components
import CenterWrap from '@atom/wrap/Center';
import TodoList from '.';

export default {
  title: '03. Organisms/List/Todo',
  component: TodoList,
  decorators: [
    withKnobs,
    (storyFn: any) => (
      <CenterWrap style={{ padding: 0 }}>{storyFn()}</CenterWrap>
    ),
  ],
};

export const standard = () => <TodoList />;
