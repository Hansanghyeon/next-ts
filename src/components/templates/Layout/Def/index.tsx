import React from 'react';
// provider
import Theme from '@/styles/Theme';
import Grid from '@/styles/Grid';
// component
import { Container, Row, Col } from './index.style';

type props = {
  GNB: React.FC;
  Title: React.FC;
  Main: React.FC;
};
const DefLayout: React.FC<props> = ({ GNB, Title, Main }: props) => {
  return (
    <Grid>
      <Theme>
        <GNB />
        <Container.Main>
          <Row.Header>
            <Col.Def col>
              <Title />
            </Col.Def>
          </Row.Header>
          <Row.Def>
            <Col.Def col>
              <Main />
            </Col.Def>
          </Row.Def>
        </Container.Main>
      </Theme>
    </Grid>
  );
};

export default DefLayout;
