import React, { Component } from "react";
import Particles from "./Particles";
import { Reveal } from "react-reveal/";
import Typer from "./Typer";

class ParticlesBanner extends Component {
  render() {
    let maconData = this.props.maconData;
    return (
      <section id="home">
        <div className="banner_area_two">
          <div
            className="one_img"
            data-parallax='{"x": 0, "y": 100, "rotateZ":0}'
          >
            <img
              className="faa-spin animated"
              src={require("../../images/circle-2.png")}
              alt=""
            />
          </div>
          <Particles />
          <div className="container">
            <div className="banner_content">
              <Reveal effect="fadeInUp">
                <h2 className="wow fadeInLeft animated">
                  I'm {maconData.name2}
                </h2>
              </Reveal>
              <Reveal effect="fadeInUp" duration={1500}>
                <h3>{maconData.ptext}</h3>
              </Reveal>
              <Typer
                heading={"Specialized in"}
                dataText={[
                  "Developer.",
                  "Photographer.",
                  "Designing UI/UX.",
                  "Freelancer.",
                ]}
              />
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
        </div>
      </section>
    );
  }
}

export default ParticlesBanner;
