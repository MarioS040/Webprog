import React, { Component } from 'react';
import './css/artikelübersicht.css';
import Navigation from './navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Countdown from 'react-countdown';


function Cardx(props){
    return(
        <div className="Card">
            
            
            
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>{props.description}</Card.Subtitle>
                <Button variant="primary">Zum Produkt</Button>
                <Button variant="secondary">Bieten</Button>
                <Card.Footer className="zeit">
                    
                
                {
                    <Countdown date={Date.now() + props.bidtime} />
                }
                
                    
                </Card.Footer>
            </Card.Body>
            </Card>
    
            </Col>
            
            
        </div>

         )}


         




export default function(){
    return(
        <div>
        <Navigation/>
        <Row xs={1} md={3} className="g-4">
        
        <Cardx
            img="https://th.bing.com/th/id/R.174d1d09fe1b5f15f427ea8411fe2a21?rik=GJ9zKw7M6IGbuA&pid=ImgRaw&r=0"
            title="Produkt1"
            description="Produkt1 Beschreibung"
            bidtime={600000}
        />

        <Cardx
            img="https://th.bing.com/th/id/R.174d1d09fe1b5f15f427ea8411fe2a21?rik=GJ9zKw7M6IGbuA&pid=ImgRaw&r=0"
            title="Produkt2"
            description="Produkt2 Beschreibung"
            bidtime={900000}
        />

        <Cardx 
            img="https://th.bing.com/th/id/R.174d1d09fe1b5f15f427ea8411fe2a21?rik=GJ9zKw7M6IGbuA&pid=ImgRaw&r=0"
            title="Produkt3"
            description="Produkt3 Beschreibung"
            bidtime={1200000}
        />

        <Cardx 
            img="https://th.bing.com/th/id/R.174d1d09fe1b5f15f427ea8411fe2a21?rik=GJ9zKw7M6IGbuA&pid=ImgRaw&r=0"
            title="Produkt4"
            description="Produt 4 Beschreibung"
            bidtime={10000}
        />

        </Row>

        </div>
        
    

    )}