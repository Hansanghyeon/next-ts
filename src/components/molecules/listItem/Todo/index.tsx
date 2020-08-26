import React, { useState } from 'react';
// components
import DragBtn from '@atom/btn/Drag';
import {
  ListItem,
  CompletedBtn,
  CompletedMask,
  TextBox,
  DragControler,
} from './index.style';

const TodoItem = () => {
  const [value, setValue] = useState('');
  const [done, setDone] = useState(false);

  const handleValue = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setValue(value);
  };

  const handleDone = ({ target }: { target: HTMLInputElement }) => {
    setDone(target.checked);
  };

  return (
    <ListItem animate={done ? 'open' : 'closed'}>
      <DragControler>
        <DragBtn />
      </DragControler>
      <TextBox
        type="text"
        value={value}
        onChange={handleValue}
        placeholder="New TODOs"
      />
      <CompletedMask.Component
        checked={done}
        variants={CompletedMask.variants}
      />
      <CompletedBtn type="checkbox" onChange={handleDone} />
    </ListItem>
  );
};

export default TodoItem;
