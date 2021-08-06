import React, { useRef, useEffect, useState } from 'react'
import './Contact.css'
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';


function Contact() {
    return (
        <div className='row'>
            <div className='column'>
                <h2>Escríbanos un mensaje </h2>
                <hr></hr>
                <p className='text'>
                   Contáctenos de Lunes a Viernes entre 9:00hrs a 18:30hrs o complete el
                   formulario con su mensaje y le responderemos a la brevedad.
                </p>
                <div className='icon-text'>
                    <CallIcon></CallIcon>
                    <h5>+56 5 51369877</h5>
                </div>
        
                <hr></hr>

                <div className='icon-text'>
                    <EmailIcon></EmailIcon>
                    <h5>info@gagaga.ad</h5>
                </div>

                <hr></hr>

                <div className='icon-text'>
                    <LocationOnIcon></LocationOnIcon>
                    <h5>Av. Apoquindo 4501 Oficina 1603, Las Condes, Santiago - Chile</h5>
                </div>

            </div>

            <div id='map-container' className='column'>
                
            </div>
        </div>
    )
}

export default Contact
