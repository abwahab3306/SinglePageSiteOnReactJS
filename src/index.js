import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './index.css';
import Home from './site/home';

ReactDOM.render(
  <Router>
     <React.StrictMode>
     <Switch>
          <Route path={["/home", "/"]} exact component={Home}></Route> 
          <Route path='/template-menu' component={() => { 
     window.location.href = 'https://icelane.seat.bigosoft.co'; 
     return null;
}}/>
        </Switch>
  </React.StrictMode>
    
    </Router>,
 
  document.getElementById('root')
);


