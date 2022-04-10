import React, { Component } from "react";
import { Fade } from "react-reveal/";

class NotFoundSection extends Component {
  render() {
    let maconData = this.props.maconData;
    var { aClass } = this.props;
    return (
      <section className={`${aClass}`} id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center">
              <Fade bottom cascade duration={1000}>
                <div
                  className="about_content"
                  style={{ textAlign: "center", margin: "auto" }}
                >
                  <h2 className="t_color" style={{ textAlign: "center" }}>
                    {maconData.notFoundTitle}
                  </h2>

                  <p>{maconData.notFoundDescription}</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default NotFoundSection;
