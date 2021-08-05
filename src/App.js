import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Navbar  from './componentes/Navbar';
import  About  from './componentes/About';
import  Products  from './componentes/Products';
import  Contact  from './componentes/Contact';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <Navbar/>
          <Switch>
            <Route path='/nosotros'>
              <About/>
            </Route>
            <Route path='/productos'>
              <Products/>
            </Route>
            <Route path='/contacto'>
              <Contact/>
            </Route>
            <Route path='/'>
              
              
            </Route>
          </Switch>
          <Footer/>

        </div>
      </Router>
      

    </>
  );
};

export default App;
