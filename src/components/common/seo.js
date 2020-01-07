import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

function SEO({ description, title, author }) {
  return (
    <Helmet>
      <title>EB Gifts | {title}</title>
      <html lang="en" />
      <meta name="description" content={description} />
      <meta name="siteUrl" content="https://ebgifts.com.au" />

      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
}

SEO.defaultProps = {
  title: "",
  description: `description test`,
  author: "Andrew",
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
