import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';


const { Subheader } = Header;

const NotFound = () => (
  <span style={{ fontSize: '4em' }}>
    <Header as="h1" size="huge" inverted>
      404
      <Subheader>Página não encontrada</Subheader>
    </Header>
    <Button
      onClick={browserHistory.goBack}
      basic
      inverted
      size="big"
      icon="chevron left"
      content="Voltar"
    />
  </span>
);

export default NotFound;
