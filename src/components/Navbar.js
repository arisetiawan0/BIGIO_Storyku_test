import React from 'react';
import { Link } from 'react-router-dom'; 
import { FiBookOpen } from 'react-icons/fi';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-3 shadow-lg rounded-b-lg">
            <Link to="/" className="text-white text-lg font-bold flex items-center p-5 hover:text-gray-300 transition duration-300 ease-in-out">
                <FiBookOpen className="text-4xl mr-3 animate-bounce" /> {/* Ikon Utama */}
                <div className='text-3xl font-display tracking-wider'>Storyku</div>
            </Link>
        </nav> 
    ); 
}; 

export default Navbar;
