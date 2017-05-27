import React from 'react';
import { Grid } from 'semantic-ui-react';


const { Row, Column } = Grid;

const CenterDecorator = story => (
  <Grid style={{ minHeight: '100vh' }}>
    <Row className="center aligned middle aligned">
      <Column>
        {story()}
      </Column>
    </Row>
  </Grid>
);

export default CenterDecorator;
