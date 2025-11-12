import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/1_Header.css";
import "../Assets/github.png";
import "../Assets/linkedin.png";

{/*consider making the background of the navitem a different color when the view is within the range of the section*/}
function Header() {

  const [isVisible, setIsVisible] = useState(false);

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
    
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`top-header ${isVisible ? "visible" : "hidden"}`}>
    
      <nav className="navwrap">
        <button className="nav_link" style={{textDecoration: 'none', color: 'inherit' , display: 'flex', flexDirection: 'row'}} onClick={() => scrollToSection("1_Header")}><span className="bold">Edward </span>Zilbert</button>
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
  );
}

export default Header;