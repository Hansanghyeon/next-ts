import styled, { createGlobalStyle } from 'styled-components';
import {
  Container as _Container,
  Row as _Row,
  Col as _Col,
} from 'styled-bootstrap-grid';

export const Container = {
  Def: styled(_Container)``,
  Main: styled(_Container)`
    padding-top: 40px;
    padding-bottom: 40px;
  `,
};

export const Row = {
  Def: styled(_Row)``,
  Header: styled(_Row)`
    margin-bottom: 40px;
  `,
};

export const Col = {
  Def: styled(_Col)``,
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
