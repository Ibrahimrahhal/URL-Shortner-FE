import React from 'react';
import "./header.scss";

export default function Header() {
    return (
        <div className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a href="index.html" className="navbar__navbar-brand">BlaBla</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar__navbar-collapse  collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar__navbar-nav ml-auto navbar-nav">
                        <a href="#home" className="nav-item navbar__navbar-nav--nav-link nav-link active">Home</a>
                        <a href="#about" className="nav-item navbar__navbar-nav--nav-link nav-link">About</a>
                        <a href="#service" className="nav-item navbar__navbar-nav--nav-link nav-link">Service</a>
                        <a href="#experience" className="nav-item navbar__navbar-nav--nav-link nav-link">Experience</a>
                        <a href="#portfolio" className="nav-item navbar__navbar-nav--nav-link nav-link">Portfolio</a>
                        <a href="#price" className="nav-item navbar__navbar-nav--nav-link nav-link">Price</a>
                        <a href="#review" className="nav-item navbar__navbar-nav--nav-link nav-link">Review</a>
                        <a href="#team" className="nav-item navbar__navbar-nav--nav-link nav-link">Team</a>
                        <a href="#blog" className="nav-item navbar__navbar-nav--nav-link nav-link">Blog</a>
                        <a href="#contact" className="nav-item navbar__navbar-nav--nav-link nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
