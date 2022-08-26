import React from 'react';
import logo from '../../images/Logo.svg';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className='bg-slate-800 p-5 sticky top-0 z-10'>
            <div className='md:flex w-4/5 mx-auto justify-between items-center'>
                <img src={logo} alt="" />
                <div className='text-white'>
                    <NavLink className='p-4 hover:text-orange-300' to="/shops">Shop</NavLink>
                    <NavLink className='p-4 hover:text-orange-300' to="/orderReviews">Order</NavLink>
                    <NavLink className='p-4 hover:text-orange-300' to="/inventory">Manage Inventory</NavLink>
                    <NavLink className='p-4 hover:text-orange-300' to="/login">Log in</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;