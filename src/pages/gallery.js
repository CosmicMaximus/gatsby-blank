import React from 'react';
import NavbarSubpage from '../component/Navbar/NavbarSubpage';
import Contact from '../component/Contact';
import Footer from '../component/Footer';
import { graphql } from 'gatsby';
import { Fade } from 'react-reveal/';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const Page = ({ data }) => {
  const page = data.wpPage;
  const galleryImages = data?.allWpGalleryImages?.nodes;

  const photos = galleryImages.map((img) => {
    const content = img?.featuredImage?.node?.sourceUrl;
    const dims = img?.featuredImage?.node?.localFile?.childImageSharp?.original;
    return {
      src: content,
      width: dims.width,
      height: dims.height,
    };
  });

  const openLightbox = React.useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const [currentImage, setCurrentImage] = React.useState(0);
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="body_wrapper">
      <NavbarSubpage />

      <section id="pageContent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center">
              <Fade bottom cascade duration={1000}>
                <div
                  // className="about_content"
                  style={{
                    textAlign: 'center',
                    margin: 'auto',
                    paddingBottom: 0,
                  }}
                >
                  <h2
                    className="t_color"
                    style={{
                      textAlign: 'center',
                      marginBottom: 100,
                      fontSize: 35,
                      fontWeight: 700,
                    }}
                  >
                    {page?.title}
                  </h2>
                  <div dangerouslySetInnerHTML={{ __html: page?.content }} />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 1140, margin: 'auto', padding: 20 }}>
        <Fade bottom cascade duration={1000}>
          <div>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </Fade>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Page;

export const query = graphql`
  query {
    wpPage(slug: { eq: "gallery" }) {
      title
      content
    }
    allWpGalleryImages {
      nodes {
        featuredImage {
          node {
            sourceUrl
            srcSet
            title
            localFile {
              childImageSharp {
                original {
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;
