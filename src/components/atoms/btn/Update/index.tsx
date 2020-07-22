import React from 'react';
// components
import { Btn } from './index.style';

const UpdateBtn = (props: any) => {
  const { children } = props;

  return <Btn {...props}>{children || '수정'}</Btn>;
};

export default UpdateBtn;
