import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'; // added this
import Layout from '../../components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';
const counterData = [
  { value: 15, suffix: '+', label: 'Years of experience' },
  { value: 550, suffix: '+', label: 'Projects executed' },
  { value: 700, suffix: '+', label: 'Customers worldwide' },
  { value: 440, suffix: '+', label: 'Full-Time IT Professionals' },
];

const About = () => {
  const counterRefs = useRef([]);
  const counterSectionRef = useRef(null);
  const animationStarted = useRef(false);
  const location = useLocation(); // added this

  // AOS Initialize
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  // ✅ YE LOGIC WAPAS ADD KIYA HAI - Iske bagair scrolling nahi chalegi
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          const navbarHeight = 90; // Header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]); // Trigger on location change

  // Counter Animation Logic
  useEffect(() => {
    const animateCounters = () => {
      counterData.forEach((counter, index) => {
        const target = counter.value;
        const suffix = counter.suffix || '';
        const duration = 1200;
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const current = Math.floor(progress * target);
          if (counterRefs.current[index]) {
            counterRefs.current[index].textContent = `${current}${suffix}`;
          }
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else if (counterRefs.current[index]) {
            counterRefs.current[index].textContent = `${target}${suffix}`;
          }
        };
        window.requestAnimationFrame(step);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted.current) {
            animationStarted.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );
    if (counterSectionRef.current) observer.observe(counterSectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>About Movsac – IT & Staffing Experts</title>
        <meta
          name="description"
          content="Movsac is a trusted IT and staffing company providing innovative tech solutions and skilled professionals to businesses worldwide."
        />
        <meta
          name="keywords"
          content="IT company, staffing company, tech experts, recruitment services"
        />
      </Helmet>

      <section className="case-study-hero" style={{
        // linear-gradient se image thodi dark ho jayegi takay white text saaf nazar aaye
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/img/about/about-main.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '150px', // Navbar ki height ke liye space (Adjust as needed)
        paddingBottom: '80px',
        // Section ko achi height daine ke liye
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 about-content">
              <h2 className="hero-title" data-aos="fade-up" style={{ color: '#ffffff' }}>

                <span data-aos="fade-up"> Life at</span>{' '}
                <span className="hero-highlight" data-aos="fade-up" style={{ color: '#CF3034' }}>Movsac</span>{' '}
                <span data-aos="fade-up">Where Innovation</span><br />
                <span data-aos="fade-up">Meets </span>{' '}
                <span data-aos="fade-up">Excellence</span>{' '}

              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECOND CONTENT SECTION - Wrapped in section like CTA */}
      <section className="about-detail-section" id='about'>
        <div className="container about-detail">
          <div className="row">
            {/* Left Content - 9 columns */}
            <div className="col-lg-9 col-md-8" >
              <h2 data-aos="fade-up" data-aos-duration="800">
                <span data-aos="fade-up" data-aos-delay="50">About</span>{' '}
                <span data-aos="fade-up" data-aos-delay="100">Us</span>
              </h2>
              <h6 data-aos="fade-up" data-aos-delay="150">
                <span data-aos="fade-up" data-aos-delay="200">Bridging</span>{' '}
                <span data-aos="fade-up" data-aos-delay="250">the</span>{' '}
                <span data-aos="fade-up" data-aos-delay="300">Gap</span>{' '}
                <span data-aos="fade-up" data-aos-delay="350">Between</span>{' '}
                <span data-aos="fade-up" data-aos-delay="400">Elite</span>{' '}
                <span data-aos="fade-up" data-aos-delay="450">Talent</span>{' '}
                <span data-aos="fade-up" data-aos-delay="500">and</span>{' '}
                <span data-aos="fade-up" data-aos-delay="550">Next-Gen</span>{' '}
                <span data-aos="fade-up" data-aos-delay="600">Technology</span>
              </h6>
              <p data-aos="fade-up" data-aos-delay="650">
                Movsac is a forward-thinking digital engineering firm dedicated to transforming complex business strategies into reliable, production-ready systems. With a core focus on strong architecture and scalable solutions, we empower organizations to navigate the digital landscape with confidence. Our mission is to bridge the gap between innovative ideas and functional reality through expert engineering.
              </p>

              <h6 data-aos="fade-up" data-aos-delay="700">
                <span data-aos="fade-up" data-aos-delay="750">Our</span>{' '}
                <span data-aos="fade-up" data-aos-delay="800">Journey</span>{' '}
                <span data-aos="fade-up" data-aos-delay="850">from</span>{' '}
                <span data-aos="fade-up" data-aos-delay="900">Vision</span>{' '}
                <span data-aos="fade-up" data-aos-delay="950">to</span>{' '}
                <span data-aos="fade-up" data-aos-delay="1000">Excellence</span>
              </h6>
              <p data-aos="fade-up" data-aos-delay="1050">
                Founded in 2023, Movsac began with a mission to bridge the gap between complex engineering and user-centric design. Our success story accelerated in early 2024 when we successfully delivered our first large-scale ERP solution, marking our transition into a trusted partner for global tech talent and digital transformation. Today, we continue to scale by combining innovation with reliability in every project we touch.
              </p>

              <h6 data-aos="fade-up" data-aos-delay="1100">
                <span data-aos="fade-up" data-aos-delay="1150">Precision</span>{' '}
                <span data-aos="fade-up" data-aos-delay="1200">in</span>{' '}
                <span data-aos="fade-up" data-aos-delay="1250">Design,</span>{' '}
                <span data-aos="fade-up" data-aos-delay="1300">Excellence</span>{' '}
                <span data-aos="fade-up" data-aos-delay="1350">in</span>{' '}
                <span data-aos="fade-up" data-aos-delay="1400">Delivery</span>
              </h6>
              <p data-aos="fade-up" data-aos-delay="1450">
                Our growth is powered by a deep commitment to high-quality UI/UX principles and cutting-edge AI integration. By the end of 2025, Movsac expanded its footprint into global IT recruitment, successfully placing top-tier developers in leading firms. We believe that every pixel and every line of code should serve a purpose, ensuring that our clients receive not just a product, but a competitive advantage in the digital marketplace.
              </p>
            </div>

            {/* Right Profile Card - 3 columns */}
            <div className="col-lg-3 col-md-4 about-img-profile" data-aos="fade-up" data-aos-delay="200">
              <div className="card text-white h-100">
                <img src="/img/about/Biography-Image.png" className="card-img h-100" alt="Biography" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          {/* Counter Section - Image Right Side */}
          <div className="row gx-3 gy-4 mt-5 align-items-stretch" ref={counterSectionRef}>
            {counterData.map((counter, index) => (
              <div key={counter.label} className="col-12 col-lg-2 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="counter-item d-flex flex-column justify-content-center h-100">
                  <h2 ref={(el) => (counterRefs.current[index] = el)}>
                    0<span>{counter.suffix}</span>
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={index * 100 + 50}>{counter.label}</p>
                </div>
              </div>
            ))}

            {/* Image - col-lg-4 = 4 columns (Total 12) */}
            <div className="col-md-3 col-lg-4 col-12 ">
              <img src="/img/about/aboutclient.jpg" className="img-fluid w-100 h-100" alt="" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THIRD MISSION AND VALUES SECTION START HERE */}
      <section className="mission-values-section" id='mission'>
        <div className="container mission-values">
          <div className="row">
            <div className="col-md-12">
              <h2 data-aos="fade-up" data-aos-duration="800">
                Mission and{' '}
                <span data-aos="fade-up" data-aos-delay="150" className="highlight-span">Values</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION CARDS SECTION */}
      <section className="mission-cards-section">
        <div className="container mission-card-sec py-5">
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="mission-card" data-aos="fade-up" data-aos-delay="0">
                <img src="/img/about/SolutionImage1.png" className="mission-card-img" alt="Empowering Innovation" data-aos="fade-up" data-aos-delay="50" />
                <div className="mission-card-body">
                  <h5 className="mission-card-title" data-aos="fade-up" data-aos-delay="100">
                    <span data-aos="fade-up" data-aos-delay="150">Empowering</span>{' '}
                    <span data-aos="fade-up" data-aos-delay="200">Innovation</span>
                  </h5>
                  <p className="mission-card-text" data-aos="fade-up" data-aos-delay="250">
                    Integrating advanced AI and modern design to build smart, future-ready digital solutions
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="mission-card" data-aos="fade-up" data-aos-delay="100">
                <img src="/img/about/SolutionImage2.png" className="mission-card-img" alt="Human-Centric Growth" data-aos="fade-up" data-aos-delay="150" />
                <div className="mission-card-body">
                  <h5 className="mission-card-title" data-aos="fade-up" data-aos-delay="200">
                    <span data-aos="fade-up" data-aos-delay="250">Human-Centric</span>{' '}
                    <span data-aos="fade-up" data-aos-delay="300">Growth</span>
                  </h5>
                  <p className="mission-card-text" data-aos="fade-up" data-aos-delay="350">
                    Connecting top-tier tech talent with global opportunities to foster a culture of shared success.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="mission-card" data-aos="fade-up" data-aos-delay="200">
                <img src="/img/about/SolutionImage3.png" className="mission-card-img" alt="Scalable Excellence" data-aos="fade-up" data-aos-delay="250" />
                <div className="mission-card-body">
                  <h5 className="mission-card-title" data-aos="fade-up" data-aos-delay="300">
                    <span data-aos="fade-up" data-aos-delay="350">Scalable</span>{' '}
                    <span data-aos="fade-up" data-aos-delay="400">Excellence</span>
                  </h5>
                  <p className="mission-card-text" data-aos="fade-up" data-aos-delay="450">
                    Engineering robust architectures and high-performance systems that grow seamlessly with your business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION - Now as a proper Section */}
      <section className="how-we-work-section py-5" id='how-we-work'>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className='mission-card-title' data-aos="fade-up" data-aos-duration="800">
                How We Work{' '}
                <span data-aos="fade-up" data-aos-delay="250" className="highlight-span ps-1">Function</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="work-steps">
                <div className="work-step" data-aos="fade-up" data-aos-delay="0">
                  <div className="step-number" data-aos="zoom-in" data-aos-delay="50">1</div>
                  <div className="step-content">
                    <h5 data-aos="fade-up" data-aos-delay="100">
                      <span data-aos="fade-up" data-aos-delay="150">Discovery</span>{' '}
                      <span data-aos="fade-up" data-aos-delay="200">&</span>{' '}
                      <span data-aos="fade-up" data-aos-delay="250">Strategy</span>
                    </h5>
                    <p data-aos="fade-up" data-aos-delay="300">
                      "Every great product starts with a deep understanding. We begin by analyzing your business goals, target audience, and market challenges. This phase is about asking the right questions to build a strategic roadmap that ensures your digital solution is not just beautiful, but also functional and result-oriented."
                    </p>
                  </div>
                </div>

                <div className="work-step" data-aos="fade-up" data-aos-delay="100">
                  <div className="step-number" data-aos="zoom-in" data-aos-delay="150">2</div>
                  <div className="step-content">
                    <h5 data-aos="fade-up" data-aos-delay="200">
                      <span data-aos="fade-up" data-aos-delay="250">Innovative</span>{' '}
                      <span data-aos="fade-up" data-aos-delay="300">UI/UX</span>{' '}
                      <span data-aos="fade-up" data-aos-delay="350">Design</span>
                    </h5>
                    <p data-aos="fade-up" data-aos-delay="400">
                      "We transform complex ideas into intuitive and engaging digital experiences. By focusing on user-centric design principles, we create seamless journeys that guide your customers effortlessly from the first click to the final conversion. Our goal is to blend aesthetic brilliance with functional precision, ensuring every pixel serves a purpose and enhances your brand's digital presence."
                    </p>
                  </div>
                </div>

                <div className="work-step" data-aos="fade-up" data-aos-delay="200">
                  <div className="step-number" data-aos="zoom-in" data-aos-delay="250">3</div>
                  <div className="step-content">
                    <h5 data-aos="fade-up" data-aos-delay="300">
                      <span data-aos="fade-up" data-aos-delay="350">Scalable</span>{' '}
                      <span data-aos="fade-up" data-aos-delay="400">Engineering</span>
                    </h5>
                    <p data-aos="fade-up" data-aos-delay="450">
                      "We bring designs to life with robust and future-proof technology. Our engineering team focuses on building high-performance systems using clean code and scalable architecture. Whether it's an ERP solution or a complex web app, we ensure your platform can handle increasing traffic and data without compromising on speed or security. We are not just builders for today; we engineer for your business's tomorrow."
                    </p>
                  </div>
                </div>

                <div className="work-step" data-aos="fade-up" data-aos-delay="300">
                  <div className="step-number" data-aos="zoom-in" data-aos-delay="350">4</div>
                  <div className="step-content">
                    <h5 data-aos="fade-up" data-aos-delay="400">
                      <span data-aos="fade-up" data-aos-delay="450">Launch</span>{' '}
                      <span data-aos="fade-up" data-aos-delay="500">&</span>{' '}
                      <span data-aos="fade-up" data-aos-delay="550">Support</span>
                    </h5>
                    <p data-aos="fade-up" data-aos-delay="600">
                      "The journey doesn't end at deployment. It's where real growth begins. We ensure a seamless transition by carefully launching your product to the live environment with zero downtime. Post-launch, we stay by your side to monitor performance, optimize features based on user feedback, and provide technical support to keep your systems running at peak efficiency. We are your long-term partners in scaling your digital success."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* COMPLIANCE & ADHERENCE SECTION - Now as a proper Section */}
      <section className="compliance-section py-5" id='compliance'>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 data-aos="fade-up" data-aos-duration="800">
                <span data-aos="fade-up" data-aos-delay="50">Compliance</span>{' '}
                <span data-aos="fade-up" data-aos-delay="100">&</span>{' '}
                <span data-aos="fade-up" data-aos-delay="150">Adherence</span>
              </h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="compliance-card" data-aos="fade-up" data-aos-delay="0">
                <div className="compliance-card-content">
                  <h5 data-aos="fade-up" data-aos-delay="50">
                    <span data-aos="fade-up" data-aos-delay="100">Data</span>{' '}
                    <span data-aos="fade-up" data-aos-delay="150">Privacy</span>{' '}
                    <span data-aos="fade-up" data-aos-delay="200">&</span>{' '}
                    <span data-aos="fade-up" data-aos-delay="250">Protection</span>
                  </h5>
                  <p data-aos="fade-up" data-aos-delay="300">
                    We follow strict data protection protocols like GDPR and ISO 27001 to keep your sensitive information encrypted and safe from unauthorized access
                  </p>
                </div>
                <div className="compliance-icon" data-aos="zoom-in" data-aos-delay="350">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M62.3633 11.6493C56.0567 8.51268 48.3333 6.66602 40 6.66602C31.6667 6.66602 23.9467 8.51268 17.6367 11.6493C14.5433 13.1893 12.9967 13.9593 11.5 16.3793C10.0033 18.7993 10 21.1427 10 25.826V37.4593C10 56.4027 25.14 66.936 33.91 71.446C36.3567 72.7027 37.5767 73.3327 40 73.3327C42.4233 73.3327 43.6433 72.7027 46.09 71.446C54.8567 66.9327 70 56.3993 70 37.456V25.826C70 21.1427 70 18.7993 68.5 16.3793C67 13.9593 65.4567 13.1893 62.3633 11.6493Z" stroke="#CF3034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M40.0003 29.9987V33.332M36.667 31.6654C36.667 32.5494 37.0182 33.3973 37.6433 34.0224C38.2684 34.6475 39.1163 34.9987 40.0003 34.9987C40.8844 34.9987 41.7322 34.6475 42.3573 34.0224C42.9825 33.3973 43.3337 32.5494 43.3337 31.6654C43.3337 30.7813 42.9825 29.9335 42.3573 29.3083C41.7322 28.6832 40.8844 28.332 40.0003 28.332C39.1163 28.332 38.2684 28.6832 37.6433 29.3083C37.0182 29.9335 36.667 30.7813 36.667 31.6654Z" stroke="#CF3034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M42.5 46.6667H37.5L40 35L42.5 46.6667Z" stroke="#CF3034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="compliance-card" data-aos="fade-up" data-aos-delay="100">
                <div className="compliance-card-content">
                  <h5 data-aos="fade-up" data-aos-delay="150">
                    <span data-aos="fade-up" data-aos-delay="200">Ethical</span>{' '}
                    <span data-aos="fade-up" data-aos-delay="250">&</span>{' '}
                    <span data-aos="fade-up" data-aos-delay="300">Sustainable</span>{' '}
                    <span data-aos="fade-up" data-aos-delay="350">Tech</span>
                  </h5>
                  <p data-aos="fade-up" data-aos-delay="400">
                    Your ideas stay yours. We provide 100% IP ownership and maintain strict Non-Disclosure Agreements (NDAs) to protect your business secrets."
                  </p>
                </div>
                <div className="compliance-icon" data-aos="zoom-in" data-aos-delay="450">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M74.7623 17.4252C76.0998 16.4502 76.3998 14.5752 75.4248 13.2377C74.4498 11.9002 72.5748 11.6002 71.2373 12.5752L61.9248 19.3502L60.6873 18.5252C58.2248 16.8752 55.3248 16.0002 52.3623 16.0002H26.9623C23.6248 16.0002 20.3998 17.1127 17.7873 19.1377L8.76231 12.5752C7.42481 11.6002 5.54981 11.9002 4.57481 13.2377C3.59981 14.5752 3.89981 16.4502 5.23731 17.4252L16.2373 25.4252C17.4373 26.2877 19.0748 26.1627 20.1248 25.1252L20.6123 24.6377C22.2998 22.9502 24.5873 22.0002 26.9748 22.0002H32.7623L21.2998 33.4627C19.3498 35.4127 19.3498 38.5752 21.2998 40.5377L21.3998 40.6377C27.2498 46.5002 36.7498 46.5002 42.6123 40.6377L45.9998 37.2502L58.2248 49.4752C60.1748 51.4252 60.1748 54.5877 58.2248 56.5502L56.9998 57.7752L53.1248 53.9002C51.9498 52.7252 50.0498 52.7252 48.8873 53.9002C47.7248 55.0752 47.7123 56.9752 48.8873 58.1377L52.3873 61.6377C50.1998 62.9377 47.7373 63.7252 45.1873 63.9502L39.1248 57.8752C37.9498 56.7002 36.0498 56.7002 34.8873 57.8752C33.7248 59.0502 33.7123 60.9502 34.8873 62.1127L36.7623 63.9877H36.2873C31.7748 63.9877 27.4498 62.2002 24.2623 59.0127L8.12481 42.8752C6.94981 41.7002 5.04981 41.7002 3.88731 42.8752C2.72481 44.0502 2.71231 45.9502 3.88731 47.1127L20.0248 63.2627C24.3373 67.5752 30.1873 70.0002 36.2873 70.0002H42.7623L42.8873 70.1252L43.0123 70.0002H43.7248C49.8248 70.0002 55.6748 67.5752 59.9873 63.2627L62.4748 60.7752C62.6248 60.6252 62.7623 60.4877 62.8998 60.3377C62.9873 60.2752 63.0623 60.2002 63.1373 60.1252L76.1248 47.1252C77.2998 45.9502 77.2998 44.0502 76.1248 42.8877C74.9498 41.7252 73.0498 41.7127 71.8873 42.8877L65.1623 49.6127C64.6373 48.0127 63.7498 46.5002 62.4748 45.2252L48.1248 30.8752C46.9498 29.7002 45.0498 29.7002 43.8873 30.8752L38.3748 36.3877C35.0623 39.7002 29.8123 39.8877 26.2873 36.9627L38.6248 24.6252C40.2998 22.9502 42.5748 22.0002 44.9498 21.9877H52.3873C54.1623 21.9877 55.8998 22.5127 57.3748 23.5002L60.3373 25.5002C61.3873 26.2002 62.7498 26.1627 63.7623 25.4252L74.7623 17.4252Z" fill="#CF3034" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="compliance-card" data-aos="fade-up" data-aos-delay="200">
                <div className="compliance-card-content">
                  <h5 data-aos="fade-up" data-aos-delay="250">
                    <span data-aos="fade-up" data-aos-delay="300">Intellectual</span>{' '}
                    <span data-aos="fade-up" data-aos-delay="350">Property</span>{' '}
                    <span data-aos="fade-up" data-aos-delay="400">Rights</span>
                  </h5>
                  <p data-aos="fade-up" data-aos-delay="450">
                    Our engineering practices focus on ethical coding, accessibility (WCAG) and sustainable digital solutions that serve everyone equally
                  </p>
                </div>
                <div className="compliance-icon" data-aos="zoom-in" data-aos-delay="500">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65 30H45V10H15V70H65V30ZM62.9297 25L50 12.0703V25H62.9297ZM12.5 5H50L70 25V72.5C70 73.163 69.7366 73.7989 69.2678 74.2678C68.7989 74.7366 68.163 75 67.5 75H12.5C11.837 75 11.2011 74.7366 10.7322 74.2678C10.2634 73.7989 10 73.163 10 72.5V7.5C10 6.83696 10.2634 6.20107 10.7322 5.73223C11.2011 5.26339 11.837 5 12.5 5ZM25 40H55V45H25V40ZM25 25H37.5V30H25V25ZM25 55H55V60H25V55Z" fill="#CF3034" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;