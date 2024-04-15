import React, { useState } from 'react';
import f3 from '../../assets/images/f3.png';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../src/theme.js';
import { FaHandsHelping } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <header className="bg-blue-100 p-4 lg:p-5 relative z-10 navbar">
                <nav className="flex justify-between items-center max-w-15xl mx-auto">
                    <div className="flex items-center">
                        <img src={f3} alt="YEW logo" className="h-16 mt-2" />

                        <div className="ml-2">
                            <h3 className={`text-sm lg:text-lg font-bold text-blue-800`}>DZIKO CENTRE FOR CLIMATE JUSTICE</h3>
                            <p className={`text-xs lg:text-sm text-blue-900 `}>Leading the charge in climate justice</p>
                        </div>
                    </div>
                    <div className={`lg:flex lg:items-center ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 bg-white w-full py-4 lg:py-0 lg:bg-transparent lg:relative lg:static lg:flex lg:justify-end lg:pt-0 lg:top-auto lg:left-auto`}>
                        <a href="/" className="text-black hover:text-blue-600 transition duration-300 block lg:inline-block lg:mx-4 mb-4 text-xs lg:text-sm pl-2">Home</a>
                        <a href="/about" className="text-black hover:text-blue-600 transition duration-300 block lg:inline-block lg:mx-4 mb-4 text-xs lg:text-sm pl-2">About</a>
                        <a href="/projects" className="text-black hover:text-blue-600 transition duration-300 block lg:inline-block lg:mx-4 mb-4 text-xs lg:text-sm pl-2">Projects</a>
                        <a href="/News" className="text-black hover:text-blue-600 transition duration-300 block lg:inline-block lg:mx-4 mb-4 text-xs lg:text-sm pl-2">News</a>
                        <a href="/contact" className="text-black hover:text-blue-600 transition duration-300 block lg:inline-block lg:mx-4 mb-4 text-xs lg:text-sm pl-2">Contact</a>
                        <a href="/support" className="text-white bg-blue-600 hover:bg-blue-400 py-2 px-3 lg:px-2 rounded-full transition duration-300 block lg:inline-block lg:mx-4 mb-4 lg:mb-4 text-xs lg:text-sm pl-2 flex items-center">
                            <span className="mr-2">Support</span>
                            <FaHandsHelping size={20} className="inline-block" />
                        </a>

                    </div>
                    <button className="lg:hidden ml-2 mt-2" onClick={toggleMenu}>☰</button>
                </nav>
            </header>
        </ThemeProvider>
    );
}

export default Navbar;
