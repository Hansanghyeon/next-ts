import React from 'react';
import { ThemeProvider } from 'styled-components';
import DefaultTheme from './themes';

type props = {
  children: React.ReactNode;
};
const Theme: React.FC<props> = ({ children }: props) => {
  return <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>;
};

export default Theme;
