import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Navbar  from './componentes/Navbar';
import  About  from './componentes/About';
import  Products  from './componentes/Products';
import Certifications from './componentes/Certificaciones';
import  Contact  from './componentes/Contact';
import Footer from './componentes/Footer';
import Item from './componentes/Item';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <Navbar/>
          <Switch>


            {/* Choritos */}
            <Route path="/productos/choritos1">
                <Item/>
            </Route>
            <Route path="/productos/choritos2">
                <Item/>
            </Route>
            <Route path="/productos/choritos3">
                <Item/>
            </Route>
            <Route path="/productos/choritos4">
                <Item/>
            </Route>
            <Route path="/productos/choritos5">
                <Item/>
            </Route>
            <Route path="/productos/choritos6">
                <Item/>
            </Route>


            {/* Salmones */}








            {/* Navegación */}
            <Route path='/nosotros'>
              <About/>
            </Route>

            <Route path='/productos'>
              <Products/>
            </Route>

            <Route path='/contacto'>
              <Contact/>
            </Route>
            
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
