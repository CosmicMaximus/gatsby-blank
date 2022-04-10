import * as React from "react";
import { Link, graphql } from "gatsby";

// import "./index.css";
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
// import Clientslogo from "../component/Clientslogo";
// import Blog from "../component/Blog/Blog";
import Contact from "../component/Contact";
// import Skill from "../component/Skill/Skill";
import Footer from "../component/Footer";
import maconData from "../assets/maconData";

// require('../images/Sail-Away.jpg')
const IndexPage = ({ data }) => {
  // console.log(data.wpMediaItem.localFile.childImageSharp.original.src);
  return (
    <div className="body_wrapper">
      <Navbar
        mContainer="custome_container"
        mainlogo={maconData.logoWhite}
        stickylogo={maconData.logoBlack}
      />
      <RBanner
        maconData={maconData}
        imgSrc={data.wpMediaItem.localFile.childImageSharp.original.src}
      />
      <About aClass="about_area" maconData={maconData} />
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
              href="https://calendly.com/cosmicpools/15min"
              className="theme_btn active"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Your Online Consultation
            </a>
          </h4>
        </Reveal>
      </div>

      <PortfolioSlider maconData={maconData} />
      {/* <Portfolio maconData={maconData} /> */}
      {/* <Skill maconData={maconData} /> */}

      {/* {data.allWpPost.nodes.map((node) => (
        <div>
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
        </div>
      ))}

      {data.allWpPage.nodes.map((node) => (
        <div>
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
        </div>
      ))} */}

      <Testimonial maconData={maconData} />
      {/* <Clientslogo maconData={maconData} /> */}
      {/* <Blog maconData={maconData} /> */}
      <Contact maconData={maconData} />
      <Footer maconData={maconData} />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allWpPage {
      nodes {
        title
        slug
      }
    }
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        slug
      }
    }
    wpMediaItem(slug: { eq: "pool2" }) {
      localFile {
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  }
`;