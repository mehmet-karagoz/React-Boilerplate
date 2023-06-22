import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Mehmet Karagoz Boilerplate</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
