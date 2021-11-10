import React, { Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/login.css'
import Cookies from 'universal-cookie';
import Navigation from './navbar';
import {Link } from 'react-router-dom';
import { Next } from 'react-bootstrap/esm/PageItem';

const cookies = new Cookies();
let loginfailed ;
let resptoken;
let deryabeempl;


/*
Der Login vorgang sieht folgende Schritte vor
1. Prüfen der Credentials gegen das Backend mit fetch.
2. Setzen des localStorage items "isAuthenticated" zur verwendung der privateRoutes und der Navbar, welche sich entsprechend 
ändert, ob der User eingeloggt ist oder nicht
3. Setzen des Token Cookies, hier wird als Value der Bearer Token gespeichert, mit diesm kann sich gegen das Backend authentifiert werden,
wenn dieser im Header mitgesendet wird. (siehe bspw. Upload Funktion)
*/


class login extends Component{
constructor(props){
super(props)
  this.state ={
    username:'',
    password:''
  }
  this.responsestate ={data : null}
}


// Bei Änderungen in der HTML Form, werden diese an die State Variablen "übertragen"
changeHandler = async (e) =>{
this.setState({[e.target.name]:e.target.value})

}

// Übertragen der Daten an das Backend, aufgrund der proxy einstellungen im packacke.json kann hier der gleiche Port wie auch für das frontend verwendet werden
submitHandler = async (e) =>{
e.preventDefault()


await fetch('http://localhost:3000/users/authenticate', {
method: 'POST',
headers: {"content-type": "application/json"},
body: JSON.stringify(this.state)
}

)
.then((response) => response.json().then(loginfailed = response.status).then((response) => {deryabeempl = response.yabeempl; return response}).then((response) => resptoken = response.token).then(()=> this.loginfailure()))
.catch(Next)

}

// async await, dass der Cookie gesetzt werden kann
 loginfailure = async () => {
  
  
if(loginfailed == "200"){
   console.log(deryabeempl)
   await(cookies.set("token", resptoken , {secure: true}))//setzen des Cookies auf dem Endgerät
  window.localStorage.setItem("isAuthenticated", "true") //setzten des LocalStorage keys, sodass der User mit dem Browser als authentifiziert gilt

if(deryabeempl == "true"){

  window.localStorage.setItem("isyabeempl", "true")
}



  window.location.href = "http://localhost:3000/home"
  }else if(loginfailed == "400" || loginfailed == "500"){
  
    

// aufgrund der errormessage, wenn der Status.code 400 oder 500 ist
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
      <button type="button" class="btn btn-link"><Link to={'./register'}>Registrieren </Link></button>
      
      

    </form>

  </div>


</div>
</div>


)


}}

export default login;
