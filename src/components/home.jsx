// HomeComp.js

import React, { useState } from "react";
import "./home.css"; // Import the CSS file

const HomeComp = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLoginClick = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="#home">Home</a>
                    <a href="#services">Our Services</a>
                    <a href="#products">Products</a>
                    <a href="#learn">Learn</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="navbar-right">
                    <a href="#login" className="login-link" onClick={handleLoginClick}>Login</a>
                </div>
            </nav>

            <section>
                <h1>Learn With Joy :)</h1>
            </section>
            <section>
                <h1>About us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Ipsam distinctio dolores, consectetur illo expedita molestias non eos quaerat unde optio modi commodi maiores <br/>
                 cum adipisci quo soluta temporibus deserunt ut!</p>
            </section>
            <section>
                <h1>Reviews</h1>
                <div className="reviews-container">
                    <div className="review-box active">
                        <h3>User1</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="review-box">
                        <h3>User2</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </section>

            {showLoginForm && (
                <div className="login-form">
                    <form>
                        {/* Add your login form fields here */}
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />

                        <button type="submit">Login</button>
                    </form>
                </div>
            )}

            {/* Footer */}
            <footer>
                <div className="footer-left">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
                <div className="footer-right">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </footer>
        </>
    );
}

export default HomeComp;
