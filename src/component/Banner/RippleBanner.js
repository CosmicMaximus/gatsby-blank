import React from "react";
import { Reveal } from "react-reveal/";
import WaterWave from "react-water-wave";
import { graphql, StaticQuery } from "gatsby";

const Banner = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          wpPage(slug: { eq: "home" }) {
            frontpage {
              callToActionButtonText
              facebookUrl
              instagramUrl
              linkedinUrl
              subtitle
              tagLine
              title
              calandlyUrl
            }
            featuredImage {
              node {
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
          <section id="home">
            <WaterWave
              strength={500}
              perturbance={0.005}
              className={`banner_area`}
              style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
              imageUrl={
                data.wpPage.featuredImage.node.localFile.childImageSharp
                  .original.src
              }
            >
              {({ getRootProps }) => (
                <div className="container">
                  <div className={`banner_content`}>
                    <Reveal effect="fadeInUp">
                      <h5>{data.wpPage.frontpage.tagLine}</h5>
                    </Reveal>
                    <Reveal effect="fadeInUp" duration={1500}>
                      <h1 className="wow fadeInLeft animated">
                        {data.wpPage.frontpage.title}
                      </h1>
                    </Reveal>
                    <Reveal effect="fadeInUp" duration={2200}>
                      <h4 className="wow fadeInUp anoimated">
                        {data.wpPage.frontpage.subtitle}
                      </h4>
                    </Reveal>
                    <Reveal effect="fadeInUp" duration={2200}>
                      <h4>
                        <a
                          href={data.wpPage.frontpage.calandlyUrl}
                          className="theme_btn bannerBtn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.wpPage.frontpage.callToActionButtonText}
                        </a>
                      </h4>
                    </Reveal>
                    <ul className="list_style social_icon">
                      {data.wpPage.frontpage.facebookUrl && (
                        <li key="facebook">
                          <a
                            href={data.wpPage.frontpage.facebookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="social_facebook"></i>
                          </a>
                        </li>
                      )}
                      {data.wpPage.frontpage.instagramUrl && (
                        <li key="instagram">
                          <a
                            href={data.wpPage.frontpage.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="social_instagram"></i>
                          </a>
                        </li>
                      )}
                      {data.wpPage.frontpage.linkedinUrl && (
                        <li key="linkedin">
                          <a
                            href={data.wpPage.frontpage.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="social_linkedin"></i>
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </WaterWave>
          </section>
        );
      }}
    />
  );
};
export default Banner;
