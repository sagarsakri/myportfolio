import React, { useState } from 'react';
import './NavigationBar.css';

export const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="NavigationBar">
            <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '✖' : '☰'}
            </button>

            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <div>Home</div>
                <div>About</div>
                <div>Recent Work</div>
                <div>Services</div>
            </div>
        </div>
    );
}