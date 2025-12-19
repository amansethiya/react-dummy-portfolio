import React from "react";
import "./work.css";
import mywork from "../../assets/my-work";

const work = () => {
  return (
    <div className="work" id="work">
      <div className="work-title">
        <h2>Work</h2>
      </div>
      <div className="mywork-cont">
        {mywork.map((workItem, index) => {
          return (
            <div className="workformat" key={index}>
              <img
                className="imagework"
                src={workItem.w_image}
                alt={workItem.w_name}
              />
              <h4>{workItem.w_name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default work;
