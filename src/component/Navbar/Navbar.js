import React from 'react';
import Sticky from 'react-stickynode';
import { Link } from 'react-scroll';
import { Link as PageLink } from 'gatsby';

import { graphql, StaticQuery } from 'gatsby';
import HeadTags from './HeadTags';

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        wpPage(slug: { eq: "home" }) {
          frontpage {
            contactPhone
            logoDark {
              sourceUrl
            }
            logoLight {
              sourceUrl
            }
          }
        }
      }
    `}
    render={(data) => {
      return (
        <Sticky top={0} innerZ={1198} activeClass="navbar_fixed">
          <HeadTags />
          <nav className={`navbar navbar-expand-lg navbar-light first`}>
            <div className={`container custome_container`}>
              <a className="navbar-brand logo_h" href="/">
                <img
                  src={data?.wpPage?.frontpage?.logoLight?.sourceUrl}
                  alt=""
                  style={{ width: 120, height: 'auto' }}
                />
                <img
                  src={data?.wpPage?.frontpage?.logoDark?.sourceUrl}
                  alt=""
                  style={{ width: 120, height: 'auto' }}
                />
              </a>
              {/* <a
              href="./"
              className="btn get-btn get-btn-two d-lg-none d-md-block login"
            >
              Login
            </a> */}

              <div>
                <ul className="nav navbar-nav navbar-right first">
                  <li className="navText">Call Today</li>
                  <li className="navText">
                    <a
                      href={`tel: + ${data.wpPage.frontpage.contactPhone}`.replaceAll(
                        '-',
                        ''
                      )}
                    >
                      {data.wpPage.frontpage.contactPhone}
                    </a>
                  </li>
                </ul>
              </div>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav m-auto">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="service"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      <PageLink to="/gallery">Portfolio</PageLink>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="testimonial"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      Testimonial
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Blog
                  </Link>
                </li> */}
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <nav className={`navbar navbar-expand-lg navbar-light last`}>
            <div className={`container custome_container`}>
              <a className="navbar-brand logo_h" href="/">
                <img
                  src={data?.wpPage?.frontpage?.logoLight?.sourceUrl}
                  alt=""
                  style={{ width: 120, height: 'auto' }}
                />
                <img
                  src={data?.wpPage?.frontpage?.logoDark?.sourceUrl}
                  alt=""
                  style={{ width: 120, height: 'auto' }}
                />
              </a>
              {/* <a
              href="./"
              className="btn get-btn get-btn-two d-lg-none d-md-block login"
            >
              Login
            </a> */}

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav m-auto">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="service"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      // to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      <PageLink to="/gallery">Portfolio</PageLink>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="testimonial"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      Testimonial
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Blog
                  </Link>
                </li> */}
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="nav navbar-nav navbar-right last">
                  <li className="navText">Call Today</li>
                  <li className="navText">
                    <a
                      href={`tel: + ${data.wpPage.frontpage.contactPhone}`.replaceAll(
                        '-',
                        ''
                      )}
                    >
                      {data.wpPage.frontpage.contactPhone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Sticky>
      );
    }}
  />
);

export default Navbar;
