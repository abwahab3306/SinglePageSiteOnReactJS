import React from 'react';
import {Col,Image, Container} from 'react-bootstrap';
import menuLogo from '../../img/icelane-logo.png';

function MenuHeader(){
  
    return(
    <Col className="MenuHeader">
        <Image className="MenuHeaderLogo" src ={menuLogo} fluid/>
    </Col>
        
  

    
    );
}

export default MenuHeader;