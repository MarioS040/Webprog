import React, { Component} from 'react';
import './css/artikelübersicht.css';
import Navigation from './navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import userauth from './auth.js';


// Klasse artikelübersicht 
// Setzen der Standard States bevor fetch der Daten
class artikelübersicht extends Component{
    constructor(props){
    super(props);
  
    this.state = {
        Articles: []
      };

      }
    

         



// Fetchen der Daten

// componentWillMount Funktion (in const anstatt klasse => useEffect())
// userdaten durch Funktion userauth(), siehe Import 
// token über die userauth() Funktion erhalten, damit verifiziert und der fetch kann
// stattfinden 

  async componentWillMount(){
  // Holen des Tokens vom Frontend
        let userdaten = await userauth();
        let token = await userdaten.complusertoken;

            fetch('http://localhost:8080/article/auction',{
            method: 'GET',
            headers: {"content-type": "application/json",
                     "Authorization": token},
              
            } // Fetch URL beilegen, Methode nennen und den token mitgeben
            
            )
            .then((response) => response.json())
            .then((response) => {this.setState({Articles: response})})
            // anschließend nach response den neuen States setzen mithilfe der 
            // gefetchten Daten
          
            }

render(){


// Funktion um Artikel zu "Bauen", keys dienten ursprünglich der Funktion, um die Position im Array anzugeben
// Die keys sind mittlerweile eigentlich nicht mehr nötig, da keine statischen Arrays sondern über fetch
// Diese Funktion wurde mit props realisiert um sie unabhängig von den Werten zu gestalten
  const  ArticleO = (props) => {
console.log(props.id)
    let imgpath = "http://localhost:8080/uploads/" + props.path
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
                                            window.location.href='http://localhost:3000/Artikel/' + props.id;
                                        }} variant="secondary">Zum Produkt</Button>
                                    
                                
    
                            </Card.Body>
                            
                        </Card>  
                         
                    
    
            </div>
    )}
// Button verweist anschließend auf den jeweiligen Artikel indem über id der Wert mitkommt und dann an die URL gehängt wird
// Navigation import, sodass auf jeder Unterseite einheitlich
// Row macht mobile Optimierung für verschiedene Größen des Gerätes, style={{CSS}}
// Anschließend über den aktuellen State der Daten mappen und für jeden definieren welcher Wert wohin gehört
// articleName = props.articleName // Props Teil dient der Position im Card und articleName ohne props davor ist der Wert ausm Backend
    return(
        
        <div>
    
            <Navigation/>
        
            <Row style={{width: "100%"}} xs={1} md={2} lg={4} className="g-4">
            
            {this.state.Articles.map((props)=>{

                return <ArticleO articleName={props.articleName} articleDescription={props.articleDescription} Price={props.Price} timeforauctionE={props.timeforauctionE} path={props.path} id={props.id} />;
                
            })}
            
            </Row>
                 
            
        </div>
        
    

    )}}
    // Artikelübersicht wieder mit Row mobile optimiert
    export default artikelübersicht