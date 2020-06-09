import React from 'react'
import Logo from '../assets/Wireframe-01.png'

const Navbar = (props) => {
   
    return (
        <div>
            <nav>
                <img  className='navIcon' src={Logo} alt="website"/>
                <ul className="navbar">
                    <a href="#"><li className="navItem">Home</li></a>
                    <a href="#"><li className="navItem">Shop</li></a>
                    <a href="#"><li className="navItem">Cart</li></a>
                </ul>
            </nav>


        </div>
    )
    
}

export default Navbar
