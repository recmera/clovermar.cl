import React from 'react'
import './Contact.css'
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MapView from './react-leaflet';


function Contact() {
    return (
        <div className='row'>
            <div className='column'>
                <h2>Escríbanos un mensaje </h2>
                <hr></hr>
                <p className='text'>
                   Contáctenos de Lunes a Viernes entre 9:00hrs a 18:30hrs y le responderemos a la brevedad.
                </p>
                <br></br>
                <div className='icon-text'>
                    <CallIcon className='icon'></CallIcon>
                    <h5>+56 5 51369877</h5>
                </div>    

                <div className='icon-text'>
                    <EmailIcon className='icon'></EmailIcon>
                    <h5>info@gagaga.ad</h5>
                </div>

                <div className='icon-text'>
                    <LocationOnIcon className='icon' ></LocationOnIcon>
                    <h5>Av. Apoquindo 4501 Oficina 1603, Las Condes, Santiago - Chile</h5>
                </div>

            </div>

            <div className='column'>
                <h2>Casa Matriz</h2>
                <div id='mapid' className='map-container'>
                    {/*
                        <MapView zoom={8} center={{ lat: 51.5287718, lng: -0.2416804 }} />
                    */}
                </div>
            </div>
        </div>
    )
}

export default Contact
