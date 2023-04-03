import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='w-full bg-purple-500 py-5'>
            <div className='flex w-[80%] mx-auto items-center justify-between'>
                <div className="title">
                    <h1 className="font-bold text-5xl">Hero Api</h1>
                </div>
                <div className="links">
                    <ul className='flex gap-7 font-bold'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/users'>Users</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;