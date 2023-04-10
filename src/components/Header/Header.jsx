import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='brand-name'>
                <h2>WorkForce</h2>
            </div>
            <nav>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedjob">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <div>
                <button className='apply-btn'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;