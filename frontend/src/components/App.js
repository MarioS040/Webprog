import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import register from './register';
import login from './login';
import home from './home';
import PrivateRoute from './protectedRoute';
import logout from './logout';
import upload from './upload';
import yabeupload from './yabeupload';


/*PrivateRoutes können nur aufgerufen werden, werdeb im local Storage, isAuthenticated auf True gesetzt ist,
jedoch bietet dies keine Sichherheit, dies dient lediglich zur besseren User Führung.

Ein User könnte diesen Eintrag im local Storage auch manuell setzten, eine "richtige" authentifizierung findet durch das senden des Bearer tokens an das backend statt
hierfür wird die auth.js verwendet.
*/

function App() {
  return (

    <div>
      


<Router>
<Switch>

<Route path="/register" component={register} />
<Route path="/login" component={login} />
<Route path="/yabeupload" component={yabeupload} />
<Route path="/logout" component={logout} />
<PrivateRoute path="/upload" component={upload} />
<Route path="/home" component={home} />
<Route exact path="/" component={home} />
</Switch>
</Router>
</div>
  );
}

export default App;
