import React from "react";
import "./hero.css";
import heroimg from "../../assets/react.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const hero = () => {
  return (
    <div className="hero">
      <img src={heroimg} alt="hero-profile" />
      <h1>
        Hey, This Is Developer <span>Aman Sethiya.</span>
      </h1>
      <p>
        @WordPress Developer | @Full - Stack Developer | Freelance Web Developer
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
      <div className="btnhero">
        <div className="hero-connect">
          <AnchorLink className="AnchorLink" href="#contact">
            connect
          </AnchorLink>
        </div>
        <div className="hero-resume">resume</div>
      </div>
    </div>
  );
};

export default hero;
