import styled from 'styled-components';
import {
  Container as _Container,
  Row as _Row,
  Col as _Col,
} from 'styled-bootstrap-grid';

export const Container = {
  Wrap: styled(_Container)`
    background-color: #b6b6b6;
  `,
  Def: styled(_Container)``,
};

export const Row = {
  Def: styled(_Row)``,
};

export const Col = {
  Def: styled(_Col)`
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
