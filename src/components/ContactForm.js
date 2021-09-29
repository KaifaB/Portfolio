import React, { useState } from "react";
import TextArea from "./TextArea";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending..");
    emailjs.sendForm('service_gwx3dm8', 'template_jazn9gy', e.target, 'user_gZmqAGCe7d1TGImyQrhqL'
    ).then(res=>{
      setStatus("Sent!");

      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("message").value="";

      document.getElementById()
      
    }).catch (err=> console.log(err))
  };

  return (
    <div className="contact">
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Connect with me!</h1>
            </div>
          <div className="horizontal">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="horizontal">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="horizontal">
            <label htmlFor="message">Message:</label>
            <TextArea />
          </div>
          <div className="horizontal"><button type="submit" value="send" id="submit">{status}</button></div>
        </form>
    </div>
  );
};

export default ContactForm;