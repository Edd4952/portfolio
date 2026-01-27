import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css";
import "../Styles/4_Projects.css";
import spacepreview from "../Assets/spaceshipgame-preview.png"; 
import portalpreview from "../Assets/portalvidthumbnail.png";
import aquaopt from "../Assets/aquaschedule options.png";
import aquasched from "../Assets/aquascheduleschedule.png"
import box from "../Assets/boxingscreenshot.png";

function Projects() {

    const portaldesc = "I made this video in about four weeks for an AP physics project. I worked on it almost every day until it was finished, and even then I went back, revised, and improved the content about seven times, making this the eighth and final iteration. It was presented to my class on June 2nd, 2023.";
    const projects = [{
            id: 1,
            title: "Science Project: Video based on the Portal games",
            description: portaldesc,
            link: (
                <Link style={{color: "white"}} to="https://drive.google.com/file/d/1x0MXnmTKzz1VX35BpCfX2drqyYO5CX6v/view?usp=drive_link">
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
            media: [
                { type: "video", src: "https://www.youtube.com/embed/fARW0NJEjhk?si=EGQQozngQ0VJj8qG" },
                { type: "image", src: portalpreview }
            ]
        },
        {
            id: 2,
            title: "Gamemaker Project: Spaceship Game",
            description: "A 2d game made from scratch with complete movement, collision detection, enemy AI, and basic game logic.",
            link: (
                <Link style={{color: "white"}} to="https://gx.games/games/hmg0tx/2001-spaceship/tracks/193361a8-bcc2-4e89-b95d-40e97a322f8b/">
                    Check it out on GX.games
                </Link>
            ),
            tools: [
                "Gamemaker Studio",
                "GML code",
                "Sprite Maker"
            ],
            media: [
                { type: "image", src: spacepreview }
            ]
        },
        {
            id: 3,
            title: "AquaSchedule",
            description: "A react-expo application for creating and managing two-week schedules for my part-time job at Aquaguard",
            link: (
                <div>
                    <Link style={{color: "white"}} to="https://expo.dev/accounts/edd4952/projects/aquaschedule">
                        Check it out on Expo
                    </Link>
                    <br />
                    <a
                        href="/AquaSchedulefeatures.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: "white"}}
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
            media: [
                { type: "image", src: aquaopt },
                { type: "image", src: aquasched }
            ]
        },
        {
            id: 4,
            title: "BoxingGroupchat",
            description: "A react-expo webapp that hosts a groupchat for boxers to connect, share, and arrange sparring sessions. I learned to use Supabase for backend database management.",
            link: (
                <div>
                    <Link style={{color: "white"}} to="https://boxinggroupchat.vercel.app/">
                        Go to the groupchat
                    </Link>
                    <br />
                    <Link style={{color: "white"}} to="https://expo.dev/accounts/edd4952/projects/boxinggroupchat">
                        Check it out on Expo
                    </Link>
                    <br />
                    <a
                        href="/BoxingGroupchatFeatures.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        
                    </a>
                </div>
            ),
            tools: [
                "React-Expo",
                "TypeScript",
                "CSS",
                "Supabase",
            ],
            media: [
                { type: "image", src: box }
            ]
        }
    ];

    const [activeMediaIndex, setActiveMediaIndex] = useState(() =>
        projects.reduce((acc, project) => {
            acc[project.id] = 0;
            return acc;
        }, {})
    );

    const setIndexForProject = (projectId, nextIndex, total) => {
        const maxSlides = Math.max(total, 1);
        setActiveMediaIndex(prev => ({
            ...prev,
            [projectId]: ((nextIndex % maxSlides) + maxSlides) % maxSlides
        }));
    };

    const handleNext = (projectId, total) => {
        setIndexForProject(projectId, (activeMediaIndex[projectId] ?? 0) + 1, total);
    };

    const handlePrev = (projectId, total) => {
        setIndexForProject(projectId, (activeMediaIndex[projectId] ?? 0) - 1, total);
    };

    return (
        <div style={{ backgroundColor: 'hsl(240, 50%, 20%)', zIndex: '1', position: 'relative' }}>
            <section id="4_Projects"></section>
            <h1 style={{ paddingLeft: "20px", paddingTop: "90px", color: "white", marginTop: 0 }}>My Projects</h1>
            <div className="projects-container">{
                projects.map(project => (
                    <div key={project.id} className="project-box">
                        <div className="project-overview">
                            {/* All the info for the project */}
                            <h3 className="project-title">{project.title}</h3>
                            <p>{project.description}</p>
                            <p>{project.link}</p>
                            <div className="tool-container">
                                {project.tools.map((tool, idx) => (
                                    <div key={idx} className="tool">{tool}</div>
                                ))}
                            </div>
                        </div>
                        {/* Project preview carousel */}
                        <div className="preview-window">
                            {project.media.map((mediaItem, mediaIdx) => (
                                <div
                                    key={`${project.id}-${mediaIdx}`}
                                    className={`preview-slide ${mediaIdx === (activeMediaIndex[project.id] ?? 0) ? "is-active" : ""}`}
                                >
                                    {mediaItem.type === "video" ? (
                                        <iframe
                                            src={mediaItem.src}
                                            title={`${project.title} preview ${mediaIdx + 1}`}
                                            className="preview-media"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <img
                                            src={mediaItem.src}
                                            alt={`${project.title} preview ${mediaIdx + 1}`}
                                            className="preview-media"
                                        />
                                    )}
                                </div>
                            ))}

                            {project.media.length > 1 && (
                                <>
                                    <button
                                        className="preview-nav preview-nav--prev"
                                        onClick={() => handlePrev(project.id, project.media.length)}
                                        aria-label="Previous preview"
                                    >
                                        &#10094;
                                    </button>
                                    <button
                                        className="preview-nav preview-nav--next"
                                        onClick={() => handleNext(project.id, project.media.length)}
                                        aria-label="Next preview"
                                    >
                                        &#10095;
                                    </button>
                                    <div className="preview-dots">
                                        {project.media.map((_, dotIdx) => (
                                            <button
                                                key={`dot-${project.id}-${dotIdx}`}
                                                className={`preview-dot ${dotIdx === (activeMediaIndex[project.id] ?? 0) ? "is-active" : ""}`}
                                                onClick={() => setIndexForProject(project.id, dotIdx, project.media.length)}
                                                aria-label={`Show preview ${dotIdx + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;