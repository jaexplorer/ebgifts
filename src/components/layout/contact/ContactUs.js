import React from "react";
import ContactUsImg from "../../../assets/images/img-contact.jpg";

const ContactUs = () => {
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
          <div className="form-inputgroup">
            <div className="name-input">
              <label htmlFor="name-ip">
                Name<span>*</span>
              </label>
              <br />
              <input
                type="text"
                name="input-name"
                id="name-ip"
                placeholder="Mark Stevens"
              />
            </div>
            <div className="email-input">
              <label htmlFor="mail-ip">
                Mail<span>*</span>
              </label>
              <br />
              <input
                type="text"
                name="input-mail"
                id="mail-ip"
                placeholder="mark@gmail.com"
              />
            </div>
          </div>
          <div className="form-messagefield">
            <label htmlFor="text">
              What's on your mind?<span>*</span>
            </label>
            <br />
            <textarea placeholder="Write your message here..."></textarea>
          </div>
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
