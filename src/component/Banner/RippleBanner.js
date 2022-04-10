import React from "react";
import { Reveal } from "react-reveal/";
import WaterWave from "react-water-wave";

const Banner = ({ imgSrc, frontPageData }) => {
  return (
    <section id="home">
      <WaterWave
        strength={500}
        perturbance={0.005}
        className={`banner_area`}
        style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
        imageUrl={imgSrc}
      >
        {({ getRootProps }) => (
          <div className="container">
            <div className={`banner_content`}>
              <Reveal effect="fadeInUp">
                <h5>{frontPageData.tagLine}</h5>
              </Reveal>
              <Reveal effect="fadeInUp" duration={1500}>
                <h1 className="wow fadeInLeft animated">
                  {frontPageData.title}
                </h1>
              </Reveal>
              <Reveal effect="fadeInUp" duration={2200}>
                <h4 className="wow fadeInUp anoimated">
                  {frontPageData.subtitle}
                </h4>
              </Reveal>
              <Reveal effect="fadeInUp" duration={2200}>
                <h4>
                  <a
                    href={frontPageData.calandlyUrl}
                    className="theme_btn bannerBtn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {frontPageData.callToActionButtonText}
                  </a>
                </h4>
              </Reveal>
              <ul className="list_style social_icon">
                {frontPageData.facebookUrl && (
                  <li key="facebook">
                    <a
                      href={frontPageData.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="social_facebook"></i>
                    </a>
                  </li>
                )}
                {frontPageData.instagramUrl && (
                  <li key="instagram">
                    <a
                      href={frontPageData.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="social_instagram"></i>
                    </a>
                  </li>
                )}
                {frontPageData.linkedinUrl && (
                  <li key="linkedin">
                    <a
                      href={frontPageData.linkedinUrl}
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
};

export default Banner;
