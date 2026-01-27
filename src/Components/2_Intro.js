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
            setIsVisible(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
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
            
            {/* Intro Section */}
            <header className="App-header">
                <div className="hero-text-block">
                    <BlurText 
                        key={headlineCycle}
                        text="Edward Zilbert"
                        delay={300}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={() => setShowTagline(true)}
                        className="blurtext1"
                    />
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