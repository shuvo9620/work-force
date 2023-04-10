import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">WorkForce</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/appliedjob">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
        </nav>
    );
};

export default Header;