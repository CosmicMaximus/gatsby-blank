import React from "react";
import { Reveal } from "react-reveal/";
import { graphql, StaticQuery } from "gatsby";

const CallToAction = () => (
  <StaticQuery
    query={graphql`
      query {
        wpPage(slug: { eq: "home" }) {
          frontpage {
            callToActionButtonText
            calandlyUrl
          }
        }
      }
    `}
    render={(data) => {
      return (
        <div
          style={{
            // backgroundColor: "#00f",
            // background: "url('') ",
            background: "#fafafa",
            backgroundSize: "cover",
            backgroundPosition: "center",
            textAlign: "center",
            padding: "0 15px 100px",
          }}
        >
          <Reveal effect="fadeInUp" duration={2200}>
            <h4>
              <a
                href={data.wpPage.frontpage.calandlyUrl}
                className="theme_btn active"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.wpPage.frontpage.callToActionButtonText}
              </a>
            </h4>
          </Reveal>
        </div>
      );
    }}
  />
);

export default CallToAction;
