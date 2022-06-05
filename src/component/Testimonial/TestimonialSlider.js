import React from 'react';
import Slider from 'react-slick';
import { graphql, StaticQuery } from 'gatsby';

const TestimonialSlider = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWpTestimonial {
            nodes {
              slug
              testimonial {
                photo {
                  sourceUrl
                }
                city
                name
                review
              }
            }
          }
        }
      `}
      render={(data) => {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          arrows: false,
          autoplay: true,
          pauseOnHover: true,
          autoplaySpeed: 4000,
          slidesToShow: 1,
          slidesToScroll: 1,
        };
        return (
          <div>
            <Slider {...settings} className="testimonial_slider">
              {data.allWpTestimonial.nodes.map((node) => (
                <div className="item">
                  <div className="author_img">
                    <img src={node?.testimonial?.photo?.sourceUrl} alt="" />
                  </div>
                  <h6>{node.testimonial?.name}</h6>
                  <span>{node.testimonial?.city}</span>
                  <p>{node.testimonial?.review}</p>
                </div>
              ))}
            </Slider>
          </div>
        );
      }}
    />
  );
};

export default TestimonialSlider;
