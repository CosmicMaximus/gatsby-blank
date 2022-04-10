import * as React from "react";
import { graphql } from "gatsby";
// import { Link, graphql } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/elagent-icon/style.css";
import "../assets/etline-icon/style.css";
import "../assets/flaticon/flaticon.css";
import "../assets/css/animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";

import Navbar from "../component/Navbar/Navbar";
import RBanner from "../component/Banner/RippleBanner";
import About from "../component/About";
import Service from "../component/Service";
import PortfolioSlider from "../component/Portfolio/PortfolioSlider";
import { Reveal } from "react-reveal/";

import Testimonial from "../component/Testimonial/Testimonial";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import maconData from "../assets/maconData";

const IndexPage = ({ data }) => {
  console.log("img", data.wpPage.frontpage?.logoLight);
  return (
    <div className="body_wrapper">
      <Navbar
        mainlogo={
          data.wpPage.frontpage?.logoLight?.localFile?.childImageSharp?.original
            ?.src
        }
        stickylogo={
          data.wpPage.frontpage?.logoDark?.localFile?.childImageSharp?.original
            ?.src
        }
        phone={data.wpPage.frontpage.contactPhone}
      />

      <RBanner
        frontPageData={data.wpPage.frontpage}
        imgSrc={
          data.wpPage.featuredImage.node.localFile.childImageSharp.original.src
        }
      />
      <About frontPageData={data.wpPage.frontpage} />
      <Service wClass="work_area" maconData={maconData} />
      <div
        style={{
          // backgroundColor: "#00f",
          // background: "url(" + require("./images/" + maconData.ctaBgImg) + ") ",
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

      <PortfolioSlider />
      <Testimonial />
      <Contact maconData={maconData} />
      <Footer maconData={maconData} />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    wpPage(slug: { eq: "home" }) {
      frontpage {
        aboutDescription
        aboutSubtitle
        aboutTitle
        callToActionButtonText
        contactAddress
        contactEmail
        contactPhone
        copyrightText
        facebookUrl
        fieldGroupName
        instagramUrl
        linkedinUrl
        subtitle
        tagLine
        title
        calandlyUrl
        aboutSectionPhoto {
          localFile {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
        logoDark {
          localFile {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
        logoLight {
          localFile {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
    }
  }
`;
