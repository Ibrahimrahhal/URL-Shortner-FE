import React from 'react';

export default function Footer() {
    return (
        <footer>
        <div className="footer wow fadeIn" data-wow-delay="0.3s">
            <div className="container-fluid">
                <div className="container">
                    <div className="footer-info">
                        <h2>bla bla bla</h2>
                        <h3>123 Street, New York, USA</h3>
                        <div className="footer-menu">
                            <p>+012 345 67890</p>
                            <p>info@example.com</p>
                        </div>
                        <div className="footer-social">
                            <a href="https://htmlcodex.com"><i className="fab fa-twitter"></i></a>
                            <a href="https://htmlcodex.com"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://htmlcodex.com"><i className="fab fa-youtube"></i></a>
                            <a href="https://htmlcodex.com"><i className="fab fa-instagram"></i></a>
                            <a href="https://htmlcodex.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <p>&copy; <a href="https://htmlcodex.com">Your Site Name</a>, All Right Reserved</p>
                </div>
            </div>
        </div>
        </footer>
    );
}
