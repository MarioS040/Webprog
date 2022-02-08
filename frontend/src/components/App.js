import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import register from './register';
import login from './login';
import home from './home';
import PrivateRoute from './protectedRoute';
import logout from './logout';
import upload from './upload';
import yabeupload from './yabeupload';
import artikel from './artikel'; 
import artikelübersicht from './artikelübersicht';
import suche from './suche';
import yabearticle from './yabearticle';
import mybuys from './mybuys';
import myuploads from './myuploads';


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
<Route path="/home" component={home} />
<Route path="/Artikel/:id" component={artikel} /> {/**Component Yabeartikel in Artikel geändert */}
<Route exact path="/" component={home} />
<Route path="/artikel" component={artikel} />
<Route path="/suche" component={suche}/>
<PrivateRoute path="/artikelübersicht" component={artikelübersicht} />
</Switch>
</Router>
</div>
  );
}

export default App;
