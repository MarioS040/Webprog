import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import register from './register';
import login from './login';
import home from './home';
import Navigation from './navbar';
import React, { Component } from 'react';




function App() {
  return (

    <div>
      


<Router>
<Switch>

<Route path="/register" component={register} />
<Route path="/login" component={login} />
<Route path="/home" component={home} />
</Switch>
</Router>
</div>
  );
}

export default App;
