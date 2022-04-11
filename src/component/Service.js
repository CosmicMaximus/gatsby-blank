import React from "react";
import Sectiontitle from "./Banner/Sectiontitle";
import { Fade } from "react-reveal/";
import { graphql, StaticQuery } from "gatsby";

const Service = () => (
  <StaticQuery
    query={graphql`
      query {
        allWpService {
          nodes {
            service {
              icon
            }
            id
            title
            content
          }
        }
      }
    `}
    render={(data) => {
      return (
        <section className={`work_area`} id="service">
          <div className="container">
            <Sectiontitle
              Title="What We Do"
              TitleP="We love what we do. We take great pride in the service we provide."
            />
            <Fade bottom cascade duration={1000}>
              <div className="row">
                {data.allWpService.nodes.map((item) => {
                  return (
                    <div className="col-lg-4 col-sm-6" key={item.id}>
                      <div
                        className="work_item wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <i className={item.service.icon}></i>
                        {/* <a href=".#"> */}
                        <h2 className="t_color">{item.title}</h2>
                        {/* </a> */}
                        <div
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Fade>
          </div>
        </section>
      );
    }}
  />
);

export default Service;
