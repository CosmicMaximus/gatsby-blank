import React from "react";
import NavbarSubpage from "../component/Navbar/NavbarSubpage";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import maconData from "../assets/maconData";
// import TermsSection from "./component/TermsSection";
import { graphql, Link } from "gatsby";
import { Fade } from "react-reveal/";

const Page = ({ data }) => {
  const page = data.allWpPage.nodes[0];
  return (
    <div className="body_wrapper">
      <NavbarSubpage
        mContainer="custome_container"
        mainlogo={maconData.logoWhite}
        stickylogo={maconData.logoBlack}
      />

      <section className="about_area" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center">
              <Fade bottom cascade duration={1000}>
                <div
                  className="about_content"
                  style={{ textAlign: "center", margin: "auto" }}
                >
                  <h2 className="t_color" style={{ textAlign: "center" }}>
                    {page.title}
                  </h2>

                  <div dangerouslySetInnerHTML={{ __html: page.content }} />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* <div dangerouslySetInnerHTML={{ __html: page.content }} /> */}

      <Contact maconData={maconData} />
      <Footer maconData={maconData} />
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
