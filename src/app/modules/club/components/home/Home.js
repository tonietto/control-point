import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Header, Button } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';


const mapStateToProps = ({ intl }) => {
  return {
    locale: intl.locale,
  };
};

const style = {
  inverted: {
    color: '#fff',
  },
  header: {
    fontSize: '4rem',
  },
};

const Home = props => (
  <div>
    <div style={style.inverted}>
      <Header inverted as="h1" style={style.header}>
        <FormattedMessage
          id="app.home.welcome"
        />
      </Header>
      <p>
        <FormattedMessage
          id="app.home.clickBelow"
        />
      </p>
      <Button as={Link} to="login" color="red">
        <FormattedMessage
          id="app.actions.enter"
        />
      </Button>
    </div>
  </div>
);

export default connect(mapStateToProps)(Home);
