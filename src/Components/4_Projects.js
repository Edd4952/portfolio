import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css";
import "../Styles/4_Projects.css";
import spacepreview from "../Assets/spaceshipgame-preview.png"; 
import portalpreview from "../Assets/portalvidthumbnail.png";
import aquaopt from "../Assets/aquaschedule options.png";
import aquasched from "../Assets/aquascheduleschedule.png"

function Projects() {

    const portaldesc = "I made this video in about four weeks for an AP physics project. I worked on it almost every day until it was finished, and even then I went back, revised, and improved the content about seven times, making this the eighth and final iteration. It was presented to my class on June 2nd, 2023.";
    const projects = [{
            id: 1,
            title: "Science Project: Video based on the Portal games",
            description: portaldesc,
            link: (
                <Link to="https://drive.google.com/file/d/1x0MXnmTKzz1VX35BpCfX2drqyYO5CX6v/view?usp=drive_link">
                    Watch or download my video
                </Link>
            ),
            tools: [
                "Adobe Premier Pro",
                "Photoshop",
                "After Effects",
                "Elevenlabs",
                "Audacity"
            ],
            images: [portalpreview],
            videoEmbedUrl: "https://www.youtube.com/embed/fARW0NJEjhk?si=EGQQozngQ0VJj8qG"
        },
        {
            id: 2,
            title: "Gamemaker Project: Spaceship Game",
            description: "A 2d game made from scratch with complete movement, collision detection, enemy AI, and basic game logic.",
            link: (
                <Link to="https://gx.games/games/hmg0tx/2001-spaceship/tracks/193361a8-bcc2-4e89-b95d-40e97a322f8b/">
                    Check it out on GX.games
                </Link>
            ),
            tools: [
                "Gamemaker Studio",
                "GML code",
                "Sprite Maker"
            ],
            images: [spacepreview]
        },
        {
            id: 3,
            title: "AquaSchedule",
            description: "A react-expo application for creating and managing two-week schedules for my part-time job at Aquaguard",
            link: (
                <div>
                    <Link to="https://expo.dev/accounts/edd4952/projects/aquaschedule">
                        Check it out on Expo
                    </Link>
                    <br />
                    <a
                        href="/AquaSchedulefeatures.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View AquaSchedule Presentation (PDF)
                    </a>
                </div>
            ),
            tools: [
                "React-Expo",
                "TypeScript",
                "CSS"
            ],
            images: [aquaopt, aquasched]
        }
    ];
    
    return (
        <div>
            <section id="4_Projects"></section>
            <h1 style={{ paddingLeft: "20px", paddingTop: "90px", color: "white" }}>My Projects</h1>
            <div className="projects-container">{
                projects.map(project => (
                    <div key={project.id} className="project-box">
                        <div className="project-overview">
                            {/* All the info for the project */}
                            <h3 style={{ fontSize: "1.5em" }}>{project.title}</h3>
                            <p>{project.description}</p>
                            {project.link}
                            <div className="tool-container">
                                {project.tools.map((tool, idx) => (
                                    <div key={idx} className="tool">{tool}</div>
                                ))}
                            </div>
                        </div>
                        {/* Project preview, an image or video */}
                        <div className="project-preview">
                            {project.videoEmbedUrl ? (
                                <iframe
                                    src={project.videoEmbedUrl}
                                    title={project.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    style={{ width: "356px", height: "200px", verticalAlign: "middle", marginRight: "1vw" }}
                                />
                            ) : project.images && project.images.length > 0 ? (
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                    {project.images.map((src, idx) => (
                                        <img
                                            key={idx}
                                            src={src}
                                            alt=""
                                            style={{
                                                height: project.id === 3 ? "300px" : "200px",
                                                width: "auto",
                                                verticalAlign: "middle",
                                                marginRight: "1vw"
                                            }}
                                        />
                                    ))}
                                </div>
                            ) : project.images ? ( // legacy fallback if some entries still use `image`
                                <img src={project.images} alt="" height="200em" width="auto" style={{ verticalAlign: "middle", marginRight: "1vw" }} />
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;