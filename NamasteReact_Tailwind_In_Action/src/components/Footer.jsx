const Footer1 = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

                {/* Company Information */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Our Company</h3>
                    <p className="text-gray-400">
                        Bringing you the finest culinary experiences, straight to your doorstep. Quality food and exceptional service is our promise.
                    </p>
                    <p className="text-gray-400 mt-4">© 2024 Gourmet Express</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul>
                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition">Menu</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p>123 Culinary St, Food City, FC 12345</p>
                    <p>Email: contact@gourmetexpress.com</p>
                    <p>Phone: +1 (234) 567-8900</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i> Facebook</a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i> Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i> Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


const Footer2 = () => {
    return (
        <div>
            Footer 2
        </div>
    )
}

export { Footer1, Footer2 }