import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ListItem = styled(motion.div)`
  padding: 8px 11px;
  background: #c4c4c4;
  display: flex;
  position: relative;
  border-radius: 9px;
  height: 48px;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const TextBox = styled.input`
  z-index: 200;
  margin-right: 8px;
  border: none;
  background: transparent;
`;

export const CompletedBtn = styled.input`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 999px;
  margin: 0;
  z-index: 200;
  overflow: hidden;
  display: block;
  opacity: 0;
`;

export const CompletedMask = {
  Component: styled(motion.div)<{ checked: boolean }>`
    --position-x: calc(100% - 15px - 11px);
    --position-y: calc(50%);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    will-change: background;
    transition: background 0.5s;
  `,
  variants: {
    open: {
      clipPath: 'circle(130% at var(--position-x) var(--position-y))',
      background: '#FFD601',
      tranisition: {
        delay: 0.5,
      },
    },
    closed: {
      clipPath: 'circle(15px at var(--position-x) var(--position-y))',
      background: '#ffffff',
      transition: {
        delay: 0.5,
      },
    },
  },
};

export const DragControler = styled.div`
  color: #fff;
  z-index: 200;
  margin-right: 8px;
  cursor: grab;
`;
