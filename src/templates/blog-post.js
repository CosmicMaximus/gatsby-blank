import React from "react";
// import Layout from "../components/layout"
import { graphql, Link } from "gatsby";

const BlogPost = ({ data }) => {
  const post = data.allWpPost.nodes[0];
  return (
    <div>
      <Link to={"/"}>
        <p>Home</p>
      </Link>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;

export const query = graphql`
  query ($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
      }
    }
  }
`;
