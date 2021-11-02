import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import register from './register';
import login from './login';
import home from './home';
import Navigation from './navbar';
import React, { Component } from 'react';
import ProtectedRoute from './protectedRoute';
import logout from './logout';



function App() {
  return (

    <div>
      
<Navigation/>

<Router>
<Switch>

<Route path="/register" component={register} />
<Route path="/login" component={login} />
<Route path="/logout" component={logout} />
<protectedRoute path="/home" component={home} />
</Switch>
</Router>
</div>
  );
}

export default App;
