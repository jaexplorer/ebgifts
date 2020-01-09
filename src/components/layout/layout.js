import React, { Fragment } from "react";
import Helmet from "react-helmet";
import "../../assets/scss/main/main.css";
import PropTypes from "prop-types";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
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
