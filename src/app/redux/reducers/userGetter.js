import T from '../actions/actionTypes';

const userName = localStorage.userName;
const userEmail = localStorage.userEmail;
const userToken = localStorage.token;

const user = userToken
  ? {
    name: userName,
    email: userEmail,
    token: userToken,
  }
  : null
;

function userGetter(state = user, action) {
  switch (action.type) {
    case T.GET_USER:
      return action.newUser;
    default:
      return state;
  }
}

export default userGetter;
