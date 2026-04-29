import React, { useState, useEffect, useCallback, memo } from 'react';
import Layout from '../../components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Helmet } from 'react-helmet-async';

// --- 1. Blog Modal Component ---
const BlogModal = ({ isOpen, onClose, title, paragraph }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal fade show d-block bg-dark bg-opacity-50"
      tabIndex="-1"
      style={{ zIndex: 1050, backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content shadow-lg border-0 rounded-4">
          <div className="modal-header border-0 pb-0 pt-4 px-4">
            <h5 className="modal-title fw-bold text-dark fs-4">{title}</h5>
            <button
              type="button"
              className="btn-close shadow-none"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body text-secondary px-4 py-3" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            <p style={{ whiteSpace: 'pre-line' }}>{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. Blog Card Component (Memoized) ---
const BlogCard = memo(({ blog, index, onReadMore }) => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
      <div className={`img-blog ${blog.imageClass}`} data-aos="zoom-in" data-aos-delay={index * 100 + 50}></div>
      <br />
      <div className="row-style">
        <div className="sec-whole" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
          <div className="sec-combo">
            <div className="sec-span">
              <span className="my-span" data-aos="fade-up" data-aos-delay={index * 100 + 150}>{blog.author}</span>
            </div>
          </div>
          <div className="sec-combo1">
            <div className="sec-span">
              <span className="my-span" data-aos="fade-up" data-aos-delay={index * 100 + 200}>{blog.date}</span>
            </div>
          </div>
        </div>
        <div className="title-line">
          <h6 data-aos="fade-up" data-aos-delay={index * 100 + 250}>{blog.title}</h6>
          <p data-aos="fade-up" data-aos-delay={index * 100 + 300}>{blog.description}</p>
        </div>
        <button
          type="button"
          className="btn-large"
          data-aos="zoom-in"
          data-aos-delay={index * 100 + 350}
          onClick={() => onReadMore(blog)}
        >
          Read more
        </button>
      </div>
    </div>
  );
});

// --- 3. Main Insight Component ---
const Insight = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [modalData, setModalData] = useState({ isOpen: false, title: '', paragraph: '' });

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  // --- Data Fetching (NO TIMER) ---
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const mockData = [
          {
            id: 1,
            imageClass: 'img-blog1',
            title: 'The Psychology of Colors in Enterprise Software',
            description: 'Color is more than a visual choice; it directly impacts how users think, feel, and make decisions.',
            content: 'Color is more than a visual choice in enterprise software it directly impacts how users think, feel, and make decisions. The right color system can simplify complex dashboards, guide attention to critical data, and create a smoother user experience for teams working under pressure.\n\nFor example, blue often builds trust and professionalism, making it popular for financial and SaaS platforms. Green is commonly used for success states, growth metrics, or positive performance indicators. Red highlights urgent actions, risks, or declining numbers, while yellow can draw attention to warnings or pending tasks.\n\nWhen applied strategically, colors turn overwhelming numbers into clear, actionable insights. Instead of users searching through data, thoughtful color cues help them instantly recognize patterns, priorities, and opportunities making enterprise software smarter, faster, and easier to use.'
          },
          {
            id: 2,
            imageClass: 'img-blog2',
            title: 'Building Data Foundations: The Key to Scalable Enterprise AI',
            description: 'Strong AI systems are built on strong data foundations, impacting how accurately models learn and perform.',
            content: 'Strong AI systems are built on strong data foundations it directly impacts how accurately models learn, predict, and perform. Without clean, structured, and well-managed data, even advanced AI systems fail to deliver reliable business outcomes.\n\nA proper foundation includes centralized databases, clear governance rules, and seamless integration across multiple enterprise systems. This ensures that data remains consistent, accessible, and usable across departments and global teams.\n\nWhen applied strategically, strong data foundations turn fragmented information into unified intelligence. Instead of struggling with scattered datasets, enterprises gain structured insights that help AI scale efficiently, making systems smarter, more stable, and more impactful.'
          },
          {
            id: 3,
            imageClass: 'img-blog3',
            title: 'Composable Commerce Cost: How to Optimize Implement',
            description: 'Composable commerce impacts how efficiently businesses manage digital infrastructure and long-term costs.',
            content: 'Composable commerce is more than a flexible architecture it directly impacts how efficiently businesses manage digital infrastructure and long-term costs. The right setup can reduce complexity, improve scalability, and optimize performance across platforms.\n\nFor example, selecting only necessary services avoids redundancy, while modular integrations allow teams to upgrade systems without rebuilding everything. Poor planning, however, leads to unnecessary tools, higher maintenance costs, and operational inefficiencies.\n\nWhen applied strategically, composable commerce turns complex system architecture into controlled, scalable investments. Instead of overspending on infrastructure, businesses gain flexibility and efficiency that makes digital growth more sustainable and cost-effective.'
          },
          {
            id: 4,
            imageClass: 'img-blog4',
            title: 'Microservices Architecture in Enterprise Scaling',
            description: 'Microservices architecture impacts how systems scale, evolve, and perform under enterprise-level demand.',
            content: 'Microservices architecture is more than a technical design choice it directly impacts how systems scale, evolve, and perform under enterprise-level demand. It allows applications to be broken into smaller independent services.\n\nEach service can be developed, deployed, and maintained separately, improving speed and flexibility. This reduces system-wide failures and allows teams to work in parallel without blocking each other’s progress.\n\nWhen applied strategically, microservices turn large monolithic systems into scalable ecosystems. Instead of managing one complex application, enterprises manage multiple flexible services that improve resilience, speed, and long-term scalability.'
          },
          {
            id: 5,
            imageClass: 'img-blog5',
            title: 'Security by Design in Enterprise Software',
            description: 'Security by design impacts how safely enterprise systems operate from the ground up.',
            content: 'Security by design is more than an add-on feature it directly impacts how safely enterprise systems operate from the ground up. It ensures protection is built into every layer of development from the beginning.\n\nThis includes secure coding practices, encryption standards, identity management, and continuous vulnerability testing. By addressing risks early in the design phase, enterprises reduce the chance of breaches later in production.\n\nWhen applied strategically, security by design turns complex systems into trusted environments. Instead of reacting to threats, organizations proactively prevent them, making enterprise software safer, stronger, and more reliable.'
          },
          {
            id: 6,
            imageClass: 'img-blog6',
            title: 'Observability in Distributed Systems',
            description: 'Observability impacts how well enterprises understand system behavior in real time.',
            content: 'Observability is more than monitoring it directly impacts how well enterprises understand system behavior in real time. It helps teams track performance, detect issues, and analyze system health across distributed environments.\n\nThrough logs, metrics, and tracing, engineers can identify bottlenecks and failures before they affect users. This improves system reliability and reduces downtime in large-scale infrastructures.\n\nWhen applied strategically, observability turns complex distributed systems into transparent ecosystems. Instead of guessing system behavior, teams gain real-time insights that make operations more stable, predictable, and efficient.'
          },
          {
            id: 7,
            imageClass: 'img-blog1',
            title: 'The Role of Metadata in Enterprise Data Systems',
            description: 'Metadata impacts how data is organized, understood, and used across enterprise systems.',
            content: 'Metadata is more than supporting information it directly impacts how data is organized, understood, and used across enterprise systems. It adds structure to raw data, making it easier to manage at scale.\n\nIt helps classify datasets, improve searchability, and support governance policies across organizations. Without metadata, large data systems become difficult to navigate and control.\n\nWhen applied strategically, metadata turns raw datasets into structured intelligence. Instead of dealing with unorganized information, enterprises gain clarity, control, and improved data usability across systems.'
          },
          {
            id: 8,
            imageClass: 'img-blog2',
            title: 'Personalization Engines in SaaS Platforms',
            description: 'Personalization engines impact how users interact with SaaS platforms on a daily basis.',
            content: 'Personalization engines are more than recommendation systems they directly impact how users interact with SaaS platforms on a daily basis. They tailor experiences based on user behavior and preferences.\n\nBy analyzing actions and patterns, systems can adjust content, features, and workflows in real time. This improves engagement and ensures users see what is most relevant to them.\n\nWhen applied strategically, personalization turns generic platforms into adaptive experiences. Instead of one-size-fits-all interfaces, users get tailored journeys that improve satisfaction, retention, and product value.'
          },
          {
            id: 9,
            imageClass: 'img-blog3',
            title: 'Change Management in Digital Transformation',
            description: 'Change management impacts how smoothly organizations adapt to digital transformation.',
            content: 'Change management is more than introducing new tools it directly impacts how smoothly organizations adapt to digital transformation. It ensures teams transition effectively to new systems and workflows.\n\nThis includes communication, training, and gradual adoption strategies that reduce resistance and confusion. Without proper change management, even good systems fail due to low user adoption.\n\nWhen applied strategically, change management turns transformation into a structured process. Instead of disruption and resistance, organizations achieve smoother transitions and stronger long-term adoption.'
          },
          {
            id: 10,
            imageClass: 'img-blog4',
            title: 'Legacy System Modernization Strategies',
            description: 'Legacy modernization impacts how efficiently enterprises operate in modern digital environments.',
            content: 'Legacy modernization is more than upgrading old systems it directly impacts how efficiently enterprises operate in modern digital environments. It replaces outdated infrastructure with scalable solutions.\n\nThis process often involves gradual migration, API integration, or full system replacement depending on business needs. It helps reduce technical debt and improve system performance.\n\nWhen applied strategically, modernization turns outdated systems into future-ready platforms. Instead of limitations from old infrastructure, enterprises gain flexibility, speed, and improved integration capabilities.'
          },
          {
            id: 11,
            imageClass: 'img-blog5',
            title: 'Performance Optimization in Enterprise Dashboards',
            description: 'Dashboard optimization impacts how quickly users can interpret and act on data insights.',
            content: 'Dashboard optimization is more than improving speed it directly impacts how quickly users can interpret and act on data insights. Performance plays a key role in usability.\n\nTechniques like caching, optimized queries, and efficient rendering help ensure dashboards remain responsive even with large datasets. Poor performance can slow decision-making significantly.\n\nWhen applied strategically, optimization turns heavy dashboards into real-time tools. Instead of delays and lag, users experience smooth, fast, and reliable data interactions.'
          },
          {
            id: 12,
            imageClass: 'img-blog6',
            title: 'Governance in Multi-Tenant SaaS Systems',
            description: 'Governance in SaaS systems impacts how securely multiple clients operate within a shared environment.',
            content: 'Governance in SaaS systems is more than access control it directly impacts how securely multiple clients operate within a shared environment. It ensures structure, compliance, and data separation.\n\nThis includes role-based permissions, monitoring systems, and strict policy enforcement to protect user data across tenants. Without governance, multi-tenant systems become vulnerable and unmanageable.\n\nWhen applied strategically, governance turns shared platforms into secure ecosystems. Instead of risk and confusion, enterprises gain control, compliance, and scalable SaaS operations.'
          }
        ];

        setBlogs(mockData);
      } catch (err) {
        setError('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Stable handlers with useCallback
  const handleOpenModal = useCallback((blog) => {
    setModalData({ isOpen: true, title: blog.title, paragraph: blog.content || blog.description });
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalData(prev => ({ ...prev, isOpen: false }));
  }, []);

  // Blog Section Component
  const BlogSection = ({ title, subtitle, blogList }) => (
    <div className="container py-5 sec-back">
      <div className="sec-blogs">
        <h6 data-aos="fade-up" data-aos-delay="0">
          {title}
          {subtitle && (
            <span data-aos="zoom-in" data-aos-delay="150"> {subtitle}</span>
          )}
        </h6>
        <div className="row">
          {blogList.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
              onReadMore={handleOpenModal}
            />
          ))}
        </div>
      </div>
    </div>
  );

  if (loading) return <Layout><div className="container py-5 text-center">Loading...</div></Layout>;
  if (error) return <Layout><div className="container py-5 text-center text-danger">{error}</div></Layout>;

  return (
    <Layout>
      <Helmet>
        <title>Movsac Blog – Tech Insights & Updates</title>
        <meta name="description" content="Stay updated with the latest technology trends, coding tips, and IT insights from Movsac experts." />
        <meta name="keywords" content="tech blog, IT insights, coding tips, software trends" />
      </Helmet>

      <BlogModal
        isOpen={modalData.isOpen}
        onClose={handleCloseModal}
        title={modalData.title}
        paragraph={modalData.paragraph}
      />

      <section className="Blog-hero">
        <div className="container py-5">
          <div className="row align-items-center gy-4">
            <div className="col-lg-12">
              <h2 className="hero-title" data-aos="fade-up" data-aos-duration="800">
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
        <BlogSection title="Blogs" blogList={blogs.slice(0, 3)} />
        <br />
        <BlogSection title="Industry " subtitle="Perspectives" blogList={blogs.slice(3, 6)} />
        <br />
        <BlogSection title="Technology" subtitle="Deep Dives" blogList={blogs.slice(6, 9)} />
        <br />
        <BlogSection title="Strategy" subtitle="and Growth" blogList={blogs.slice(9, 12)} />
      </section>
    </Layout>
  );
};

export default Insight;