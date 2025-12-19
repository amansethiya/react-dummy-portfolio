import React, { use, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/react.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import mopen from "../../assets/mopen.png";
import mclose from "../../assets/mclose.png";

const Navbar = () => {
  const menuRef = useRef();

  const menuopen = () => {
    menuRef.current.style.right = "0";
  };
  const menuclose = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />
      <img src={mopen} alt="toggel btn" className="mopen" onClick={menuopen} />
      <ul className="nav-menu" ref={menuRef}>
        <img
          src={mclose}
          alt="toggel btn"
          className="mclose"
          onClick={menuclose}
        />
        <li>
          <AnchorLink className="AnchorLink" href="#">
            home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="AnchorLink" href="#about">
            about
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="AnchorLink" href="#services">
            services
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="AnchorLink" href="#work">
            work
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="AnchorLink" href="#contact">
            contact
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="AnchorLink" href="#contact">
          connect now
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
