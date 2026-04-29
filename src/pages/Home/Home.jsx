import React, { useState, useRef } from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    const videoRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const [currentVideo, setCurrentVideo] = useState(1);
    const [activeFilter, setActiveFilter] = useState('ai');
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [expandedAccordion, setExpandedAccordion] = useState(0);
    const testimonialRef = useRef(null);

    const testimonials = [
        {
            quote: "The delivery approach was clear, consistent, and aligned to our business goals. The team helped us move quickly without sacrificing quality, and the collaboration with product and UX was outstanding.",
            name: "Mohd Gufran",
            role: "Owner of Qumash fashion",
            avatar: "img/Home/fm.png",
            color: "var(--red-button-color)"
        },

        {
            quote: "Movsac Solutions offers a high caliber of resources skilled in Microsoft Azure, .NET, mobile & Quality Assurance. Over the past three years, we were very pleased with the service provided by Movsac Solutions development teams & executive management.",
            name: "Nava Navrozashvili",
            role: "Product Manager, Flyhex",
            avatar: "img/Home/male.png",
            color: "#4f4c7d"
        }
    ];

    const faqs = [
        {
            id: 1,
            question: "What specific services does your agency offer?",
            answer: "We offer a comprehensive range of services including strategic technology consulting, AI and data analytics solutions, cloud operations, cybersecurity, digital product development, software engineering, and digital transformation consulting. Our team specializes in helping organizations move from strategy to reliable systems in production."
        },
        {
            id: 2,
            question: "How does your agency differentiate itself from competitors?",
            answer: "Movsac stands out through our combination of strong architecture expertise, data engineering capabilities, and AI-driven solutions. We focus on delivering secure, scalable digital systems with measurable business impact, and our team brings deep technical knowledge across multiple platforms and industries."
        },
        {
            id: 3,
            question: "What is your agency's approach to client communication?",
            answer: "We maintain clear, consistent communication aligned with your business goals. Our transparent collaboration approach involves regular updates, stakeholder alignment, and dedicated account management to ensure your vision is understood and executed flawlessly."
        },
        {
            id: 4,
            question: "What is the typical timeline for project completion?",
            answer: "Project timelines vary based on complexity and scope. For MVP development, we typically deliver in 8 weeks. Larger transformations range from 3-12 months. We work with you to establish realistic timelines and maintain 95% on-time delivery across our projects."
        },
        {
            id: 5,
            question: "Do you offer ongoing support after project delivery?",
            answer: "Yes! We provide comprehensive post-launch support including 24/7 monitoring, maintenance, performance optimization, and continuous improvement. Our support packages are tailored to your needs and can scale as your business grows."
        },
        {
            id: 6,
            question: "What are your pricing models for different services?",
            answer: "We offer flexible pricing models including fixed-price projects, time-and-materials engagement, dedicated team resources, and retainer-based support. Each model is customized based on your project requirements, timeline, and budget. Contact our sales team for a detailed quote."
        }
    ];

    const activeTestimonial = testimonials[testimonialIndex];

    const toggleAccordion = (id) => {
        setExpandedAccordion(expandedAccordion === id ? null : id);
    };

    const scrollToTestimonial = (index) => {
        setTestimonialIndex(index);
        if (!testimonialRef.current) return;

        const cards = testimonialRef.current.querySelectorAll('.testimonial-card');
        const card = cards[index];
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    };

    const nextTestimonial = () => {
        scrollToTestimonial((testimonialIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        scrollToTestimonial((testimonialIndex - 1 + testimonials.length) % testimonials.length);
    };

    // ▶️ Play / Pause toggle
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // 🔁 Auto switch video on end
    const handleEnded = () => {
        if (currentVideo === 1) {
            setCurrentVideo(2);
        } else {
            setCurrentVideo(1); // loop back
        }

        // auto play next video
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }, 100);
    };

    return (
        <Layout>

{/* ✅ 2. Helmet yahan add kiya - PDF Page 1 ke mutabiq */}
<Helmet>
    <title>IT Services – Software & Web Development Movsac</title>
    <meta property="og:title" content="IT Services – Software & Web Development | Movsac" />

    <meta 
        name="description" 
        content="Movsac offers IT services including web development, mobile apps, software solutions, and digital transformation for modern businesses." 
    />
    <meta 
        name="keywords" 
        content="IT services, software development, web development, mobile apps" 
    />
    <meta property="og:description" content="Movsac offers IT services including web development, mobile apps, software solutions, and digital transformation for modern businesses." />
    <meta property="og:image" content="/img/Home/preview-image.png" />
    <meta property="og:url" content="https://www.movsac.com/home" />
    <meta property="og:url" content="https://www.movsac.com/" />

</Helmet>

            <section className="hero-section">
                <div className="container">
                    {/* Hero Header - Title + Description */}
                    <div className="row align-items-start justify-content-between">
                        <div className="col-lg-7">
                            <h1 className="hero-title" data-aos="fade-up" data-aos-duration="1000">
                                Engineering the Next Generation<br />
                                of Digital System with <span className="hero-highlight">Movsac</span>
                            </h1>
                        </div>
                        <div className="col-lg-4">
                            <p className="hero-text" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                Movsac engineers secure, scalable digital systems by combining strong architecture, data engineering, and AI capabilities, helping organizations move from strategy to reliable systems in production.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video-section">
                <div className="container py-5">
                    {/* Video Container */}
                    <div className="row video-row">
                        <div className="col-12 video-wrapper">
                            {/* Video - Autoplay on load */}
                            <video
                                ref={videoRef}
                                className="hero-video"
                                autoPlay
                                muted
                                playsInline
                                onClick={togglePlay}
                                onEnded={handleEnded}
                                key={currentVideo}
                                data-aos="fade-in"
                                data-aos-duration="1000"
                            >
                                <source
                                    src={
                                        currentVideo === 1
                                            ? "img/video-Home.mp4"
                                            : "img/video-Home2.mp4"
                                    }
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>

                            {/* Custom Play/Pause Button - Show when paused */}
                            {!isPlaying && (
                                <button
                                    className="play-btn"
                                    aria-label="Play video"
                                    onClick={togglePlay}
                                >
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="d-flex pt-5 justify-content-center align-items-center gap-5 flex-wrap">
                        <img src="img/Home/air.png" alt="" className='img-fluid' data-aos="zoom-in" data-aos-duration="1000" />
                        <img src="img/Home/rail.png" alt="" className='img-fluid' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" />
                        <img src="img/Home/clerk.png" alt="" className='img-fluid' data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" />
                        <img src="img/Home/min.png" alt="" className='img-fluid' data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" />
                        <img src="img/Home/tri.png" alt="" className='img-fluid' data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000" />
                        <img src="img/Home/air2.png" alt="" className='img-fluid' data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" />
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    {/* Section Header */}
                    <div className="row align-items-center justify-content-between mb-5">
                        <div className="col-lg-8">
                            <h2 className="services-title" data-aos="fade-up" data-aos-duration="1000">
                                Beyond Development<br />
                                We Deliver <span className="services-highlight">Transformation</span>
                            </h2>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <Link 
                            to="/services"
                             className="btn-see-all text-decoration-none" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                See All Services
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.50033 5.54128C7.50033 5.54128 13.2822 5.08901 14.0965 5.90321C14.9107 6.71741 14.4583 12.4994 14.4583 12.4994M13.7503 6.24935L5.41699 14.5827"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="row services-grid">
                        {/* Service Card 1 */}
                        <div className="service-card" data-aos="fade-up" data-aos-duration="1000">
                            <div className="service-icon">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="4" fill="#CF3034" fillOpacity="0.08" />
                                    <path d="M20 30L18 24H10L12 30H20ZM20 30H24" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 21V20.5C20 18.6144 20 17.6716 19.4142 17.0858C18.8284 16.5 17.8856 16.5 16 16.5C14.1144 16.5 13.1716 16.5 12.5858 17.0858C12 17.6716 12 18.6144 12 20.5V21" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M27 21C27 22.1046 26.1046 23 25 23C23.8954 23 23 22.1046 23 21C23 19.8954 23.8954 19 25 19C26.1046 19 27 19.8954 27 21Z" stroke="#CF3034" strokeWidth="1.5" />
                                    <path d="M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z" stroke="#CF3034" strokeWidth="1.5" />
                                    <path d="M22 25.5H28C29.1046 25.5 30 26.3954 30 27.5V28C30 29.1046 29.1046 30 28 30H27" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h4 className="service-name" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">IT Solutions</h4>
                            <p className="service-desc" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
→ IT solutions help businesses improve efficiency and performance by using modern technology, ensuring secure, scalable, and reliable systems for smooth operations.
                            </p>
                        </div>

                        <div className="service-card" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <div className="service-icon">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="4" fill="#CF3034" fillOpacity="0.08" />
                                    <path d="M20 30L18 24H10L12 30H20ZM20 30H24" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 21V20.5C20 18.6144 20 17.6716 19.4142 17.0858C18.8284 16.5 17.8856 16.5 16 16.5C14.1144 16.5 13.1716 16.5 12.5858 17.0858C12 17.6716 12 18.6144 12 20.5V21" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M27 21C27 22.1046 26.1046 23 25 23C23.8954 23 23 22.1046 23 21C23 19.8954 23.8954 19 25 19C26.1046 19 27 19.8954 27 21Z" stroke="#CF3034" strokeWidth="1.5" />
                                    <path d="M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z" stroke="#CF3034" strokeWidth="1.5" />
                                    <path d="M22 25.5H28C29.1046 25.5 30 26.3954 30 27.5V28C30 29.1046 29.1046 30 28 30H27" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h4 className="service-name" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Management Consulting</h4>
                            <p className="service-desc" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
→ Management consulting helps organizations solve complex problems and thrive by providing expert advice and innovative strategies.
                            </p>
                        </div>

                        <div className="service-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <div className="service-icon">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="4" fill="#CF3034" fillOpacity="0.08" />
                                    <path d="M20 30L18 24H10L12 30H20ZM20 30H24" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 21V20.5C20 18.6144 20 17.6716 19.4142 17.0858C18.8284 16.5 17.8856 16.5 16 16.5C14.1144 16.5 13.1716 16.5 12.5858 17.0858C12 17.6716 12 18.6144 12 20.5V21" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M27 21C27 22.1046 26.1046 23 25 23C23.8954 23 23 22.1046 23 21C23 19.8954 23.8954 19 25 19C26.1046 19 27 19.8954 27 21Z" stroke="#CF3034" strokeWidth="1.5" />
                                    <path d="M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z" stroke="#CF3034" strokeWidth="1.5" />
                                    <path d="M22 25.5H28C29.1046 25.5 30 26.3954 30 27.5V28C30 29.1046 29.1046 30 28 30H27" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h4 className="service-name" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Staff Augmentation</h4>
                            <p className="service-desc" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
→ Staff augmentation brings the right talent to your team quickly, helping you scale up and meet your business goals with ease.
                            </p>
                        </div>

                        <div className="service-card" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <div className="service-icon">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="4" fill="#CF3034" fillOpacity="0.08" />
                                    <path d="M20 30L18 24H10L12 30H20ZM20 30H24" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 21V20.5C20 18.6144 20 17.6716 19.4142 17.0858C18.8284 16.5 17.8856 16.5 16 16.5C14.1144 16.5 13.1716 16.5 12.5858 17.0858C12 17.6716 12 18.6144 12 20.5V21" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M27 21C27 22.1046 26.1046 23 25 23C23.8954 23 23 22.1046 23 21C23 19.8954 23.8954 19 25 19C26.1046 19 27 19.8954 27 21Z" stroke="#CF3034" strokeWidth="1.5" />
                                    <path d="M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z" stroke="#CF3034" strokeWidth="1.5" />
                                    <path d="M22 25.5H28C29.1046 25.5 30 26.3954 30 27.5V28C30 29.1046 29.1046 30 28 30H27" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h4 className="service-name" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Business Solutions / Delivery & Integration</h4>
                            <p className="service-desc" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
→ Business solutions and delivery & integration ensure your systems work seamlessly together, providing efficient and effective solutions tailored to your needs.
                            </p>
                        </div>

                        <div className="service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                            <div className="service-icon">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="4" fill="#CF3034" fillOpacity="0.08" />
                                    <path d="M20 30L18 24H10L12 30H20ZM20 30H24" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 21V20.5C20 18.6144 20 17.6716 19.4142 17.0858C18.8284 16.5 17.8856 16.5 16 16.5C14.1144 16.5 13.1716 16.5 12.5858 17.0858C12 17.6716 12 18.6144 12 20.5V21" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M27 21C27 22.1046 26.1046 23 25 23C23.8954 23 23 22.1046 23 21C23 19.8954 23.8954 19 25 19C26.1046 19 27 19.8954 27 21Z" stroke="#CF3034" strokeWidth="1.5" />
                                    <path d="M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z" stroke="#CF3034" strokeWidth="1.5" />
                                    <path d="M22 25.5H28C29.1046 25.5 30 26.3954 30 27.5V28C30 29.1046 29.1046 30 28 30H27" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h4 className="service-name" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Strategic Technology Consulting</h4>
                            <p className="service-desc" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                              →  From architecture audits to digital transformation strategy, we help leaders align technology with business goals for measurable ROI.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="skills-section py-5">
                <div className="container">
                    {/* Header Row */}
                    <div className="row mb-5 align-items-start">
                        <div className="col-lg-7">
                            <h2 className="skills-main-title" data-aos="fade-up" data-aos-duration="1000">
                                One of the pioneers of IT<br />
                                solutions is <span className="highlight-text">Movsac</span>
                            </h2>
                        </div>
                        <div className="col-lg-5">
                            <p className="skills-sub-text" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                Movsac engineers secure, scalable digital systems by combining
                                strong architecture, data engineering, and AI capabilities, helping
                                organizations move from strategy to reliable systems in production.
                            </p>
                        </div>
                    </div>

                    {/* Bento Grid Row */}
                    <div className="row g-4">
                        {/* Left Column */}
                        <div className="col-lg-4" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="skill-card small-card mb-4">
                                <img src="img/Home/ag.png" alt="Agile" />
                                <div className="card-overlay">
                                    <span className="percentage" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">75%</span>
                                    <h4 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Agile Approaches</h4>
                                    <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Transform your work flow with Dynamic Methodologies Tailored for Success.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column (Large Image) */}
                        <div className="col-lg-8" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                            <div className="skill-card large-card-top">
                                <img src="img/Home/thre.png" alt="Collaborative" />
                                <div className="card-overlay">
                                    <span className="percentage" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">85%</span>
                                    <h4 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Collaborative Tools</h4>
                                    <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Enhance Teamwork and Communication with our Latest Platforms.</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row Left (Wide Image) */}
                        <div className="col-lg-8" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="skill-card large-card-bottom">
                                <img src="img/Home/one.png" alt="Data Driven" />
                                <div className="card-overlay">
                                    <span className="percentage" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">70%</span>
                                    <h4 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Data-Driven Insights</h4>
                                    <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Make Informed Decisions with Comprehensive Analytics and Reporting.</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row Right */}
                        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                            <div className="skill-card small-card">
                                <img src="img/Home/two.png" alt="Scalable" />
                                <div className="card-overlay">
                                    <span className="percentage" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">90%</span>
                                    <h4 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Scalable Solutions</h4>
                                    <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Adapt and Grow Your Business with Flexible Options from Movsac.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="innovation-section">
                <div className="container">
                    <div className="row align-items-center justify-content-between mb-5">
                        <div className="col-lg-8">
                            <h2 className="innovation-main-title" data-aos="fade-up" data-aos-duration="1000">
                                Innovation,
                                Engineered by <br /> <span className="innovation-highlight">Movsac</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="innovation-tabs d-flex flex-wrap gap-3">
                                <button
                                    type="button"
                                    className={`btn btn-pill ${activeFilter === 'ai' ? 'active' : ''}`}
                                    onClick={() => setActiveFilter('ai')}
                                    data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000"
                                >
                                    AI, Data and Analytics Solutions
                                </button>
                                <button
                                    type="button"
                                    className={`btn btn-pill ${activeFilter === 'cloud' ? 'active' : ''}`}
                                    onClick={() => setActiveFilter('cloud')}
                                    data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                                >
                                    Cloud Operations and Cybersecurity
                                </button>
                                <button
                                    type="button"
                                    className={`btn btn-pill ${activeFilter === 'product' ? 'active' : ''}`}
                                    onClick={() => setActiveFilter('product')}
                                    data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
                                >
                                    Digital Product Development & Engineering
                                </button>
                                <button
                                    type="button"
                                    className={`btn btn-pill ${activeFilter === 'strategy' ? 'active' : ''}`}
                                    onClick={() => setActiveFilter('strategy')}
                                    data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"
                                >
                                    Strategic Technology Consulting
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-4 gy-4">
                        {activeFilter === 'ai' && (
                            <>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="innovation-card h-100">
                                        <div className="innovation-card-img">
                                            <img src="img/Home/ba.png" alt="Green Tech Innovations" />
                                        </div>
                                        <div className="innovation-card-body">
                                            <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Green Tech Innovations</h3>
                                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Implement renewable energy systems for a city-wide public transportation network.</p>
                                        </div>
                                        <div className="innovation-card-stats">
                                            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"><strong>85%</strong><span>Reduced Carbon Footprint</span></div>
                                            <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"><strong>500+</strong><span>Smart Energy Management</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                    <div className="innovation-card h-100">
                                        <div className="innovation-card-img">
                                            <img src="img/Home/cup.png" alt="Data Analytics" />
                                        </div>
                                        <div className="innovation-card-body">
                                            <h3 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Smart Analytics</h3>
                                            <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Turn data into actionable insights with AI-driven dashboards and automation.</p>
                                        </div>
                                        <div className="innovation-card-stats">
                                            <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000"><strong>85%</strong><span>Reduced Carbon Footprint</span></div>
                                            <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000"><strong>500+</strong><span>Smart Energy Management</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                                    <div className="innovation-card h-100">
                                        <div className="innovation-card-img">
                                            <img src="img/Home/spk.png" alt="Analytics Platform" />
                                        </div>
                                        <div className="innovation-card-body">
                                            <h3 data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Modern Platforms</h3>
                                            <p data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">Enable scalable AI products with secure cloud-native architecture and seamless delivery.</p>
                                        </div>
                                        <div className="innovation-card-stats">
                                            <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000"><strong>85%</strong><span>Reduced Carbon Footprint</span></div>
                                            <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000"><strong>500+</strong><span>Smart Energy Management</span></div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {activeFilter === 'cloud' && (
                            <>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="innovation-card h-100">
                                        <div className="innovation-card-img">
                                            <img src="img/Home/one.png" alt="Cloud Migration" />
                                        </div>
                                        <div className="innovation-card-body">
                                            <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Cloud Migration</h3>
                                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Move systems to the cloud with minimal risk and maximum performance.</p>
                                        </div>
                                        <div className="innovation-card-stats">
                                            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"><strong>99.9%</strong><span>Uptime Guarantee</span></div>
                                            <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"><strong>24/7</strong><span>Support Coverage</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                    <div className="innovation-card h-100">
                                        <div className="innovation-card-img">
                                            <img src="img/Home/ba.png" alt="Security" />
                                        </div>
                                        <div className="innovation-card-body">
                                            <h3 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Cybersecurity</h3>
                                            <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Protect mission-critical systems with advanced detection and response.</p>
                                        </div>
                                        <div className="innovation-card-stats">
                                            <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000"><strong>30%</strong><span>Improved Risk Posture</span></div>
                                            <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000"><strong>200+</strong><span>Completed Audits</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                                    <div className="innovation-card h-100">
                                        <div className="innovation-card-img">
                                            <img src="img/Home/two.png" alt="Operations" />
                                        </div>
                                        <div className="innovation-card-body">
                                            <h3 data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Secure Operations</h3>
                                            <p data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">Implement strong operations controls with resilient and compliant infrastructure.</p>
                                        </div>
                                        <div className="innovation-card-stats">
                                            <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000"><strong>180+</strong><span>Compliance Checks</span></div>
                                            <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000"><strong>9/10</strong><span>Security Rating</span></div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {activeFilter === 'product' && (
                            <>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="innovation-card h-100">
                                        <div className="innovation-card-img">
                                            <img src="img/Home/one.png" alt="Product Design" />
                                        </div>
                                        <div className="innovation-card-body">
                                            <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Product Design</h3>
                                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Create digital products with elegant interfaces and strong usability.</p>
                                        </div>
                                        <div className="innovation-card-stats">
                                            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"><strong>4.8/5</strong><span>User Satisfaction</span></div>
                                            <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"><strong>80%</strong><span>Retention Growth</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                    <div className="innovation-card h-100">
                                        <div className="innovation-card-img">
                                            <img src="img/Home/ba.png" alt="Agile Delivery" />
                                        </div>
                                        <div className="innovation-card-body">
                                            <h3 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Agile Delivery</h3>
                                            <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Deliver products fast with iterative planning and continuous improvement.</p>
                                        </div>
                                        <div className="innovation-card-stats">
                                            <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000"><strong>8 WEEKS</strong><span>To MVP</span></div>
                                            <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000"><strong>95%</strong><span>On-Time Releases</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                                    <div className="innovation-card h-100">
                                        <div className="innovation-card-img">
                                            <img src="img/Home/spk.png" alt="Scale" />
                                        </div>
                                        <div className="innovation-card-body">
                                            <h3 data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Scalable Builds</h3>
                                            <p data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">Support growth with resilient platforms designed for high demand.</p>
                                        </div>
                                        <div className="innovation-card-stats">
                                            <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000"><strong>100%</strong><span>Scalable Architecture</span></div>
                                            <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000"><strong>50+</strong><span>Projects Delivered</span></div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {activeFilter === 'strategy' && (
                            <>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="innovation-card h-100">
                                        <div className="innovation-card-img">
                                            <img src="img/Home/one.png" alt="Strategy" />
                                        </div>
                                        <div className="innovation-card-body">
                                            <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Strategic Roadmap</h3>
                                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Plan technology investments that align with your business goals.</p>
                                        </div>
                                        <div className="innovation-card-stats">
                                            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"><strong>30%</strong><span>Faster Delivery</span></div>
                                            <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"><strong>90%</strong><span>Strategy Adoption</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                    <div className="innovation-card h-100">
                                        <div className="innovation-card-img">
                                            <img src="img/Home/two.png" alt="Advisory" />
                                        </div>
                                        <div className="innovation-card-body">
                                            <h3 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Technology Advisory</h3>
                                            <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Secure expert guidance for the right tools, platforms and teams.</p>
                                        </div>
                                        <div className="innovation-card-stats">
                                            <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000"><strong>200+</strong><span>Advisory Hours</span></div>
                                            <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000"><strong>80%</strong><span>Client Satisfaction</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                                    <div className="innovation-card h-100">
                                        <div className="innovation-card-img">
                                            <img src="img/Home/thre.png" alt="Transformation" />
                                        </div>
                                        <div className="innovation-card-body">
                                            <h3 data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Digital Transformation</h3>
                                            <p data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">Drive end-to-end change with measurable business impact.</p>
                                        </div>
                                        <div className="innovation-card-stats">
                                            <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000"><strong>70%</strong><span>Process Efficiency</span></div>
                                            <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000"><strong>100%</strong><span>Stakeholder Alignment</span></div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
            
            {/* testimonial-Home-section */}
            <section className="testimonial-Home py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between mb-5">
                        <div className="col-lg-7">
                            <p className="testimonial-overline" data-aos="fade-up" data-aos-duration="1000"></p>
                            <h2 className="testimonial-title" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                Your Trust, Our Motivations <br /> Clients <span>Feedback</span>
                            </h2>
                        </div>
                    </div>

                    <div className="row gx-4 gy-4 testimonial-grid">
                        {/* Red Large Card - col-lg-6 */}
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="testimonial-card testimonial-card-large" style={{ borderColor: activeTestimonial.color }}>
                                <div className="testimonial-card-top">
                                    <div className="testimonial-avatar">
                                        <img src={activeTestimonial.avatar} alt={activeTestimonial.name} />
                                    </div>
                                    <div className="testimonial-quote-mark"><svg width="52" height="42" viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.3333 42V31.6721C32.4444 30.9377 34.9778 29.6066 36.9333 27.6787C38.9778 25.659 40.3111 23.318 40.9333 20.6557H32V0H52V11.9803C52 20.059 50.0889 26.7148 46.2667 31.9475C42.4444 37.0885 36.8 40.4393 29.3333 42ZM0 42V31.6721C3.11111 30.9377 5.64445 29.6066 7.6 27.6787C9.64445 25.659 10.9778 23.318 11.6 20.6557H2.66667V0H22.6667V11.9803C22.6667 20.059 20.7556 26.7148 16.9333 31.9475C13.1111 37.0885 7.46667 40.4393 0 42Z" fill="white" fillOpacity="0.16" />
                                    </svg>
                                    </div>
                                </div>
                                <div className="testimonial-card-body">
                                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">{activeTestimonial.quote}</p>
                                </div>
                                <div className="testimonial-card-footer">
                                    <h4 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">{activeTestimonial.name}</h4>
                                    <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">{activeTestimonial.role}</span>
                                </div>
                            </div>
                        </div>

                        {/* Sirf 2 small cards red ke baad - col-lg-3 each = total 6+3+3=12 */}
                        {testimonials.slice(0, 2).map((item, index) => (
                            <div key={item.name} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 200} data-aos-duration="1000">
                                <div className={`testimonial-card testimonial-card-small ${testimonialIndex === index ? 'active' : ''}`}>
                                    <div className="testimonial-small-img">
                                        <img src={item.avatar} alt={item.name}  className='roud'/>
                                    </div>
                                    <div className="testimonial-small-content">
                                        <h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">{item.name}</h5>
                                        <span data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">{item.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Buttons end mein right side pe */}
                    <div className="row mt-4">
                        <div className="col-12 text-end">
                            <div className="testimonial-controls">
                                <button type="button" className="testimonial-arrow" onClick={prevTestimonial} aria-label="Previous testimonial" data-aos="fade-up" data-aos-duration="1000"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 12L19 12M11 18C11 18 5 13.581 5 12C5 10.419 11 6 11 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </button>
                                <button type="button" className="testimonial-arrow" onClick={nextTestimonial} aria-label="Next testimonial" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="scale(-1, 1) translate(-24, 0)">
                                        <path d="M5.5 12L19 12M11 18C11 18 5 13.581 5 12C5 10.419 11 6 11 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* accordion-Home */}
            <section className='accordion-Home py-5'>
                <div className="container">
                    {/* Header */}
                    <div className="row mb-5 align-items-center justify-content-between">
                        <div className="col-lg-8">
                            <h2 className="accordion-title" data-aos="fade-up" data-aos-duration="1000">
                                Everything You Need to Know:<br />
                                Some Important <span className="accordion-highlight">FAQs</span>
                            </h2>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <p className="accordion-hint" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Can't find what you're looking for? We've gathered the most common hurdles and their solutions right here.</p>
                        </div>
                    </div>

                    {/* Accordion Items */}
                    <div className="row">
                        <div className="col-12">
                            <div className="accordion-wrapper" >
                                {faqs.map((faq, index) => (
                                    <div key={faq.id} className={`accordion-item ${expandedAccordion === faq.id ? 'active' : ''}`}  >
                                        <button
                                            className="accordion-button"
                                            onClick={() => toggleAccordion(faq.id)}
                                            aria-expanded={expandedAccordion === faq.id}
                                        >
                                            <span className="accordion-question" >{faq.question}</span>
                                            <span className="accordion-arrow">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.5 12L5 12M13 18C13 18 19 13.581 19 12C19 10.419 13 6 13 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </button>
                                        <div className="accordion-content">
                                            <div className="accordion-body" >
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;