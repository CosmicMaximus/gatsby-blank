import React, { Component } from "react";
import { Reveal } from "react-reveal/";
import WaterWave from "react-water-wave";

class Banner extends Component {
  render() {
    let maconData = this.props.maconData;
    let { bClass, textLeft, imgSrc } = this.props;
    return (
      <section id="home">
        {/* <div
          className={`banner_area ${bClass}`}
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            background: `url('${imgSrc}')`,
          }}
        > */}
        <WaterWave
          strength={500}
          perturbance={0.005}
          className={`banner_area ${bClass}`}
          style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
          imageUrl={imgSrc}
        >
          {({ getRootProps }) => (
            <div className="container">
              <div className={`banner_content ${textLeft}`}>
                <Reveal effect="fadeInUp">
                  <h5>{maconData.rippleBanner.welcomeMsg}</h5>
                </Reveal>
                <Reveal effect="fadeInUp" duration={1500}>
                  <h1 className="wow fadeInLeft animated">
                    {maconData.rippleBanner.welcomeName}
                  </h1>
                </Reveal>
                <Reveal effect="fadeInUp" duration={2200}>
                  <h4 className="wow fadeInUp anoimated">
                    {maconData.rippleBanner.welcomeDesc}
                  </h4>
                </Reveal>
                <Reveal effect="fadeInUp" duration={2200}>
                  <h4>
                    <a
                      href="https://calendly.com/cosmicpools/15min"
                      className="theme_btn bannerBtn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule Your Online Consultation
                    </a>
                  </h4>
                </Reveal>
                <ul className="list_style social_icon">
                  {maconData.socialLinks &&
                    maconData.socialLinks.map((item) => {
                      return (
                        <li key={item.name}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={item.className}></i>
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          )}
        </WaterWave>
        {/* </div> */}
      </section>
    );
  }
}

export default Banner;
