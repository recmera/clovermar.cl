import React from 'react'
import './Products.css'

function Products() {
    return (
        <div className='row'>


            <div className='column'>
                <h2>Choritos</h2>
                <hr></hr>
                <div className='row'>
                    <ul>
                        <li className='products'>producto1</li>
                        <li className='products'>producto2</li>
                        <li className='products'>producto3</li>

                    </ul>

                    <ul>
                        <li className='products'>producto1</li>
                        <li className='products'>producto2</li>
                        <li className='products'>producto3</li>

                    </ul>
                </div>
            </div>

            <div className='column'>
                <h2>Salmón</h2>
                <hr></hr>
                <div className='row'>
                    <ul>
                        <li className='products'>producto1</li>
                        <li className='products'>producto2</li>
                        <li className='products'>producto3</li>

                    </ul>
                </div>
                
            </div>

        </div>
    )
}

export default Products;