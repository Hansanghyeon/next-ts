import React from 'react';
// components
// import MenuBtn from '@atom/btn/Menu';
// import Heading1 from '@atom/title/heading1';
import { Container, Row, Col } from './index.style';

const MenuBtn = () => <div>MenuBtn</div>;

type Props = {
  data: {
    title: string;
  };
};
const GNB: React.FC<Props> = ({ data }: Props) => {
  const { title } = data;
  return (
    <Container.Wrap fluid>
      <Container.Def>
        <Row.Def>
          <Col.Def>
            <div />
            <MenuBtn />
          </Col.Def>
        </Row.Def>
      </Container.Def>
    </Container.Wrap>
  );
};

export default GNB;
