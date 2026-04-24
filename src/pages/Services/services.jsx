import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MovsacServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      name: "App Development",
      text: "Building high-performance mobile apps for iOS and Android. We create user-centric mobile solutions that engage and scale your business"
    },
    {
      name: "AI Integration",
      text: "Empowering your business with smart AI solutions. We integrate artificial intelligence to automate tasks, improve efficiency, and drive data-backed growth."
    },
    {
      name: "Web Development",
      text: "Creating responsive and scalable web applications using modern technologies. We deliver fast, secure, and user-friendly websites tailored to your business needs."
    },
    {
      name: "Cloud Services",
      text: "Seamless cloud migration and management solutions. We help businesses leverage cloud technology for better scalability, security, and cost efficiency."
    }
  ];

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) setItemsPerView(2); // Two items on large screens
      else if (width >= 768) setItemsPerView(2); // Two items on tablets
      else setItemsPerView(1); // One item on mobile

      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next > testimonials.length - itemsPerView ? 0 : next;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length, itemsPerView]);

  // AOS Initialize
  useEffect(() => {
    AOS.init({
      duration: isMobile ? 600 : 800,
      once: true,
      offset: isMobile ? 50 : 100,
      easing: 'ease-in-out',
      disable: function () {
        return window.innerWidth < 576; // Disable on very small screens if needed
      }
    });
  }, [isMobile]);

  // Refresh AOS on resize
  useEffect(() => {
    AOS.refresh();
  }, [isMobile, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next > testimonials.length - itemsPerView ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = testimonials.length - itemsPerView;
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  // Calculate visible items for the current view
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);

  // Handle edge case where slice returns fewer items than itemsPerView near the end
  if (visibleTestimonials.length < itemsPerView && testimonials.length >= itemsPerView) {
    const lastN = testimonials.slice(testimonials.length - itemsPerView);
  }

  // Responsive animation attributes helper
  const getAnimation = (desktopAnim, mobileAnim) => {
    return isMobile ? mobileAnim : desktopAnim;
  };

  return (
    <Layout>
      {/* main section starts */}
      <section className="sec-bg">
        <div className="container">
          <div className="sec-heading">
            <h1 >
              Our Specialized Digital <br />
              Engineering <span >Services</span>
            </h1>
            <p >
              Transformation  Business Through <br />
              Next-generation Technology.
            </p>
          </div>
        </div>
      </section>
      {/* main section ends */}

      {/* section testimonials */}
      <section className="sec-color">
        <div className="container pt-3">
          <div className="sec-it">
            <span data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">IT Services</span>

            {/* Responsive Slider - No Overflow Hidden, JS Managed */}
            <div className="row pt-3">
              <div className="d-flex flex-wrap flex-md-nowrap gap-3 gap-md-4">
                {visibleTestimonials.map((item, index) => (
                  <div
                    className={itemsPerView === 2 ? "col-md-6" : "col-12"}
                    key={currentIndex + index}
                    style={{
                      transition: 'all 0.5s ease-in-out',
                      flex: itemsPerView === 2 ? '0 0 calc(50% - 1rem)' : '0 0 100%'
                    }}
                    data-aos="fade-up"
                    data-aos-duration="400"
                    data-aos-delay={index * 50}
                  >
                    <div className={(currentIndex + index) % 2 === 0 ? "sec-cols" : "sec-cols1"}>
                      <h5 data-aos="fade-up" data-aos-duration="400" data-aos-delay={index * 50 + 25}>{item.name}</h5>
                      <p data-aos="fade-up" data-aos-duration="400" data-aos-delay={index * 50 + 50}>"{item.text}"</p>
                      <h6 data-aos="fade-up" data-aos-duration="400" data-aos-delay={index * 50 + 75}>
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                          <path d="M14.6906 6.75241H0.75C0.551088 6.75241 0.360322 6.83142 0.21967 6.97208C0.0790178 7.11273 0 7.30349 0 7.50241C0 7.70132 0.0790178 7.89208 0.21967 8.03274C0.360322 8.17339 0.551088 8.25241 0.75 8.25241H14.6906L9.21797 13.7204C9.07686 13.8615 8.99759 14.0529 8.99759 14.2524C8.99759 14.452 9.07686 14.6433 9.21797 14.7844C9.35907 14.9255 9.55045 15.0048 9.75 15.0048C9.94955 15.0048 10.1409 14.9255 10.282 14.7844L17.032 8.03444C17.1022 7.96473 17.1579 7.88184 17.1959 7.79053C17.2338 7.69922 17.2534 7.6013 17.2534 7.50241C17.2534 7.40351 17.2338 7.30559 17.1959 7.21428C17.1579 7.12297 17.1022 7.04008 17.032 6.97037L10.282 0.220375C10.2122 0.150507 10.1292 0.0950853 10.0379 0.0572734C9.94665 0.0194615 9.84881 1.94773e-09 9.75 0C9.65119 -1.94773e-09 9.55335 0.0194615 9.46207 0.0572734C9.37078 0.0950853 9.28784 0.150507 9.21797 0.220375C9.1481 0.290242 9.09268 0.373186 9.05487 0.464472C9.01705 0.555758 8.99759 0.653598 8.99759 0.752406C8.99759 0.851213 9.01705 0.949053 9.05487 1.04034C9.09268 1.13163 9.1481 1.21457 9.21797 1.28444L14.6906 6.75241Z" fill="white" />
                        </svg>
                        <span className="learn-line"></span>
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - JS Controlled */}
            <div className="sec-comb mt-3">
              <div className="sec-icons" onClick={prevSlide} style={{ cursor: 'pointer' }}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.5 12L19 12M11 18C11 18 5 13.581 5 12C5 10.419 11 6 11 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="sec-icon1" onClick={nextSlide} style={{ cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18.5 12L5 12M13 18C13 18 19 13.581 19 12C19 10.419 13 6 13 6" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section column starts */}
      <section className="sec-color">
        <div className="container">
          <div className="sec-it">
            <span className="new-rec" data-aos={getAnimation("fade-down", "fade-up")} data-aos-duration={isMobile ? "600" : "800"}>Recruitment</span>
            <div className="sec-recuitment">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12" data-aos={getAnimation("zoom-in-up", "fade-up")} data-aos-delay={isMobile ? "0" : "0"}>
                  <div className="sec-col1"></div>
                  <br />
                  <div className="row-col1">
                    <h6 data-aos={getAnimation("fade-right", "fade-up")} data-aos-delay={isMobile ? "100" : "100"}>IT  Hiring</h6>
                    <p data-aos={getAnimation("fade-up", "fade-up")} data-aos-delay={isMobile ? "150" : "150"}>Connecting your business with top-tier developers and designers. We source the tech experts you need to build and scale faster</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" data-aos={getAnimation("zoom-in-up", "fade-up")} data-aos-delay={isMobile ? "100" : "100"}>
                  <div className="sec-col2"></div>
                  <br />
                  <div className="row-col1">
                    <h6 data-aos={getAnimation("fade-right", "fade-up")} data-aos-delay={isMobile ? "200" : "200"}>BPO Hiring</h6>
                    <p data-aos={getAnimation("fade-up", "fade-up")} data-aos-delay={isMobile ? "250" : "250"}>Providing skilled customer support and back-office staff. We help you scale your operations with reliable, professional teams</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" data-aos={getAnimation("zoom-in-up", "fade-up")} data-aos-delay={isMobile ? "200" : "200"}>
                  <div className="sec-col3"></div>
                  <br />
                  <div className="row-col1">
                    <h6 data-aos={getAnimation("fade-right", "fade-up")} data-aos-delay={isMobile ? "300" : "300"}>Bulk Hiring</h6>
                    <p data-aos={getAnimation("fade-up", "fade-up")} data-aos-delay={isMobile ? "350" : "350"}>Scaling your workforce rapidly without compromising quality. We handle large-scale recruitment drives for your growing business needs</p>
                  </div>
                </div>
              </div>
              <br />
            </div>
            <br />
            <br />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MovsacServices;