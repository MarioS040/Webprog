import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

/*
Funktion zum erhalten des Cookies, der den Token entählt, so kann in den weiteren 
Files diese Datei importiert werden und mit userauth() eine Variable beschrieben werden, 
die den Token enthält.

Wird benötigt um bei einer Anfrage an das Backend diesen Token mitzusenden und somit sich gegenüber des Backends zu Authentifizieren.
*/


const cookies = new Cookies();
function userauth(){

let usertoken = cookies.get('token');
let complusertoken = 'Bearer ' + usertoken;


return (complusertoken)


}

export default userauth;