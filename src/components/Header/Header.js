import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='header_navigation'>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <span>Dashboard</span>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/help">
                    <span>Help</span>
                </Link>
            </div>
        </div>
    )
};
