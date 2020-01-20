import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const ContactUs = () => {
  const data = useStaticQuery(graphql`
    query {
      ContactUsImg: file(relativePath: { eq: "img-contact.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <div className="contact-us container">
      <div data-aos="fade-right" className="contact-us-img">
        <Img fluid={data.ContactUsImg.childImageSharp.fluid} />
      </div>
      <div data-aos="fade-left" className="contact-us-form">
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
              <label htmlFor="mail-ip">Email</label>
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
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
