import React, { Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/upload.css'
import Navigation from './navbar';
import userauth from './auth.js';




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

const fd = new FormData();
fd.append('fileimg', this.filestate)


await fetch('http://localhost:3000/article/imgupload',{
method: 'POST',
headers: {"Authorization": token},
body: fd
})
.then((response) => response.json())
.then((response) => {this.setState({path : response.filename })})

}

changeHandler = async (e) =>{
this.setState({[e.target.name]:e.target.value})
}


submitHandler = async (e) =>{
e.preventDefault()



fetch('http://localhost:3000/article/createyabeart',{
method: 'POST',
headers: {"content-type": "application/json",
         "Authorization": token},
body:   JSON.stringify(this.state)
  
}

)
.then((response) => response.json())
.then((response) => {if(response.message === "Artikel erfolgreich angelegt"){this.uploadmessage()} return response;})

console.log(this.state)
//this.uploadmessage();
}



 

uploadmessage = () =>{
  
  
 window.alert("Upload Erfolgreich")
 window.location.reload();
  
  
 
}





render(){
  const {articleName, articleDescription, Price} = this.state;
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
        <label for="path">Bild ausw??hlen</label>
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
