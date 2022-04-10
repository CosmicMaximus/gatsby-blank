import React from "react";
// import Layout from "../components/layout"
import { graphql, Link } from "gatsby";

const Page = ({ data }) => {
  const page = data.allWpPage.nodes[0];
  return (
    <div>
      <Link to={"/"}>
        <p>Home</p>
      </Link>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
};

export default Page;

export const query = graphql`
  query ($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
      }
    }
  }
`;
