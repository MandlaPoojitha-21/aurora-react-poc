import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <React.Fragment>
        <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          <img src="https://ztycn97642.stage.lithium.com/t5/s/ztycn97642/m_assets/themes/customTheme1/italent-all-white-1722927285704.svg?time=1722927289627" alt="iTalent Digital" />
        </a>
        <a href="/help" className="navbar-item">Help</a>
        <div className="dropdown">
          <button className="dropbtn">Consulting</button>
          <div className="dropdown-content">
            <a href="/consulting1">Option 1</a>
            <a href="/consulting2">Option 2</a>
          </div>
        </div>
        <a href="/italent-digital" className="navbar-item">iTalent digital</a>
        <a href="/archive" className="navbar-item">Archive</a>
      </div>
      <div className="navbar-right">
        <a href="/search" className="navbar-icon">🔍</a>
        <a href="/messages" className="navbar-icon">📧</a>
        <a href="/notifications" className="navbar-icon">🔔</a>
        <a href="/profile" className="navbar-icon">
          <div className="profile-icon"></div>
        </a>
        <a href="/signin" className="navbar-item">Sign in to Ask a Question</a>
      </div>
    </nav>
    </React.Fragment>
    
  );
};

export default Navbar;
