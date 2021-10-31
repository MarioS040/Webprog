import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/register.css'
import { Link } from 'react-router-dom';
import NavBar from './navbar';




class register extends Component{
constructor(props){
super(props)
  this.state ={
    firstName: '',
    lastName:'',
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

fetch('http://localhost:8080/users/register', {
method: 'POST',
headers: {"content-type": "application/json"},
body: JSON.stringify(this.state)

})

}


render(){
  const {firstName, lastName, username, password} = this.state;
return(


<div class="back">


<div class="div-center">


  <div class="content">


    <h3>Registerieren</h3>
    <hr />
    <form onSubmit={this.submitHandler}>
      <div class="form-group">
        <label for="Vorname">Vorname</label>
        <input type="text" name="firstName" class="form-control" id="firstName" placeholder="Vorname" value={firstName} onChange={this.changeHandler}></input>
      </div>
      <div class="form-group">
        <label for="Nachname">Nachname</label>
        <input type="text" name="lastName" class="form-control" id="lastName" placeholder="Nachname" value={lastName} onChange={this.changeHandler}></input>
      </div>
      <div class="form-group">
        <label for="Benutzername">Benutzername</label>
        <input type="text" name="username" class="form-control" id="username" placeholder="Benutzername" value={username} onChange={this.changeHandler}></input>
      </div>
      <div class="form-group">
        <label for="Passwort">Passwort</label>
        <input type="password" name="password" class="form-control" id="password" placeholder="Password" value={password} onChange={this.changeHandler}></input>
      </div>
      <button type="submit" class="btn btn-primary">Registrieren</button>
      <hr />
      <button type="button" class="btn btn-link">Login</button>
      

    </form>

  </div>


</div>
</div>


)


}}

export default register;
