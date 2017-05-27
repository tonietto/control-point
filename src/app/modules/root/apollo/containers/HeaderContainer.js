import { connect } from 'react-redux';

import { getUser } from '../../../../redux/actions';
import Header from '../../components/header/Header';

const mapStateToProps = (state) => {
  return {
    user: state.userGetter,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    clearUser: () => {
      dispatch(getUser(null));
    },
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchtoProps)(Header);

export default HeaderContainer;
