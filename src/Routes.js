import React from 'react';
import Home from './Homes.js';
import About from './Abouts.js';
import Contact from './Contacts.js';
import {  BrowserRouter as Router, Route,  Routes as Switch, Link} from 'react-router-dom';


function Routes(){
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about" target="_blank">About</Link>
            </li>
            <li>
              <Link to="/contact" target="_blank">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/contact" element={<Contact />}/>
        </Switch>
        </div>
        </Router>
    );
}

export default Routes;