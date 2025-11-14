import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css";
import "../Styles/3_Skills.css"; // Import your CSS file for styling
//images
import cpp from "../Assets/c-logo-a2fa.png";
import csharp from "../Assets/csharp-icon.png";
import python from "../Assets/python-1d15.png";
import js from "../Assets/javascript.jpg";
import java from "../Assets/java-logo-trasparent-bf11.png";
import css from "../Assets/css.png";
import react from "../Assets/react.png";
import vsCode from "../Assets/vscode.png";
import intelliJ from "../Assets/intellij.png";
import unity from "../Assets/unity.png";
import gameMaker from "../Assets/gamemaker.png";
import TypeScript from "../Assets/typescript.png";



function Skills() {
    {/*const [setExpanded] = useState([]);*/}
    const javasdesc = "JavaScript is a versatile programming language used for web development, server-side scripting, and more.";
    const pythonDesc = "Python is a high-level, interpreted programming language known for its readability and versatility. ";
    const javaDesc = "Java is a widely-used object-oriented programming language. It is the first programming language I learned in highschool.";
    const reactdesc = "React is a JavaScript library for building user interfaces. I once heard it described as the 'language of the slaves' because it was developed by Facebook in 2013 to accomodate for new developers lack of understanding of JS libraries.";
    const cssdesc = "CSS is used to style and layout web pages. I have a solid understanding of CSS, and I used it to design this portfolio.";
    const cppdesc = "C++ is a powerful, high-performance programming language often used for system, software, and game development. I learned many basic and intermediate concepts in college, and continue to study it currently.";
    const csharpDesc = "C# is a modern, object-oriented programming language developed by Microsoft. I find that it is closest to java.";
    const vscodeDesc = "This is the most basic and widely used code editor by Microsoft. I used it to make this portfolio.";
    const intellijdesc = "IntelliJ IDEA is an integrated development environment (IDE) for Java development. I used it in highschool to work on Java projects.";
    const unitydesc = "Unity is a cross-platform game engine used for developing video games and simulations. I learned many of the basics including C#.";
    const gameMakerDesc = "GameMaker Studio is a game development platform that allows users to create 2D games using its own scripting language, GML. I used it to make a 2D space shooter game in highschool.";
    const gmlDesc = "GameMaker Language (GML) is a high-level programming language used in GameMaker Studio for game development. I find that its like a mix of Java/C# and python.";
    const TypeScriptDesc = "Similar to JavaScript, but with static typing. I created a few small project apps with React Native using TypeScript.";    

    const languages = [
        { id: 1, title: "Typescript", description: TypeScriptDesc, image: TypeScript },
        { id: 2, title: "Javascript", description: javasdesc, image: js },
        { id: 3, title: "React", description: reactdesc, image: react },
        { id: 4, title: "CSS", description: cssdesc, image: css },
        { id: 5, title: "C++", description: cppdesc, image: cpp },
        { id: 6, title: "C#", description: csharpDesc, image: csharp },
        { id: 7, title: "Python", description: pythonDesc, image: python },
        { id: 8, title: "Java", description: javaDesc, image: java },
        { id: 9, title: "GML", description: gmlDesc, image: gameMaker },

    ];
    const compsciSkills = [
        { id: 1, title: "VSCode", description: vscodeDesc, image: vsCode },
        { id: 2, title: "IntelliJ Idea", description: intellijdesc, image: intelliJ },
        { id: 3, title: "Unity", description: unitydesc, image: unity },
        { id: 4, title: "GameMaker Studio", description: gameMakerDesc, image: gameMaker },
    ];
    const softSkills = [
        { id: 1, title: "Lifeguard", description: "Monitored pool/beach areas to ensure swimmer safety and prevent accidents. Enforced safety rules and learned to respond to emergencies, including rescues and first aid/CPR. Conducted safety checks and maintained facility cleanliness. Communicated effectively with head office and property managers to provide guidance and address concerns." },
        { id: 2, title: "Jewel Osco", description: "Handled cash, credit, and debit payments accurately, balancing registers at the end of shifts. Assisted customers with inquiries and resolved issues to ensure a positive shopping experience. Resolved conflicts and communicated to managers and staff." },
        { id: 3, title: "Ubereats", description: "Delivered food orders promptly and accurately, ensuring customer satisfaction. Managed time efficiently to meet delivery deadlines. Communicated effectively with customers and restaurant staff." },
    ];

    /*const toggleExpand = (id) => {
        setExpanded(prev =>
            prev.includes(id)
                ? prev.filter(expandedId => expandedId !== id)
                : [...prev, id]
        );
    };*/

    //scroll animation effect
    useEffect(() => {
        const tiles = document.querySelectorAll(".skill-header");
        const observer = new IntersectionObserver(
          entries =>
            entries.forEach(entry =>
              entry.target.classList.toggle("in-view", entry.isIntersecting)
            ),
          { threshold: 0.2 }
        );
  
        tiles.forEach(tile => observer.observe(tile));
        return () => observer.disconnect();
      }, []);

    const delayStep = 120;

    return (
        <div style={{ backgroundColor: 'hsl(240, 50%, 20%)', zIndex: '2', position: 'relative' }}>
            <section id="3_Skills"></section>
            <h1 style={{ paddingLeft: "20px", paddingTop: "90px", color: "white"}}>My Skills</h1>

            {/* begin skill cards */}
            
            <div className="skilltype-container">
                {/* prog languages */}
                <div className="skills-container" style={{transitionDelay: "200ms"}}>
                    {/*title for skill card*/}
                    <h3 style={{ color: "#85929e ", margin: "0"}}>Frameworks/Languages: </h3>
                    {/*break into next line*/}
                    <div style={{ flexBasis: "100%", height: "0"}}></div>
                    
                    {languages.map((language, index) => (
                        <div
                          key={language.id}
                          className="skill-header"
                          style={{ "--stagger-delay": `${index * delayStep}ms` }}
                        >    
                            <h3>{language.title}</h3>
                            <img src={language.image} alt="" height="20em" width="auto" style={{ verticalAlign: "middle" }} />
                            <div className="skill-tooltip" style={{left: "0%", transform: "translateX(0%)"}}>
                                <p>{language.description}</p>
                            </div>
                        </div>
                    ))}                    
                </div>
                {/* computer skills */}
                <div className="skills-container" style={{transition: "600ms"}}>
                    {/*title for skill card*/}
                    <h3 style={{ color: "#85929e ", margin: "0",}}>Computer Science Skills: </h3>
                    {/*break into next line*/}
                    <div style={{ flexBasis: "100%", height: "0" }}></div>
                    {compsciSkills.map((skill, index) => (
                        <div
                          key={skill.id}
                          className="skill-header"
                          style={{ "--stagger-delay": `${400 + index * delayStep}ms` }}
                        >
                            <h3>{skill.title}</h3>
                            <img src={skill.image} alt="" height="20em" width="auto" style={{ verticalAlign: "middle" }} />
                            <div className="skill-tooltip" style={{left: "50%", transform: "translateX(-50%)"}}>
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* soft skills/previous jobs */}
                <div className="skills-container" style={{animationDelay: "1000ms"}}>
                    {/*title for skill card*/}
                    <h3 style={{ color: "#85929e ", margin: "0"}}>Work Experience: </h3>
                    {/*break into next line*/}
                    <div style={{ flexBasis: "100%", height: "0" }}></div>
                    
                    {softSkills.map((softSkill, index) => (
                        <div
                          key={softSkill.id}
                          className="skill-header"
                          style={{ "--stagger-delay": `${800 + index * delayStep}ms` }}
                        >
                            <h3>{softSkill.title}</h3>
                            <img src={softSkill.image} alt="" height="20em" width="auto" style={{ verticalAlign: "middle" }} />
                            <div className="skill-tooltip" style={{left: "100%", transform: "translateX(-100%)"}}>
                                <p>{softSkill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;