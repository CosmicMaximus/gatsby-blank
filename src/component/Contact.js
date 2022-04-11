import React from "react";
import { Reveal } from "react-reveal/";
import Form from "./FormFC";
import { graphql, StaticQuery } from "gatsby";

const Contact = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          wpPage(slug: { eq: "home" }) {
            frontpage {
              contactAddress
              contactEmail
              contactPhone
            }
          }
        }
      `}
      render={(data) => {
        return (
          <section className="contact-area" id="contact">
            <div className="container">
              <div className="row row-reverse">
                <div className="col-md-5">
                  <Reveal effect="fadeInLeft" duration={500}>
                    <div className="contact_info">
                      <h4>Contact Info</h4>
                      <ul className="nav">
                        <li className="item">
                          <div className="media">
                            {/* <a href="/#"> */}
                            <i className={"icon_pin_alt"}></i>
                            {/* </a> */}
                            <div className="media-body">
                              {/* <a href="/#"> */}
                              {data.wpPage.frontpage.contactAddress}
                              {/* </a> */}
                            </div>
                          </div>
                        </li>

                        <li className="item">
                          <div className="media">
                            {/* <a href="/#"> */}
                            <i className={"icon_phone"}></i>
                            {/* </a> */}
                            <div className="media-body">
                              {/* <a href="/#"> */}
                              {data.wpPage.frontpage.contactPhone}
                              {/* </a> */}
                            </div>
                          </div>
                        </li>

                        <li className="item">
                          <div className="media">
                            {/* <a href="/#"> */}
                            <i className={"icon_mail"}></i>
                            {/* </a> */}
                            <div className="media-body">
                              {/* <a href="/#"> */}
                              {data.wpPage.frontpage.contactEmail}
                              {/* </a> */}
                            </div>
                          </div>
                        </li>

                        <li className="item">
                          <div className="media">
                            {/* <a href="/#"> */}
                            <i className={"icon_globe"}></i>
                            {/* </a> */}
                            <div className="media-body">
                              {/* <a href="/#"> */}
                              {"cosmicdesign.studio"}
                              {/* </a> */}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Reveal>
                </div>

                <div className="col-md-7">
                  <Reveal effect="fadeInRight" duration={800}>
                    <div className="input_form">
                      <h4>{"Contact Form"}</h4>
                      <Form />
                      <div id="success">Your message succesfully sent!</div>
                      <div id="error">
                        Opps! There is something wrong. Please try again
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    />
  );
};

export default Contact;
