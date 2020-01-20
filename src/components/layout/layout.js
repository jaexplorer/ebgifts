import React, { useEffect, Fragment } from "react";
import Helmet from "react-helmet";
import "../../assets/scss/main/main.css";
import PropTypes from "prop-types";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Abril+Fatface"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
