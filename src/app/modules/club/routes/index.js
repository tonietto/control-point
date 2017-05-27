import React from 'react';

import { redirectToLogin } from '../../login';
import Reset from '../pages/reset';
import Home from '../components/home/Home';

const Dashboard = () => <h1 className="ui inverted header">Dashboard</h1>;

export default [
  {
    path: 'home',
    getComponent(nextState, callback) {
      callback(null, Home);
    },
  },
  {
    onEnter: redirectToLogin,
    path: 'dashboard',
    getComponent(nextState, callback) {
      callback(null, Dashboard);
    },
  },
  {
    path: 'login/reset(#token)',
    getComponent(nextState, callback) {
      callback(null, Reset);
    },
  },
];
