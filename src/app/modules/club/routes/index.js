import React from 'react';

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
    path: 'dashboard',
    getComponent(nextState, callback) {
      callback(null, Dashboard);
    },
  },
];
