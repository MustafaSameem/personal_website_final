import React from 'react';
import './Header.css';

function Header() {
    return (
      <header className="header">
        <div className="nav"> {/* Wrap the navigation elements */}
          <ul>
            <li className="nav-item"><a href="#contact">Contact</a></li>
            <li className="nav-item"><a href="#blog">Experience</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="intro">
          <p>Hi, my name is</p>
          <h1>Mustafa Sameem</h1>
          <p className="larger-text">I am a software engineering student</p>
        </div>
      </header>
    );
  }
  
  export default Header;