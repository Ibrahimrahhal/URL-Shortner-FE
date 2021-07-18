import React from 'react';
import "./header.scss";

export default function Header() {
  return (
      <div className="navbar">
            <div className="container-fluid">
                <a href="index.html" className="navbar__navbar-brand">BlaBla</a>
                <div className="navbar__navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar__navbar-nav ml-auto">
                        <a href="#home" className="nav-item navbar__navbar-nav--nav-link active">Home</a>
                        <a href="#about" className="nav-item navbar__navbar-nav--nav-link">About</a>
                        <a href="#service" className="nav-item navbar__navbar-nav--nav-link">Service</a>
                        <a href="#experience" className="nav-item navbar__navbar-nav--nav-link">Experience</a>
                        <a href="#portfolio" className="nav-item navbar__navbar-nav--nav-link">Portfolio</a>
                        <a href="#price" className="nav-item navbar__navbar-nav--nav-link">Price</a>
                        <a href="#review" className="nav-item navbar__navbar-nav--nav-link">Review</a>
                        <a href="#team" className="nav-item navbar__navbar-nav--nav-link">Team</a>
                        <a href="#blog" className="nav-item navbar__navbar-nav--nav-link">Blog</a>
                        <a href="#contact" className="nav-item navbar__navbar-nav--nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
