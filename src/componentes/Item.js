import React from 'react'
import './Item.css'
import image from '../images/mariscos.jpg'


function Choritos(props) {
    return (
        <div className='row'>

            <div className='column'>
                <h2>{props.title}</h2>
                <hr></hr>
                <h3>Descripción:</h3>
                
                <p>{props.description}</p>
                <h3> Presentaciones:</h3>
                <p>{props.presentation}</p>
                <h3> Tamaños: (unit/kg)</h3>
                <p>{props.sizes}</p>
                
                <h3>Duración:</h3>
                <p>{props.duration}</p>
            </div>
            
            
            
            <div className='column'>
                <img className='img' src={image} alt='import'></img>
            </div>
        </div>
        
    )
}

export default Choritos
