import React from 'react';
import image from '../images/mariscos.jpg';
import logo1 from '../images/logo-asc.jpg';
import logo2 from '../images/logo_bap.png';
import logo3 from '../images/logo_mussel.png';
import logo4 from '../images/logo_halal.png';
import logo5 from '../images/logo_frien.png';
import logo6 from '../images/logo_ifs.png';
import logo7 from '../images/logo_brc.png';
import './Certificaciones.css';



function Certificaciones() {
    return (
        <div>
            <div className="row">
                <div className="column">
                    <h2>Producción de alimentos orgánicos</h2>
                    <hr></hr>
                    <p>
                        La misión de nuestro equipo es entregar al consumidor un
                        producto fresco, sano, y de alto valor nutricional. 
                        Nuestras plantas cuentan con la certificación BRC, FDA, 
                        HACCP, HALAL, IFS y FOS (Friends of the Sea) lo que nos 
                        permite garantizar productos de la más alta calidad mundial
                        y sustentables en el tiempo.

                    </p>
                    <h3>Logos certificaciones:</h3>
                    <div className='listado-logos'>
                        <ul>
                            
                            <img className='logo' src={logo1} alt='import'></img>
                            <img className='logo' src={logo2} alt='import'></img>
                            <img className='logo' src={logo3} alt='import'></img>
                            <img className='logo' src={logo4} alt='import'></img>
                            <img className='logo' src={logo5} alt='import'></img>
                            <img className='logo' src={logo6} alt='import'></img>
                            <img className='logo' src={logo7} alt='import'></img>

                        </ul>
                        
                    
                            
                        

                    

                    </div>
                    
                </div>
                <div className="column">
                    <img className='img' src={image} alt='import'></img>
                </div>
            </div>
        </div>
    )
}

export default Certificaciones
