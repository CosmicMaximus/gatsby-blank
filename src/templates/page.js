import React from "react";
import NavbarSubpage from "../component/Navbar/NavbarSubpage";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import { graphql } from "gatsby";
import { Fade } from "react-reveal/";

const Page = ({ data }) => {
  const page = data.allWpPage.nodes[0];
  return (
    <div className="body_wrapper">
      <NavbarSubpage />

      <section id="pageContent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center">
              <Fade bottom cascade duration={1000}>
                <div
                  className="about_content"
                  style={{
                    textAlign: "center",
                    margin: "auto",
                    paddingBottom: 0,
                  }}
                >
                  <h2
                    className="t_color"
                    style={{ textAlign: "center", marginBottom: 100 }}
                  >
                    {page.title}
                  </h2>

                  <div dangerouslySetInnerHTML={{ __html: page.content }} />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
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
