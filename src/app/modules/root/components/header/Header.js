import React, { PropTypes } from 'react';
import { Grid, Container, Menu } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router';
import LocaleSelector from './localeSelector/LocaleSelector';
import version from '../../../../../../config.version';

const { Column } = Grid;
const { Item } = Menu;

const propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    email: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  }),
  router: PropTypes.any,
  clearUser: PropTypes.func.isRequired,
};

const Header = ({ user, router, clearUser }) => {
  const logout = () => {
    delete localStorage.token;
    delete localStorage.userName;
    delete localStorage.userEmail;
    clearUser();
    router.push('/');
  };

  return (
    <Column>
      <Container>
        <Menu inverted secondary borderless>
          <Item header>
            <Link as="h3" to="/" className="ui inverted header">
              COC<span className="mobile hidden"> | Clube de Orientação de Curitiba</span>
              <div className="sub header" style={{ textAlign: 'right' }}>
                <small><small>{version}</small></small>
              </div>
            </Link>
          </Item>
          <Item position="right">
            <LocaleSelector onChangeLocale="asd" />
          </Item>
          {
            user
            ? (
              <Item position="right">
                UserControl
              </Item>
            )
            : (
              <Item position="right">
                LoginActions
              </Item>
            )
          }
        </Menu>
      </Container>
    </Column>
  );
};

Header.propTypes = propTypes;
export default withRouter(Header);
