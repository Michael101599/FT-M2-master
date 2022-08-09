import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'
import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
           <div>
          <NavLink exact to="/home" >
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </NavLink>    
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/">
                            <h1>Home</h1>
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink exact to="/filter/posts">
                            <h1>Home</h1>
                        </NavLink>
                    </li>
                </ul>
          </nav>
        </header>
    )
}