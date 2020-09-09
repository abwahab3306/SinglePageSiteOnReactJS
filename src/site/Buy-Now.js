import React, { useState } from 'react';
import { Container,Col, Image } from 'react-bootstrap';
import introgif from './img/restgig.gif';
import Navbar from './comp/navbar.js';


function BuyNow() {
  const [content] = useState([  
    {
      title:'WHY YOU NEED SEAT QR MENU',
      subhead: '',
      desc: ' SEAT QR menu is the perfect tool for restaurants, cafes, shops and other business types to provide their customers with an attractive QR menu, digital menu and help them order with a few simple clicks from restaurant menu, cafe menu. Amplify your reach, inspire your audience, cut costs and save time all by using this single tool.'

    }
  ]);

  return (
    <div>
        <Navbar/>
        <Container className="userExp">
        {content.map(cont =>(
          <Col>
          <h2> {cont.title} </h2>
              <h2>{cont.subhead}</h2>
            <p>{cont.desc}</p>
          <Image src={introgif} fluid ></Image>
          </Col>
        ))
        }
         
      </Container>
    </div>
      
  );
}

export default BuyNow;