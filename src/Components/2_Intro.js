import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css";
import "../Styles/1_Header.css";
import BlurText from "./BlurText";
import { hover, vh } from "motion/react";
import MatrixBackground from "./MatrixBackground";

function Intro(){
    //"for the scroll listener"
    const [isVisible, setIsVisible] = useState(false);
    const [showTagline, setShowTagline] = useState(false);
    const [headlineCycle, setHeadlineCycle] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
            setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const header = document.querySelector(".App-header");
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowTagline(false);
                    setHeadlineCycle(cycle => cycle + 1);
                }
            },
            { threshold: 0.6 }
        );

        if (header) observer.observe(header);
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="intro-wrapper">
            <MatrixBackground />
            <section id="1_Header"></section>
            {/*second header*/}
            <header className={`top-header`} style={{zIndex : "5"}}>        
                <nav className="navwrap">
                    <button className="nav_link" onClick={() => scrollToSection("3_Skills")}>Skills</button>
                    <button className="nav_link" onClick={() => scrollToSection("4_Projects")}>Projects</button>
                    <button className="nav_link" onClick={() => scrollToSection("5_Contact")}>Contact</button>
                </nav>
        
                <div className="socials">
                    <a href="https://www.linkedin.com/in/edward-zilbert-251040216/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../Assets/linkedin.png")} alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="https://github.com/Edd4952" target="_blank" rel="noopener noreferrer">
                        <img src={require("../Assets/github.png")} alt="Github" className="social-icon" />
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <img src={require("../Assets/resumeicon.png")} alt="Resume" className="social-icon" />
                    </a>
                </div>
            </header>
            {/* Intro Section */}
            <header className="App-header">

                <div style={{height: "50vh", marginTop: "2.5vh"}}>
                    <BlurText 
                        key={headlineCycle}
                        text="Edward Zilbert"
                        delay={300}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={() => setShowTagline(true)}
                        className="blurtext1"
                    />
                </div>
                <div style={{height: "50vh"}}>
                    {showTagline && (
                        <BlurText
                            key={headlineCycle + 1}
                            text="Software guy and future gazillionaire"
                            delay={300}
                            animateBy="words"
                            direction="top"
                            className="blurtext2"
                        />
                    )}
                </div>
                
            </header>
        </div>
    );
}

export default Intro;