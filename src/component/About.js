import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Fade, Reveal } from "react-reveal/";

class About extends Component {
  render() {
    let maconData = this.props.maconData;
    var { aClass } = this.props;
    return (
      <section className={`${aClass}`} id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex align-items-center">
              <Fade bottom cascade duration={1000}>
                <div className="about_content">
                  <h2 className="t_color">{maconData.aboutMe.heading}</h2>
                  <h6>{maconData.role}</h6>
                  <p>{maconData.aboutMe.details}</p>
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
                    src={require("../images/" + maconData.aboutMe.img)}
                    alt=""
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
