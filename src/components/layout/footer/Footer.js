import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "../../../assets/images/logo.png";
import FacebookIcon from "../../../assets/images/facebook-black.png";
import InstagramIcon from "../../../assets/images/instagram-black.png";
import addToMailchimp from "gatsby-plugin-mailchimp";

const Footer = () => {
  const [email, setEmail] = useState("");

  const onChange = e => setEmail(e.currentTarget.value);

  const onSubmit = async e => {
    e.preventDefault();
    const res = await addToMailchimp(email);
    console.log(res);
    // result: string; // either `success` or `error` (helpful to use this key to update your state)
    // msg: string; // a user-friendly message indicating details of your submissions (usually something like "thanks for subscribing!" or "this email has already been added")
  };

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-links">
          <div className="links">
            <div className="links-col">
              <h3>About</h3>
              <ul>
                <li>
                  <Link aria-label="About me" to="/about">
                    About us
                  </Link>
                </li>
                <li>
                  <Link aria-label="My Instagram" to="/work">
                    Our Work
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links-col">
              <h3>Customer Services</h3>
              <ul>
                <li>
                  <Link aria-label="Contact Page" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link aria-label="Frequently Asked Questions Page" to="/faq">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links-col">
              <h3>Store</h3>
              <ul>
                <li>
                  <Link aria-label="Shopping Page" to="/shop">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link aria-label="Admin Page" to="/admin">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="links-social">
            <span>CONNECT WITH US: </span>
            <span>
              <img src={FacebookIcon} alt="" />
            </span>
            <span>
              <img src={InstagramIcon} alt="" />
            </span>
          </div>
        </div>
        <div className="footer-newsletter">
          <div className="form-new">
            <h1>Newsletter</h1>
            <p>
              Sign up for our mailing list to get lastest <br />
              updates and offers
            </p>
            <label type="hidden" htmlFor="email-ip">
              Email Here
            </label>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                id="email-ip"
                name="email"
                onChange={onChange}
                placeholder="Your mail here"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="footer-copywrite">
            Copyright © {new Date().getFullYear()} by EBGifts
          </div>
          <div className="footer-email">
            <span>E: </span>ebgiftservices@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
