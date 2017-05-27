import T from './actionTypes';

export const getUser = (newUser) => {
  return {
    type: T.GET_USER,
    newUser,
  };
};
