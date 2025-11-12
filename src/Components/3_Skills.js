import React, { useState } from "react";
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
import { hslToRgb } from "@material-ui/core";



function Skills() {
    {/*const [setExpanded] = useState([]);*/}
    const javasdesc = "JavaScript is a versatile programming language used for web development, server-side scripting, and more.";
    const pythonDesc = "Python is a high-level, interpreted programming language known for its readability and versatility. ";
    const javaDesc = "Java is a widely-used object-oriented programming language. It is the first programming language I learned in highschool.";
    const reactdesc = "React is a JavaScript library for building user interfaces. I once heard it described as the 'language of the slaves' because it was developed by Facebook in 2013 to accomodate for new developers lack of understanding of JS libraries.";
    const cssdesc = "CSS is used to style and layout web pages. I have a solid understanding of CSS, and I used it to design this portfolio.";
    const cppdesc = "C++ is a powerful, high-performance programming language often used for system, software, and game development. I learned many basic and intermediate concepts in college, and continue to study it currently.";
    const csharpDesc = "C# is a modern, object-oriented programming language developed by Microsoft. I find that it is closest to java.";
    const vscodeDesc = "This is the most basic and widely used code editor by Microsoft. I used it to make this portfolio";
    const intellijdesc = "IntelliJ IDEA is an integrated development environment (IDE) for Java development. I used it in highschool to work on Java projects.";
    const unitydesc = "Unity is a cross-platform game engine used for developing video games and simulations. I learned many of the basics including C#.";
    const gameMakerDesc = "GameMaker Studio is a game development platform that allows users to create 2D games using its own scripting language, GML. I used it to make a 2D space shooter game in highschool.";
    const gmlDesc = "GameMaker Language (GML) is a high-level programming language used in GameMaker Studio for game development. I find that its like a mix of Java/C# and python.";

    const languages = [
        { id: 1, title: "Javascript", description: javasdesc, image: js },
        { id: 2, title: "React", description: reactdesc, image: react },
        { id: 3, title: "CSS", description: cssdesc, image: css },
        { id: 4, title: "C++", description: cppdesc, image: cpp },
        { id: 5, title: "C#", description: csharpDesc, image: csharp },
        { id: 6, title: "Python", description: pythonDesc, image: python },
        { id: 7, title: "Java", description: javaDesc, image: java },
        { id: 8, title: "GML", description: gmlDesc, image: gameMaker },
    ];
    const compsciSkills = [
        { id: 1, title: "VSCode", description: vscodeDesc, image: vsCode },
        { id: 2, title: "IntelliJ Idea", description: intellijdesc, image: intelliJ },
        { id: 3, title: "Unity", description: unitydesc, image: unity },
        { id: 4, title: "GameMaker Studio", description: gameMakerDesc, image: gameMaker },
    ];
    const softSkills = [
        { id: 1, title: "Communication", description: "Effective communication skills are essential for collaboration and teamwork." },
        { id: 2, title: "Problem Solving", description: "The ability to analyze problems and find effective solutions." },
        { id: 3, title: "Time Management", description: "Managing time efficiently to meet deadlines and priorities." },
    ];

    /*const toggleExpand = (id) => {
        setExpanded(prev =>
            prev.includes(id)
                ? prev.filter(expandedId => expandedId !== id)
                : [...prev, id]
        );
    };*/

    return (
        <div style={{ backgroundColor: 'hsl(240, 50%, 20%)' }}>
            <section id="3_Skills"></section>
            <h1 style={{ paddingLeft: "20px", paddingTop: "90px", color: "white" }}>My Skills</h1>

            {/* begin skill cards */}
            
            <div className="skilltype-container">
                {/* prog languages */}
                <div className="skills-container">
                    {/*title for skill card*/}
                    <h3 style={{ color: "#85929e ", margin: "0"}}>Frameworks/Languages: </h3>
                    {/*break into next line*/}
                    <div style={{ flexBasis: "100%", height: "0"}}></div>
                    
                    {languages.map((language) => (
                        <div key={language.id} className="skill-header">    
                            <h3>{language.title}</h3>
                            <img src={language.image} alt="" height="20em" width="auto" style={{ verticalAlign: "middle" }} />
                            <div className="skill-tooltip" style={{left: "0%", transform: "translateX(0%)"}}>
                                <p>{language.description}</p>
                            </div>
                        </div>
                    ))}                    
                </div>
                {/* computer skills */}
                <div className="skills-container">
                    {/*title for skill card*/}
                    <h3 style={{ color: "#85929e ", margin: "0",}}>Computer Science Skills: </h3>
                    {/*break into next line*/}
                    <div style={{ flexBasis: "100%", height: "0" }}></div>
                    {compsciSkills.map((skill) => (
                        <div key={skill.id} className="skill-header">
                            <h3>{skill.title}</h3>
                            <img src={skill.image} alt="" height="20em" width="auto" style={{ verticalAlign: "middle" }} />
                            <div className="skill-tooltip" style={{left: "50%", transform: "translateX(-50%)"}}>
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* soft skills */}
                <div className="skills-container">
                    {/*title for skill card*/}
                    <h3 style={{ color: "#85929e ", margin: "0"}}>Soft Skills: </h3>
                    {/*break into next line*/}
                    <div style={{ flexBasis: "100%", height: "0" }}></div>
                    
                    {softSkills.map((softSkill) => (
                        <div key={softSkill.id} className="skill-header">
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