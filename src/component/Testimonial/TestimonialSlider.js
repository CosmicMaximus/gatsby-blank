import React, { Component } from "react";
import Slider from "react-slick";

class TestimonialSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings} className="testimonial_slider">
          <div className="item">
            <div className="author_img">
              <img src={require("../../images/Grotto.jpg")} alt="" />
            </div>
            <h6>Peter Curnin</h6>
            <span>Brookhaven</span>
            <p>
              I had a great experience with Chris. The project design work was
              exceptionally good and the pool was completed in a timely manner
              under budget. I get a lot of compliments on the waterfall and
              grotto design. The craftsmanship is first-class.
            </p>
          </div>
          <div className="item">
            <div className="author_img">
              <img src={require("../../images/Chuck.jpg")} alt="" />
            </div>
            <h6>Chuck Sherwood </h6>
            <span>Sandy Springs</span>
            <p>
              Chris and his team designed a lovely backyard for the home we've
              lived in for 30 years. It's made a huge difference in the way we
              both relax and entertain now.
            </p>
          </div>
          <div className="item">
            <div className="author_img">
              <img src={require("../../images/Lane.jpg")} alt="" />
            </div>
            <h6>Lane Thames</h6>
            <span>Atlanta</span>
            <p>
              Excellent experience all around. I knew exactly what to expect
              from my fellow Yellow Jacket.
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
export default TestimonialSlider;
