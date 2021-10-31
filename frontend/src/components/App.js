import react from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import register from './register'
import login from './login'

function App() {
  return (
<Router>
<switch>
<Route path="/register" component={register} />
<Route path="/login" component={login} />
</switch>
</Router>

  );
}

export default App;
