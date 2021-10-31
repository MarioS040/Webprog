import react from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import register from './register'
import login from './login';


import React, { Component } from 'react';




function App() {
  return (

    <div>


<Router>
<Switch>

<Route path="/register" component={register} />
<Route path="/login" component={login} />

</Switch>
</Router>
</div>
  );
}

export default App;
