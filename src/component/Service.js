import React, { Component } from "react";
import Sectiontitle from "./Banner/Sectiontitle";
import { Fade } from "react-reveal/";

class Service extends Component {
  render() {
    let maconData = this.props.maconData;
    var { wClass } = this.props;
    return (
      <section className={`${wClass}`} id="service">
        <div className="container">
          <Sectiontitle
            Title="What We Do"
            TitleP="We love what we do. We take great pride in the service we provide."
          />
          <Fade bottom cascade duration={1000}>
            <div className="row">
              {maconData.service &&
                maconData.service.map((item) => {
                  return (
                    <div className="col-lg-4 col-sm-6" key={item.id}>
                      <div
                        className="work_item wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <i className={item.iconName}></i>
                        {/* <a href=".#"> */}
                        <h2 className="t_color">{item.serviceTitle}</h2>
                        {/* </a> */}
                        <p>{item.sDetails}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Service;
