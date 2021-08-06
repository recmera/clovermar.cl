import React from 'react'
import image from '../images/mariscos.jpg'
import './About.css'

function About() {
    return (

        <div className='row'>
            <div className='column'>
                <h1 className='title'> Productos del mar a tu mesa </h1>
                <hr></hr>
                <h3 className='title'> Quiénes somos </h3>
                <p className='text'> 
                    Somos los mayores productores de mejillón en el mundo, con más de 900 hectáreas mejillones cultivados en Chiloé,
                    una isla increíblemente hermosa que se encuentra entre la corriente de Humboldt, un ecosistema altamente productivo
                    de clase I, y la Patagonia en el sur de Chile. Producimos más de 30 mil toneladas métricas de mejillones al año y 
                    tenemos de una participación de mercado dominante en Bélgica y Francia, los líderes mundiales en el consumo per cápita
                    de mejillón, donde los consumidores profesionales y casuales se toman sus mejillones en muy en serio.
                
                </p>

                <br></br>
                <p className='text'>
                    Al crecer en estas aguas biológicamente diversas y ricas en nutrientes, nuestros mejillones adquieren un sabor único
                    de la Patagonia chilena, y nuestro proceso de cosecha garantiza la captura de este cualidades de sabor, lo que nos
                    permite compartirlo con consumidores de todo el mundo.
                </p>

            </div>
            <div className='column'>
                <img className='img' src={image} alt='import'></img>
            </div>
            
        </div>
    )
}

export default About;
