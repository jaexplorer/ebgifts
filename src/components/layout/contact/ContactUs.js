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
          data-netlify-recaptcha="true"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="hidden"
            name="subject"
            value="Recieved a message from ebgifts.com.au"
          />

          <div className="form-inputgroup">
            <div className="name-input">
              <label htmlFor="name-ip">Name</label>
              <span>*</span>
              <br />
              <input
                type="text"
                name="name"
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
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button type="submit">Send message</button>
          <div data-netlify-recaptcha="true"></div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
