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

type props = {
  dataValue?: string;
  isDone?: boolean;
};
const TodoItem: React.FC<props> = ({ dataValue, isDone = false }: props) => {
  const [value, setValue] = useState(dataValue);
  const [done, setDone] = useState(isDone);

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
