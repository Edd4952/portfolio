import React from "react";
import "../Styles/App.css";
import "../Styles/5_Contact.css";

function Contact() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <section id="5_Contact"></section>
            <h1 style={{ paddingLeft: "20px", paddingTop: "90px", color: "white" }}>Contact me:</h1>
            <div className="contact-screen">
                <p style={{color: "white"}}>
                    <a style={{color: "white"}} href="mailto:zilbert3dward@gmail.com">zilbert3dward@gmail.com</a>
                    <text> Call me (847)533-7331</text>
                </p>
            </div>
        </div>
    );
}

export default Contact;