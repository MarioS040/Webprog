import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/register.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';




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
console.log(this.state)

fetch('http://localhost:8080/users/authenticate', {
method: 'POST',
headers: {"content-type": "application/json"},
body: JSON.stringify(this.state)

})

}


render(){
  const {username, password} = this.state;
return(


<div class="back">


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
