import React, { Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/upload.css'
import Navigation from './navbar';
import userauth from './auth.js';
import { Form } from 'react-bootstrap';
import axios from 'axios';





let token;




class login extends Component{
constructor(props){
super(props)
this.getuserdaten()
  this.state =
    {
    articleName:'',
    articleDescription:'',
    Price:'',
    timeforauctionA: "",
    timeforauctionE: "",
    path: ""
  }

  this.filestate ={
    
    fileimg: null

  }
}


getuserdaten = async()=>{

let userdaten = await userauth();

token = userdaten.complusertoken;



}


fileselectedhandler = async(e)=>{
this.filestate = e.target.files[0]

}

changeHandler = async (e) =>{
this.setState({[e.target.name]:e.target.value})
}


submitHandler = async (e) =>{
e.preventDefault()

const fd = new FormData();
fd.append('fileimg', this.filestate)




await fetch('http://localhost:3000/article/imgupload',{
method: 'POST',
headers: {"Authorization": token},
body: fd
})
.then((response) => response.json())
.then((response) => {this.setState({path : response.filename })})


fetch('http://localhost:3000/article/create',{
method: 'POST',
headers: {"content-type": "application/json",
         "Authorization": token},
body:   JSON.stringify(this.state)
  
}

)
.then((response) => response.json())
.then((response) => {console.log(response)})



}



 

errormessage = () =>{
  
  
 window.alert("Nutzername oder Passwort falsch")
  
  
 
}





render(){
  const {articleName, articleDescription, Price, timeforauctionA, timeforauctionE} = this.state;
  const {fileimg} = this.filestate;

return(


<div class="back">

<Navigation />
<div class="div-center">


  <div class="content">
 

    <h3>Artikel Einstellen</h3>
    <hr />
    <form onSubmit={this.submitHandler}>
  
      <div class="form-group">
        <label for="articleName">Artikel Name</label>
        <input type="text" name="articleName" class="form-control" id="articleName" placeholder="Artikel Bezeichnung" value={articleName} onChange={this.changeHandler} required></input>
      </div>
      <div class="form-group">
        <label for="articleDescription">Artikel Beschreibung</label>
        <input type="text" name="articleDescription" class="form-control" id="articleDescription" placeholder="Artikel Beschreibung" value={articleDescription} onChange={this.changeHandler} required></input>
      
      </div>
      <div class="form-group">
        <label for="Price">Start Preis</label>
        <input type="number" name="Price" class="form-control" id="Price" placeholder="Start Preis" value={Price} onChange={this.changeHandler} required></input>
      
      </div>
      <div class="form-group">
      <label for="articleName">Start Auktion</label>
        <div class="time-wrapper"><input type="time" name="timeforauctionA" id ="timeforauctionA" value={timeforauctionA} onChange={this.changeHandler} required></input></div>
        <label for="articleName">Ende Auktion</label>
        <div class="time-wrapper"><input type="time" name="timeforauctionE" id ="timeforauctionE" value={timeforauctionE} onChange={this.changeHandler} required></input></div>
      </div>
      <div class="form-group">
        <label for="path">Bild auswählen</label>
        <input type="file" name="fileimg" class="form-control" id="fileimg" placeholder="Bild hochladen" value={fileimg} onChange={this.fileselectedhandler} required></input>
      
      </div>


      <button type="submit" class="btn btn-primary">Artikel Einstellen</button>

     
      <hr />
     
      
      

    </form>

  </div>


</div>
</div>


)


}}

export default login;
