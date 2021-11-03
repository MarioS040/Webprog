import React, { Component, SyntheticEvent, Fragment, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/register.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';
import localStorage, { set } from 'local-storage';
import Navigation from './navbar';

const cookies = new Cookies();
let loginfailed ;
let resptoken;




class login extends Component{
constructor(props){
super(props)
  this.state ={
    username:'',
    password:''
  }
}





changeHandler = (e) =>{
this.setState({[e.target.name]:e.target.value})

}


submitHandler = (e) =>{
e.preventDefault()


fetch('http://localhost:3000/users/authenticate', {
method: 'POST',
headers: {"content-type": "application/json"},
body: JSON.stringify(this.state)
}

)
.then((response) => response.json().then(loginfailed = response.status).then((response) => resptoken = response.token))
.then(this.loginfailure())



}






 loginfailure = () => {
  
  
if(loginfailed == "200"){
  
  cookies.set("token", resptoken , {secure: true})
  window.localStorage.setItem("isAuthenticated", "true")
  window.location.href = "http://localhost:3000/home"
  }else if(loginfailed == "400" || loginfailed == "500"){
  
    


this.errormessage();

  }
    
    

  }
 

errormessage = () =>{
  
  
 window.alert("Nutzername oder Passwort falsch")
  
  
 
}





render(){
  const {username, password} = this.state;


return(


<div class="back">

<Navigation />
<div class="div-center">


  <div class="content">
 

    <h3>Login</h3>
    <hr />
    <form onSubmit={this.submitHandler}>
      <div class="form-group">
        <label for="Benutzername">Benutzername</label>
        <input type="text" name="username" class="form-control" id="username" placeholder="Benutzername" value={username} onChange={this.changeHandler}></input>
      </div>
      <div class="form-group">
        <label for="Passwort">Passwort</label>
        <input type="password" name="password" class="form-control" id="password" placeholder="Password" value={password} onChange={this.changeHandler}></input>
      
      </div>

      <button type="submit" class="btn btn-primary">login</button>
      <hr />
      <button type="button" class="btn btn-link">Registrieren</button>
      
      

    </form>

  </div>


</div>
</div>


)


}}

export default login;
