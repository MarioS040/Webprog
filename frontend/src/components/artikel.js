import React, { Component } from 'react';
import Navigation from './navbar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import userauth from './auth.js';


const Artikel = () => {

    const { id } = useParams();
    const [artikel, setArtikel] = useState({});
    const [bieten, setbieten] = useState('');
    const [currentuser, setcurrentuser] = useState('');
    const [articleName, setbearbname] = useState('');
    const [articleDescription, setbearbbesch] = useState('');


    

    useEffect(() => {    // Update the document title using the browser API

        const getArtikel = async () => {


            fetch(`http://localhost:3000/article/${id}`, {
                method: 'GET',
                headers: { "content-type": "application/json"}
            })
                .then((response) => response.json())
                .then((artikel) => setArtikel(artikel))


               
               
        };
    
        const getUser = async () => {
            let userdaten = await userauth();
            let currentusername = userdaten.derusername;

            setcurrentuser(currentusername);
            
            let derartikelname = await artikel.articleName
            let dieneuebeschreibung = await artikel.articleDescription


      //articleName und articleDescription werden default mäßig beschrieben mit den vorherigen Werten, sodass die Variable nicht leer ist
      // so kann bei einer Änderung erst der State die neue Variable setzten, welche dann geändert wird
            setbearbname(derartikelname);
            setbearbbesch(dieneuebeschreibung);

        }

    



        



        getArtikel();
        getUser();
   

    

       
     




    }, [id]);

 

    async function aritkelbieten() {
       

        let userdaten = await userauth();
        let token = userdaten.complusertoken;

        fetch(`http://localhost:3000/article/bieten/${id}`, {
            method: 'POST',
            headers: { "content-type": "application/json", "Authorization": token},
            body:   JSON.stringify({"Price": bieten})
        })
            .then((response) => response.json())
            .then((artikel) => console.log(artikel))
            window.location.reload();
            

      
        
    }


    async function aritkelbearbeiten() {

        
       const bearbarticle = {articleName, articleDescription}



        let userdaten = await userauth();
        let token = userdaten.complusertoken;

        fetch(`http://localhost:3000/article/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json", "Authorization": token},
            body:   JSON.stringify(bearbarticle)
        })
            .then((response) => response.json())
            .then((artikel) => console.log(artikel))
           window.location.reload();
            

        console.log(bieten)
        
    }

    async function aritkelloeschen() {

         let userdaten = await userauth();
         let token = userdaten.complusertoken;
 
         fetch(`http://localhost:3000/article/${id}`, {
             method: 'DELETE',
             headers: { "content-type": "application/json", "Authorization": token},
         })
             .then((response) => response.json())
             .then((artikel) => console.log(artikel))
             window.location.href = "http://localhost:3000/"
             
 
         console.log(bieten)
         
     }



function show(){
    let endetimestamp = artikel.timeforauctionE;
    let timeend =  new Date(endetimestamp);

    let time2 =  new Date();


   
 
let acurrenttime = time2.getTime();

let difference = (timeend - acurrenttime);

   

if(difference > 0){

    
    // wenn der Username des Artikel Uploads, nicht dem Aktuellen User entspricht, dann wird die Funktion aufgerufen, dass auf den Artikel geboten werden kann
 if(artikel.username != currentuser){   
    return(
<div>
<div class="d-flex justify-content-center" style={{marginTop: "30px", marginBottom: "12px"}}>
                    <h1>{artikel.articleName}</h1>
                    <h1></h1>
</div>
        <Container>
  <Row>
    <Col></Col>
  </Row>
</Container>

        <Container>
  <Row>
    <Col>
    </Col>
    <Col></Col>
  </Row>
  <Row>
    <Col><p class = "groove">
                <img width="300px" class="rounded" src={'http://localhost:3000/uploads/' + artikel.path}></img>
         
         </p>
    </Col>
    <Col><ListGroup>
    <ListGroup.Item variant="light"> {artikel.articleDescription}</ListGroup.Item>
    <ListGroup.Item variant="dark">Aktueller Preis: {artikel.Price}€ </ListGroup.Item>
    <ListGroup.Item variant="light">Höchstbietender: {artikel.userhighestbid}</ListGroup.Item>
    <ListGroup.Item variant="dark">Ende der Auktion: {artikel.timeforauctionE} </ListGroup.Item>
    </ListGroup>
    </Col>
    <Col style={{marginLeft: "15px"}}><InputGroup className="mb-3">
                    <FormControl style={{marginTop: "8px"}} placeholder="Bieten in €" value={bieten} onChange={(e) => setbieten(e.target.value)}/>
                </InputGroup>

                <Button onClick={aritkelbieten} variant="outline-secondary" id="Bieten">
                    Bieten</Button>
    </Col>
    <Col>
    </Col>
  </Row>
</Container>
</div>
)}else if(artikel.username == currentuser){//Wenn der Aktuelle Benutzer = der Benutzer ist der den Artikel aufruft, dann kann der Artikel bearbeitet und gelöscht werden.
    return(
        <div>
            <div style={{textAlign: "center", marginBottom: "30px", marginTop: "12px"}}>
                        <h1>Bearbeitungsmodus</h1>
                            
            </div>
                <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
        
                <Container>
          <Row>
            <Col>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col><p class = "groove">
                        <img width="300px" class="rounded" src={'http://localhost:3000/uploads/' + artikel.path}></img>
                 
                 </p>
            </Col>
            <Col><ListGroup>
            <ListGroup.Item variant="light">Name: {artikel.articleName} </ListGroup.Item>
            <ListGroup.Item variant="light">Beschreibung: {artikel.articleDescription}</ListGroup.Item>
            <ListGroup.Item variant="light">Aktueller Preis: {artikel.Price}€ </ListGroup.Item>
            <ListGroup.Item variant="dark">Ende der Auktion: {artikel.timeforauctionE} </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col><ListGroup>
            <InputGroup>
                            <FormControl style={{marginBottom: "10px"}} placeholder="Neuer Name" value={articleName} onChange={(e) => setbearbname(e.target.value)}/>
                        </InputGroup>
            </ListGroup>
            <InputGroup>
                            <FormControl style={{marginBottom: "10px"}} placeholder="Neue Beschreibung" value={articleDescription} onChange={(e) => setbearbbesch(e.target.value)}/>
                        </InputGroup>
            <InputGroup>
                            <FormControl placeholder="Eigener Artikel, bieten verboten" disabled />
            </InputGroup>
                        <div style={{textAlign: "center"}}>
                        <Button onClick={aritkelbearbeiten} variant="primary" id="Bieten">
                            Bearbeiten</Button>
                            <Button style={{marginLeft: "20px"}} onClick={aritkelloeschen} variant="danger"  id="Bieten">
                            Artikel Löschen</Button>
                        </div>
                        
            </Col>
            
            <Col>
            <p style={{fontStyle: "initial", fontWeight: "lighter", fontSize: "15px"}}> Um einen Artikel zu bearbeiten, füllen sie bitte die entsprechenden Felder aus und drücken Sie anschließend auf Bearbeiten</p>
            </Col>
          </Row>
        </Container>
        </div>
    )

}
   
}else if (difference < 0){
    return(
        <div>
                <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
        
                <Container>
          <Row>
            <Col><header class="d-flex justify-content-center"> 
                        <div class="d-flex justify-content-center">
                            <h1>Auktion beendet</h1>
                            <h1></h1>
                        </div>
                </header>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col><p class = "groove">
                        <img width="300px" class="rounded" src={'http://localhost:3000/uploads/' + artikel.path}></img>
                 
                 </p>
            </Col>
            <Col><ListGroup>
            <ListGroup.Item variant="light"> {artikel.articleDescription}</ListGroup.Item>
            <ListGroup.Item variant="dark">Aktueller Preis: {artikel.Price}€ </ListGroup.Item>
            <ListGroup.Item variant="light">Gewinner der Auktion: {artikel.userhighestbid}</ListGroup.Item>
            <ListGroup.Item variant="dark">Ende der Auktion: {artikel.timeforauctionE} </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
        </div>
    )
}

}






    return (<div>

        <Navigation />
{show()}
</div>
    )};

export default Artikel;