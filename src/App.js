import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


import logo from './logo.svg';
import './App.css';


const App = () => (
  <MuiThemeProvider>
    <RaisedButton label="Default"/>
  </MuiThemeProvider>
);

export default App;
