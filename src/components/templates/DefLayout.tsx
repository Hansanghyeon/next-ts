import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
// provider
import Theme from '@/styles/Theme';
import Grid from '@/styles/Grid';

type props = {
  children: React.ReactNode;
  GNB: any;
};
const DefLayout: React.FC<props> = ({ children, GNB }: props) => {
  return (
    <Grid>
      <Theme>
        {GNB()}
        <Container>
          <Row>
            <Col col>{children}</Col>
          </Row>
        </Container>
      </Theme>
    </Grid>
  );
};

export default DefLayout;
