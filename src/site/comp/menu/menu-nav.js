import React from 'react';
import {Card, Container,Col, Row} from 'react-bootstrap';
import NavImg from '../../img/icelane_juice_navbar.jpg';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function MenuNav(){
  
    return(
        <Router>
   <Container fluid>
       <Row>
          
       <Col xs={6}>
           {/* <Link to="/icelane/items"> */}
               <a href="/icelane/items">
       <Card  >
  <Card.Img variant="top" src={NavImg} fluid/>
  <Card.Body>
    <p>JUICES</p>
  </Card.Body>
</Card>
</a>
{/* </Link> */}
       </Col>
      
       <Col xs={6}>
       <Card  >
  <Card.Img variant="top" src={NavImg} fluid/>
  <Card.Body>
    <p>JUICES</p>
  </Card.Body>
</Card>

       </Col>

       <Col xs={6}>
       <Card  >
  <Card.Img variant="top" src={NavImg} fluid/>
  <Card.Body>
    <p>JUICES</p>
  </Card.Body>
</Card>
       </Col>

       <Col xs={6}>
       <Card  >
  <Card.Img variant="top" src={NavImg} fluid/>
  <Card.Body>
    <p>JUICES</p>
  </Card.Body>
</Card>
       </Col>

       <Col xs={6}>
       <Card  >
  <Card.Img variant="top" src={NavImg} fluid/>
  <Card.Body>
    <p>JUICES</p>
  </Card.Body>
</Card>
       </Col>

       <Col xs={6}>
       <Card  >
  <Card.Img variant="top" src={NavImg} fluid/>
  <Card.Body>
    <p>JUICES</p>
  </Card.Body>
</Card>
       </Col>

       </Row>
      

   </Container>
   </Router>

    
    );
}

export default MenuNav;