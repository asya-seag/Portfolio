import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import photo from "../images/photo2.jpg";
import MyButton from "../components/MyButton";

import "./HomeStyles.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="backgroundContainer">
        <img src={photo} className="backgroundImage" />
        <div className="content">
          <div className="intro">
            <h1>Hello, I’m Asya Seagrave.</h1>
            <p>Junior Developer and a Second Year Student at the University of Dundee</p>

            <MyButton to="/projects" text="View My Projects" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
