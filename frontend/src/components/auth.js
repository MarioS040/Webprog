import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

function userauth() {


fetch('http://localhost:3000/users/current', {
method: 'GET',
withCredentials: true,
headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyLCJpYXQiOjE2MzU5NTU2MDUsImV4cCI6MTYzNjU2MDQwNX0.YCHyn4Q_41dhoNtaIB0cvnVlRRIJ0i_IC394uVsYR5k'
}

}

).then((response) => response.json().then(response => console.log(response.firstName)))

}


export default userauth;