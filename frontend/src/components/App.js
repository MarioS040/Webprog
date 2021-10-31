import react from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import register from './register'
import login from './login';
import Navigation from './navbar';
import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (


<Router>
<Switch>
<Route path="/register" component={register} />
<Route path="/login" component={login} />
</Switch>
</Router>

  );
}

export default App;
