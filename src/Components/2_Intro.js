import React, { useState } from "react";
import "../Styles/App.css";
import "../Styles/1_Header.css";
import BlurText from "./BlurText";
import MatrixBackground from "./MatrixBackground";

function Intro(){
    const [showTagline, setShowTagline] = useState(false);
    const headlineCycle = 0;

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