import React from 'react';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '@/recoil/todo';

const TodoList = () => {
  const todoList: any = useRecoilValue(filteredTodoListState); // 필터된 state로 보이게한다!

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem: any) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
