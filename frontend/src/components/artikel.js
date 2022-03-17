import React, { Component } from 'react';
import Navigation from './navbar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'


const Artikel = () => {

    const { id } = useParams();
    const [artikel, setArtikel] = useState({});
    const [menge, setmenge] = useState('');

    

    useEffect(() => {    // Update the document title using the browser API

        const getArtikel = async () => {


            fetch(`http://localhost:8080/article/${id}`, {
                method: 'GET',
                headers: { "content-type": "application/json"}
            })
                .then((response) => response.json())
                .then((artikel) => setArtikel(artikel))
                
        };
        getArtikel();
    }, [id]);
    /*
    const onClick = async () => {
        console.log('preis: ' + preis)
        let userdaten = await userauth();
        let token = await userdaten.complusertoken;
        fetch(`http://localhost:8080/article/bieten/${id}`, {
            method: 'POST',
            headers: { "content-type": "application/json", "Authorization": token },
            data: { "price": preis }
        }).then((response) => console.log(response.json()))
    }
    */

   var originalCart = [ {"art_id" : parseInt(id) , "menge" : parseInt(menge) } ] ;

    function Storagespeicher() {
        if(!localStorage.getItem('Warenkorb')){
            console.log(originalCart)
            localStorage.setItem('Warenkorb', JSON.stringify(originalCart))
        }else{
          let oldwarenkorb = JSON.parse(localStorage.getItem('Warenkorb'));
          let newwarenkorb = oldwarenkorb;
            
          newwarenkorb.map( (element) => {
            if (element.art_id === parseInt(id)) {
                element.menge = parseInt(element.menge) + parseInt(menge);
                console.log("In statement drin")

            }
            else {
                newwarenkorb.push(originalCart[0])
            }
          })
          localStorage.setItem('Warenkorb', JSON.stringify(newwarenkorb));
          console.log(newwarenkorb)
        }
        
    }

    return <div>

        <Navigation />
        <Container>
  <Row>
    <Col></Col>
  </Row>
</Container>

        <Container>
  <Row>
    <Col><header>
                <div>
                    <h1>{artikel.articleName}</h1>
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
    <ListGroup.Item variant="light"> {artikel.artikelbeschreibung}</ListGroup.Item>
    <ListGroup.Item variant="dark">Preis: {artikel.preis}€ </ListGroup.Item>
    </ListGroup>
    </Col>
    <Col><InputGroup className="mb-3">
                    <FormControl placeholder="Ausgewählte Menge" value={menge} onChange={(e) => setmenge(e.target.value)}/>
                </InputGroup>

                <Button onClick={Storagespeicher} variant="outline-secondary" id="in den Warenkorb">
                    In den Warenkorb</Button>
    </Col>
    <Col>
    </Col>
  </Row>
</Container>
</div>
};

export default Artikel;