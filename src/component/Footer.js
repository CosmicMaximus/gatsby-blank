import React, { Component } from "react";

import { Fade } from "react-reveal/";
class Footer extends Component {
  render() {
    let maconData = this.props.maconData;
    return (
      <section className="footer-area">
        <div className="container">
          <div className="footer-content">
            {/* <Link to="/" className="logo wow fadeInDown" data-wow-delay="0.4s"> */}
            <img src={require("../images/" + maconData.logoWhite)} alt="" />
            {/* </Link> */}
            <Fade top cascade>
              <ul className="list_style">
                {maconData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      {/* <a href={item.url} target={"_blank"}> */}
                      <i className={item.className}></i>
                      {/* </a> */}
                    </li>
                  );
                })}
              </ul>
            </Fade>
            <p className="legalPadding">{maconData.legal}</p>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
