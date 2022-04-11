import * as React from "react";

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
import Testimonial from "../component/Testimonial/Testimonial";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import CallToAction from "../component/CallToAction";

const IndexPage = ({ data }) => {
  return (
    <div className="body_wrapper">
      <Navbar />
      <RBanner />
      <About />
      <Service />
      <CallToAction />
      <PortfolioSlider />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default IndexPage;
