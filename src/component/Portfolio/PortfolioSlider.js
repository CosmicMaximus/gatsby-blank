import React from "react";
import SectionTitleTwo from "../Banner/SectionTitleTwo";
import Slider from "react-slick";
import { graphql, StaticQuery } from "gatsby";

const PortfolioSlider = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWpPortfolio {
            nodes {
              portfolio {
                photo {
                  localFile {
                    childImageSharp {
                      original {
                        src
                      }
                    }
                  }
                }
                description
                title
              }
              slug
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
        return (
          <section className="portfolio_slider_area" id="portfolio">
            <div className="container">
              <SectionTitleTwo
                tCenter="text-center"
                stitle="Portfolio"
                btitle="Some of our latest work"
              />
              <Slider {...settings} className="portfolio_slider">
                {data.allWpPortfolio.nodes.map((node) => (
                  <div className="p_item">
                    <div className="portfolio_content">
                      {/* <a href="./"> */}
                      <img
                        src={
                          node.portfolio.photo.localFile.childImageSharp
                            .original.src
                        }
                        alt=""
                      />
                      {/* </a> */}
                      <div className="text">
                        <h4>{node.portfolio.title}</h4>
                        <p>{node.portfolio.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>
        );
      }}
    />
  );
};

export default PortfolioSlider;
