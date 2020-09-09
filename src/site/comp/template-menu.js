import React, { Component } from 'react'
import { Container, Col, Image } from 'react-bootstrap'
import landscape from '../img/menuTemplatelandscape.png'
import potrait from '../img/menuTemplateportrait.png'





class TemplateMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
      render(){
        return (
            <div style={{
                height: '100vh',
                background: 'radial-gradient(circle, rgba(86, 235, 231,1) 48%, rgba(103,212,255,1) 100%)',
                display: 'grid',
                placeItems:'center',

            }}>
                <Container>
                <Col md={12} xs={12}  style={{
                    color:'#fff', 
                    marginBlockEnd: '40px'
                    }} >
              <h1 style={ this.state.width > '800' ?  {} : {fontSize:'25px'}}>SCAN OR CLICK ON THE QR CODE AND SEE THE TEMPLATE MENU </h1>
             </Col>
            <Col style={{
                  display: 'grid',
                  placeItems:'center',
            }} md={12} xs={12}>
              <a href="/template-menu">
              <Image style={ this.state.width > '800' ?  {} : {height:'60vh'}} src={this.state.width > '800' ?  landscape : potrait} fluid ></Image>
              </a>
            
            </Col>
            </Container>
            </div>
        )
      }
  
}

export default TemplateMenu
