import React from 'react'
import Logo from '../assets/Wireframe-01.png'

const Navbar = (props) => {
   
    return (
        <div>
            <nav>
                <img  className='navIcon' src={Logo} alt="website"/>
                <ul className="navbar">
                    <a href="https://www.google.com" target='_blank'><li className="navItem">Home</li></a>
                    <a href="https://www.google.com" target='_blank'><li className="navItem">Shop</li></a>
                    <a href="https://www.google.com" target='_blank'><li className="navItem">Cart</li></a>
                </ul>
            </nav>


        </div>
    )
    
}

export default Navbar
