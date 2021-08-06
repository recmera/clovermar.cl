import React from 'react'
import { Link } from 'react-router-dom';
import image from '../images/6x4.png'
import './Products.css'

function Products() {
    return (
        <div className='row'>


            <div className='column'>
                <h2>Choritos</h2>
                <hr></hr>
                <small>
                    Los choritos aportan con una gran cantidad de nutrientes y
                    por lo general contienen pocas calorías, tienen bajos niveles
                    de colesterol, alto porcentaje de fosfolípidos, triglicéridos
                    ricos en Omega-3 y ácidos grasos esenciales, (DHA y EPA).
                </small>
                <div className='row'>
                    <ul>
                        <li className='products'>
                            
                            <Link to='/productos/choritos1'>
                                <img className='img' src={image} alt='import'></img>
                                <h3>Skin pack de carne</h3>
                            </Link>
                        </li>
                        <li className='products'>
                            <Link to='/productos/choritos2'>
                                <img className='img' src={image} alt='import'></img>
                                <h3>Skin pack de carne</h3>
                            </Link>
                        </li>
                        <li className='products'>
                            <Link to='/choritos1'>
                                <img className='img' src={image} alt='import'></img>
                                <h3>Skin pack de carne</h3>
                            </Link>
                        </li>

                    </ul>

                    <ul>
                        <li className='products'>
                            <Link to='/choritos1'>
                                <img className='img' src={image} alt='import'></img>
                                <h3>Skin pack de carne</h3>
                            </Link>
                        </li>
                        <li className='products'>
                            <Link to='/choritos1'>
                                <img className='img' src={image} alt='import'></img>
                                <h3>Skin pack de carne</h3>
                            </Link>
                        </li>
                        <li className='products'>
                            <Link to='/choritos1'>
                                <img className='img' src={image} alt='import'></img>
                                <h3>Skin pack de carne</h3>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>

            <div className='column'>
                <h2>Salmón</h2>
                <hr></hr>
                <small>
                    Los choritos aportan con una gran cantidad de nutrientes y
                    por lo general contienen pocas calorías, tienen bajos niveles
                    de colesterol, alto porcentaje de fosfolípidos, triglicéridos
                    ricos en Omega-3 y ácidos grasos esenciales, (DHA y EPA).
                </small>
                <div className='row'>
                    <ul>
                        <li className='products'>
                            <Link to='/choritos1'>
                                <img className='img' src={image} alt='import'></img>
                                <h3>Skin pack de carne</h3>
                            </Link>
                        </li>
                        <li className='products'>
                            <Link to='/choritos1'>
                                <img className='img' src={image} alt='import'></img>
                                <h3>Skin pack de carne</h3>
                            </Link>
                        </li>
                        <li className='products'>
                            <Link to='/choritos1'>
                                <img className='img' src={image} alt='import'></img>
                                <h3>Skin pack de carne</h3>
                            </Link>
                        </li>

                    </ul>
                </div>
                
            </div>

        </div>
    )
}

export default Products;