import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';



const RouterComponent = () => {
    return (
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/contact" element={<Contact />} />
          </Routes> 
      </Router>
    );
  };
  
  export default RouterComponent;