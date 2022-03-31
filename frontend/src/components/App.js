import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import register from './register';
import login from './login';
import home from './home';
import PrivateRoute from './protectedRoute';
import logout from './logout';
import upload from './upload';
import yabeupload from './yabeupload';
import Artikel from './Artikel'; 
import artikelübersicht from './artikelübersicht';
import suche from './suche';
import yabearticle from './yabearticle';
import mybuys from './mybuys';
import myuploads from './myuploads';
import impressum from './impressum';

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
<PrivateRoute path="/myuploads" component={myuploads} />
<PrivateRoute path="/mybuys" component={mybuys} />
<Route exact path="/home" component={home} />
<Route exact path="/Artikel" component={yabearticle} />
<Route exact path="/" component={home} />
<Route exact path="/Artikel/:id" component={Artikel} />
<Route exact path="/suche" component={suche}/>
<PrivateRoute path="/artikelübersicht" component={artikelübersicht} />
<Route exact path="/Impressum" component={impressum} />
</Switch>
</Router>
</div>
  );
}

export default App;
