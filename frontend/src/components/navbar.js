import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Image} from 'react-bootstrap';


export function Header (){
  


//Navbar für NICHT eingeloggt User ablgeich durch das localStorage Item.
function notregistered (){
  if (!localStorage.getItem('isAuthenticated')){
return(
  <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
    </Nav>
)
  }
}

//Navbar für eingeloggt User ablgeich durch das localStorage Item 
function isregistered (){
  if (localStorage.getItem('isAuthenticated')){
return(
  <>
      <Nav.Link href="/upload">Upload</Nav.Link>
      <Nav.Link href="/suche">Suche</Nav.Link>
    </>
)
  }
}

function logoutregistred (){
  if (localStorage.getItem('isAuthenticated')){
return(
  <Nav>
     <Button type="button" class="btn-sm"> <Nav.Link href="/logout">Logout</Nav.Link> </Button>
  </Nav>
)
  }
}


return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/"><Image src="image1.jpg" roundedCircle /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home">home</Nav.Link>
      <Nav.Link href="/bieten">bieten</Nav.Link>
        {isregistered()}
    </Nav>
    {notregistered()}
    {logoutregistred()}
  </Navbar.Collapse>
  </Container>
</Navbar>

)

}

export default Header;