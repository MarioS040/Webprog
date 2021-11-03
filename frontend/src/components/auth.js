import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
let userfirstname;

const  userauth = () => {



let usertoken = cookies.get('token');
let complusertoken = 'Bearer ' + usertoken;

fetch('http://localhost:3000/users/current', {
method: 'GET',
withCredentials: true,
headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': complusertoken
}

}

).then((response) => response.json().then(response => console.log(userfirstname = response.firstName)))

return (userfirstname)

}


export default userauth;