import React from 'react';
import Mainsection from './comp/mainsection.js';
import Navbar from './comp/navbar.js';
import Features from './comp/interactiveSec.js';
import Footer from './comp/footer.js';

import './css/App.css';
import TemplateMenu from './comp/template-menu.js';

function Home() {
  return (
    <div className="App">
    <Mainsection/>
    <Navbar/>
    <TemplateMenu/>
    <Features/>
    <Footer/>

    </div>
  );
}

export default Home;
