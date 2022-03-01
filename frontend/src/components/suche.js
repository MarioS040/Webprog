import React, { Component, useState, useEffect, useCallback} from 'react';
import './css/suche.css';
import Navigation from './navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import userauth from './auth.js';






// Erstellt das Array aus Articles aus dem Backend
class searchBar extends Component{
    constructor(props){
    super(props);
  
    this.state = {
        articleSearch:"",
        Articles: [],
      };     
    }
 
   



// Fetchen der Daten 
  async componentWillMount(){
  
        let userdaten = await userauth();
        let token = await userdaten.complusertoken;

            fetch(`http://localhost:3000/article/search?search=${this.state.articleSearch}`, { // Hier oben muss der Search rein, also das nach dem gesucht wird 
            method: 'GET',
            headers: {"content-type": "application/json",
                     "Authorization": token},
              
            }
            
            )
            .then((response) => response.json())
            .then((response) => {this.setState({Articles: response})})
            
            
           
            }
        
    
            handleChange = event => {
                this.setState({articleSearch: event.target.value});
                this.componentWillMount();
            };  

          
            
            





render(){


// Funktion um Artikel zu "Bauen", keys dienen der Position im Array (Nur ist die Frage, ob die Position jetzt noch so stimmt?)
// sodass bei der Übergabe klar ist, an welcher Stelle die einzelnen Werte sind
  const  ArticleO = (props) => {

    let imgpath = "http://localhost:3000/uploads/" + props.path
        return(
            <div className="Card">
                    
                        
                        <Card style={{ width: 'flex', margin: '20px'}}>
                            
                            <Card.Body>
    
                                
                                    <Card.Img variant="top" src= {imgpath} className='card-img-top'/>
                                    <Card.Title key={2}>{props.articleName}</Card.Title>
                                    <Card.Text key={3}>{props.articleDescription}</Card.Text>
                                    <Card.Subtitle key={4}>aktueller Preis: {props.Price} €</Card.Subtitle>
                                    <Card.Subtitle key={5}>Auktion endet am: {props.timeforauctionE}</Card.Subtitle>
                                    <Button onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='http://localhost:3000/Artikel/' + props.id;
                                    }} variant="primary">Zum Produkt</Button>
                    
                                
    
                            </Card.Body>
                            
                        </Card>  
                         
                    
    
            </div>
    )} 






return( 
        <div>
            <Navigation/>

            <div> 
            <center> 

            <input key="input1" type='search'
            style={{display: "flex"}} 
            placeholder='Schlagwort eingeben...'
            value={this.state.articleSearch}
            onChange={this.handleChange}
            >
            
            </input>
            
            </center> 
            </div>
            
            <Row style={{width: "100%"}} xs={1} md={2} lg={4} className="g-4">
            
            {this.state.Articles.map((props)=>{

                return <ArticleO articleName={props.articleName} articleDescription={props.articleDescription} Price={props.Price} timeforauctionE={props.timeforauctionE} path={props.path} />;
                
            })}
            
            </Row>   
        </div>
    )}}
    

    
    export default searchBar
    