import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Fade } from "react-reveal/";

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          wpPage(slug: { eq: "home" }) {
            frontpage {
              aboutDescription
              aboutSubtitle
              aboutTitle
              callToActionButtonText
              contactAddress
              contactEmail
              contactPhone
              copyrightText
              facebookUrl
              fieldGroupName
              instagramUrl
              linkedinUrl
              subtitle
              tagLine
              title
              calandlyUrl
              logoLight {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <section className="footer-area">
            <div className="container">
              <div className="footer-content">
                {/* <Link to="/" className="logo wow fadeInDown" data-wow-delay="0.4s"> */}
                <img
                  src={
                    data.wpPage.frontpage.logoLight.localFile.childImageSharp
                      .original.src
                  }
                  alt=""
                />
                {/* </Link> */}
                <Fade top cascade>
                  <ul className="list_style">
                    {data.wpPage.frontpage.facebookUrl && (
                      <li key="facebook">
                        <a
                          href={data.wpPage.frontpage.facebookUrl}
                          target={"_blank"}
                        >
                          <i className={"social_facebook"}></i>
                        </a>
                      </li>
                    )}
                    {data.wpPage.frontpage.instagramUrl && (
                      <li key="instagram">
                        <a
                          href={data.wpPage.frontpage.instagramUrl}
                          target={"_blank"}
                        >
                          <i className={"social_instagram"}></i>
                        </a>
                      </li>
                    )}
                    {data.wpPage.frontpage.linkedinUrl && (
                      <li key="linkedin">
                        <a
                          href={data.wpPage.frontpage.linkedinUrl}
                          target={"_blank"}
                        >
                          <i className={"social_linkedin"}></i>
                        </a>
                      </li>
                    )}
                  </ul>
                </Fade>
                <p className="legalPadding">
                  {data.wpPage.frontpage.copyrightText}
                </p>
              </div>
            </div>
          </section>
        );
      }}
    />
  );
};

export default Footer;
