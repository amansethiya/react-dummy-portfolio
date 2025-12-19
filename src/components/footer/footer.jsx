import React from "react";
import "./footer.css";
import logo from "../../assets/react.svg";

const footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="footer logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            officia quia dolore aliquam ipsam libero in ullam incidunt
            praesentium doloribus?
          </p>
        </div>
        <div className="footer-right">
          <p>subscribe to our newsletter</p>
          <div className="footer-email">
            <input type="text" placeholder="enter your email" />
            <button>subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        Copyright © AmanSethiya All Rights Reserved.
      </div>
    </div>
  );
};

export default footer;
