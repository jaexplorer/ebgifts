import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.documentElement.scrollTop > 50
        ? setAtTop(false)
        : setAtTop(true);
    });
  });

  return (
    <header className={`navbar ${!atTop && "transition"}`}>
      <div className="nav-top">
        <ul className="nav-contact">
          <li>
            <span>P: </span>0433 891 097
          </li>
          <li>
            <span>E: </span>ebgiftservices@gmail.com
          </li>
        </ul>
      </div>
      <div className="nav-bottom">
        <ul className="nav-links">
          <li className="nav-item">
            <Link aria-label="Home" to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              aria-label="Shopping Page"
              to="/shop"
              activeClassName="active"
            >
              Shop
            </Link>
          </li>
        </ul>
        <div className="nav-logo">
          <Link aria-label="Home Page" to="/" activeClassName="active">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <Link aria-label="About Page" to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              aria-label="Contact Page"
              to="/contact"
              activeClassName="active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
