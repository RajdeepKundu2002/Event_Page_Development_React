import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
function NavBar() {
    return (
        <>
            <nav className="navbar">
                <img className="LOGO" src="https://ieee-jaduniv.in/mla/img/WHITEML.png" alt="LOGO" />
                <div className="Table">
                    <ul className="navbar-nav">
                        <li className='list-item'><NavLink exact to="/" className='link' activeClassName="current">Home</NavLink></li>
                        <li className='list-item'><NavLink exact to="/About" className='link' activeClassName="current">About</NavLink></li>
                        <li className='list-item'><NavLink exact to="/Speakers" className='link' activeClassName="current">Speakers</NavLink></li>
                        <li className='list-item'><NavLink exact to="/Sponsors" className='link' activeClassName="current">Sponsors</NavLink></li>
                        <li className='list-item'><NavLink exact to="/Contact" className='link' activeClassName="current">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default NavBar
