import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Fade, Reveal } from 'react-reveal/';
import { graphql, StaticQuery } from 'gatsby';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        wpPage(slug: { eq: "home" }) {
          frontpage {
            aboutTitle
            aboutSubtitle
            aboutDescription
            aboutSectionPhoto {
              sourceUrl
            }
          }
        }
      }
    `}
    render={(data) => {
      return (
        <section className="about_area" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 d-flex align-items-center">
                <Fade bottom cascade duration={1000}>
                  <div className="about_content">
                    <h2 className="t_color">
                      {data.wpPage.frontpage.aboutTitle}
                    </h2>
                    <h6>{data.wpPage.frontpage.aboutSubtitle}</h6>
                    <p>{data.wpPage.frontpage.aboutDescription}</p>
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
                  </div>
                </Fade>
              </div>
              <div className="col-lg-5">
                <div className="about_img">
                  <Reveal effect="fadeInRight" duration={1500}>
                    <img
                      src={
                        data?.wpPage?.frontpage?.aboutSectionPhoto?.sourceUrl
                      }
                      alt=""
                    />
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }}
  />
);

export default About;
