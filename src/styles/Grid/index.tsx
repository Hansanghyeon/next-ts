import React from 'react';
import { GridThemeProvider } from 'styled-bootstrap-grid';
//
import gridSystem from './grid';

type props = {
  children: React.ReactNode;
};
const Grid: React.FC<props> = ({ children }: props) => {
  return (
    <GridThemeProvider gridTheme={gridSystem}>
      <>{children}</>
    </GridThemeProvider>
  );
};

export default Grid;
