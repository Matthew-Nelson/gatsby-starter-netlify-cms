import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";

import "./Home.scss";

import WelcomeImage from "../img/welcome-hero-text.png";
import FadedHouses from "../img/faded-houses.jpg";
import Arrow from "../img/arrow.png";

export const IndexPageTemplate = ({ sampleImage, image, title, heading, subheading, mainpitch, description, intro }) => {
  console.log(image);

  return (
    <div>
      <div
        className='full-width-image margin-top-0 home-banner parallax'
        style={{
          backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
          backgroundPosition: `center`,
          // backgroundAttachment: `fixed`,
          height: `100vh`,
          // maxHeight: `1250px`,
          position: `relative`,
          alignItems: `flex-end`
        }}
      >
        <section className='section pull-front' style={{ zIndex: "2" }}>
          <div className='container'>
            <div className='columns'>
              <div
                className='column is-10 is-offset-1'
                style={{
                  display: "flex",
                  // height: "150px",
                  lineHeight: "1",
                  justifyContent: "space-around",
                  alignItems: "left",
                  flexDirection: "column"
                }}
              >
                <img src={WelcomeImage} alt='' />
                <h1
                  className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen'
                  style={{
                    // boxShadow: "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                    // backgroundColor: "rgb(255, 68, 0)",
                    color: "white",
                    lineHeight: "1",
                    padding: "0.25em",
                    display: "none"
                  }}
                >
                  {title}
                </h1>
                <h3
                  // className='has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen'
                  style={{
                    // boxShadow: "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                    // backgroundColor: "rgb(255, 68, 0)",
                    color: "white",
                    lineHeight: "1",
                    padding: "0.25em",
                    fontSize: "1.25rem",
                    textAlign: "center",
                    margin: "2rem 0"
                  }}
                >
                  {subheading}
                </h3>
                <Link
                  to='/'
                  className='button'
                  style={{
                    textTransform: "uppercase",
                    marginBottom: "3rem",
                    alignSelf: "center",
                    backgroundColor: "unset",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.95rem"
                  }}
                >
                  Find your home
                </Link>
                <img
                  src={Arrow}
                  alt='down arrow'
                  style={{
                    width: `15px`,
                    height: "auto",
                    alignSelf: "center",
                    margin: "1rem 0"
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <div
          className='banner-overlay'
          style={{
            display: `block`,
            position: `absolute`,
            left: 0,
            bottom: 0,
            height: `65%`,
            width: `100%`,
            opacity: 1,
            textAlign: `left`,
            color: `#fff`,
            // background: `linear-gradient(to bottom, rgba(3, 86, 66, 0) 0%, rgba(3, 86, 66, .95) 50%,  rgba(3, 86, 66, 1.0) 100%)`,
            background: `linear-gradient(to bottom, rgba(3, 86, 66, 0) 0%, rgba(3, 86, 66, .85) 50%,  rgba(3, 86, 66, 1.0) 100%)`
          }}
        ></div>
      </div>

      <section
        className='section'
        style={{
          backgroundColor: "rgba(3, 86, 66, 1.0)",
          // backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
          backgroundImage: `url(${FadedHouses})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "10rem",
          backgroundPositionX: "center",
          backgroundSize: "cover",
          paddingTop: 0,
          paddingBottom: "10rem"
        }}
      >
        <div className='container' style={{ paddingTop: 0 }}>
          <div className='section' style={{ paddingTop: 0 }}>
            <div className='columns'>
              <div
                className='column is-10 is-offset-1'
                style={{
                  minHeight: "450px"
                }}
              >
                <Img fluid={sampleImage.childImageSharp.fluid} style={{ boxShadow: "0px 5px 15px 0px rgba(51,51,51,.75)" }} alt='placeholder image' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div className='content'>
                    <div className='tile'>
                      <h1 className='title'>{mainpitch.title}</h1>
                    </div>
                    <div className='tile'>
                      <h3 className='subtitle'>{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className='columns'>
                    <div className='column is-12'>
                      <h3 className='has-text-weight-semibold is-size-2'>{heading}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className='columns'>
                    <div className='column is-12 has-text-centered'>
                      <Link className='btn' to='/products'>
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className='column is-12'>
                    <h3 className='has-text-weight-semibold is-size-2'>Latest stories</h3>
                    <BlogRoll />
                    <div className='column is-12 has-text-centered'>
                      <Link className='btn' to='/blog'>
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(data);

  return (
    <Layout>
      <IndexPageTemplate sampleImage={data.sampleImage} image={frontmatter.image} title={frontmatter.title} heading={frontmatter.heading} subheading={frontmatter.subheading} mainpitch={frontmatter.mainpitch} description={frontmatter.description} intro={frontmatter.intro} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    sampleImage: file(relativePath: { eq: "placeholder.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
