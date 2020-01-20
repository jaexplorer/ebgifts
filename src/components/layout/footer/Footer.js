import React, { Fragment, useState } from "react";
import { Link } from "gatsby";
import Logo from "../../../assets/images/logo.png";
import FacebookIcon from "../../../assets/images/facebook-black.png";
import InstagramIcon from "../../../assets/images/instagram-black.png";
import addToMailchimp from "gatsby-plugin-mailchimp";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submission, setSubmission] = useState(false);

  const onChange = e => setEmail(e.currentTarget.value);

  const onSubmit = async e => {
    e.preventDefault();
    const res = await addToMailchimp(email);
    setEmail("");
    setSubmission(res);
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
                  <a
                    aria-label="My Instagram"
                    href="https://www.instagram.com/eb.gifts/"
                  >
                    Our Work
                  </a>
                </li>
              </ul>
            </div>
            <div className="links-col">
              <h3>Services</h3>
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
              <a
                aria-label="My Facebook"
                href="https://www.facebook.com/EBgifts/"
              >
                <img src={FacebookIcon} alt="" />
              </a>
            </span>
            <span>
              <a
                aria-label="My Instagram"
                href="https://www.instagram.com/eb.gifts/"
              >
                <img src={InstagramIcon} alt="" />
              </a>
            </span>
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="form-new">
            {submission ? (
              <div className="submission-container">
                <h1>{submission.result}</h1>
                <p>{submission.msg.split("<a hr")[0]}</p>
                <button onClick={() => setSubmission(false)}>Back</button>
              </div>
            ) : (
              <Fragment>
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
                    value={email}
                    onChange={onChange}
                    placeholder="Your mail here"
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </Fragment>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
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
