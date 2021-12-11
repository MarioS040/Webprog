import React, { Component } from 'react';
import './css/artikelübersicht.css';
import Navigation from './navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavItem } from 'react-bootstrap';



const Articles = [

    {id: 1, articleName: "Eine Kiste Bananen", articleDescription: "Eine Kiste Bananen, Ablaufdatum übermorgen", Price: "22,99€", timeforauctionE: "So. 29.12.2021"  },
    {id: 2, articleName: "Zwei Kisten Bananen", articleDescription: "Zwei Kisten Bananen, Ablaufdatum übermorgen", Price: "50€", timeforauctionE: "So. 29.12.2021"  },
    {id: 3, articleName: "Drei Kisten Bananen", articleDescription: "Drei Kisten Bananen, Ablaufdatum übermorgen", Price: "75€", timeforauctionE: "So. 29.12.2021"  },
    {id: 4, articleName: "Vier Kisten Bananen", articleDescription: "Vier Kisten Bananen, Ablaufdatum übermorgen", Price: "100€", timeforauctionE: "So. 29.12.2021"  }

];


    



const ArticleO = (props) => {
    return(

        
        <div className="Card">
            
            
            {Articles.map(props=>(
                <Row xs={1} md={1} className="g-4">
                
                    
                    <Card style={{ width: 'flex'}}>   
                        <Card.Body>

                            <tr key={props.id}>
                                <Card.Img variant="top" src="https://th.bing.com/th/id/R.174d1d09fe1b5f15f427ea8411fe2a21?rik=GJ9zKw7M6IGbuA&pid=ImgRaw&r=0" />
                                <Card.Title key={2}>{props.articleName}</Card.Title>
                                <Card.Text key={3}>{props.articleDescription}</Card.Text>
                                <Card.Subtitle key={4}>aktueller Preis: {props.Price}</Card.Subtitle>
                                <Card.Subtitle key={5}>Auktion endet am: {props.timeforauctionE}</Card.Subtitle>
                                <Button variant="primary">Zum Produkt</Button>
                                <Button variant="secondary">Bieten</Button>
                
                            </tr>

                        </Card.Body>
                    </Card>
                    
                </Row>
                
            ))}
        
        
        </div>
    )


}


         




export default function(){
    return(
        <div>
        
            <Navigation/>
        
            <ArticleO></ArticleO>
       
        </div>
        
    

    )}