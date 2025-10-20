import "./AboutStyles.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DownloadButton from "../components/DownloadButton";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-background">
        <div className="about-content">
          <div className="intro">
            <h3>Who I Am and What I Do</h3>
            <p>
              Hi, I’m <strong>Asya Seagrave</strong>, an enthusiastic and confident
              junior software developer currently pursuing a{" "}
              <strong>BSc in Computer Science (Data Science and AI)</strong> at the
              University of Dundee.
            </p>
            <p>
              Alongside my studies, I’ve been gaining hands-on experience through a
              summer placement at a retail startup, where I worked as part of a
              software development team using <strong>Django</strong>,{" "}
              <strong>Tailwind CSS</strong>, <strong>Docker</strong>, and{" "}
              <strong>GitLab</strong>. This experience deepened my understanding of
              agile workflows and team collaboration.
            </p>
            <p>
              My journey into the tech world began with <strong>Code First Girls</strong>.
              Building on that foundation, I joined the University of Dundee, where
              I’ve strengthened my technical skills in <strong>C++</strong>,{" "}
              <strong>Java</strong>, <strong>Git</strong>, and{" "}
              <strong>C</strong>. I’m passionate about creating
              user-focused solutions and thrive in collaborative development
              environments.
            </p>
            <p>
              I’m now looking to join a team as a <strong>junior software engineer</strong>{" "}
              to further develop my skill set and contribute to meaningful,
              real-world projects. You can view my CV by pressing the button below,
              and all my contact information is available both in it and via the contact
              section of this portfolio.
            </p>

            <div className="button-container">
              <DownloadButton file="/AsyaSeagraveCV.docx" text="Download CV" />
            </div>


          </div>

          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>HTML, CSS, JavaScript, Python, Java, C, C++</li>
              <li>React Native, React</li>
              <li>API Integration</li>
              <li>Git, GitHub, GitLab</li>
              <li>SQL, MySQL</li>
              <li>Visual Studio Code, Node.js</li>
            </ul>
          </div>

          <div className="education">
            <h3>Education</h3>
            <ul>
              <li>
                <strong>University of Dundee</strong>
                <p>Currently a second year student.</p>
              </li>
              <li>
                <strong>Code First Girls - +Masters course in Mobile App Development (2023)</strong>
                <p>Studying React and React Native for mobile application development.</p>
              </li>
              <li>
                <strong>Code First Girls - CFGdegree Bootcamp Software (2023)</strong>
                <p>Explored APIs, microservices, data structures, and more.</p>
              </li>
              <li>
                <strong>Code First Girls - Data & SQL Course (2022)</strong>
                <p>Acquired skills in SQL and data analysis, data visualization with Tableau.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;