import React from 'react';
import { NavLink } from 'react-router-dom';
//import '../styles/_Navigation.scss';

const Navigation = () => {
    return (
        <ul>
            <li>
                <NavLink to='/' exact>Start</NavLink>
            </li>
            <li>
                <NavLink to='/male'>Male</NavLink>
            </li>
            <li>
                <NavLink to='/female'>Female</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
                <NavLink to='/sign'>Sign In</NavLink>
            </li>
        </ul>
    );
}

export default Navigation;