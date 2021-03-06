import React, { Component } from "react";
import { Parallax } from "react-parallax";
import { Reveal } from "react-reveal/";
import Typer from "./Typer";

class TypeBanner extends Component {
  render() {
    let maconData = this.props.maconData;
    return (
      <section id="home">
        <Parallax
          bgImage={require("../../images/intro-bg.jpg")}
          strength={0}
          className="banner_area"
        >
          <div className="container">
            <div className="banner_content">
              <Reveal effect="fadeInUp">
                <h5 className="wow fadeInUp animated">HELLO</h5>
              </Reveal>
              <Reveal effect="fadeInUp" duration={1500}>
                <h2 className="wow fadeInLeft animated">{maconData.name2}</h2>
              </Reveal>
              <Reveal effect="fadeInUp" duration={2000}>
                {" "}
                <Typer
                  heading={"I am a"}
                  dataText={[
                    "Web Developer",
                    "Photographer",
                    "UI/UX Designer",
                    "Freelancer",
                  ]}
                />
              </Reveal>
              <ul className="list_style social_icon">
                {maconData.socialLinks &&
                  maconData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url}>
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </Parallax>
      </section>
    );
  }
}

export default TypeBanner;
