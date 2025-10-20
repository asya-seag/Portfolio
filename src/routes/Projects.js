import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactComponent as GitHubIcon } from "../images/github.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import project1 from "../images/cfgsoftware.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";
import project7 from "../images/project7.png";

import "./ProjectsStyles.css";

const Projects = () => {
  const projects = [
    {
      title: "Stock tracker APP",
      description:
        "This is a group project, I implemented user database with SQL Alchemy, user Login, Logout, Register functionality using HTML, CSS and Python, Flask session for user session management.",
      image: project1,
      githubLink: "https://github.com/Koko-66/stocks-group-5",
    },
    {
      title: "Gardening App",
      description:
        "I have created this small app as a learning platform for me to implement concepts we have covered during Mobile App development course, I used React Native and practiced connecting to API, structuring navigation, using hooks and Redux.",
      image: project2,
      githubLink: "https://github.com/asya-seag/HomeworkApp",
    },
    {
      title: "Cocktail App",
      description:
        "This is a group project for Mobile App development course, using React Native we created we added to our app Alcohol Units calculator, Login/Register functionality, search page with API connection and used hooks in a variety of page layouts.",
      image: project3,
      githubLink: "https://github.com/asya-seag/GroupProjectApp",
    },
    {
      title: "Portfolio",
      description:
        "I used React to build this portfolio, it is my independent project and I have tried to implement components that i have not implemented before - top navigation bar, carousel.",
      image: project4,
      githubLink: "https://github.com/asya-seag/MyPortfolio",
    },
    {
      title: "Learning",
      description:
        "As part of my proactive approach to learning, I've engaged in code-along projects where I follow expert instructors step-by-step. While these projects are guided, they've been invaluable in deepening my understanding of coding concepts, best practices, and real-world problem-solving.",
      image: project5,
      githubLink: "https://github.com/asya-seag/CSS_HTML_practice_project1",
    },
    {
      title: "WebMuddy Paws - Bootstrap practice website ",
      description:
        "This is a project I completed independently as part of my front-end development course, practicing implementation of basic and advanced elements using Bootstrap. Implementing this project allowed me to practice making responsive websites suitable for variety of screen sizes.",
      image: project6,
      githubLink: "https://github.com/asya-seag/website_Bootstrap",
    },
    {
      title: "McLaren- Bootstrap practice website ",
      description:
        "This is a team project for practicing implementation of basic and advanced elements using Bootstrap. Implementing this project allowed me to understand better how working with team on single repository works, practice branching in Git and it taught me the importance of conducting code reviews as a team. I completed Racing history F1 page and some basic layout features (Header & Footer).",
      image: project7,
      githubLink: "https://github.com/Naun-14/GroupJMcLarenF1",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="project-list">
        <h1>Projects</h1>
        <div className="carousel-div">
          <Carousel showArrows={true}>
            {projects.map((project, index) => (
              <div key={index}>
                <h2>{project.title}</h2>

                <p>{project.description}</p>
                <a href={project.githubLink} className="contact-link-p">
                  <GitHubIcon className="github-icon-p" />
                  Link for the project repository
                </a>
                <img src={project.image} className="projectImage" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
