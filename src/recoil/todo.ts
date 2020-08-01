import { atom, selector } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
}); // 어떻게 필터할지 정하는 state

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  // get에는 객체 안에 get 함수가 들어있는 파라미터를 받는다.
  // get을 사용하여 state들을 불러올 수 있다. 어떤기준으로
  // filter를 할지 state와 todoList state를 받아 기준에 따라 filter한다.
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    switch (filter) {
      case 'Show Completed':
        return list.filter((item: any) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item: any) => !item.isComplete);
      default:
        return list;
    }
  },
}); // 필터 된 todoList를 반환해주는 selector

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(filteredTodoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item: any) => item.isComplete)
      .length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
}); // todoList의 상태들을 계산해주는 selector
