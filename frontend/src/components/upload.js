import React, { Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/upload.css'
import Cookies from 'universal-cookie';
import Navigation from './navbar';
import userauth from './auth.js';


const token = userauth();
let artid ;
let myCurrentDate = new Date();

class login extends Component{
constructor(props){
super(props)
  this.state ={
    articleName:'',
    articleDescription:'',
    Price:'',
    timeforauction: myCurrentDate + 1 // +1, da sonst eine falsche Zeit ausgegeben wird in der Datenbank und somit später bei der SQL Abfrage es zu fehlern kommt
  }
}



changeHandler = async (e) =>{
this.setState({[e.target.name]:e.target.value})

}


submitHandler = (e) =>{
e.preventDefault()


fetch('http://localhost:3000/article/create', {
method: 'POST',
headers: {"content-type": "application/json",
         "Authorization": token},
body: JSON.stringify(this.state)
}

)
.then((response) => response.json().then((response) => artid = response.id).then(console.log(response.id)))
.then(console.log(artid))



}



 

errormessage = () =>{
  
  
 window.alert("Nutzername oder Passwort falsch")
  
  
 
}





render(){
  const {articleName, articleDescription, Price, timeforauction} = this.state;


return(


<div class="back">

<Navigation />
<div class="div-center">


  <div class="content">
 

    <h3>Artikel Einstellen</h3>
    <hr />
    <form onSubmit={this.submitHandler}>
  
      <div class="form-group">
        <label for="articleName">Artikel Name*</label>
        <input type="text" name="articleName" class="form-control" id="articleName" placeholder="Artikel Bezeichnung" value={articleName} onChange={this.changeHandler} required></input>
      </div>
      <div class="form-group">
        <label for="articleDescription">Artikel Beschreibung*</label>
        <input type="text" name="articleDescription" class="form-control" id="articleDescription" placeholder="Artikel Beschreibung" value={articleDescription} onChange={this.changeHandler} required></input>
      
      </div>
      <div class="form-group">
        <label for="Price">Start Preis*</label>
        <input type="text" name="Price" class="form-control" id="Price" placeholder="Start Preis" value={Price} onChange={this.changeHandler} required></input>
      
      </div>
      <div class="form-group">
        <label for="Price">Starten um (optional)</label>
        <div class="time-wrapper"><input type="time" name="timeforauction" id ="timeforauction" value={timeforauction} onChange={this.changeHandler}></input></div>
      </div>

      <button type="submit" class="btn btn-primary">Artikel Einstellen</button>

      <label for="Price">mit * markierte Felder sind pflicht</label>
      <hr />
     
      
      

    </form>

  </div>


</div>
</div>


)


}}

export default login;
