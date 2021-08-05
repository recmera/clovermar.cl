import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' >
                        CLOVERMAR
                    </Link>
                    
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>

                    <ul className={ click ?  'nav-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/nosotros' className='nav-links' onClick={closeMobileMenu}>
                                Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link to='/productos' className='nav-links' onClick={closeMobileMenu}>
                                Nuestros productos
                            </Link>
                        </li>
                        <li>
                            <Link to='/centros-de-cultivo' className='nav-links' onClick={closeMobileMenu}>
                                Centros de cultivo
                            </Link>
                        </li>
                        <li>
                            <Link to='/certificaciones' className='nav-links' onClick={closeMobileMenu}>
                                Certificaciones
                            </Link>
                        </li>
                        <li>
                            <Link to='/contacto' className='nav-links' onClick={closeMobileMenu}>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
