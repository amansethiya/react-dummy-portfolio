import React from "react";
import "./services.css";
import servicedata from "../../assets/service-data";

const Service = () => {
  return (
    <div className="services" id="services">
      <div className="service-title">
        <h2>Services</h2>
      </div>
      <div className="service-cont">
        {servicedata.map((service, index) => {
          return (
            <div key={index} className="service-format">
              <h5>{service.s_id}</h5>
              <h2>{service.s_name}</h2>
              <h4>{service.s_desc}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
