import React, { Component, useState, useEffect, useCallback} from 'react';
import './css/suche.css';
import Navigation from './navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import userauth from './auth.js';
import Form from 'react-bootstrap/Form';






// Ähnlicher Aufbau wie bei der Artikelübersicht nur wird diesmal der State
// für den Such Query ebenfalls deklariert
class searchBar extends Component{
    constructor(props){
    super(props);
  
    this.state = {
        articleSearch:"",
        Articles: [],
      };     
    }
 
   



// Gleiche Funktion wie bei der Artikelübersicht, jedoch wird diesmal auf den ArtikelSuch
// Fetch angewendet
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
        
            // die handleChange Funktion wird dann aufgerufen, wenn der value in der Suchleiste geändert wird
            // Anschließend wird der neue State gestetzt, dieser enthält dann den event.target.value 
            // Letztendlich wird gerefetched und die Daten werden neu geladen
            handleChange = event => {
                this.setState({articleSearch: event.target.value});
                this.componentWillMount();
            };  

          
            
            





render(){


// Gleiche Artikelübersicht Funktion wie in der Artikelübersicht, Daten werden als Kacheln angelegt
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
                                    <Button style={{marginTop: '5px'}} onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='http://localhost:3000/Artikel/' + this.state.Articles[0].id;
                                        }} variant="secondary">Zum Produkt</Button>
                    
                                
    
                            </Card.Body>
                            
                        </Card>  
                         
                    
    
            </div>
    )} 





// input ist das Input Feld (=Suchleiste) in der die Suchbefehle eingegeben werden können
// Wenn etwas in das Feld eingegeben wird, wird der handleChange aufgerufen und der neue State
// gesetzt. Der Value der Suchleiste ist der state der article Search und ist beim Laden der 
// Unterseite erstmal leer -> siehe oben in der Klasse vordefiniert
// placeholder ist Platzhalter und style ist wieder CSS Komponente
// Da Bootstrap teilweise genutzt, kein großer Bedarf an CSS Files
return( 
        <div>
            <Navigation/>

            <div> 
            <center> 

            <div className='Suchleiste'>
            <Form>
            <Form.Control key="input1" type='search'
            style={{display: "flex"}} 
            placeholder='Schlagwort eingeben...'
            value={this.state.articleSearch}
            onChange={this.handleChange}/>
            
            
            </Form>
            </div>
            
            </center> 
            </div>
            
            <Row style={{width: "100%"}} xs={1} md={2} lg={4} className="g-4">
            
            {this.state.Articles.map((props)=>{

                return <ArticleO articleName={props.articleName} articleDescription={props.articleDescription} Price={props.Price} timeforauctionE={props.timeforauctionE} path={props.path} />;
                
            })}
            
            </Row>   
        </div>
    )}}
    // Ausgabe der Row wieder sodass mobile optimiert 

    
    export default searchBar
    