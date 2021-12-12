import React from 'react';
import Navigation from './navbar';
import {Carousel, Col, Row, Image, Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/home.css';
import Footer from './footer';


export default function home(){




return(

<div>
    <div>
       
       <Navigation/>
       </div>
    <div>
 <div classname="container-flex starter">
       <Carousel>
  <Carousel.Item interval={2000}>
      <div classname="container">
    <img
      className="d-block w-100"
      src="image5.jpg"
      alt="Second slide"
    /></div>
    <Carousel.Caption>
      <h3>Verkaufen</h3>
      <p>Verkaufen Sie im Handumdrehen Ihre Produkte.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="image6.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Yabe</h3>
      <p>Ihr Partner, für den schnellen Verkauf.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
</div>         

<div>




<div className="container-fluid">
<Container classname="center">
  <Row>
    <Col xs={6} md={4}>
    <Image className="infos-img" src="package.png" rounded />
    <p class="infotext">Einfacher und schneller Versand</p>
    </Col>
    <Col xs={6} md={4}>
    <Image className="infos-img" src="coin.png" rounded />
    <p class="infotext">Sichere und schnelle Bezahlung</p>
    </Col>
    <Col xs={6} md={4}>
    <Image className="infos-img" src="trust.png" rounded />
    <p class="infotext">Höchstes Vertrauen bei unseren Kunden</p>
    </Col>
  </Row>
</Container>
</div>

<div class="text">
<Container classname="text">

<Image className="logo2 center-img" src="logo.jpg" roundedCircle />
<p class="p-text">Kaufen und verkaufen Sie Elektronikartikel, Autos, Kleidung, Mode, Sammlerstücke, Sportartikel, Digitalkameras, Babyartikel, Gutscheine und vieles mehr bei eBay, dem weltweiten Online-Marktplatz.</p>
<div class="center"><Button variant="secondary" href="/register">Registrieren</Button></div>
</Container>

</div>

<Footer />


</div>


         </div>
         </div>




       
          
                  
      

    
)


}