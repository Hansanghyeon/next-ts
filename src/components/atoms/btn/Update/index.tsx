import React from 'react';
// components
import { Btn } from './index.style';

type props = {
  children?: React.ReactNode;
};
const UpdateBtn: React.FC<props> = ({ children }: props) => {
  return <Btn>{children ? children : '수정'}</Btn>;
};

export default UpdateBtn;
