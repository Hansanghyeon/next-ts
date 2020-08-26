import React from 'react';
import TodoItem from '@molecule/listItem/Todo';

const TodoList = () => {
  const mockData = [
    {
      id: 1,
      isDone: false,
      dataValue: '1시간 공부',
    },
    {
      id: 2,
      isDone: false,
      dataValue: '1시간 책읽기',
    },
    {
      id: 3,
      isDone: false,
      dataValue: '1시간 게임',
    },
  ];
  return (
    <div>
      {mockData.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
