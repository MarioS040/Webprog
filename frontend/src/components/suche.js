import React, { Component} from 'react';
import './css/suche.css';
import Navigation from './navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import userauth from './auth.js';
import Form from 'react-bootstrap/Form';
import ArticleO from './artikelübersicht'

// Was macht das hier? Erstellt das Array aus Articles aus dem Backend
class searchBar extends Component{
    constructor(props){
    super(props);
  
    this.state = {
        Articles: []
      };

   
    }


    

         


// Fetchen der Daten? 
  async componentWillMount(){
  
        let userdaten = await userauth();
        let token = await userdaten.complusertoken;

            fetch('http://localhost:3000/article/auction', { // Hier oben muss der Search rein, also das nach dem gesucht wird 
            method: 'GET',
            headers: {"content-type": "application/json",
                     "Authorization": token},
              
            }
            
            )
            .then((response) => response.json())
            .then((response) => {this.setState({Articles: response})})
            
            
           
            }
        

render(){

/*
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
                                    <Button variant="primary">Zum Produkt</Button>
                    
                                
    
                            </Card.Body>
                            
                        </Card>  
                         
                    
    
            </div>
    )} */

const Search = () => {
        return( 
            
            <div> 
               
               <Form>
                <Form.Group className="mb-3" controlId="BasiscSearchQuery">
                    <Form.Label>Suche</Form.Label>
                    <Form.Control type="text" placeholder="z.B. Kartoffel" />
                        <Form.Text className="text-muted">
                            Bitte geben sie die gewünschten Schlagwörter ein
                        </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Suche
                </Button>
                </Form>
            
            </div>
        )}
 
   return(
       <div>

           <Navigation/>

           <Search/>

       </div>
   )
}}

export default searchBar

    /* return(
        
        
        <div>
    
            <Navigation/>

            <Search/>
            


            <Row style={{width: "100%"}} xs={1} md={2} lg={4} className="g-4">
            
            {this.state.Articles.map((props)=>{

                return <ArticleO articleName={props.articleName} articleDescription={props.articleDescription} Price={props.Price} timeforauctionE={props.timeforauctionE} path={props.path} />;
                
            })}
            
            </Row>
                 
            
        </div>
        
    

    )}}
            */

    