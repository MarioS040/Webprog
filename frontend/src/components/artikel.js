import React, { Component } from 'react';
import './css/artikel.css';
import Navigation from './navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function(){
    return(

    <div>
        <Navigation/>
        
        
        <Container fluid="md">
        <Row>
            <Col lg={true}>
               <Image roundedCircle
                src='https://th.bing.com/th/id/R.174d1d09fe1b5f15f427ea8411fe2a21?rik=GJ9zKw7M6IGbuA&pid=ImgRaw&r=0'>
                   
                   
                </Image> 
            
            
            </Col>
            <Col lg={true}>  </Col>
        </Row>
        <Row>
            <Col lg={true}>
            <h1> Artikelbeschreibung </h1>
            <h5> Hier stehen die Informationen </h5>
            </Col>
        </Row>
        <Row>
        <Col> <Button variant="primary">Bieten</Button> </Col>
        <Col> <Form.Control style={({marginTop: '20px'})} placeholder='z.B. 20€'></Form.Control> </Col>
        </Row>
        
        </Container>
        

    </div>

    )
}
