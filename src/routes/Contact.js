import React from "react";
import Navbar from "../components/Navbar";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

import { ReactComponent as LinkedinIcon } from "../images/linkedin.svg";
import { ReactComponent as GitHubIcon } from "../images/github.svg";
import Footer from "../components/Footer";

import "./ContactStyles.css";

const handleEmailClick = () => {
  window.location.href = "mailto:asyaseagrave@gmail.com";
};

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="main-contact">
        
         <div className="contact-left">
          <h1 className="contact-heading">Get in touch</h1>
          {/* 
          <div className="contact-form">
            <Form onSubmit={handleOnSubmit}>
              <Form.Field
                id="form-input-control-name"
                control={Input}
                label="Name"
                name="user_name"
                placeholder="Name"
                required
              />
              <Form.Field
                id="form-input-control-email"
                control={Input}
                label="Email"
                name="user_email"
                placeholder="Email"
                required
              />
               <Form.Field
                id="form-input-control-subject"
                control={Input}
                label="Subject"
                name="subject"
                placeholder="Subject"
                required
              />
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                label="Message"
                name="user_message"
                placeholder="Message…"
                required
              />
              <Button className="submit-button">
                Send Message
              </Button>
            </Form>
          </div>
          */}
        </div>

        <div className="contact-right">
          <button className="get-in-touch-button" onClick={handleEmailClick}>
            E-mail: asyaseagrave@gmail.com
          </button>
          <p className="mobile">Mobile: 07770672445</p>

          <a
            href="https://www.linkedin.com/in/asya-seagrave/"
            className="contact-link"
          >
            <LinkedinIcon className="linkedin-icon" />
            My LinkedIn profile
          </a>
          <a href="https://github.com/asya-seag" className="contact-link">
            <GitHubIcon className="github-icon" />
            My GitHub page
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
