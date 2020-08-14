import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '@/recoil/todo';
// components
import { ListItem, CompletedBtn, CompletedMask } from './index.style';

const TodoItem = ({ item }: any) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const editItemText = ({ target: { value } }: any) => {
    const newList: any = todoList.map((listItem: any) =>
      listItem.id === item.id ? { ...listItem, text: value } : listItem,
    );
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList: any = todoList.map((listItem: any) =>
      listItem.id === item.id
        ? { ...listItem, isComplete: !item.isComplete }
        : listItem,
    );
    // id가 같은 것은 ㅑㄴComplete를 업데이트하고 아닌 것은 그대로 넣는 list를 만들어 set 해줌
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = todoList.filter((listItem: any) => listItem.id !== item.id);
    // id가 다른 것들만 filter하여 set해준다.
    setTodoList(newList);
  };

  return (
    <ListItem>
      <input type="text" value={item.text} onChange={editItemText} />
      <CompletedMask checked={item.isComplete} />
      <CompletedBtn
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </ListItem>
  );
};

export default TodoItem;
