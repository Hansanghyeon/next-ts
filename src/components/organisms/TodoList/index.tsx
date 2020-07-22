import React from 'react';
// components
import TodoItem from '@molecule/listItem/Todo';

const TodoList = (todos: any) => {
  // mock data
  todos = [{ id: 1 }];

  return (
    <>
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} />
      ))}
    </>
  );
};

export default TodoList;
