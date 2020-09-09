import React from 'react';
import {Container, Col, Row, Image} from 'react-bootstrap';
import bigosoft from '../img/bigodark.png';




function Footer(){



    return(
        <section className="footer">
            <Container>
            <Row>
                <Col md={4} xs={12}>

                <h2 className= "footer-header">Contact us</h2>
                
                <p>In a World of Technology,
People Make the Difference.</p>
                <p>+92 316 469 5959</p>
                <p>support@bigosoft.co</p>
                
               
                    
                </Col>
                <Col md={4} xs={12}>
                <h2 className= "footer-header">Localization</h2>
                    <p>Head Office:
11-B Shadman, Lahore
Pakistan</p>

                </Col>
                <Col md={4} xs={12} >
                <br/>
                <a href="http//:www.bigosoft.co">
                <Image  src={bigosoft} fluid />
                </a>
                
                </Col>
            </Row>
            </Container>
        </section>
        
            )
}

export default Footer;