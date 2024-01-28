// HomeComp.js

import React, { useState, useEffect} from "react";
import "./home.css"; // Import the CSS file

const HomeComp = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
     const [showLearningsDropdown, setShowLearningsDropdown] = useState(false); // Add this line
     const [displayText, setDisplayText] = useState("");
     const [currentTextIndex, setCurrentTextIndex] = useState(0);
     const textArray = ["Gokul Raj", "Electronics Engineer"];
     const typingSpeed = 150;
    const handleLoginClick = () => {
        setShowLoginForm(!showLoginForm);
    };
    const handleLearningsClick = () => {
        setShowLearningsDropdown(!showLearningsDropdown);
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentTextIndex < textArray.length) {
                const currentText = textArray[currentTextIndex];
                const newText = currentText.substring(0, displayText.length + 1);
                setDisplayText(newText);

                if (newText === currentText) {
                    setTimeout(() => {
                        setCurrentTextIndex(currentTextIndex + 1);
                    }, 1000); // Delay before starting to erase the text
                }
            } else {
                setDisplayText(""); // Clear the text
                setCurrentTextIndex(0);
            }
        }, typingSpeed);

        return () => clearInterval(intervalId);
    }, [displayText, currentTextIndex]);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="#home">Home</a>
                    <a href="#My projects">My projects</a>
                    <a href="#products">Products</a>
                    <a href="#learn">Learn</a>
                    <a href="#contact">Contact</a>
                    {/* "My Learnings" dropdown */}
                    <div className="learnings-dropdown">
                        <a href="#learnings" onClick={handleLearningsClick}>
                            My Learnings &#9662;
                        </a>
                        {showLearningsDropdown && (
                            <div className="learnings-dropdown-content">
                                <a href="#day-1">Day-1</a>
                                <a href="#day-2">Day-2</a>
                                <a href="#day-3">Day-3</a>
                                <a href="#day-4">Day-4</a>
                                <a href="#day-5">Day-5</a>
                                <a href="#day-6">Day-6</a>
                                <a href="#day-7">Day-7</a>
                                <a href="#day-8">Day-8</a>
                                <a href="#day-9">Day-9</a>
                                <a href="#day-10">Day-10</a>
                                <a href="#day-11">Day-11</a>
                                <a href="#day-12">Day-12</a>

                            </div>
                        )}
                    </div>
                </div>
                <div className="navbar-right">
                    <a href="#login" className="login-link" onClick={handleLoginClick}>Login</a>
                </div>
            </nav>

            
            <div className="animation-container">
                <h1>{displayText}<span className="blinking-cursor">|</span></h1>
            </div>
            <section>
                <h1>About me</h1>
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
