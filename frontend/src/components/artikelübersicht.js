import React, { Component } from 'react';
import './css/artikelübersicht.css';
import Navigation from './navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function(){
    return(
    <div>
        <Navigation/>
        
        
        <Row xs={1} md={3} className="g-4">
         {Array.from({ length: 15 }).map((_, idx) => (
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="frontend\public\logo.jpg" />
        <Card.Body>
            <Card.Title>Produt Titel</Card.Title>
            <Card.Subtitle> Beschreiung hier </Card.Subtitle>
            <Button variant="primary">Zum Produkt</Button>
            <Button variant="secondary">Bieten</Button>
            <Card.Footer className="zeit">verbleibende Zeit 24h</Card.Footer>
        </Card.Body>
        </Card>

        </Col>
        ))}
</Row>


       

        
























    </div>

    )}