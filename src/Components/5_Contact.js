import React from "react";
import "../Styles/App.css";
import "../Styles/5_Contact.css";
import StarBorder from "./StarBorder";

function Contact() {
    return (
        <div style={{ backgroundColor: 'hsl(240, 50%, 20%)', zIndex: '1', position: 'relative', display: "flex", flexDirection: "column", alignItems: "center" }}>
            <section id="5_Contact"></section>
            <h1 style={{ paddingTop: "90px", color: "white", marginTop: 0 }}>Contact</h1>
            <StarBorder
            as="div"
            className="contact-screen"
            color="cyan"
            speed="5s"
            >
                <a style={{ color: "white" }} href="mailto:zilbert3dward@gmail.com">zilbert3dward@gmail.com</a>
                <a style={{ color: "white" }} href="tel:+18475337331">(847)533-7331</a>
                <a style={{ color: "white" }} href="https://www.instagram.com/ezilbert.06/">ezilbert.06</a>
            </StarBorder>
        </div>
    );
}

export default Contact;