// HomeComp.js

import React, { useState, useEffect } from "react";
import "./home.css"; // Import the CSS file
import LearningDay from "./days";

const HomeComp = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showLearningsDropdown, setShowLearningsDropdown] = useState(false);
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

    const handleDayClick = (dayNumber) => {
        // Redirect to the corresponding day's content page
        window.location.href = `/learning/day${dayNumber}`;
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
                    }, 1000); 
                }
            } else {
                setDisplayText(""); 
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
                    <a href="#Participations">Participations</a>
                    <a href="#contact">Contact</a>
                    {/* "My Learnings" dropdown */}
                    <div className="learnings-dropdown">
                        <a href="#learnings" onClick={handleLearningsClick}>
                            My Learnings &#9662;
                        </a>
                        {showLearningsDropdown && (
                            <div className="learnings-dropdown-content">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((dayNumber) => (
                                    <a
                                        key={dayNumber}
                                        href={`#day-${dayNumber}`}
                                        onClick={() => handleDayClick(dayNumber)}
                                    >
                                        Day-{dayNumber}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="navbar-right">
                    <a href="#login" className="login-link" onClick={handleLoginClick}>
                        Login
                    </a>
                </div>
            </nav>

            <div className="animation-container">
                <h1>{displayText}<span className="blinking-cursor">|</span></h1>
            </div>
            <section>
                <h1>About me</h1>
                <p>
                I am an Electronics and communication engineering student at Kongu Engineering College, where I am pursuing my passion for developing innovative medtech and biotech solutions using embedded and IoT technologies. I have learned and applied various programming languages, such as Java, C, HTML, and CSS, to create projects that address real-world problems and needs.

I am also a polyglot who speaks English, Tamil, and Japanese, and I enjoy learning new languages and cultures. I believe that communication and collaboration are essential for achieving success in any field, especially in the global and diverse medtech and biotech industry. My goal is to leverage my skills and knowledge to contribute to the advancement and improvement of healthcare and well-being for people around the world.

                </p>
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
                    <a
                        href="www.linkedin.com/in/gokul-raj-l-21a4081ab"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a href="https://github.com/Gokul230504" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
            </footer>
        </>
    );
};

export default HomeComp;
