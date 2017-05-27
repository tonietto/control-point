import React, { PropTypes } from 'react';
import { Grid } from 'semantic-ui-react';

import HeaderContainer from './apollo/containers/HeaderContainer';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Home from '../../modules/club/components/home/Home';

import background from '../../../assets/images/background.png';


const { Row, Column } = Grid;

const propTypes = {
  children: PropTypes.any,
};

const style = {
  grid: {
    backgroundImage: `url(${background})`,
  },
};

const Root = ({ children }) => (
  <Grid className="app" style={style.grid}>
    <Row verticalAlign="top" textAlign="center">
      <HeaderContainer />
    </Row>
    <Row textAlign="center" verticalAlign="middle" className="main">
      <Column>
        <Main>
          {children || <Home />}
        </Main>
      </Column>
    </Row>
    <Row verticalAlign="bottom" className="main" stretched>
      <Footer />
    </Row>
  </Grid>
);

Root.propTypes = propTypes;
export default Root;
