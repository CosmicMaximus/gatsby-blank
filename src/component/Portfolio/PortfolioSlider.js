import React, { Component } from "react";
import SectionTitleTwo from "../Banner/SectionTitleTwo";
import Slider from "react-slick";
class PortfolioSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const { poolSlider } = this.props.maconData;

    return (
      <section className="portfolio_slider_area" id="portfolio">
        <div className="container">
          <SectionTitleTwo
            tCenter="text-center"
            stitle="Portfolio"
            btitle="Some of our latest work"
          />
          <Slider {...settings} className="portfolio_slider">
            {poolSlider.map((item) => (
              <div className="p_item">
                <div className="portfolio_content">
                  {/* <a href="./"> */}
                  <img src={require(`../../images/${item.img}`)} alt="" />
                  {/* </a> */}
                  <div className="text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}

export default PortfolioSlider;
