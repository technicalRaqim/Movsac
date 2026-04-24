import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Layout from '../../components/Layout';
import AOS from 'aos';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');
    const formRef = useRef();

    useEffect(() => {
        AOS.init({
            duration: 400,
            once: true,
            offset: 50
        });
        emailjs.init('1rNo7Bv3dBUZJNftP');
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');

        const templateParams = {
            contactName: formRef.current.contactName.value,
            user_email: formRef.current.user_email.value,
            contactCompany: formRef.current.contactCompany.value,
            contactPhone: formRef.current.contactPhone.value,
            message: formRef.current.message.value
        };

        emailjs.send('service_n49sc5l', 'template_e7yzrby', templateParams)
            .then((result) => {
                console.log('SUCCESS!', result.text);
                setStatus('Thank you! Your message has been sent successfully.');
                formRef.current.reset();
            }, (error) => {
                console.log('FAILED...', error.text);
                setStatus('Failed to send. Please try again later.');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Layout>
            <section className="contact-hero">
                <div className="container">
                    <div className="row align-items-center justify-content-start">
                        <div className="col-lg-7">
                            <h2 className="hero-title">
                                <span data-aos="fade-up" data-aos-duration="400" data-aos-delay="0">Let's</span>{' '}
                                <span className="hero-highlight" data-aos="fade-up" data-aos-duration="400" data-aos-delay="50">Build</span>{' '}
                                <span data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">Something</span><br />
                                <span data-aos="fade-up" data-aos-duration="400" data-aos-delay="150">Extraordinary</span>{' '}
                                <span data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">Together</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-page mb-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7">
                            {status && (
                                <div className={`alert ${status.includes('Thank') ? 'alert-success' : 'alert-danger'} mb-4`}>
                                    {status}
                                </div>
                            )}
                            <div className="contact-intro mb-5">
                                <h2 className='fomhead' data-aos="fade-up" data-aos-delay="50">
                                    <span data-aos="fade-up" data-aos-delay="100">Let's</span>{' '}
                                    <span data-aos="fade-up" data-aos-delay="150">get</span>{' '}
                                    <span data-aos="fade-up" data-aos-delay="200">in</span>{' '}
                                    <span data-aos="fade-up" data-aos-delay="250">touch</span>
                                </h2>
                                <h3 className='fomsmhd' data-aos="fade-up" data-aos-delay="300">
                                    <span data-aos="fade-up" data-aos-delay="350">Fill</span>{' '}
                                    <span data-aos="fade-up" data-aos-delay="400">out</span>{' '}
                                    <span data-aos="fade-up" data-aos-delay="450">the</span>{' '}
                                    <span data-aos="fade-up" data-aos-delay="500">form</span>{' '}
                                    <span data-aos="fade-up" data-aos-delay="550">and</span>{' '}
                                    <span data-aos="fade-up" data-aos-delay="600">we'll</span>{' '}
                                    <span data-aos="fade-up" data-aos-delay="650">be</span>{' '}
                                    <span data-aos="fade-up" data-aos-delay="700">in</span>{' '}
                                    <span data-aos="fade-up" data-aos-delay="750">touch</span>{' '}
                                    <span data-aos="fade-up" data-aos-delay="800">soon!</span>
                                </h3>
                            </div>
                            <div className="contact-form-card" data-aos="fade-up" data-aos-delay="100">
                                <form ref={formRef} onSubmit={sendEmail}>
                                    <div className="row mb-4">
                                        <div className="col-sm-6 mb-4 mb-sm-0">
                                            <label className="form-label" htmlFor="contactName">Name *</label>
                                            <input type="text" name="contactName" id="contactName" className="form-control custom-input" required />
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="form-label" htmlFor="contactEmail">Email *</label>
                                            <input type="email" name="user_email" id="contactEmail" className="form-control custom-input" required />
                                        </div>
                                    </div>
                                    <div className="row gx-3 mb-4">
                                        <div className="col-sm-6 mb-4 mb-sm-0">
                                            <label className="form-label" htmlFor="contactCompany">Company</label>
                                            <input type="text" name="contactCompany" id="contactCompany" className="form-control custom-input" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="form-label" htmlFor="contactPhone">Phone *</label>
                                            <input type="tel" name="contactPhone" id="contactPhone" className="form-control custom-input" required />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="contactMessage">Message *</label>
                                        <textarea name="message" id="contactMessage" className="form-control custom-input custom-textarea" rows="6" required />
                                    </div>
                                    <div className="form-check custom-checkbox mb-4">
                                        <input className="form-check-input" type="checkbox" id="contactConsent" />
                                        <label className="form-check-label" htmlFor="contactConsent">
                                            I agree to receive updates from Movsac Solutions
                                        </label>
                                    </div>
                                    <button type="submit" className="btn-circle" disabled={isLoading}>
                                        {isLoading ? 'Sending...' : 'Send Message →'}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="contact-right-panel">
                                <div className="office-block" data-aos="fade-up" data-aos-delay="100">
                                </div>
                                <div className="office-divider" data-aos="fade-up" data-aos-delay="1300"></div>
                                <div className="office-block pb-4" data-aos="fade-up" data-aos-delay="1400">
                                    <div className="office-header">
                                        <div className="office-label pb-4">
                                            OUR OFFICE
                                        </div>
                                        <div className="office-title-line mb-4"></div>
                                    </div>
                                    <div className="office-body d-flex align-items-start gap-4">
                                        <div className="office-image">
                                            <img src="/img/contact/Clock.png" alt="Clock" />
                                        </div>
                                        <div className="office-content">
                                            <h4 className="office-title">Register Address</h4>
                                            <p className="office-address">
                                                70, Shahdana old city<br/>Bareilly-243005, UP, IN<br/>+91 9997235784
                                            </p>
                                            <h4 className="office-title">Office</h4>
                                            <p className="office-address">
                                                F-153/b 3rd floor Shaheen bagh delhi-110025, IN<br/>+91 9214042307
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;

