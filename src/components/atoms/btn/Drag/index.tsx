import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
// components
import { Btn } from './index.style';

const DragBtn = () => {
  return (
    <Btn>
      <FontAwesomeIcon icon={faEllipsisV} />
      <FontAwesomeIcon icon={faEllipsisV} />
    </Btn>
  );
};

export default DragBtn;
