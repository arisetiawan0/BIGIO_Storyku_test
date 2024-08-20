import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { TiDownload } from "react-icons/ti";

const Sidebar = () => {
    return (
        <aside className="bg-[#2D2F36] text-white h-screen w-1/5 p-6 mt-3 flex flex-col">
            <ul className="flex flex-col space-y-4">
                <li>
                    <Link to="/" className="flex items-center py-3 px-5 rounded-lg hover:bg-[#6558F5] transition duration-200">
                        <IoMdHome className="text-2xl mr-4 text-white" />
                        <span className='text-lg font-medium text-white'>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/management" className="flex items-center py-3 px-5 rounded-lg hover:bg-[#6558F5] transition duration-200">
                        <TiDownload className="text-2xl mr-4 text-white" />
                        <span className='text-lg font-medium text-white'>Management Story</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
