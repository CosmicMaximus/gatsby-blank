import * as React from "react";

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
