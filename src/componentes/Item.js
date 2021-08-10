import React from 'react'
import './Item.css'
import image from '../images/mariscos.jpg'

function Choritos() {
    return (
        <div className='row'>

            <div className='column'>
                <h2>Titulo</h2>
                <hr></hr>
                <p>hola esta es una descripción</p>
                <h3> Presentaciones:</h3>
                <p>
                    Bolsas de 500gr, 1 kg, 1 lb, 2 lb <br></br>
                    Caja Master de 5 kg y 10 lb
                </p>
                <h3> Tamaños: (unit/kg)</h3>
                <p>
                    40 - 50 <br></br>
                    50 - 70 <br></br>
                    60 - 80 <br></br>
                </p>
                <h3>Duración:</h3>
                <p>
                    24 meses desde la fecha de producción
                </p>
            </div>
            
            
            
            <div className='column'>
                <img className='img' src={image} alt='import'></img>
            </div>
        </div>
        
    )
}

export default Choritos
