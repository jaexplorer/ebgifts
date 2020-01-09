import React from "react";
import Layout from "../components/layout/layout";
import { Link } from "gatsby";
import SEO from "../components/common/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="fourOfour">
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <button>
          <Link to="/">Back Home</Link>
        </button>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
