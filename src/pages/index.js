import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/common/seo";
import Hero from "../components/layout/hero/Hero";
import WhoAmI from "../components/layout/home/WhoAmI";
import Collections from "../components/layout/home/Collections";
// import Testimonials from "../components/layout/home/Testimonials";
import DontHaveTime from "../components/layout/home/DontHaveTime";
import InstagramFeed from "../components/layout/home/InstagramFeed";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <WhoAmI />
      <Collections />
      <DontHaveTime />
      {/* <Testimonials /> */}
      <InstagramFeed />
    </Layout>
  );
};

export default IndexPage;
