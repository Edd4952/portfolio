import React from "react";
import "../Styles/App.css";
import Header from "../Components/1_Header.js";
import Intro from "../Components/2_Intro.js";
import Skills from "../Components/3_Skills.js";
import Projects from "../Components/4_Projects.js";
import Contact from "../Components/5_Contact.js";

/*links look like this <Link to="/movies">Resume</Link>*/

function Home(){
  return (
    <div>
      <Header/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default Home;