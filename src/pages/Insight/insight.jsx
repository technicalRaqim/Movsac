import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Insight = () => {
  // AOS Initialize
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  const blogs = [
    {
      id: 1,
      imageClass: 'img-blog1',
      title: 'The Psychology of Colors in Enterprise Software',
      description: 'Turning complex numbers into actionable insights',
      author: 'Ross Shamelashvili',
      date: 'March 23, 2026'
    },
    {
      id: 2,
      imageClass: 'img-blog2',
      title: 'Building Data Foundations: The Key to Scalable Enterprise AI',
      description: 'Our workflow for managing international IT projects',
      author: 'Ross Shamelashvili',
      date: 'March 23, 2026'
    },
    {
      id: 3,
      imageClass: 'img-blog3',
      title: 'Composable Commerce Cost: How to Optimize Implement',
      description: 'It tempting to think of AI primarily a question of infrastructure',
      author: 'Ross Shamelashvili',
      date: 'March 23, 2026'
    },
    {
      id: 4,
      imageClass: 'img-blog4',
      title: 'Composable Commerce Cost: How to Optimize Implement',
      description: 'It tempting to think of AI primarily a question of infrastructure',
      author: 'Ross Shamelashvili',
      date: 'March 23, 2026'
    },
    {
      id: 5,
      imageClass: 'img-blog5',
      title: 'The Psychology of Colors in Enterprise Software',
      description: 'Turning complex numbers into actionable insights',
      author: 'Ross Shamelashvili',
      date: 'March 23, 2026'
    },
    {
      id: 6,
      imageClass: 'img-blog6',
      title: 'Building Data Foundations: The Key to Scalable Enterprise AI',
      description: 'Our workflow for managing international IT projects',
      author: 'Ross Shamelashvili',
      date: 'March 23, 2026'
    }
  ];

  // User Icon SVG
  const UserIcon = () => (
    <svg className="my-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
      <path d="M0.75 16.75V15.75C0.75 13.8935 1.4875 12.113 2.80025 10.8003C4.11301 9.4875 5.89348 8.75 7.75 8.75M7.75 8.75C9.60652 8.75 11.387 9.4875 12.6997 10.8003C14.0125 12.113 14.75 13.8935 14.75 15.75V16.75M7.75 8.75C8.81087 8.75 9.82828 8.32857 10.5784 7.57843C11.3286 6.82828 11.75 5.81087 11.75 4.75C11.75 3.68913 11.3286 2.67172 10.5784 1.92157C9.82828 1.17143 8.81087 0.75 7.75 0.75C6.68913 0.75 5.67172 1.17143 4.92157 1.92157C4.17143 2.67172 3.75 3.68913 3.75 4.75C3.75 5.81087 4.17143 6.82828 4.92157 7.57843C5.67172 8.32857 6.68913 8.75 7.75 8.75Z" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  // Calendar Icon SVG
  const CalendarIcon = () => (
    <svg className="my-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M10.5962 16.75H7.3141C4.21995 16.75 2.67246 16.75 1.71164 15.7884C0.75082 14.8267 0.75 13.2801 0.75 10.1859V8.54487C0.75 5.45072 0.75 3.90323 1.71164 2.94241C2.67328 1.98159 4.21995 1.98077 7.3141 1.98077H10.5962C13.6903 1.98077 15.2378 1.98077 16.1986 2.94241C17.1594 3.90405 17.1603 5.45072 17.1603 8.54487V10.1859C17.1603 13.2801 17.1603 14.8275 16.1986 15.7884C15.6628 16.325 14.9449 16.5621 13.8782 16.6663M4.85256 1.98077V0.75M13.0577 1.98077V0.75M16.75 6.08333H7.92949M0.75 6.08333H3.92949" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13.8774 12.6475C13.8774 12.8651 13.791 13.0738 13.6371 13.2277C13.4832 13.3816 13.2745 13.468 13.0569 13.468C12.8393 13.468 12.6306 13.3816 12.4767 13.2277C12.3228 13.0738 12.2364 12.8651 12.2364 12.6475C12.2364 12.4299 12.3228 12.2212 12.4767 12.0673C12.6306 11.9134 12.8393 11.827 13.0569 11.827C13.2745 11.827 13.4832 11.9134 13.6371 12.0673C13.791 12.2212 13.8774 12.4299 13.8774 12.6475ZM13.8774 9.36543C13.8774 9.58305 13.791 9.79175 13.6371 9.94562C13.4832 10.0995 13.2745 10.1859 13.0569 10.1859C12.8393 10.1859 12.6306 10.0995 12.4767 9.94562C12.3228 9.79175 12.2364 9.58305 12.2364 9.36543C12.2364 9.14782 12.3228 8.93912 12.4767 8.78524C12.6306 8.63137 12.8393 8.54492 13.0569 8.54492C13.2745 8.54492 13.4832 8.63137 13.6371 8.78524C13.791 8.93912 13.8774 9.14782 13.8774 9.36543ZM9.77484 12.6475C9.77484 12.8651 9.68839 13.0738 9.53452 13.2277C9.38064 13.3816 9.17194 13.468 8.95433 13.468C8.73671 13.468 8.52801 13.3816 8.37414 13.2277C8.22026 13.0738 8.13381 12.8651 8.13381 12.6475C8.13381 12.4299 8.22026 12.2212 8.37414 12.0673C8.52801 11.9134 8.73671 11.827 8.95433 11.827C9.17194 11.827 9.38064 11.9134 9.53452 12.0673C9.68839 12.2212 9.77484 12.4299 9.77484 12.6475ZM9.77484 9.36543C9.77484 9.58305 9.68839 9.79175 9.53452 9.94562C9.38064 10.0995 9.17194 10.1859 8.95433 10.1859C8.73671 10.1859 8.52801 10.0995 8.37414 9.94562C8.22026 9.79175 8.13381 9.58305 8.13381 9.36543C8.13381 9.14782 8.22026 8.93912 8.37414 8.78524C8.52801 8.63137 8.73671 8.54492 8.95433 8.54492C9.17194 8.54492 9.38064 8.63137 9.53452 8.78524C9.68839 8.93912 9.77484 9.14782 9.77484 9.36543ZM5.67228 12.6475C5.67228 12.8651 5.58583 13.0738 5.43195 13.2277C5.27808 13.3816 5.06938 13.468 4.85176 13.468C4.63415 13.468 4.42545 13.3816 4.27157 13.2277C4.1177 13.0738 4.03125 12.8651 4.03125 12.6475C4.03125 12.4299 4.1177 12.2212 4.27157 12.0673C4.42545 11.9134 4.63415 11.827 4.85176 11.827C5.06938 11.827 5.27808 11.9134 5.43195 12.0673C5.58583 12.2212 5.67228 12.4299 5.67228 12.6475ZM5.67228 9.36543C5.67228 9.58305 5.58583 9.79175 5.43195 9.94562C5.27808 10.0995 5.06938 10.1859 4.85176 10.1859C4.63415 10.1859 4.42545 10.0995 4.27157 9.94562C4.1177 9.79175 4.03125 9.58305 4.03125 9.36543C4.03125 9.14782 4.1177 8.93912 4.27157 8.78524C4.42545 8.63137 4.63415 8.54492 4.85176 8.54492C5.06938 8.54492 5.27808 8.63137 5.43195 8.78524C5.58583 8.93912 5.67228 9.14782 5.67228 9.36543Z" fill="#CF3034" />
    </svg>
  );

  const BlogCard = ({ blog, index }) => (
    <div className="col-lg-4 col-md-12 col-sm-12 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
      <div className={blog.imageClass} data-aos="zoom-in" data-aos-delay={index * 100 + 50}></div>
      <br />
      <div className="row-style">
        <div className="sec-whole" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
          <div className="sec-combo">
            <div className="sec-svg">
              <UserIcon />
            </div>
            <div className="sec-span">
              <span className="my-span" data-aos="fade-up" data-aos-delay={index * 100 + 150}>{blog.author}</span>
            </div>
          </div>
          <div className="sec-combo1">
            <div className="sec-svg">
              <CalendarIcon />
            </div>
            <div className="sec-span">
              <span className="my-span" data-aos="fade-up" data-aos-delay={index * 100 + 200}>{blog.date}</span>
            </div>
          </div>
        </div>
        <div className="title-line">
          {/* Bade text ko span mein nahi dala, direct animation diya */}
          <h6 data-aos="fade-up" data-aos-delay={index * 100 + 250}>{blog.title}</h6>
          <p data-aos="fade-up" data-aos-delay={index * 100 + 300}>{blog.description}</p>
        </div>
        <button type="button" className="btn-large" data-aos="zoom-in" data-aos-delay={index * 100 + 350}>Read more</button>
      </div>
    </div>
  );

  return (
    <Layout>
      <section className="Blog-hero">
        <div className="container py-5">
          <div className="row align-items-center gy-4">
            <div className="col-lg-12">
              <h2 className="hero-title" data-aos="fade-up" data-aos-duration="800">
                {/* Chhote text ko span mein dala */}
                <span data-aos="fade-up" data-aos-delay="50">Expert</span>
                <span className="hero-highlight ms-2" data-aos="zoom-in" data-aos-delay="100">insights</span>
                <span data-aos="fade-up" data-aos-delay="150">on</span>
                <span data-aos="fade-up" data-aos-delay="200">design,</span>
                <span data-aos="fade-up" data-aos-delay="250">tech,</span>
                <span data-aos="fade-up" data-aos-delay="300">and</span>
                <br />
                <span className="hero-highlight" data-aos="zoom-in" data-aos-delay="350">digital</span>
                <span className="hero-highlight" data-aos="zoom-in" data-aos-delay="400">growth</span>
                <span data-aos="fade-up" data-aos-delay="450">for</span>
                <span data-aos="fade-up" data-aos-delay="500">industry</span>
                <span data-aos="fade-up" data-aos-delay="550">leaders</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className='sec-bolgss'>
        <div className="container py-5 sec-back">
          <div className="sec-blogs">
            <h6 data-aos="fade-up" data-aos-delay="0">Blogs</h6>

            {/* First Row */}
            <div className="row">
              {blogs.slice(0, 3).map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </div>

            <br />

            {/* Second Row */}
            <div className="row">
              {blogs.slice(3, 6).map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index + 3} />
              ))}
            </div>
          </div>
        </div>

        <div className="container py-5 sec-back">
          <div className="sec-blogs">
            <h6 data-aos="fade-up" data-aos-delay="0">
              Stories for
              <span data-aos="zoom-in" data-aos-delay="150">decision-makers</span>
            </h6>

            {/* First Row */}
            <div className="row">
              {blogs.slice(0, 3).map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index + 6} />
              ))}
            </div>

            <br />

            {/* Second Row */}
            <div className="row">
              {blogs.slice(3, 6).map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index + 9} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insight;