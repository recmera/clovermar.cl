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


                <Item 
                  title='Choros rojos legendarios' 
                  description='Choritos apanados pre fritos'
                  presentation='Bolsas de 500gr, 1 kg, 1 lb, 2 lb, Caja Master de 5 kg y 10 lb'
                  sizes='
                      40 - 50 ,
                      50 - 70 ,
                      60 - 80'
                  duration='24 meses desde la fecha de producción'
                />


            </Route>
            <Route path="/productos/choritos2">
                <Item
                  title='Choros rojos legendarios' 
                  description='Choritos apanados pre fritos'
                  presentation='Bolsas de 500gr, 1 kg, 1 lb, 2 lb, Caja Master de 5 kg y 10 lb'
                  sizes='
                      40 - 50 ,
                      50 - 70 ,
                      60 - 80'
                  duration='24 meses desde la fecha de producción'
                />
            </Route>
            <Route path="/productos/choritos3">
                <Item
                  title='Choros rojos legendarios' 
                  description='Choritos apanados pre fritos'
                  presentation='Bolsas de 500gr, 1 kg, 1 lb, 2 lb, Caja Master de 5 kg y 10 lb'
                  sizes='
                      40 - 50 ,
                      50 - 70 ,
                      60 - 80'
                  duration='24 meses desde la fecha de producción'
                />
            </Route>
            <Route path="/productos/choritos4">
                <Item
                  title='Choros rojos legendarios' 
                  description='Choritos apanados pre fritos'
                  presentation='Bolsas de 500gr, 1 kg, 1 lb, 2 lb, Caja Master de 5 kg y 10 lb'
                  sizes='
                      40 - 50 ,
                      50 - 70 ,
                      60 - 80'
                  duration='24 meses desde la fecha de producción'
                />
            </Route>
            <Route path="/productos/choritos5">
                <Item
                  title='Choros rojos legendarios' 
                  description='Choritos apanados pre fritos'
                  presentation='Bolsas de 500gr, 1 kg, 1 lb, 2 lb, Caja Master de 5 kg y 10 lb'
                  sizes='
                      40 - 50 ,
                      50 - 70 ,
                      60 - 80'
                  duration='24 meses desde la fecha de producción'
                />
            </Route>
            <Route path="/productos/choritos6">
                <Item
                  title='Choros rojos legendarios' 
                  description='Choritos apanados pre fritos'
                  presentation='Bolsas de 500gr, 1 kg, 1 lb, 2 lb, Caja Master de 5 kg y 10 lb'
                  sizes='
                      40 - 50 ,
                      50 - 70 ,
                      60 - 80'
                  duration='24 meses desde la fecha de producción'
                />
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
