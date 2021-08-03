import React from 'react'
import image from '../images/mariscos.jpg'
import './About.css'

function About() {
    return (

        <div className='row'>
            <div className='column'>
                <h1 className='title'> Quiénes somos </h1>
                <p className='text'> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non nisl porta, tincidunt elit non, imperdiet nibh. Etiam quis massa pretium, mollis neque vel, fringilla quam. Morbi cursus ac ex eget lacinia. In mattis id mauris quis ornare. Quisque imperdiet condimentum eleifend. Quisque gravida massa eros, ut malesuada nunc bibendum eget. Quisque sollicitudin, sapien ut dictum aliquam, 
                    lectus turpis mattis enim, nec gravida dolor nisl elementum dui. Phasellus a libero sagittis, dapibus velit dapibus, tincidunt massa. Donec bibendum ligula eget porta laoreet. Aliquam erat volutpat. Etiam at pulvinar nulla. Curabitur commodo diam est, eget lobortis ipsum rutrum id. Pellentesque tincidunt in felis id venenatis. Sed et nulla et diam vestibulum ultrices. Aenean ac lacus sed
                    leo iaculis ultrices. Suspendisse at enim eu eros lacinia euismod vulputate eu ex. Phasellus quam nulla, ornare at arcu vitae, vestibulum gravida arcu. Ut eget ipsum tortor. Mauris metus nisi, iaculis et condimentum ut, dictum et tellus. Praesent sollicitudin justo a vestibulum viverra. Sed malesuada, orci ac suscipit aliquam, arcu lacus mollis quam, eu aliquam velit urna vitae lorem.
                    Donec faucibus nunc elit, sed posuere lectus vulputate vitae. Fusce et ex bibendum, commodo dui et, mollis leo. Sed efficitur iaculis consequat. In tincidunt magna ac egestas accumsan. Phasellus quis porta lorem. Nullam elementum sagittis eros in varius. Nullam in molestie lectus. Proin lobortis mi id auctor luctus. Curabitur blandit ipsum neque, a tempor odio tempus at. In eros risus,
                    tempor euet sem nec, luctus bibendum est. Vestibulum dictum egestas congue. Pellentesque in euismod velit. Suspendisse sem eros, mollis sed aliquam eget, condimentum in est. 
                </p>
            </div>
            <div className='column'>
                <img className='img' src={image} alt='import'></img>
            </div>
            
        </div>
    )
}

export default About;
