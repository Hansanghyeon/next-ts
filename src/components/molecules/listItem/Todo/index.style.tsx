import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ListItem = styled(motion.div)`
  padding: 8px;
  background: gray;
  display: flex;
`;

export const CompletedBtn = styled.input``;
export const CompletedMask = styled(motion.div)<{ checked: boolean }>`
  border-radius: 999px;
  width: 16px;
  height: 16px;
  background: ${({ checked }) => (checked ? 'yellow' : '#fff')};
  position: relative;
  will-change: background;
  transition: background 0.5s;
`;
