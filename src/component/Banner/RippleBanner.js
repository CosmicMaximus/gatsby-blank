import React from "react";
import { Reveal } from "react-reveal/";
import WaterWave from "react-water-wave";
import { graphql, StaticQuery } from "gatsby";
import axios from "axios";
import { Buffer } from "buffer";

import { useSpring, animated, easings } from "react-spring";

const Banner = () => {
  const [styles, api] = useSpring(() => ({
    to: {
      backgroundColor: "#000",
      position: "absolute",
      width: "100vw",
      height: "100vh",
      zIndex: 0,
      opacity: 1,
    },
  }));

  const urlContentToDataUri = (url) => {
    return fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((callback) => {
            let reader = new FileReader();
            reader.onload = function () {
              callback(this.result);
            };
            reader.readAsDataURL(blob);
          })
      );
  };

  const getBase64 = async (url) => {
    const decoded = await urlContentToDataUri(
      window.location.href.slice(0, -1) + url
    );

    setImgData(decoded);
    // console.log(decoded)
    api.start({
      to: {
        backgroundColor: "#000",
        position: "absolute",
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        opacity: 0,
      },
      delay: 100,
      config: { duration: 1000, easing: easings.easeOutQuart },
    });
  };

  const [imgData, setImgData] = React.useState(undefined);

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
        getBase64(
          data.wpPage.featuredImage.node.localFile.childImageSharp.original.src
        );

        return (
          <section id="home">
            <WaterWave
              strength={500}
              perturbance={0.005}
              className={`banner_area_loaded`}
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
              }}
              imageUrl={
                // data.wpPage.featuredImage.node.localFile.childImageSharp
                //   .original.src
                // "data:image/png;base64," + imgData
                imgData
              }
            >
              {({ getRootProps }) => (
                <>
                  <div className="container" style={{ zIndex: 1 }}>
                    <div className={`banner_content`}>
                      <Reveal effect="fadeInUp">
                        <h5>{data.wpPage.frontpage.tagLine}</h5>
                      </Reveal>
                      <Reveal effect="fadeInUp" duration={1500}>
                        <h1 className="wow fadeInUp animated">
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
                  <animated.div className="blocker" style={styles} />
                </>
              )}
            </WaterWave>
          </section>
        );
      }}
    />
  );
};
export default Banner;
