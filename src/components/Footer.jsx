import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    // AOS Initialize
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: 'ease-in-out'
        });
    }, []);

    return (
        <footer className="footer-section">
            <div className="footer-cta">
                <div className="container footer-cta-inner">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-7">
                            <h2 className="cta-title">
                                <span data-aos="fade-up" data-aos-delay="0">See</span>{' '}
                                <span data-aos="fade-up" data-aos-delay="50">How</span>{' '}
                                <span data-aos="fade-up" data-aos-delay="100">We</span>{' '}
                                <span data-aos="fade-up" data-aos-delay="150">Can</span>{' '}
                                <span data-aos="fade-up" data-aos-delay="200">Help</span>{' '}
                                <span data-aos="fade-up" data-aos-delay="250">Your</span>
                                <br />
                                <span data-aos="fade-up" data-aos-delay="300">Business</span>{' '}
                                <span className="highlight" data-aos="fade-up" data-aos-delay="350">Grow</span>{' '}
                                <span className="highlight" data-aos="fade-up" data-aos-delay="400">up</span>
                            </h2>
                        </div>
                        <div className="col-lg-5">
                            <div className="d-flex align-items-center footerend flex-column justify-content-end p-0">
                                <div className="text-md-end text-sm-start">
                                    <p className="cta-text mb-1" data-aos="fade-up" data-aos-delay="450">
                                        <span data-aos="fade-up" data-aos-delay="500">Ready</span>{' '}
                                        <span data-aos="fade-up" data-aos-delay="550">to</span>{' '}
                                        <span data-aos="fade-up" data-aos-delay="600">speak</span>{' '}
                                        <span data-aos="fade-up" data-aos-delay="650">with</span>{' '}
                                        <span data-aos="fade-up" data-aos-delay="700">an</span>{' '}
                                        <span data-aos="fade-up" data-aos-delay="750">expert?</span>
                                    </p>
                                    <p className="cta-subtext mb-0" data-aos="fade-up" data-aos-delay="800">
                                        <span data-aos="fade-up" data-aos-delay="850">Drop</span>{' '}
                                        <span data-aos="fade-up" data-aos-delay="900">a</span>{' '}
                                        <span data-aos="fade-up" data-aos-delay="950">message</span>
                                    </p>
                                </div>
                                <button className="btn-contact" data-aos="zoom-in" data-aos-delay="1000">
                                    <span data-aos="fade-up" data-aos-delay="1050">Contact</span>{' '}
                                    <span data-aos="fade-up" data-aos-delay="1100">us</span>
                                    <span data-aos="fade-up" data-aos-delay="1150">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.5 5.54C7.5 5.54 13.28 5.09 14.1 5.9C14.91 6.72 14.46 12.5 14.46 12.5M13.75 6.25L5.42 14.58"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-wave">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1360 61" fill="none">
                        <path
                            d="M0 60.5L506.944 60.5C529.47 60.5 550.505 49.2423 563 30.5C575.495 11.7577 596.53 0.5 619.056 0.5H736.944C759.47 0.5 780.505 11.7577 793 30.5C805.495 49.2423 826.53 60.5 849.056 60.5H1360"
                            stroke="#000"
                            strokeOpacity="0.12"
                        />
                    </svg>
                </div>
            </div>

            <div className="footer-clients">
                <div className="container">
                    <h5 className="clients-title" data-aos="fade-up" data-aos-delay="0">
                        <span data-aos="fade-up" data-aos-delay="50">Our</span>{' '}
                        <span data-aos="fade-up" data-aos-delay="100">Clients</span>
                    </h5>
                    <div className="clients-grid">
                        <div className="client-box" data-aos="fade-up" data-aos-delay="0">
                            <img src="/img/Footer-logos/bank.png" alt="DafinBank" className="client-logo" data-aos="zoom-in" data-aos-delay="50" />
                            <p className="client-desc" data-aos="fade-up" data-aos-delay="100">
                                Discover a simpler way to save, pay, and manage your money and business anytime, anywhere!
                            </p>
                        </div>
                        <div className="client-box" data-aos="fade-up" data-aos-delay="100">
                            <img src="/img/Footer-logos/cricle.png" alt="Expo Dubai" className="client-logo" data-aos="zoom-in" data-aos-delay="150" />
                            <p className="client-desc" data-aos="fade-up" data-aos-delay="200">
                                Explore advanced technology, stylish design, contemporary homes, cultural venues, dining, an...
                            </p>
                        </div>
                        <div className="client-box" data-aos="fade-up" data-aos-delay="200">
                            <img src="/img/Footer-logos/sgn.png" alt="Qumash" className="client-logo" data-aos="zoom-in" data-aos-delay="250" />
                            <p className="client-desc" data-aos="fade-up" data-aos-delay="300">
                                Qumash is a marketplace for unique global designs, aiming to connect the world and showcase...
                            </p>
                        </div>
                        <div className="client-box" data-aos="fade-up" data-aos-delay="300">
                            <img src="/img/Footer-logos/mash.png" alt="Qumash Fashion" className="client-logo" data-aos="zoom-in" data-aos-delay="350" />
                            <p className="client-desc" data-aos="fade-up" data-aos-delay="400">
                                At QUMASH FASHION, we redefine daily fashion for the modern man with a timeless approach.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-partners">
                <div className="footer-partners-inner">
                    <div className="container partners-grid justify-content-between">
                        <div>
                            <h6 className="partners-title" data-aos="fade-up" data-aos-delay="0">
                                <span data-aos="fade-up" data-aos-delay="50">Partnerships:</span>
                            </h6>
                            <div className="partners-logos">
                                <img src="/img/Footer-logos/Mirco.png" alt="Microsoft" data-aos="zoom-in" data-aos-delay="100" />
                                <img src="/img/Footer-logos/aws.png" alt="AWS" data-aos="zoom-in" data-aos-delay="150" />
                                <img src="/img/Footer-logos/Google.png" alt="Google Cloud" data-aos="zoom-in" data-aos-delay="200" />
                                <img src="/img/Footer-logos/wpp.png" alt="Premium Partner" data-aos="zoom-in" data-aos-delay="250" />
                            </div>
                        </div>
                        <div>
                            <h6 className="partners-title" data-aos="fade-up" data-aos-delay="300">
                                <span data-aos="fade-up" data-aos-delay="350">Recognized</span>{' '}
                                <span data-aos="fade-up" data-aos-delay="400">by:</span>
                            </h6>
                            <div className="recognized-logos">
                                <img src="/img/Footer-logos/star.png" alt="Clutch" data-aos="zoom-in" data-aos-delay="450" />
                                <img src="/img/Footer-logos/inc.png" alt="Inc. 5000" data-aos="zoom-in" data-aos-delay="500" />
                                <img src="/img/Footer-logos/year.png" alt="EY Entrepreneur of the Year" data-aos="zoom-in" data-aos-delay="550" />
                                <img src="/img/Footer-logos/For.png" alt="Forbes" data-aos="zoom-in" data-aos-delay="600" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-main">
                <div className="container">
                    <div className="footer-main-grid">
                        <div className="footer-brand" data-aos="fade-up" data-aos-delay="0">
                            <img src="/img/Footer-logos/Logf.png" alt="Movsac logo" className="footer-logo" data-aos="zoom-in" data-aos-delay="50" />
                            <div className="company-info">
                                <p data-aos="fade-up" data-aos-delay="100">Nowe Garbary Office Center</p>
                                <p data-aos="fade-up" data-aos-delay="150">ul. Małe Garbary 9</p>
                                <p data-aos="fade-up" data-aos-delay="200">61-756 Poznan, Poland</p>
                                <p className="vat-info" data-aos="fade-up" data-aos-delay="250">VAT-ID: PL7781454968</p>
                                <p className="vat-info" data-aos="fade-up" data-aos-delay="300">REGON: 300862280</p>
                                <p className="vat-info" data-aos="fade-up" data-aos-delay="350">KRS: 0000745671</p>
                                <p className="email" data-aos="fade-up" data-aos-delay="400">info@movsac.com</p>
                            </div>
                        </div>

                        <div className="cert-section" data-aos="fade-up" data-aos-delay="100">
                            <h6 className="cert-title" data-aos="fade-up" data-aos-delay="150">
                                <span data-aos="fade-up" data-aos-delay="200">Certificates:</span>
                            </h6>
                            <div className="certificates">
                                <img src="/img/Footer-logos/image1.png" alt="ISO Certificate" data-aos="zoom-in" data-aos-delay="250" />
                                <img src="/img/Footer-logos/image1.png" alt="ISO Certificate" data-aos="zoom-in" data-aos-delay="300" />
                                <img src="/img/Footer-logos/image1.png" alt="ISO Certificate" data-aos="zoom-in" data-aos-delay="350" />
                                <img src="/img/Footer-logos/image1.png" alt="ISO Certificate" data-aos="zoom-in" data-aos-delay="400" />
                            </div>
                        </div>

                        <div className="newsletter" data-aos="fade-up" data-aos-delay="200">
                            <h6 className="news-title" data-aos="fade-up" data-aos-delay="250">
                                <span data-aos="fade-up" data-aos-delay="300">Next</span>{' '}
                                <span data-aos="fade-up" data-aos-delay="350">in</span>{' '}
                                <span data-aos="fade-up" data-aos-delay="400">Commerce</span>{' '}
                                <span data-aos="fade-up" data-aos-delay="450">Newsletter</span>
                            </h6>
                            <p className="news-desc" data-aos="fade-up" data-aos-delay="500">
                                <span data-aos="fade-up" data-aos-delay="550">Trends</span>{' '}
                                <span data-aos="fade-up" data-aos-delay="600">&</span>{' '}
                                <span data-aos="fade-up" data-aos-delay="650">insights</span>{' '}
                                <span data-aos="fade-up" data-aos-delay="700">for</span>{' '}
                                <span data-aos="fade-up" data-aos-delay="750">commerce</span>{' '}
                                <span data-aos="fade-up" data-aos-delay="800">leaders</span>
                            </p>
                            <div className="newsletter-form" data-aos="fade-up" data-aos-delay="850">
                                <input type="email" placeholder="example@company.com" className="news-input" />
                                <button className="btn-subscribe" data-aos="zoom-in" data-aos-delay="900">
                                    <span data-aos="fade-up" data-aos-delay="950">Subscribe</span>{' '}
                                    <span data-aos="fade-up" data-aos-delay="1000">Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="bottom-row">
                        <p className="copyright" >
                            ©2026 Movsac. All rights reserved.
                        </p>
                        <div className="footer-links-bottom">
                            <a href="#privacy" >Privacy Policy</a>
                            <a href="#terms" >Terms of Use</a>
                            <a href="#sitemap" >Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;