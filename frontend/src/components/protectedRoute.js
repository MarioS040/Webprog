import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, roles, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (!localStorage.getItem('isAuthenticated')) {
                // Nicht eingeloggte User, also ohne localStorage item "isAuthenticated" werden an ./login gesendet
                //die weiterleitung findet nur statt, wenn eine im app.js mit protecedRoute definiert ist aufgerufen wird.
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }

            // Wenn eingeloggt, dann weiterleitung an das eigentlich aufgerufene Objekt
            return <Component {...props} />
        }} />
    );
}

export default PrivateRoute;