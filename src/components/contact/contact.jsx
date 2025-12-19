import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "f566e764-c936-4604-8ea4-46b68407c6e8");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Network response not ok", response.status, text);
        setResult("Network error: " + response.status);
        return;
      }

      const data = await response.json();
      console.log("web3forms response", data);
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Submission error");
      }
    } catch (err) {
      console.error(err);
      setResult("Submission failed: " + err.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-section">
        <div className="contact-left">
          <div className="contact-title">
            <h2>Get in Touch</h2>
          </div>
          <h1>Let's Talk About Your Query</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nostrum
            nihil optio! Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <h4>phone</h4>
              <p>+91 8602858630</p>
            </div>
            <div className="contact-detail">
              <h4>email</h4>
              <p>aman@gmail.com</p>
            </div>
            <div className="contact-detail">
              <h4>address</h4>
              <p>India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">name</label>
          <input type="text" placeholder="enter you name" name="name" />
          <label htmlFor="">phone</label>
          <input type="number" placeholder="enter you phone" name="phone" />
          <label htmlFor="">email</label>
          <input type="email" placeholder="enter you email" name="email" />
          <label htmlFor="">write your message </label>
          <textarea
            name="message"
            placeholder="start typing your message"
            rows="8"
          ></textarea>
          <button type="submit" className="contactbtn" disabled={isSending}>
            {isSending ? "Sending..." : "Contact Now"}
          </button>
          {result && <p className="contact-result">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
