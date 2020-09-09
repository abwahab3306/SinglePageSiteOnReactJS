import React, { useState } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import featureOne from '../img/feature_one_qr_menu.png';
import featureTwo from '../img/feature_two_qr_menu.png';
import featureThree from '../img/feature_three_qr_menu.png';
import featureFour from '../img/feature_four_qr_menu.png';


function InteractiveSec() {
    const [features] = useState([
        {
            header: 'Increase post-purchase engagement',
            subheader: 'Use QR Codes for more than just contactless ordering',
            text:'Use a QR code on delivery boxes or packaging to build engagement beyond the confines of your restaurant. A video message from the chef or the restaurant owner always goes a long way in building loyalty among patrons. Show them you care in these unprecedented times!',
            image: featureOne, 
            order: {order: 'last'},


          
           
        },
        {
            header: 'PRE-ORDER',
            subheader: 'GET ORDERS IN ADVANCE, SAVE TIME',
            text:'SEAT allows to make reservations and set up all order details in advance. Client reserve a table and make a pre-order. Check reservation details and welcome your guests with prepared table. You will monitor the reservation history and manage the process effectively.',
            image: featureTwo, 
            order: {order: 'first'},
           
        },
        {
         
            header: 'DYNAMIC QR CODES',
            subheader: 'Change the menu. Not the QR Code',
            text:'Say goodbye to the hassle of changing the QR Code every time you change the menu. Display pancakes and eggs for breakfast; salads, sandwiches, steaks for lunch; and burgers for dinner. Use a single dynamic QR Code and have the flexibility to switch between menus seamlessly.',
            image: featureThree, 
            order: {order: 'last'},
            
        },
        {
            header: 'DATA COLLECTION AND ANALYSIS',
            subheader: 'Collect and analyze data that generates insights from your restaurant ',
            text:'We collect and analyze data that generates insights from your restaurant menu, cafe menu to improve your business efficiency and profitability.',
            image: featureFour,
            order: {order: 'first'}, 
          
        }

    ]);
    return (
        <section  className="feature-section" id="features">
             <Container> 
                <h1 className="feature-header">Features</h1>
                
            
            {
                features.map(feature =>(
                    <Row className="feature-row">
                        
                    <Col md={6} className= "text-left" >
                        <h4>{feature.header}</h4>
                        <h2>{feature.subheader}</h2>
                        <p>{feature.text}</p>
                    </Col>
                    <Col md={6, feature.order} xs={ 12, {order: 'last'}  }>
                        <Image src ={feature.image} fluid/>
                    </Col>
                    </Row>
                   
                ))}
       
        
    </Container>
        </section>
       
    );
  }
  
  export default InteractiveSec;