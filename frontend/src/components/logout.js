import React, { Component, SyntheticEvent } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/register.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';
import localStorage, { clear } from 'local-storage';
import Navigation from './navbar';



function logout (){


    function userlogout(){

        window.localStorage.removeItem("isAuthenticated");
        console.log("erfolg")
        }



return(



<div class="back">

<Navigation />
{userlogout}
<div class="div-center">


  <div class="content">
 

    <h1>Sie wurden Erfolgreich ausgeloggt</h1>

    
  </div>


</div>
</div>


)


}

export default logout;
