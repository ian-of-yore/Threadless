import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='text-3xl font-semibold text-center bg-emerald-800 text-white py-5'>
                <Link to='/home'>Home</Link>
                <Link className='mx-10' to='/orders'>Orders</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;