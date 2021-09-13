import React, { useState } from "react";
import TextArea from "./TextArea";
import Aos from 'aos';
import "aos/dist/aos.css";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="contact">
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Connect with me!</h1>
            </div>
          <div className="horizontal">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div className="horizontal">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="horizontal">
            <label htmlFor="message">Message:</label>
            <TextArea />
          </div>
          <div className="horizontal"><button type="submit">{status}</button></div>
        </form>
    </div>
  );
};

export default ContactForm;