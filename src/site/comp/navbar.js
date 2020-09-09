import React, { useState } from 'react';
import '../css/App.css';
import logo from '../img/qr-code-menu-logo.png';
import {Navbar, Container, Nav, Image} from 'react-bootstrap';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { NavHashLink as NavLink  } from 'react-router-hash-link';


function SiteNavbar() {
  const [navbuttons] = useState([
    {
      tittle: 'Why SEAT?',
      link:'/home#Why_seat'
    },
    {
      tittle: 'Features',
      link:'/home#features'
    },
    {
      tittle: 'Get In Touch',
      link:'/home#ContactUs'
    }
  ]);
  return (
   <Router>
         <Navbar className= "navbarbg" collapseOnSelect expand="lg" fixed="top">
   <Container>
  <Navbar.Brand ><NavLink smooth to="/home#header"><Image className="header-logo" src={logo}/></NavLink></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
    <Nav >
      {
        navbuttons.map(
          navbutton =>(
            
               <NavLink smooth to={navbutton.link} className=" App-link nav-link">{navbutton.tittle}</NavLink>
          
         
          ))
        
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

   </Router>
  
   
   
   
 
  );
}

export default SiteNavbar;
