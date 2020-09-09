import React from 'react';
import { Container,Col,Row,Image } from 'react-bootstrap';

import Banner from '../img/banner1.png'
function Header() {
  return (
      <header className="home-header" id="header">
          
      <Container className="header-container">
        <Col>
          <Row>
            <Col md={12} lg={6} className="header-left">
            <h1>SCAN. EAT. AND. TREAT </h1>
            <h3>YOUR DIGITAL WAITER</h3>
            <h4>QR code powered digital menu for your restaurant</h4>
            <p>Make your restaurant a safe place to eat or grab-and-go by deploying a touch-free QR Code menu.</p>
            </Col>
            <Col md={12} lg={6} xs={{order:'first'}} className="header-right" >
            <Image  src ={Banner} fluid/>
            </Col>
          </Row>
        </Col>
      </Container>
     
      </header>
  );
}

export default Header;
