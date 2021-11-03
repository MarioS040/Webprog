import React, { Component, SyntheticEvent } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/register.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';
import localStorage, { set } from 'local-storage';
import Navigation from './navbar';

const cookies = new Cookies();
let loginfailed ;

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


submitHandler = async (e) =>{
e.preventDefault()


fetch('http://localhost:3000/users/authenticate', {
method: 'POST',
//credentials: 'same-origin',
headers: {"content-type": "application/json"},
body: JSON.stringify(this.state)
}
)
.then((response) => response.json().then(loginfailed = response.status))
.then(response => (cookies.set("token", response.token)))
.then(response => (window.localStorage.setItem("isAuthenticated", "true")))
.then(this.loginfailure)

}






 loginfailure = () => {
  
  
if(loginfailed == "500" || loginfailed == "400"){

this.render()
return(

<div>
  falsches Password
</div>

)
    
    
  }
else{

    console.log("erfolgreich eingeloggt")
  }
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
