import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';
export default function Portfolio() {
  // AOS Initialize
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  // Testimonials Slider State
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "The delivery approach was clear, consistent, and aligned to our business goals. The team helped us move quickly without sacrificing quality, and the collaboration with product and UX was outstanding.",
      name: "Mohd Gufran",
      role: "Owner of Qumash fashion",
      avatar: "img/Home/fm.png",

    },
    {
      id: 2,
      quote: "The delivery approach was clear, consistent, and aligned to our business goals. The team helped us move quickly without sacrificing quality, and the collaboration with product and UX was outstanding.",
      name: "Nava Navrozashvili",
      role: "Product Manager, Flyhex",
      avatar: "img/Home/male.png",

    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const caseStudies = [
    {
      id: 1,
      title: 'Unifi Cars',
      description: 'Automotive marketplace with 30-45% revenue growth',
      image: '/img/csview/Unifi/big.png',
      gradient: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
      animation: 'fade-up'
    },
    {
      id: 2,
      title: 'Hobfit Wellness',
      description: 'AI wellness platform with 50,000+ active users',
      image: '/img/csview/Hobfit/big.png',
      gradient: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
      animation: 'fade-up'
    },
    {
      id: 3,
      title: 'Bookswagon',
      description: '50M+ books marketplace with 40-60% revenue growth',
      image: '/img/csview/Book/big.png',
      gradient: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)',
      animation: 'fade-up'
    },
    {
      id: 4,
      title: 'Unfazed',
      description: 'Mental health platform with 1.78L+ users',
      image: '/img/csview/Unfazed/big.png',
      gradient: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
      animation: 'fade-up'
    },
    {
      id: 5,
      title: 'Makaan Directory',
      description: 'Real estate platform with 2x engagement increase',
      image: '/img/csview/makan/big.png',
      gradient: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)',
      animation: 'fade-up'
    },
    {
      id: 6,
      title: 'BYD Bahrain',
      description: 'EV platform with 35-50% revenue growth',
      image: '/img/csview/Byd/big.png',
      gradient: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
      animation: 'fade-up'
    },
    {
      id: 7,
      title: 'Alkurdi',
      description: 'B2B engineering platform with 40-60% lead increase',
      image: '/img/csview/Alkurdi/big.png',
      gradient: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
      animation: 'fade-up'
    },
    {
      id: 8,
      title: 'Amaha B2B',
      description: 'Corporate mental wellness platform with enterprise SaaS model',
      image: '/img/csview/Amaha/big.png',
      gradient: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
      animation: 'fade-up'
    },
    {
      id: 9,
      title: 'Skylex',
      description: 'AI-powered immigration lawyer platform with global legal access',
      image: '/img/csview/Skylex/big.png',
      gradient: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
      animation: 'fade-up'
    },
    {
      id: 10,
      title: 'iPrep',
      description: 'K-12 education platform with offline learning for rural India',
      image: '/img/csview/iPrep/big.png',
      gradient: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
      animation: 'fade-up'
    },

    {
      id: 11,
      title: 'SK Telecom',
      description: 'Telecom super app with real-time data management and digital ecosystem',
      image: '/img/csview/SKTelecom/big.png',
      gradient: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
      animation: 'fade-up'
    }
  ];
  return (
    <Layout>
      <Helmet>
        <title>Our Work – Movsac Projects & Clients</title>
        <meta
          name="description"
          content="Discover Movsac's successful IT projects and staffing solutions delivered to clients across industries."
        />
        <meta
          name="keywords"
          content="IT portfolio, client projects, case studies"
        />
      </Helmet>

      <section className="case-study-hero">
        <div className="container py-5">
          <div className="row align-items-center pt-5 gy-4">
            <div className="col-lg-7">
              <h2 className="hero-title" data-aos="fade-down" data-aos-duration="1000">
                <span data-aos="fade-right" data-aos-delay="100">Our</span>{' '}
                <span className="hero-highlight" data-aos="zoom-in" data-aos-delay="200">Portfolio</span>{' '}
                <span data-aos="fade-left" data-aos-delay="300">Delivering</span><br />
                <span data-aos="fade-up" data-aos-delay="400">Digital</span>{' '}
                <span data-aos="fade-up" data-aos-delay="500">Excellence</span>
              </h2>
              <div className="mt-4" data-aos="zoom-in-up" data-aos-delay="600">
                <Link className="portfoliobtn" to="/contact">
                  <span data-aos="fade-right" data-aos-delay="700">Let's</span>{' '}
                  <span data-aos="fade-right" data-aos-delay="800">make</span>{' '}
                  <span data-aos="fade-right" data-aos-delay="900">Projects</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block"></div>
          </div>
        </div>
      </section>

      <section id="case-study-grid" className="portfolio-section">
        <div className="container">
          <h3 className="display-4 fw-bold ">
            <span className="hero-highlight ">
              <span data-aos="fade-right" data-aos-duration="600" data-aos-delay="0">O</span>
              <span data-aos="fade-right" data-aos-duration="600" data-aos-delay="50">u</span>
              <span data-aos="fade-right" data-aos-duration="600" data-aos-delay="100">r</span>
            </span>

            <span data-aos="fade-right" data-aos-duration="600" data-aos-delay="150">&nbsp;</span>
            <span data-aos="fade-right" data-aos-duration="600" data-aos-delay="200">P</span>
            <span data-aos="fade-right" data-aos-duration="600" data-aos-delay="250">o</span>
            <span data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">r</span>
            <span data-aos="fade-right" data-aos-duration="600" data-aos-delay="350">t</span>
            <span data-aos="fade-right" data-aos-duration="600" data-aos-delay="400">f</span>
            <span data-aos="fade-right" data-aos-duration="600" data-aos-delay="450">o</span>
            <span data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">l</span>
            <span data-aos="fade-right" data-aos-duration="600" data-aos-delay="550">i</span>
            <span data-aos="fade-right" data-aos-duration="600" data-aos-delay="600">o</span>
          </h3>
          {/* Case Study Grid - 7 Cards */}
          <div className="portfolio-grid">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="portfolio-card"
                data-aos={study.animation}
                data-aos-delay={index * 150}
                data-aos-duration="800"
              >
                <div
                  className="portfolio-card-bg"
                  style={{
                    backgroundImage: `url(${study.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="portfolio-card-overlay" style={{ background: study.gradient }}></div>
                </div>
                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title" data-aos="fade-up" data-aos-delay={index * 150 + 100}>
                    {study.title.split(' ').map((word, wordIndex) => (
                      <span key={wordIndex} data-aos="fade-right" data-aos-delay={index * 150 + 100 + (wordIndex * 50)}>
                        {word}{' '}
                      </span>
                    ))}
                  </h3>
                  <p className="portfolio-card-desc" data-aos="fade-up" data-aos-delay={index * 150 + 200}>
                    {study.description}
                  </p>
                  {/* ✅ DYNAMIC LINK - Har card alag page par jayega */}
                  <Link to={`/casestudy-view/${study.id}`} className="portfolio-card-link" data-aos="zoom-in" data-aos-delay={index * 150 + 300}>
                    <span data-aos="fade-right" data-aos-delay={index * 150 + 350}>View</span>{' '}
                    <span data-aos="fade-right" data-aos-delay={index * 150 + 400}>&nbsp;&nbsp; Case</span>{' '}
                    <span data-aos="fade-right" data-aos-delay={index * 150 + 450}>study</span>{' '}
                    <span data-aos="fade-left" data-aos-delay={index * 150 + 500}>&nbsp;&nbsp;→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - FULL WIDTH WITH BOTTOM RIGHT BUTTONS */}
      <section className="portfolio-testimonials-section mb-5">
        <div className="container-fluid px-4 px-md-5">
          <h2 className="portfolio-testimonials-title" data-aos="flip-down" data-aos-duration="1000">
            <span data-aos="fade-down" data-aos-delay="100">T</span>
            <span data-aos="fade-down" data-aos-delay="150">e</span>
            <span data-aos="fade-down" data-aos-delay="200">s</span>
            <span data-aos="fade-down" data-aos-delay="250">t</span>
            <span data-aos="fade-down" data-aos-delay="300">i</span>
            <span data-aos="fade-down" data-aos-delay="350">m</span>
            <span data-aos="fade-down" data-aos-delay="400">o</span>
            <span data-aos="fade-down" data-aos-delay="450">n</span>
            <span data-aos="fade-down" data-aos-delay="500">i</span>
            <span data-aos="fade-down" data-aos-delay="550">a</span>
            <span data-aos="fade-down" data-aos-delay="600">l</span>
            <span data-aos="fade-down" data-aos-delay="650">s</span>
          </h2>

          {/* Full Width Slider Container */}
          <div className="portfolio-testimonials-fullwidth">
            <div
              className="portfolio-testimonials-track-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="portfolio-testimonial-card-full"
                >
                  {/* Avatar - Zoom In Animation */}
                  <div className="portfolio-testimonial-top" data-aos="zoom-in" data-aos-delay={index * 100}>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="portfolio-testimonial-avatar roud"
                    />
                  </div>

                  {/* Quote - Fade Up Animation */}
                  <p className="portfolio-testimonial-text" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                    {testimonial.quote}
                  </p>

                  {/* Footer - Fade Up Animation */}
                  <div className="portfolio-testimonial-footer d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-end w-100 gap-2 gap-sm-0" data-aos="fade-up" data-aos-delay={index * 100 + 200}>
                    <div className="text-start">
                      <h4 className="portfolio-testimonial-name mb-1" data-aos="fade-in" data-aos-delay={index * 100 + 250}>
                        {testimonial.name}
                      </h4>
                      <p className="portfolio-testimonial-role mb-0" data-aos="fade-in" data-aos-delay={index * 100 + 300}>
                        {testimonial.role}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Right Navigation Buttons */}
          <div className="testimonial-nav-bottom">
            <button
              className="testimonial-nav-btn-bottom"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className="testimonial-nav-btn-bottom"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}