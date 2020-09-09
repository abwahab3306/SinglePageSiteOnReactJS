import React, { useState } from 'react';
import { Container, Card , Row, Col,  Button} from 'react-bootstrap';
import Starter from '../img/qrc-restaurant-starter.png'
import Lite from '../img/qrc-restaurant-lite.png'
import Pro from '../img/qrc-restaurant-pro.png'
import Enterprise from '../img/qrc-restaurant-enterprise.png'



function Pricing(){
    const [pricingCards] = useState([
        {   
            Title : 'Starter',
            price: '20$',
            image: Starter,
            Menupages: '1',
            noOfcode: '1',
            baseprise: 'INSTALLATION FEE: 50$',
            data: 'NO',
            Domain: 'NO',
            Design: 'NO'
            
        },
        {   
            Title : 'Lite',
            price: '60$',
            image: Lite,
            Menupages: '3',
            noOfcode: '2',
            baseprise: 'INSTALLATION FEE: 50$',
            data: 'NO',
            Domain: 'NO',
            Design: 'YES'
        },
        {   
            Title : 'Pro',
            price: '120$',
            image: Pro,
            Menupages: '9',
            noOfcode: '3',
            baseprise: 'INSTALLATION FEE: 100$',
            data: 'NO',
            Domain: 'YES',
            Design: 'YES'
        },
        {   
            Title : 'Enterprise',
            price: '250$',
            image: Enterprise,
            Menupages: '10+',
            noOfcode: '10',
            baseprise: 'NO INSTALLATION FEE',
            data: 'YES',
            Domain: 'YES',
            Design: 'YES'

        }

    ]);


    
    return(
        <Container className ="pricing" id="pricing">
            <h2>Pick a Plan</h2>
            <h4>Build a safe way of taking orders without having diners to touch a physical menu</h4>
            <h6>Have Questions? <a href="www.#.com "> +92 316 469 5959</a> </h6> 
            <Row>
                {pricingCards.map(pricingCard =>(
                         <Col lg={3} md = {6} xs={12} >   
                          <Card.Img src = {pricingCard.image} variant="top">
                            
                         </Card.Img>
                 <Card>
                    
                     <Card.Body>
                         <Card.Title>
                             {pricingCard.Title}
                         </Card.Title>
                         
                             <ul className="cardlist">
                                 <li>DYNAMIC QR CODES: {pricingCard.noOfcode} </li>
                                 <li>NO. OF MENU PAGES: {pricingCard.Menupages} </li>
                                 <li>CUSTOM DESIGN: {pricingCard.Design} </li>
                                 <li>CUSTOM DOMAIN: {pricingCard.Domain} </li>
                                 <li>DATA ANALYSIS: {pricingCard.data} </li>
                             </ul>
               
                        
                         <Button>Contact Us</Button>
                     </Card.Body>
                 </Card>
                 <br></br>
                </Col>
                ))}
                
               
                  
            </Row>
        </Container>
    )
}
 
 export default Pricing;