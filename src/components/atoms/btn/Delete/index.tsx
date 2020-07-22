import React from 'react';
// component
import { Btn } from './index.style';

const DeleteBtn = (props: any) => {
  const { children } = props;

  return <Btn {...props}>{children || '삭제'}</Btn>;
};

export default DeleteBtn;
