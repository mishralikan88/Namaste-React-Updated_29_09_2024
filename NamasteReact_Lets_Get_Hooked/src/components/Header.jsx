
import { LOGO_URL } from '../utils/constants'

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#cart">Cart</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header