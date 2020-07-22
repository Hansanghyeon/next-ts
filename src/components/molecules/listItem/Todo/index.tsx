import React from 'react';
// components
import { Item, Text } from './index.style';
import UpdateBtn from '@atom/btn/Update';
import DeleteBtn from '@atom/btn/Delete';

const TodoItem: React.FC = () => {
  return (
    <Item>
      <Text>영화보기</Text>
      <UpdateBtn />
      <DeleteBtn />
    </Item>
  );
};

export default TodoItem;
