import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

import { useState, useContext } from 'react';
import userContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(userContext)

    // Subscribing to the store using a Selector
    const cartItems = useSelector(store => store.cart.items)

    return (
        <header className="flex items-center justify-between bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 shadow-md m-4 px-6 py-3 rounded-lg">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
                <img className="w-16 h-16 rounded-full shadow-lg" src={LOGO_URL} alt="Logo" />
                <span className="text-2xl font-bold text-pink-600">MyApp</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-6">
                <span className='items-center text-sm font-semibold text-gray-700'>
                    Online Status: {onlineStatus ? "🟢" : "🔴"}
                </span>
                <Link to="/" className="hover:text-pink-600 transition duration-200 text-gray-700 font-semibold">Home</Link>
                <Link to="/about" className="hover:text-pink-600 transition duration-200 text-gray-700 font-semibold">About Us</Link>
                <Link to="/grocery" className="hover:text-pink-600 transition duration-200 text-gray-700 font-semibold">Grocery</Link>
                <a href="#contact" className="hover:text-pink-600 transition duration-200 text-gray-700 font-semibold">Contact Us</a>
                <Link to="/cart" className="hover:text-pink-600 transition duration-200 text-gray-700 font-semibold">Cart - ({cartItems.length} items)</Link>



            </nav>

            {/* Login/Logout Button */}
            <button
                className="px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold hover:from-green-500 hover:to-green-700 transition duration-200 shadow-lg"
                onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
            >
                {btnName}
            </button>
            <div className='px-4 font-bold'>{loggedInUser}</div>
        </header>
    );
}

export default Header;