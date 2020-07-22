import React from 'react';
// component
import { Btn } from './index.style';

type props = {
  children: React.ReactNode;
};
const DeleteBtn: React.FC<props> = ({ children }: props) => {
  return <Btn>{children ? children : '삭제'}</Btn>;
};

export default DeleteBtn;
