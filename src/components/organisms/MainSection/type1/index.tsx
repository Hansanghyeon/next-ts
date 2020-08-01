import React from 'react';
// components
import { Container, Row, Col, Title } from './index.style';
import AddBtn from '@atom/btn/Add';
import TodoList from '@organism/Todo/TodoList';

const MainSection1 = () => {
  return (
    <Container.Def>
      <Row.Def>
        <Col.Def col>
          <Title>TODOs</Title>
        </Col.Def>
      </Row.Def>
      <Row.Def>
        <Col.Def col>
          <form>
            <input type="text" />
            <AddBtn type="submit" />
          </form>
        </Col.Def>
      </Row.Def>
      <Row.Def>
        <Col.Def col>
          <ul>
            <TodoList />
          </ul>
        </Col.Def>
      </Row.Def>
    </Container.Def>
  );
};

export default MainSection1;
