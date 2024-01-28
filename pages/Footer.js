import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconStyle = {
    marginRight: "5px",
    color: "#333",
    fontSize: "1rem"
  };

  const linkStyle = {
    marginRight: "15px",
    color: "#333",
    textDecoration: "none"
  };
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#f8f8f8",
        maxWidth: "600px",
        margin: "0 auto"
      }}>
      <div style={containerStyle}>
        <a
          href="https://twitter.com/wesleyytian"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}>
          <i className="fa fa-twitter" style={iconStyle}></i>
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/wesleytian/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}>
          <i className="fa fa-linkedin" style={iconStyle}></i>
          LinkedIn
        </a>
        {/* <a
          href="https://www.instagram.com/wesley.tian/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}>
          <i className="fa fa-instagram" style={iconStyle}></i>
          Instagram
        </a> */}
      </div>
      {/* <p>&copy; {currentYear} Wesley Tian. All rights reserved.</p> */}
    </footer>
  );
};

export default Footer;
