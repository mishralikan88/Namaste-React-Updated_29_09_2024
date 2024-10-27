
import { LOGO_URL } from '../utils/constants'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnName, setBtnName] = useState("login")

    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About us
                        </Link>
                    </li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#cart">Cart</a></li>
                    <button className="loginButton" onClick={() => {
                        btnName === "login" ? setBtnName("logout") : setBtnName("login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header