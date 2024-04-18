import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <footer className="bg-indigo-800 text-white py-20">
            <div className="container mx-auto">
                {/* Navigation Links */}
                <div className="footer-content flex flex-col lg:flex-row justify-center items-center mb-8">
                    <div className="text-center lg:text-left mb-4 lg:mb-0 lg:mr-8 lg:mb-2 nav-links">
                        <NavLink to="/" className="text-white mb-2 lg:mb-0 lg:mr-4 text-center lg:hover:text-indigo-200 block" activeClassName="font-bold">Home</NavLink>
                        <NavLink to="/about" className="text-white mb-2 lg:mb-0 lg:mr-4 text-center lg:hover:text-indigo-200 block" activeClassName="font-bold">About</NavLink>
                        <NavLink to="/projects" className="text-white mb-2 lg:mb-0 lg:mr-4 text-center ml-2 lg:hover:text-indigo-200 block" activeClassName="font-bold">Projects</NavLink>
                        <NavLink to="/news" className="text-white mb-2 lg:mb-0 lg:mr-4 ml-4 lg:hover:text-indigo-200 block" activeClassName="font-bold news-link">News</NavLink>
                        <NavLink to="/contact" className="text-white mb-2 lg:mb-0 lg:mr-4 ml-2 text-center lg:hover:text-indigo-200 block" activeClassName="font-bold">Contact</NavLink>
                        <NavLink to="/support" className="text-white mb-2 lg:mb-0 text-center ml-4 lg:hover:text-indigo-200 block" activeClassName="font-bold">Support Us</NavLink>
                    </div>
                </div>
                {/* Social Media Icons */}
                <div className="flex justify-center mb-4 mr-6">
                    <a href="https://www.facebook.com/profile.php?id=61557636222692" target="_blank" rel="noopener noreferrer" className="mr-4 text-white hover:text-indigo-200">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://www.linkedin.com/company/100894893" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200">
                        <FaLinkedin size={24} />
                    </a>
                </div>
                {/* Contact Section */}
                <div className="footer-contact text-center lg:text-center mb-4 lg:mb-0 lg:mr-4">
                    <div className="mb-2">
                        <p>Contact us:</p>
                    </div>
                    <div>
                        <p>Email: <a href="mailto:info@dzikoccj.org" className="text-white hover:text-indigo-200">info@dzikoccj.org</a></p>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom text-center mt-5 mr-5">
                    <p>&copy; 2024 DZIKO CENTRE FOR CLIMATE JUSTICE.</p>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;