import React from "react";
import "../assets/scss/main/main.css";
// import { Link } from "gatsby"
import Layout from "../components/layout/layout";
import SEO from "../components/common/seo";
import PageBanner from "../components/layout/hero/PageBanner";
import ContactBG from "../assets/images/BG-title-v3.jpg";
import ContactInfo from "../components/layout/contact/ContactInfo";
import ContactUs from "../components/layout/contact/ContactUs";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageBanner
      title={"Contact Us"}
      subtext={`It is a long established fact that a reader will
be distracted by the readable content of a page when looking at its layout`}
      backgroundImg={ContactBG}
    />
    <ContactInfo />
    <ContactUs />
  </Layout>
);

export default ContactPage;
