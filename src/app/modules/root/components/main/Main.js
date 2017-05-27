import React, { PropTypes } from 'react';
import { Grid, Container } from 'semantic-ui-react';

const { Column } = Grid;

const propTypes = {
  children: PropTypes.element,
};

const Main = ({ children }) => (
  <Column>
    <Container as="main">
      {children}
    </Container>
  </Column>
);

Main.propTypes = propTypes;

export default Main;
