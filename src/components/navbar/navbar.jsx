import React, { useState } from 'react';
import f3 from '../../assets/images/f3.png';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../src/theme.js';
import { FaHandsHelping } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <header className="bg-indigo-200 p-4 lg:p-5 z-10 fixed top-0 left-0 w-full border-b-8 border-indigo-800">
                <nav className="flex justify-between items-center max-w-15xl mx-auto">
                    <div className="flex items-center">
                        <img src={f3} alt="YEW logo" className="h-20 mt-2" />

                        <div className="ml-2">
                            <h3 className={`text-sm lg:text-lg font-bold text-indigo-800`}>DZIKO CENTRE FOR CLIMATE JUSTICE</h3>
                        </div>
                    </div>
                    <div className={`lg:flex lg:items-center ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 bg-white w-full py-4 lg:py-0 lg:bg-transparent lg:relative lg:static lg:flex lg:justify-end lg:pt-0 lg:top-auto lg:left-auto`}>
                        <NavLink to="/" className="text-indigo-800 font-bold hover:text-indigo-500 transition duration-300 block lg:inline-block lg:mx-4 mb-4 text-xs lg:text-sm pl-2">Home</NavLink>
                        <NavLink to="/about" className="text-indigo-800 font-bold hover:text-indigo-500 transition duration-300 block lg:inline-block lg:mx-4 mb-4 text-xs lg:text-sm pl-2">About</NavLink>
                        <NavLink to="/projects" className="text-indigo-800 font-bold hover:text-indigo-500 transition duration-300 block lg:inline-block lg:mx-4 mb-4 text-xs lg:text-sm pl-2">Projects</NavLink>
                        <NavLink to="/News" className="text-indigo-800 font-bold hover:text-indigo-500 transition duration-300 block lg:inline-block lg:mx-4 mb-4 text-xs lg:text-sm pl-2">News</NavLink>
                        <NavLink to="/contact" className="text-indigo-800 font-bold hover:text-indigo-500 transition duration-300 block lg:inline-block lg:mx-4 mb-4 text-xs lg:text-sm pl-2">Contact</NavLink>
                        <NavLink to="/support" className="text-white font-bold bg-indigo-800 hover:bg-indigo-400 py-2 px-2 lg:px-2 rounded-full transition duration-300 block lg:inline-block lg:mx-4 mb-4 lg:mb-4 text-xs lg:text-sm pl-2 flex items-center">
                            <span className="mr-2">Support</span>
                            <FaHandsHelping size={20} className="inline-block" />
                        </NavLink>
                    </div>
                    <button className="lg:hidden ml-2 mt-2" onClick={toggleMenu}>☰</button>
                </nav>
            </header>
        </ThemeProvider>
    );
}

export default Navbar;
