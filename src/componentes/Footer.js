import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                    <a>CLOVERMAR</a>
                </Link>
            </div>
            <small className='website-rights'>
                Clovermar S.A. | teléfono: +33 2 22222222 | info@gagaga.ad
            </small>
        </div>
    )
}

export default Footer;
