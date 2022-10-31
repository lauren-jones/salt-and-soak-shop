import React from "react";
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
 return (
    <footer className="footer-section">
      <h3>Portfolio Project</h3>
      <p>Coded by Lauren Jones, with React and Typescript. This project implements my UI component library, created with React and Storybook.</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/lauren-jones-3aa52751/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn }/></a>
        <a href="https://github.com/lauren-jones/salt-and-soak-shop" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubAlt} /></a>
        <a href="https://wondrous-cuchufli-16e0aa.netlify.app/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
      </div>
    </footer>
 )
};