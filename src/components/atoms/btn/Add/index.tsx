import React from 'react';
// components
import { Btn } from './index.style';

const AddBtn = (props: any) => {
  const { children } = props;

  return <Btn {...props}>{children || '추가'}</Btn>;
};

export default AddBtn;
