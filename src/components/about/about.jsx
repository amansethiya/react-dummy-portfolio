import React from "react";
import "./about.css";
import abtimg from "../../assets/react.svg";

const about = () => {
  return (
    <div className="about" id="about">
      <div className="abt-title">
        <h1>About Me</h1>
      </div>
      <div className="abt-section">
        <div className="left-section">
          <img src={abtimg} alt="about img" />
        </div>
        <div className="right-section">
          <div className="about-para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            aliquam voluptatibus placeat consequuntur culpa sit quasi, tempora
            optio a, eius, ad cum eum iusto illo? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatem, assumenda?
          </div>
          <div className="progressbar">
            <div className="skill">
              <p>html</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="skill">
              <p>css</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="skill">
              <p>js</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="skill">
              <p>react</p> <hr style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="abt-achivement">
        <div className="achive">
          <h2>10+</h2>
          <p>years of experience</p>
        </div>
        <hr />
        <div className="achive">
          <h2>100+</h2>
          <p>projects completed</p>
        </div>
        <hr />
        <div className="achive">
          <h2>90% +</h2>
          <p>happy clients</p>
        </div>
      </div>
    </div>
  );
};

export default about;
