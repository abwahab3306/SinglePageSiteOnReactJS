import React, { useState } from 'react';
import { Container,Col, Image, Row } from 'react-bootstrap';
import introgif from '../img/restgig.gif';
//import _img from './iphone.png';
function UserExp() {
  const SectionTitle = useState('WHY YOU NEED SEAT');
  const Text = useState(' SEAT QR menu is the perfect tool for restaurants, cafes, shops and other business types to provide their customers with an attractive QR menu, digital menu and help them order with a few simple clicks from restaurant menu, cafe menu. Amplify your reach, inspire your audience, cut costs and save time all by using this single tool.' );
  return (
    
      <Container id="Why_seat">
        <h1> {SectionTitle} </h1>
        <Col className="why_seat_userExp"> 
          <Col>
            <Image src={introgif} fluid ></Image>
          </Col>
          <Col className="why_seat_text" >
            <p>{Text}</p>
          </Col>
        </Col>
      </Container>
  );
}

export default UserExp;