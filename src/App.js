import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Navbar  from './componentes/Navbar';
import  About  from './componentes/About';
import  Products  from './componentes/Products';
import FarmingCenter from './componentes/CentrosCultivo';
import Certifications from './componentes/Certificaciones';
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
            {/*
            <Route path='/centros-de-cultivo'>
              <FarmingCenter/>
            </Route>
            */}

            <Route path='/certificaciones'>
              <Certifications/>
            </Route>
            
            <Route path='/'>
              <About/>
            </Route>

          </Switch>
          <Footer/>

        </div>
      </Router>
      

    </>
  );
};

export default App;
