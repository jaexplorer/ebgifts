import React, { useState } from "react";
import ContactUsImg from "../../../assets/images/img-contact.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <div className="contact-us container">
      <img src={ContactUsImg} alt="" />
      <div className="contact-us-form">
        <h1>Send us a message</h1>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="hidden"
            name="subject"
            value={`${email} has sent a message from ebgifts.com.au`}
          />

          <div className="form-inputgroup">
            <div className="name-input">
              <label htmlFor="name-ip">Name</label>
              <span>*</span>
              <br />
              <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                id="name-ip"
                placeholder="Mark Stevens"
              />
            </div>
            <div className="email-input">
              <label htmlFor="mail-ip">Mail</label>
              <span>*</span>
              <br />
              <input
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                id="mail-ip"
                placeholder="mark@gmail.com"
              />
            </div>
          </div>
          <div className="form-messagefield">
            <label htmlFor="message-ip">What's on your mind?</label>
            <span>*</span>
            <br />
            <textarea
              id="message-ip"
              name="message"
              value={message}
              onChange={onChange}
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
