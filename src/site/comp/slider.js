import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import featureOne from '../img/qrc-restaurant-blurb-2.png';
import { Col, Row, Container } from 'react-bootstrap';

function Slider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Container>
          <Carousel  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            
            src={featureOne}
            alt="First slide"
          fluid />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
           
            src={featureOne}
            alt="Second slide"
            fluid 
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Row>
            <Col md={6}>
                <h1>
                Engage diners and walk bys
with attractive offers
                </h1>
                <p>
                Use your restaurant window to draw in diners - inform them about gift cards, contactless delivery options, or loyalty programs, among other offers. Convert your window front seamlessly as a platform to mutually promote other local businesses with a powerful QR code solution.
                </p>
                </Col>
                <Col md={6}>
                <img
                        src={featureOne}
                        alt="Third slide"
                        fluid 
                    />
                </Col>
            </Row>
         
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </Container>
    
    );
  }

  export default Slider;
  