
import { LOGO_URL } from '../utils/constants'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [btnName, setBtnName] = useState("login")
    const onlineStatus = useOnlineStatus()
    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online status :{onlineStatus ? "🟢" : "🔴"}
                    </li>
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
                    <li>
                        <Link to="/grocery">
                            Grocery
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