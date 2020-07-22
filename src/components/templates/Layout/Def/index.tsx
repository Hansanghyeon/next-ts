import React from 'react';
// provider
import Theme from '@/styles/Theme';
import Grid from '@/styles/Grid';
// component
import { Container, Row, Col } from './index.style';

type props = {
  children: React.ReactNode;
  GNB: any;
};
const DefLayout: React.FC<props> = ({ children, GNB }: props) => {
  return (
    <Grid>
      <Theme>
        {GNB()}
        <Container.Main>
          <Row.Def>
            <Col.Def col>{children}</Col.Def>
          </Row.Def>
        </Container.Main>
      </Theme>
    </Grid>
  );
};

export default DefLayout;
