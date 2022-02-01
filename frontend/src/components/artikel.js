import React, { Component } from 'react';
import './css/artikel.css';
import Navigation from './navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import userauth from './auth.js';

class artikel extends Component{
        constructor(props){
        super(props);
      
        this.state = {
            Article: {}
          };
    
          }

          async componentWillMount(){
  
            let userdaten = await userauth();
            let token = await userdaten.complusertoken;
    
                fetch('http://localhost:3000/article/6',{
                method: 'GET',
                headers: {"content-type": "application/json",
                         "Authorization": token},
                  
                }
                
                )
                .then((response) => response.json())
                .then((response) => {this.setState({Article: response})})
                
               
                }    





render(){

    const ArticleDetail = (props) => {
        return(
        <Container fluid="md">
        <Row>
            <Col lg={true}>
               <Image roundedCircle
                src='https://th.bing.com/th/id/R.174d1d09fe1b5f15f427ea8411fe2a21?rik=GJ9zKw7M6IGbuA&pid=ImgRaw&r=0'>
                   
                   
                </Image> 
            
            
            </Col>
            <Col lg={true}> 
            <h3 style={({marginTop: '200px'})}> Preis: {props.Price} </h3>
            <h5> Autkion endet am: {props.timeforauctionE} </h5>
            </Col>
        </Row>
        <Row>
            <Col lg={true}>
            <h1 style={({marginTop: '30px'})}> {props.articleName} </h1>
            <h5> Beschreibung: {props.articleDescription} </h5>
            </Col>
        
        </Row>
        <Row>
        <Col> <Button variant="primary">Bieten</Button> </Col>
        <Col> <Form.Control style={({marginTop: '20px'})} placeholder='Gebot in €'></Form.Control> </Col>
        </Row>
        
        </Container>

        )}

return(

    <div>   
    <Navigation/>

    {this.state.Article.map((props)=>{
        return <ArticleDetail articleName={props.articleName} articleDescription={props.articleDescription} Price={props.Price} timeforauctionE={props.timeforauctionE}/>
    })}
    
    </div>   

)}}

export default artikel
