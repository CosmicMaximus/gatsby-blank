import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Fade, Reveal } from "react-reveal/";

const About = ({ frontPageData }) => {
  return (
    <section className="about_area" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 d-flex align-items-center">
            <Fade bottom cascade duration={1000}>
              <div className="about_content">
                <h2 className="t_color">{frontPageData.aboutTitle}</h2>
                <h6>{frontPageData.aboutSubtitle}</h6>
                <p>{frontPageData.aboutDescription}</p>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-86}
                  duration={500}
                  className="theme_btn active"
                >
                  Contact
                </ScrollLink>
                {/* <Link to="/" className="theme_btn">
                    Download CV
                  </Link> */}
              </div>
            </Fade>
          </div>
          <div className="col-lg-5">
            <div className="about_img">
              <Reveal effect="fadeInRight" duration={1500}>
                <img
                  src={frontPageData.aboutSectionPhoto.localFile.childImageSharp.original.src}
                  alt=""
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
