import React from "react";
import "../assets/scss/main/main.css";
import Layout from "../components/layout/layout";
import SEO from "../components/common/seo";

const ShopPage = () => {
  return (
    <Layout>
      <SEO title="Shop" />
      <h1>Shop</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default ShopPage;

// import React from "react";
// import { Link, graphql } from "gatsby";
// import Layout from "../components/layout";
// import SEO from "../components/seo";
// const BlogPosts = ({ data }) => {
//   const blogPosts = data.allContentfulBlogPost.edges;
//   return (
//     <Layout>
//       <SEO title="Blog posts" />
//       <h1>{"Here's a list of all blogposts!"}</h1>
//       <div className="blogposts">
//         {blogPosts.map(({ node: post }) => (
//           <div key={post.id}>
//             <Link to={`/blogpost/${post.slug}`}>{post.title}</Link>
//           </div>
//         ))}
//         <span className="mgBtm__24" />
//         <Link to="/">Go back to the homepage</Link>
//       </div>
//     </Layout>
//   );
// };
// export default BlogPosts;
// export const query = graphql`
//   query BlogPostsPageQuery {
//     allContentfulBlogPost(limit: 1000) {
//       edges {
//         node {
//           id
//           title
//           slug
//           body {
//             body
//           }
//           image {
//             file {
//               url
//             }
//           }
//           tags
//         }
//       }
//     }
//   }
// `;
