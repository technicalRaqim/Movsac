import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Industries() {
  // AOS Initialize
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      animation: "zoom-in-up",
      quote: "Movsac Solutions offers a high caliber of resources skilled in Microsoft Azure, .NET, mobile & Quality Assurance. Over the past three years, we were very pleased with the service provided by Movsac Solutions development teams & executive management.",
      name: "Ross Shamaleshvili",
      role: "Manager, American Group",
      avatar: "img/Home/fm.png",
      date: "12/2/2024"
    },
    {
      id: 2,
      animation: "zoom-in-up",
      quote: "The delivery approach was clear, consistent, and aligned to our business goals. The team helped us move quickly without sacrificing quality, and the collaboration with product and UX was outstanding.",
      name: "Nava Navrozashvili",
      role: "Product Manager, Flyhex",
      avatar: "img/Home/male.png",
      date: "3/2/2024"
    },
    {
      id: 3,
      animation: "zoom-in-up",
      quote: "Their experience in building intuitive digital experiences helped our brand launch faster and with stronger user acceptance. The team went above and beyond to support our timelines and product vision.",
      name: "Ross Shamaleshvili",
      role: "Manager, American Group",
      avatar: "img/Home/fm.png",
      date: "1/2/2024"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare & MedTech',
      description: '"Building high-performance mobile apps for iOS and Android. We create user-centric mobile solutions that engage and scale your business',
      category: 'Fintech',
      image: 'url(/img/portfolio/industry1.png)',
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(37, 99, 235, 0.9) 100%)',
      animation: 'zoom-in-up'
    },
    {
      id: 2,
      title: 'Fintech & Banking',
      description: '"Building high-performance, responsive websites tailored to your business. We turn complex ideas into seamless digital experiences that drive growth',
      category: 'Fintech',
      image: 'url(/img/portfolio/industry2.png)',
      gradient: 'linear-gradient(135deg, rgba(79, 70, 229, 0.9) 0%, rgba(99, 102, 241, 0.9) 100%)',
      animation: 'zoom-in-up'
    },
    {
      id: 3,
      title: 'Education & EdTech',
      description: '"Empowering your business with smart AI solutions. We integrate artificial intelligence to automate tasks, improve efficiency, and drive data-backed growth',
      category: 'Fintech',
      image: 'url(/img/portfolio/industry3.png)',
      gradient: 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(17, 24, 39, 0.95) 100%)',
      animation: 'zoom-in-up'
    },
    {
      id: 9,
      title: 'E-commerce & Retail',
      description: 'Crafting intuitive and visually stunning user experiences. We design modern, user-friendly interfaces that turn visitors into loyal customers through seamless digital journeys',
      category: 'Fintech',
      image: 'url(/img/portfolio/industry4.png)',
      gradient: 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(17, 24, 39, 0.95) 100%)',
      animation: 'zoom-in-up'
    },
    {
      id: 4,
      title: 'Logistics & Warehousing',
      description: '"Empowering your business with smart AI solutions. We integrate artificial intelligence to automate tasks, improve efficiency, and drive data-backed growth',
      category: 'Web Development',
      image: 'url(/img/portfolio/industry5.png)',
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(37, 99, 235, 0.9) 100%)',
      animation: 'zoom-in-up'
    },
    {
      id: 5,
      title: 'Insurance ',
      description: 'Crafting intuitive and visually stunning user experiences. We design modern, user-friendly interfaces that turn visitors into loyal customers through seamless digital journeys',
      category: 'ERP Systems',
      image: 'url(/img/portfolio/industry6.png)',
      gradient: 'linear-gradient(135deg, rgba(79, 70, 229, 0.9) 0%, rgba(99, 102, 241, 0.9) 100%)',
      animation: 'zoom-in-up'
    },
  ];

  return (
    <Layout>
      <section className="case-study-hero">
        <div className="container py-5">
          <div className="row align-items-center pt-5 gy-4">
            <div className="col-lg-12">
              <h2 className="hero-title" data-aos="flip-down" data-aos-duration="1000">
                <span data-aos="fade-right" data-aos-delay="100">Transforming</span>{' '}
                <span className="hero-highlight" data-aos="zoom-in" data-aos-delay="200">Industries</span>{' '}
                <span data-aos="fade-left" data-aos-delay="300">Through</span><br />
                <span data-aos="fade-up" data-aos-delay="400">Intelligent</span>{' '}
                <span data-aos="fade-up" data-aos-delay="500">Design</span>{' '}
                <span data-aos="fade-up" data-aos-delay="600">&</span>{' '}
                <span data-aos="fade-up" data-aos-delay="700">Tech</span>
              </h2>
              {/* <div className="mt-4">
                <Link className="portfoliobtn">
                  Let's make Projects
                </Link>
              </div> */}
            </div>
            {/* <div className="col-lg-12 d-none d-lg-block"></div> */}
          </div>
        </div>
      </section>

      <section id="case-study-grid" className="portfolio-section">
        <div className="container">
            <h1 className="industry-hed" data-aos="fade-down" data-aos-duration="800">
              <span data-aos="fade-down" data-aos-delay="100">I</span>
              <span data-aos="fade-down" data-aos-delay="150">n</span>
              <span data-aos="fade-down" data-aos-delay="200">d</span>
              <span data-aos="fade-down" data-aos-delay="250">u</span>
              <span data-aos="fade-down" data-aos-delay="300">s</span>
              <span data-aos="fade-down" data-aos-delay="350">t</span>
              <span data-aos="fade-down" data-aos-delay="400">r</span>
              <span data-aos="fade-down" data-aos-delay="450">i</span>
              <span data-aos="fade-down" data-aos-delay="500">e</span>
              <span data-aos="fade-down" data-aos-delay="550">s</span>
            </h1>
          {/* Case Study Grid */}
          <div className="portfolio-grid" >
            {caseStudies.map((study, index) => (
              <div key={study.id} className="portfolio-card" data-aos={study.animation} data-aos-delay={index * 100}>
                <div 
                  className="portfolio-card-bg"
                  style={{ backgroundImage: study.image }}
                >
                  <div className="portfolio-card-overlay" style={{ background: study.gradient }}></div>
                </div>
                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                    {study.title.split(' ').map((word, wordIndex) => (
                      <span key={wordIndex} data-aos="fade-right" data-aos-delay={index * 100 + 100 + (wordIndex * 50)}>
                        {word}{' '}
                      </span>
                    ))}
                  </h3>
                  <p className="portfolio-card-desc" data-aos="fade-up" data-aos-delay={index * 100 + 200}>
                    {study.description}
                  </p>
                  <Link to="/case-study" className="portfolio-card-link" data-aos="zoom-in" data-aos-delay={index * 100 + 300}>
                    <span data-aos="fade-right" data-aos-delay={index * 100 + 350}>Read</span>{' '}
                    <span data-aos="fade-right" data-aos-delay={index * 100 + 400}>More</span>{' '}
                    <span data-aos="fade-left" data-aos-delay={index * 100 + 450}>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title" data-aos="fade-up" data-aos-duration="1000">
              <span data-aos="fade-up" data-aos-delay="100">We</span>{' '}
              <span data-aos="fade-up" data-aos-delay="150">would</span>{' '}
              <span data-aos="fade-up" data-aos-delay="200">love</span>{' '}
              <span data-aos="fade-up" data-aos-delay="250">to</span>{' '}
              <span data-aos="fade-up" data-aos-delay="300">hear</span>{' '}
              <span data-aos="fade-up" data-aos-delay="350">more</span>{' '}
              <span data-aos="fade-up" data-aos-delay="400">about</span>{' '}
              <span data-aos="fade-up" data-aos-delay="450">your</span>{' '}
              <span data-aos="fade-up" data-aos-delay="500">project</span>
            </h2>
            <Link to="/contact" className="cta-button" data-aos="zoom-in-up" data-aos-delay="600">
              <span data-aos="fade-right" data-aos-delay="650">Lets</span>{' '}
              <span data-aos="fade-right" data-aos-delay="700">Talk</span>{' '}
              <span data-aos="fade-right" data-aos-delay="750">with</span>{' '}
              <span data-aos="fade-right" data-aos-delay="800">us</span>
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}