import React from "react";
import "../assets/scss/main/main.css";
import Layout from "../components/layout/layout";
import SEO from "../components/common/seo";
import PageBanner from "../components/layout/hero/PageBanner";
import AboutBG from "../assets/images/BG-title-v3.jpg";
import Intro from "../components/layout/about/Intro";
import Services from "../components/layout/about/Services";

import SeeMore from "../components/layout/about/SeeMore";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageBanner
      title={"About Us"}
      subtext={`It is a long established fact that a reader will
be distracted by the readable content of a page when looking at its layout`}
      backgroundImg={AboutBG}
    />
    <Intro />
    <Services />
    <SeeMore />
  </Layout>
);

export default AboutPage;
