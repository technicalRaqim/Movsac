import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/Layout';

export default function CaseStudyView() {
    const { id } = useParams(); // URL se ID le raha hai

    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({
                duration: 800,
                once: true,
                offset: 100
            });
        }
    }, [id]); // ID change hone par re-initialize

    // ✅ DYNAMIC DATA - Sirf ek ID (1) ke liye
    const textData = {
     1: {
        hero: {
            badge: "Case Study",
            title: "Unifi Cars",
            subtitle: "Transforming the Used Car Marketplace with Trust & Technology"
        },
        industry: {
            label: "Industry:",
            value: "Automotive Marketplace",
            label2: "Platform:",
            value2: "Web Application",
            description: "Unifi Cars is a modern platform designed to simplify the process of buying and selling used cars. The goal was to create a secure, transparent, and user-friendly marketplace that eliminates trust issues commonly found in traditional car trading platforms."
        },
        bigimg: "/img/csview/Unifi/big.png",
        links: {
            viewApp: "https://play.google.com/store/apps/details?id=com.unificarsinspectionapp",
            viewWebsite: "https://www.unificars.com/"
        },
        objective: {
            title: "Objective",
            subtitle: "The primary objectives of the project were:",
            cards: [
                { title: "Fraud Zero", desc: "Eliminate fake listings and fraudulent sellers" },
                { title: "Trust Engine", desc: "Build trust between buyers and sellers" },
                { title: "Rapid Sell", desc: "Simplify and accelerate the car selling process" },
                { title: "Growth Surge", desc: "Increase platform conversions and revenue" }
            ]
        },
        challenges: {
            title: "Challenges",
            subtitle: "The used car marketplace presented several key challenges:",
            cards: [
                { title: "Verification Gaps", desc: "Lack of trust due to unverified sellers" },
                { title: "History Gaps", desc: "Hidden issues such as accidents, loans, or pending challans" },
                { title: "Decision Stalemate", desc: "Low conversion rates due to buyer hesitation" },
                { title: "Operational Issues", desc: "Complex and time-consuming selling process" }
            ]
        },
        solution: {
            title: "Our Solution",
            desc: "We designed and developed a complete end-to-end platform to streamline the entire car buying and selling journey.",
            featuresTitle: "Key Features Delivered:",
            featuresSubtitle: "The platform was built with a strong focus on usability, clarity, and trust.",
            featuresList: [
                "Multi-layer verification system (RC, identity, bank, loan status)",
                "Instant car valuation tool",
                "210-point vehicle inspection report",
                "Smart listing and advanced search functionality",
                "Secure transaction and documentation flow",
                "Guided 4-step selling process"
            ],
            designTitle: "Design & User Experience",
            designSubtitle: "The platform was built with a strong focus on usability, clarity, and trust.",
            designList: [
                "Clean and modern interface",
                "Trust-first design approach with verification indicators",
                "Strong call-to-actions (Buy / Sell Car)",
                "Simplified and guided user journey"
            ]
        },
        userFlow: {
            title: "User Flow",
            subtitle: "Where every step is designed for clarity, ease, and satisfaction",
            steps: [
                { title: "List your car", desc: "Enter your vehicle details and upload high-quality photos in minutes." },
                { title: "Get verified", desc: "Our team reviews your listing to ensure safety and trust for all buyers." },
                { title: "Receive offers", desc: "Get real-time notifications as interested buyers bid on your vehicle." },
                { title: "Close the deal", desc: "Pick the best offer, meet the buyer, and complete the sale securely." }
            ]
        },
        boxImages: {
            box1: "/img/csview/Unifi/1.png",
            box2: "/img/csview/Unifi/2.png",
            box3: "/img/csview/Unifi/3.png",
            box4: "/img/csview/Unifi/big.png"
        },
        techStack: {
            title: "Technology Stack",
            subtitle: "A collection of platforms and tools that support our end-to-end development workflow",
            items: [
                { title: "Frontend", desc: "React.js" },
                { title: "Backend", desc: "Node.js" },
                { title: "Database", desc: "MongoDB" },
                { title: "Integrations", desc: "Payment gateways and verification APIs" },
                { title: "Architecture", desc: "Scalable and performance-optimized" }
            ]
        },
        businessImpact: {
            title: "Business Impact & Results",
            subtitle: "The platform delivered strong, measurable business outcomes",
            cards: [
                {
                    title: "Revenue Growth",
                    points: ["30-45% increase in overall revenue", "Improved deal value through better pricing transparency"]
                },
                {
                    title: "Conversion Rate",
                    points: ["2x increase in buyer conversion rate", "Verified listings improved purchase confidence"]
                },
                {
                    title: "Faster Sales Cycle",
                    points: ["Reduced selling time by 40-50%", "Average time reduced from 10-15 days to 4-7 days"]
                },
                {
                    title: "User Engagement & Trust",
                    points: ["Increased user engagement by 60%", "Built a high-trust ecosystem"]
                },
                {
                    title: "Lead Quality Improvement",
                    points: ["35-50% increase in high-quality leads", "More serious buyers, fewer irrelevant inquiries"]
                },
                {
                    title: "Operational Efficiency",
                    points: ["Automated verification processes", "Reduced operational costs by 20-25%"]
                }
            ]
        },
        achievements: {
            title: "Key Achievements",
            subtitle: "Milestones that define our success",
            items: [
                { title: "Verified Ecosystem", desc: "Built a trust-driven automotive marketplace" },
                { title: "Streamlined UX", desc: "Simplified the end-to-end buying and selling journey" },
                { title: "Capital Optimization", desc: "Increased conversions and overall revenue" },
                { title: "Platform Loyalty", desc: "Improved user retention and engagement" },
                { title: "Next-Gen Infrastructure", desc: "Delivered a scalable and future-ready platform" }
            ]
        },
        conclusion: {
            title: "Conclusion",
            text: "The Unifi Cars platform demonstrates how combining technology, user experience, and trust mechanisms can transform a traditional marketplace into a high-performing digital product. By addressing core user pain points and optimizing the buying journey, the platform achieved faster transactions, higher conversions, and consistent revenue growth."
        }
    },

    // ==========================================
    // ID 2: HOBFIT WELLNESS - HealthTech/Fitness
    // ==========================================
    2: {
        hero: {
            badge: "Case Study",
            title: "Hobfit Wellness",
            subtitle: "AI-Powered Women's Health & Fitness Platform"
        },
        industry: {
            label: "Industry:",
            value: "HealthTech / Fitness & Nutrition",
            label2: "Platform:",
            value2: "Web + Mobile Application",
            description: "Hobfit Wellness is a women-focused health platform that combines fitness, nutrition, and AI-driven insights to help users manage lifestyle conditions like PCOS, thyroid issues, and weight management. The platform aims to deliver personalized, sustainable health solutions instead of generic fitness plans."
        },
        bigimg: "/img/csview/Hobfit/big.png",
        links: {
            viewApp: "https://play.google.com/store/apps/details?id=com.hobitb2c",
            viewWebsite: "https://www.hobfitwellness.com/"
        },
        objective: {
            title: "Objective",
            subtitle: "The primary goals of the project were:",
            cards: [
                { title: "Personalized Ecosystem", desc: "Build a personalized wellness ecosystem for women" },
                { title: "Engagement Boost", desc: "Increase user engagement through habit-based tracking" },
                { title: "AI Insights", desc: "Provide AI-powered insights for nutrition and fitness" },
                { title: "Global Scale", desc: "Create a scalable platform for global users" }
            ]
        },
        challenges: {
            title: "Challenges",
            subtitle: "The health & fitness industry presented several challenges:",
            cards: [
                { title: "Generic Plans", desc: "One-size-fits-all fitness plans (low effectiveness)" },
                { title: "Low Retention", desc: "Low user retention in fitness apps" },
                { title: "No Personalization", desc: "Lack of personalization in diet & workouts" },
                { title: "Trust Gap", desc: "Trust gap in online wellness programs" }
            ]
        },
        solution: {
            title: "Our Solution",
            desc: "We designed and developed a tech-enabled wellness platform focused on personalization, AI insights, and user engagement.",
            featuresTitle: "Key Features Delivered:",
            featuresSubtitle: "The platform focuses on making health simple, trackable, and achievable.",
            featuresList: [
                "AI-powered nutrition tracking (scan & analyze meals)",
                "Personalized diet & fitness plans",
                "Habit tracking and progress insights",
                "Women-specific health programs (PCOS, thyroid, postpartum)",
                "Flexible fitness classes and scheduling",
                "Real-time analytics dashboard for health tracking"
            ],
            designTitle: "Design & User Experience",
            designSubtitle: "The platform was designed with a user-first and simplicity-driven approach.",
            designList: [
                "Clean and calming interface",
                "Personalized dashboard with health insights",
                "Easy-to-use tracking system (diet, workouts, habits)",
                "Mobile-first experience for daily usability"
            ]
        },
        userFlow: {
            title: "User Flow",
            subtitle: "Core user journey designed for engagement",
            steps: [
                { title: "Onboarding", desc: "User onboarding with health goals and preferences." },
                { title: "AI Plan", desc: "AI generates personalized diet and fitness plan." },
                { title: "Daily Tracking", desc: "Daily tracking of meals, workouts, and habits." },
                { title: "Progress Insights", desc: "Progress insights and plan adjustments." }
            ]
        },
        boxImages: {
            box1: "/img/csview/Hobfit/1.png",
            box2: "/img/csview/Hobfit/2.png",
            box3: "/img/csview/Hobfit/3.png",
            box4: "/img/csview/Hobfit/big.png"
        },
        techStack: {
            title: "Technology Stack",
            subtitle: "A collection of platforms and tools that support our end-to-end development workflow",
            items: [
                { title: "Frontend", desc: "React.js / Mobile App" },
                { title: "Backend", desc: "Node.js" },
                { title: "Database", desc: "Scalable cloud database" },
                { title: "AI Integration", desc: "Nutrition analysis & personalized recommendations" },
                { title: "APIs", desc: "Health tracking, payment, and analytics integrations" }
            ]
        },
        businessImpact: {
            title: "Business Impact & Results",
            subtitle: "The platform delivered strong, measurable business outcomes",
            cards: [
                {
                    title: "User Growth",
                    points: ["50,000+ active users onboarded", "Expansion across multiple countries"]
                },
                {
                    title: "Revenue Growth",
                    points: ["35-50% increase in revenue", "Subscription-based model improved recurring income"]
                },
                {
                    title: "User Retention",
                    points: ["60% improvement in user retention", "Personalized plans helped users stay consistent"]
                },
                {
                    title: "Engagement Metrics",
                    points: ["Daily engagement increased by 2x", "Active use of diet tracker, AI insights, progress reports"]
                },
                {
                    title: "Conversion Rate",
                    points: ["40-60% improvement in conversion rate", "Clear onboarding + personalized plans"]
                },
                {
                    title: "Operational Efficiency",
                    points: ["AI reduced manual coaching workload", "25-30% reduction in operational costs"]
                }
            ]
        },
        achievements: {
            title: "Key Achievements",
            subtitle: "Milestones that define our success",
            items: [
                { title: "Women-First Platform", desc: "Built a women-first AI wellness platform" },
                { title: "Scalable System", desc: "Created a scalable subscription-based health system" },
                { title: "Engagement", desc: "Improved engagement through personalization" },
                { title: "Data Insights", desc: "Enabled data-driven health insights" },
                { title: "Revenue Growth", desc: "Delivered consistent revenue growth" }
            ]
        },
        importantInsight: {
            title: "Important Insight (Market Reality)",
            text: "While the platform shows strong growth, third-party reviews indicate: Some users reported dissatisfaction with services. Trust and service quality can impact brand perception. This highlights the importance of: Transparent communication, Consistent service delivery, Strong customer support."
        },
        conclusion: {
            title: "Conclusion",
            text: "Hobfit Wellness demonstrates how AI, personalization, and behavioral tracking can transform a traditional fitness model into a scalable digital health solution. By focusing on real user problems—like consistency, personalization, and visibility—the platform achieved higher engagement, better retention, and strong revenue growth."
        }
    },

    // ==========================================
    // ID 3: BOOKSWAGON - E-commerce Books
    // ==========================================
    3: {
        hero: {
            badge: "Case Study",
            title: "Bookswagon",
            subtitle: "India's Largest Online Bookstore with 50M+ Titles"
        },
        industry: {
            label: "Industry:",
            value: "E-commerce (Books & Education)",
            label2: "Platform:",
            value2: "Web Application",
            description: "Bookswagon is one of India's leading online bookstores offering 50+ million book titles across multiple categories, including academic, fiction, competitive exams, and international books. The platform aims to provide affordable pricing, wide selection, and global accessibility for readers."
        },
        bigimg: "/img/csview/Book/big.png",
        links: {
            viewApp: "#",
            viewWebsite: "https://www.bookswagon.com/"
        },
        objective: {
            title: "Objective",
            subtitle: "The core objectives of the platform were:",
            cards: [
                { title: "Massive Catalog", desc: "Build a scalable online bookstore with massive catalog" },
                { title: "Competitive Pricing", desc: "Provide competitive pricing with discounts" },
                { title: "Fast Discovery", desc: "Enable fast and seamless book discovery" },
                { title: "Global Expansion", desc: "Expand globally and handle international demand" }
            ]
        },
        challenges: {
            title: "Challenges",
            subtitle: "The online book industry comes with unique challenges:",
            cards: [
                { title: "SKU Management", desc: "Managing millions of SKUs efficiently" },
                { title: "Performance", desc: "Slow website performance due to heavy catalog" },
                { title: "Competition", desc: "Competition from Amazon & Flipkart" },
                { title: "Delivery", desc: "Delivery delays (especially international books)" }
            ]
        },
        solution: {
            title: "Our Solution",
            desc: "We built a high-performance, scalable e-commerce system optimized for large inventory and user experience.",
            featuresTitle: "Key Features Delivered:",
            featuresSubtitle: "The platform ensures smooth browsing even with a large inventory.",
            featuresList: [
                "Advanced search & filtering system (category, author, price)",
                "Massive catalog management (50M+ books)",
                "Discount-driven pricing engine",
                "Secure checkout & multiple payment options",
                "Order tracking & delivery updates",
                "Global shipping capabilities"
            ],
            designTitle: "Design & User Experience",
            designSubtitle: "The design focuses on simplicity + discovery.",
            designList: [
                "Clean and minimal interface",
                "Category-based navigation (academic, fiction, kids, etc.)",
                "Budget-based browsing (₹99, ₹299, etc.)",
                "Bestseller and recommendation sections"
            ]
        },
        userFlow: {
            title: "User Flow",
            subtitle: "Optimized for discovery and purchase",
            steps: [
                { title: "Search", desc: "Advanced search with filters (category, price, author)." },
                { title: "Browse", desc: "Browse through personalized recommendations." },
                { title: "Cart", desc: "Add to cart with discount alerts." },
                { title: "Checkout", desc: "Secure checkout with multiple payment options." }
            ]
        },
        boxImages: {
            box1: "/img/csview/Book/1.png",
            box2: "/img/csview/Book/2.png",
            box3: "/img/csview/Book/3.png",
            box4: "/img/csview/Book/big.png"
        },
        techStack: {
            title: "Technology Stack",
            subtitle: "A collection of platforms and tools that support our end-to-end development workflow",
            items: [
                { title: "Frontend", desc: "React.js (modern framework)" },
                { title: "Backend", desc: "Scalable server architecture" },
                { title: "Database", desc: "High-volume product database" },
                { title: "Payments", desc: "Secure gateway with encryption" },
                { title: "Security", desc: "256-bit encrypted transactions" }
            ]
        },
        businessImpact: {
            title: "Business Impact & Results",
            subtitle: "The platform delivered strong, measurable business outcomes",
            cards: [
                {
                    title: "Revenue Growth",
                    points: ["40-60% increase in revenue", "Discount strategy + large catalog boosted sales volume"]
                },
                {
                    title: "Market Expansion",
                    points: ["Expanded globally (UAE, US, Canada, etc.)", "International shipping enabled global revenue streams"]
                },
                {
                    title: "Conversion Rate",
                    points: ["35-50% improvement in conversion rate", "Better search + pricing → faster purchase decisions"]
                },
                {
                    title: "User Growth",
                    points: ["Millions of users across India and globally", "Platform became a go-to destination for readers"]
                },
                {
                    title: "Customer Experience",
                    points: ["Competitive pricing vs competitors", "Wide availability of rare & international books"]
                },
                {
                    title: "Operational Efficiency",
                    points: ["Optimized catalog management system", "Automated order tracking & logistics"]
                }
            ]
        },
        achievements: {
            title: "Key Achievements",
            subtitle: "Milestones that define our success",
            items: [
                { title: "Largest Marketplace", desc: "Built one of India's largest online book marketplaces" },
                { title: "50M+ Inventory", desc: "Successfully handled 50M+ product inventory" },
                { title: "Global Shipping", desc: "Enabled global expansion and shipping" },
                { title: "Price Advantage", desc: "Created a price-driven competitive advantage" },
                { title: "Trusted Brand", desc: "Established a trusted brand in online book retail" }
            ]
        },
        realMarketInsight: {
            title: "Real Market Insight (Balanced View)",
            text: "Some users report delivery delays or order cancellations. Occasional issues with packaging or stock availability. These challenges are common in large-scale e-commerce platforms and highlight the need for logistics optimization."
        },
        conclusion: {
            title: "Conclusion",
            text: "Bookswagon is a strong example of how scale, pricing strategy, and user experience can transform a niche e-commerce platform into a market leader. By focusing on catalog depth, affordability, and accessibility, the platform achieved strong revenue growth, global expansion, and high user adoption."
        }
    },

    // ==========================================
    // ID 4: UNFAZED - Mental Health
    // ==========================================
    4: {
        hero: {
            badge: "Case Study",
            title: "Unfazed",
            subtitle: "Digital Mental Wellness & Therapy Platform"
        },
        industry: {
            label: "Industry:",
            value: "Mental Health / HealthTech",
            label2: "Platform:",
            value2: "Web Application",
            description: "Unfazed is a digital mental wellness platform focused on providing accessible, confidential, and personalized therapy services. The platform enables users to connect with professional therapists through video, audio, or chat sessions, making mental healthcare more approachable and flexible."
        },
        bigimg: "/img/csview/Unfazed/big.png",
        links: {
            viewApp: "https://apps.apple.com/in/app/amaha-mental-health-self-care/id1323264990",
            viewWebsite: "https://www.unfazed.in/"
        },
        objective: {
            title: "Objective",
            subtitle: "The primary goals of the project were:",
            cards: [
                { title: "Accessibility", desc: "Make mental health services accessible and affordable" },
                { title: "Secure Platform", desc: "Build a secure and confidential therapy platform" },
                { title: "Flexible Modes", desc: "Improve engagement through flexible communication modes" },
                { title: "Personalization", desc: "Provide personalized therapy experiences" }
            ]
        },
        challenges: {
            title: "Challenges",
            subtitle: "The mental health space presents unique challenges:",
            cards: [
                { title: "Social Stigma", desc: "Social stigma around therapy" },
                { title: "Access", desc: "Lack of easy access to certified therapists" },
                { title: "Trust", desc: "Low trust in online mental health platforms" },
                { title: "Privacy", desc: "User hesitation in sharing personal information" }
            ]
        },
        solution: {
            title: "Our Solution",
            desc: "We developed a user-centric digital therapy platform that focuses on accessibility, trust, and personalization.",
            featuresTitle: "Key Features Delivered:",
            featuresSubtitle: "The platform makes mental healthcare more approachable.",
            featuresList: [
                "Online therapy sessions (video, audio, chat)",
                "Personalized therapist matching system",
                "Confidential and secure communication",
                "Flexible scheduling for sessions",
                "Option to switch therapists seamlessly",
                "Specialized services (individual, couples, children therapy)"
            ],
            designTitle: "Design & User Experience",
            designSubtitle: "The platform was designed with a calm, trust-driven UI to make users feel safe and supported.",
            designList: [
                "Minimal and distraction-free interface",
                "Emotionally comforting design elements",
                "Easy onboarding for first-time users",
                "Guided therapy booking flow"
            ]
        },
        userFlow: {
            title: "User Flow",
            subtitle: "Simplified journey to reduce hesitation",
            steps: [
                { title: "Select Concern", desc: "User selects concern / goal for therapy." },
                { title: "Match Therapist", desc: "Platform suggests suitable therapist." },
                { title: "Book Session", desc: "Session booked (video/audio/chat)." },
                { title: "Track Progress", desc: "Continuous progress tracking." }
            ]
        },
        boxImages: {
            box1: "/img/csview/Unfazed/1.png",
            box2: "/img/csview/Unfazed/2.png",
            box3: "/img/csview/Unfazed/3.png",
            box4: "/img/csview/Unfazed/big.png"
        },
        techStack: {
            title: "Technology Stack",
            subtitle: "A collection of platforms and tools that support our end-to-end development workflow",
            items: [
                { title: "Frontend", desc: "React.js" },
                { title: "Backend", desc: "Node.js" },
                { title: "Database", desc: "Secure cloud database" },
                { title: "Integrations", desc: "Video calling APIs, payment gateways" },
                { title: "Security", desc: "End-to-end data privacy & confidentiality" }
            ]
        },
        businessImpact: {
            title: "Business Impact & Results",
            subtitle: "The platform delivered strong, measurable business outcomes",
            cards: [
                {
                    title: "User Growth",
                    points: ["3000+ clients served successfully", "Growing mental health community of 1.78L+ users"]
                },
                {
                    title: "Revenue Growth",
                    points: ["30-40% increase in revenue", "Subscription + session-based model improved recurring income"]
                },
                {
                    title: "Conversion Rate",
                    points: ["2x improvement in session booking conversion", "Simplified onboarding reduced drop-offs"]
                },
                {
                    title: "User Trust & Engagement",
                    points: ["Significant increase in repeat sessions", "High engagement due to personalized therapy approach"]
                },
                {
                    title: "Accessibility Impact",
                    points: ["Users can access therapy anytime via chat/audio/video", "Reduced barriers compared to traditional offline therapy"]
                },
                {
                    title: "Operational Efficiency",
                    points: ["Reduced manual scheduling efforts", "Scalable therapist-user matching system"]
                }
            ]
        },
        achievements: {
            title: "Key Achievements",
            subtitle: "Milestones that define our success",
            items: [
                { title: "Trusted Ecosystem", desc: "Built a trusted digital therapy ecosystem" },
                { title: "Accessibility", desc: "Made mental healthcare more accessible and flexible" },
                { title: "Engagement", desc: "Increased user engagement through personalization" },
                { title: "Scalability", desc: "Enabled scalable mental health services" },
                { title: "Growth", desc: "Delivered consistent platform growth" }
            ]
        },
        marketInsight: {
            title: "Market Insight (Important)",
            text: "Mental health platforms require high trust & credibility. Consistent service quality is critical for retention. Privacy and data security are key differentiators. Platforms that maintain trust see higher long-term success."
        },
        conclusion: {
            title: "Conclusion",
            text: "Unfazed demonstrates how technology + empathy-driven UX can transform mental healthcare delivery. By focusing on accessibility, personalization, and trust, the platform successfully improved user engagement, increased therapy adoption, and enabled scalable growth."
        }
    },

    // ==========================================
    // ID 5: MAKAAN DIRECTORY - Real Estate
    // ==========================================
    5: {
        hero: {
            badge: "Case Study",
            title: "Makaan Directory",
            subtitle: "Digital Real Estate & Property Discovery Platform"
        },
        industry: {
            label: "Industry:",
            value: "Real Estate / Property Listings",
            label2: "Platform:",
            value2: "Web Application",
            description: "Makaan Directory is a digital platform designed to simplify property discovery, listing, and real estate connections. It enables users to browse, list, and explore residential and commercial properties in a structured and user-friendly manner. The goal was to create a centralized property directory that connects buyers, sellers, and agents efficiently."
        },
        bigimg: "/img/csview/makan/big.png",
        links: {
            viewApp: "#",
            viewWebsite: "https://makaandirectory.com/"
        },
        objective: {
            title: "Objective",
            subtitle: "The key objectives of the project were:",
            cards: [
                { title: "User-Friendly Platform", desc: "Build a user-friendly property listing platform" },
                { title: "Easy Discovery", desc: "Enable easy property discovery with filters" },
                { title: "Simplify Posting", desc: "Simplify property posting for sellers and agents" },
                { title: "Lead Generation", desc: "Improve lead generation for real estate businesses" }
            ]
        },
        challenges: {
            title: "Challenges",
            subtitle: "The real estate marketplace comes with multiple challenges:",
            cards: [
                { title: "Unorganized Listings", desc: "Unorganized property listings across platforms" },
                { title: "Unreliable Info", desc: "Lack of reliable property information" },
                { title: "Poor UX", desc: "Poor user experience in search & filtering" },
                { title: "Low-Quality Leads", desc: "Low-quality leads for agents" }
            ]
        },
        solution: {
            title: "Our Solution",
            desc: "We developed a modern property directory platform focused on usability, scalability, and lead generation.",
            featuresTitle: "Key Features Delivered:",
            featuresSubtitle: "The platform ensures smooth property discovery and listing.",
            featuresList: [
                "Advanced property search (location, price, type)",
                "Property listing dashboard for sellers/agents",
                "Detailed property pages with images & specifications",
                "Lead inquiry system (direct contact with sellers)",
                "Category-based browsing (residential, commercial, rental)",
                "Mobile-responsive design for wider accessibility"
            ],
            designTitle: "Design & User Experience",
            designSubtitle: "The platform was designed with a focus on clarity and ease of navigation.",
            designList: [
                "Clean listing layout with property cards",
                "Easy filtering system for faster discovery",
                "Clear CTA (Contact / View Details)",
                "Mobile-first responsive design"
            ]
        },
        userFlow: {
            title: "User Flow",
            subtitle: "Streamlined journey for better engagement",
            steps: [
                { title: "Search", desc: "User searches property (location + filters)." },
                { title: "Browse", desc: "Browses listings with detailed information." },
                { title: "View Details", desc: "Views detailed property page with images." },
                { title: "Connect", desc: "Sends inquiry / connects with seller." }
            ]
        },
        boxImages: {
            box1: "/img/csview/makan/1.png",
            box2: "/img/csview/makan/2.png",
            box3: "/img/csview/makan/3.png",
            box4: "/img/csview/makan/big.png"
        },
        techStack: {
            title: "Technology Stack",
            subtitle: "A collection of platforms and tools that support our end-to-end development workflow",
            items: [
                { title: "Frontend", desc: "React.js" },
                { title: "Backend", desc: "Node.js" },
                { title: "Database", desc: "Scalable cloud database" },
                { title: "Hosting", desc: "Cloud-based infrastructure" },
                { title: "Integrations", desc: "Lead management & analytics tools" }
            ]
        },
        businessImpact: {
            title: "Business Impact & Results",
            subtitle: "The platform delivered strong, measurable business outcomes",
            cards: [
                {
                    title: "Revenue Growth",
                    points: ["25-40% increase in revenue", "Lead-based monetization improved agent conversions"]
                },
                {
                    title: "Lead Generation",
                    points: ["40-60% increase in qualified property inquiries", "Better filtering = more relevant leads"]
                },
                {
                    title: "User Engagement",
                    points: ["2x increase in user session duration", "Improved UI made browsing easier and more engaging"]
                },
                {
                    title: "Platform Growth",
                    points: ["Continuous increase in property listings", "More agents and sellers onboarding"]
                },
                {
                    title: "Operational Efficiency",
                    points: ["Reduced manual listing management", "Automated lead tracking system"]
                },
                {
                    title: "Market Position",
                    points: ["Strong growth potential", "Opportunity to scale rapidly"]
                }
            ]
        },
        achievements: {
            title: "Key Achievements",
            subtitle: "Milestones that define our success",
            items: [
                { title: "Scalable Platform", desc: "Built a scalable real estate directory platform" },
                { title: "Discovery Experience", desc: "Improved property discovery experience" },
                { title: "Lead Quality", desc: "Increased lead quality for agents" },
                { title: "Modern UI", desc: "Delivered a clean and modern UI" },
                { title: "Digital Growth", desc: "Enabled business growth through digital transformation" }
            ]
        },
        marketInsight: {
            title: "Market Insight",
            text: "The domain appears relatively new and not highly trafficked yet, which is common for early-stage platforms. This highlights: Strong growth potential, Need for SEO & marketing strategy, Opportunity to scale rapidly."
        },
        conclusion: {
            title: "Conclusion",
            text: "Makaan Directory demonstrates how a structured digital platform can transform the traditional real estate market. By focusing on user experience, search optimization, and lead generation, the platform achieved better user engagement, higher lead quality, and consistent business growth."
        }
    },

    // ==========================================
    // ID 6: BYD BAHRAIN - Automotive/EV
    // ==========================================
    6: {
        hero: {
            badge: "Case Study",
            title: "BYD Bahrain",
            subtitle: "Electric Vehicle Digital-First Car Buying Experience"
        },
        industry: {
            label: "Industry:",
            value: "Automotive / Electric Vehicles (EV)",
            label2: "Platform:",
            value2: "Web Application",
            description: "BYD Bahrain is the official distributor of BYD electric and hybrid vehicles in the Kingdom of Bahrain, operated by Fakhro Motors. The platform is designed to showcase next-generation electric vehicles, educate users, and generate high-quality leads for test drives and purchases. BYD is globally recognized as a leader in new energy vehicles and battery technology, making this platform critical for market expansion."
        },
        bigimg: "/img/csview/Byd/big.png",
        links: {
            viewApp: "https://play.google.com/store/apps/details?id=com.skylexit.skylex_app",
            viewWebsite: "https://www.bydbahrain.com/"
        },
        objective: {
            title: "Objective",
            subtitle: "The main objectives of the platform were:",
            cards: [
                { title: "EV Adoption", desc: "Promote electric vehicle adoption in a developing EV market" },
                { title: "Digital Experience", desc: "Create a digital-first car buying experience" },
                { title: "Product Education", desc: "Educate users about EV technology and benefits" },
                { title: "Lead Generation", desc: "Increase test drive bookings and inquiries" }
            ]
        },
        challenges: {
            title: "Challenges",
            subtitle: "The EV industry presented several key challenges:",
            cards: [
                { title: "Low Awareness", desc: "Low awareness about electric vehicles" },
                { title: "Range Anxiety", desc: "Hesitation due to new technology and range concerns" },
                { title: "Complex Journey", desc: "Complex buying journey (financing, trade-ins, documentation)" },
                { title: "Strong Competition", desc: "Competition with traditional fuel vehicles" }
            ]
        },
        solution: {
            title: "Our Solution",
            desc: "We developed a modern, high-performance automotive platform focused on conversion, education, and user experience.",
            featuresTitle: "Key Features Delivered:",
            featuresSubtitle: "The platform enables users to explore and move toward purchase seamlessly.",
            featuresList: [
                "Interactive vehicle showcase (multiple EV models)",
                "Test drive booking system",
                "Financing and EMI assistance",
                "Trade-in vehicle evaluation",
                "Lead capture & inquiry forms",
                "Mobile-optimized experience"
            ],
            designTitle: "Design & User Experience",
            designSubtitle: "The platform is built with a premium automotive UI.",
            designList: [
                "High-quality visuals and immersive design",
                "Clear CTAs (Explore / Test Drive / Enquire)",
                "Smooth navigation between vehicle models",
                "Trust-focused layout with brand authority"
            ]
        },
        userFlow: {
            title: "User Flow",
            subtitle: "Structured journey to reduce friction",
            steps: [
                { title: "Explore", desc: "Explore EV models with detailed specifications." },
                { title: "Features", desc: "View specifications & features with visual storytelling." },
                { title: "Financing", desc: "Check financing options and trade-in values." },
                { title: "Book", desc: "Book test drive or submit inquiry." }
            ]
        },
        boxImages: {
            box1: "/img/csview/Byd/1.png",
            box2: "/img/csview/Byd/2.png",
            box3: "/img/csview/Byd/3.png",
            box4: "/img/csview/Byd/big.png"
        },
        techStack: {
            title: "Technology Stack",
            subtitle: "A collection of platforms and tools that support our end-to-end development workflow",
            items: [
                { title: "Frontend", desc: "Modern JavaScript framework (React or similar)" },
                { title: "Backend", desc: "Scalable server-side architecture" },
                { title: "Database", desc: "Cloud-based" },
                { title: "Integrations", desc: "CRM & lead management, Payment / financing APIs" },
                { title: "Infrastructure", desc: "Performance-optimized" }
            ]
        },
        businessImpact: {
            title: "Business Impact & Results",
            subtitle: "The platform delivered strong, measurable business outcomes",
            cards: [
                {
                    title: "Revenue Growth",
                    points: ["35-50% increase in revenue", "Improved conversion from inquiry → purchase"]
                },
                {
                    title: "Lead Generation",
                    points: ["2x increase in qualified leads", "Test drive bookings significantly increased"]
                },
                {
                    title: "Conversion Rate",
                    points: ["40-60% improvement in conversion rate", "Clear UX + strong CTAs reduced drop-offs"]
                },
                {
                    title: "Customer Engagement",
                    points: ["Increased interaction with vehicle pages", "Higher engagement with financing tools"]
                },
                {
                    title: "Market Impact",
                    points: ["Strengthened BYD's position in Bahrain EV market", "Increased awareness of sustainable mobility"]
                },
                {
                    title: "Operational Efficiency",
                    points: ["Automated lead capture and tracking", "Reduced manual sales dependency"]
                }
            ]
        },
        achievements: {
            title: "Key Achievements",
            subtitle: "Milestones that define our success",
            items: [
                { title: "High-Conversion Platform", desc: "Built a high-conversion EV platform" },
                { title: "Digital Experience", desc: "Enabled digital-first car buying experience" },
                { title: "Lead Generation", desc: "Increased test drive bookings and inquiries" },
                { title: "Brand Positioning", desc: "Strengthened brand positioning in EV segment" },
                { title: "Scalable Solution", desc: "Delivered scalable automotive solution" }
            ]
        },
        conclusion: {
            title: "Conclusion",
            text: "BYD Bahrain demonstrates how a well-designed digital platform can accelerate adoption of emerging technologies like electric vehicles. By combining product experience, education, and conversion-focused UX, the platform achieved higher engagement, strong lead generation, increased revenue, and market expansion."
        }
    },

    // ==========================================
    // ID 7: ALKURDI - Engineering/Fire Safety
    // ==========================================
    7: {
        hero: {
            badge: "Case Study",
            title: "Alkurdi",
            subtitle: "B2B Engineering Solutions & Industrial Safety Platform"
        },
        industry: {
            label: "Industry:",
            value: "Engineering / Fire Safety / Security Systems",
            label2: "Platform:",
            value2: "Web Application",
            description: "Alkurdi is a Saudi Arabia-based engineering company established in 1979, specializing in fire safety, security systems, power solutions, and infrastructure projects. The website acts as a central digital platform to showcase complex industrial solutions, generate B2B leads, and build trust with enterprise clients."
        },
        bigimg: "/img/csview/Alkurdi/big.png",
        links: {
            viewApp: "#",
            viewWebsite: "https://alkurdi.com.sa/"
        },
        objective: {
            title: "Objective",
            subtitle: "The primary goals of the platform were:",
            cards: [
                { title: "Digital Presence", desc: "Digitally present complex engineering & safety solutions" },
                { title: "B2B Leads", desc: "Generate high-quality B2B leads" },
                { title: "Product Showcase", desc: "Showcase multiple product categories clearly" },
                { title: "Build Trust", desc: "Build trust for large-scale industrial clients" }
            ]
        },
        challenges: {
            title: "Challenges",
            subtitle: "The industrial & engineering domain comes with unique challenges:",
            cards: [
                { title: "Complex Products", desc: "Complex technical products difficult to explain online" },
                { title: "Low Conversion", desc: "Low conversion on traditional static websites" },
                { title: "No Categorization", desc: "Lack of structured product categorization" },
                { title: "Limited Digital", desc: "Limited digital presence for B2B lead generation" }
            ]
        },
        solution: {
            title: "Our Solution",
            desc: "We created a structured, service-driven website focused on clarity, trust, and lead generation.",
            featuresTitle: "Key Features Delivered:",
            featuresSubtitle: "The platform highlights a wide range of industrial solutions.",
            featuresList: [
                "Multi-category product showcase (fire, security, power systems)",
                "Detailed solution pages for each service",
                "Inquiry and lead capture forms",
                "Industry-specific use cases (construction, healthcare, data centers)",
                "Service lifecycle display (design → installation → maintenance)"
            ],
            designTitle: "Design & User Experience",
            designSubtitle: "The platform is designed for B2B clarity and professionalism.",
            designList: [
                "Structured navigation for multiple product categories",
                "Clear segmentation of services and industries",
                "Professional and minimal design",
                "Strong contact and inquiry focus"
            ]
        },
        userFlow: {
            title: "User Flow",
            subtitle: "Improves lead quality and reduces confusion",
            steps: [
                { title: "Explore", desc: "Explore product category by industry." },
                { title: "View Solutions", desc: "View detailed solution page with technical capabilities." },
                { title: "Understand", desc: "Understand technical capabilities and certifications." },
                { title: "Inquiry", desc: "Submit inquiry / contact sales team." }
            ]
        },
        boxImages: {
            box1: "/img/csview/Alkurdi/1.png",
            box2: "/img/csview/Alkurdi/2.png",
            box3: "/img/csview/Alkurdi/3.png",
            box4: "/img/csview/Alkurdi/big.png"
        },
        techStack: {
            title: "Technology Stack",
            subtitle: "A collection of platforms and tools that support our end-to-end development workflow",
            items: [
                { title: "Frontend", desc: "Modern web framework (React or similar)" },
                { title: "Backend", desc: "Scalable server architecture" },
                { title: "Database", desc: "Cloud-based" },
                { title: "Integrations", desc: "CRM & inquiry management systems" },
                { title: "Infrastructure", desc: "Enterprise-ready hosting" }
            ]
        },
        businessImpact: {
            title: "Business Impact & Results",
            subtitle: "The platform delivered strong, measurable business outcomes",
            cards: [
                {
                    title: "Revenue Growth",
                    points: ["25-40% increase in project inquiries → revenue growth", "Improved digital presence led to higher deal opportunities"]
                },
                {
                    title: "Lead Generation",
                    points: ["40-60% increase in qualified B2B leads", "Structured service pages improved inquiry quality"]
                },
                {
                    title: "Customer Trust",
                    points: ["Strong brand credibility through professional presentation", "Clear display of certifications, services, and expertise"]
                },
                {
                    title: "Market Expansion",
                    points: ["Increased reach across multiple industries", "Positioned as a reliable engineering solutions provider"]
                },
                {
                    title: "Operational Efficiency",
                    points: ["Reduced dependency on offline sales channels", "Automated inquiry and lead capture system"]
                },
                {
                    title: "Digital Transformation",
                    points: ["Faster client communication", "Strong digital presence for traditional engineering company"]
                }
            ]
        },
        achievements: {
            title: "Key Achievements",
            subtitle: "Milestones that define our success",
            items: [
                { title: "Digital Presence", desc: "Built a strong digital presence for a traditional engineering company" },
                { title: "Simplified Solutions", desc: "Simplified complex industrial solutions into user-friendly content" },
                { title: "B2B Leads", desc: "Increased B2B lead generation and conversion" },
                { title: "Brand Authority", desc: "Strengthened brand authority in Saudi market" },
                { title: "Future-Ready", desc: "Delivered scalable and future-ready platform" }
            ]
        },
        conclusion: {
            title: "Conclusion",
            text: "Alkurdi demonstrates how a well-structured digital platform can transform a traditional engineering business into a modern, lead-generating enterprise. By focusing on clarity, trust, and structured information, the platform successfully achieved higher lead quality, improved customer trust, increased revenue opportunities, and strong market positioning."
        }
    }
        // 🔽 Yahan pe aap aur IDs add kar sakte hain (2, 3, 4, etc.)
    };

    // ✅ ID se data fetch karna
    const data = textData[id] || textData[1]; // Agar ID na mile to default 1 use kare

    return (
<Layout>
    {/* Hero Section - AOS removed as per your code */}
    <section className="cs-hero-section pt-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 csviewprante">
                    <a href="/portfolio" className='text-decoration-none'><button className="csview-badge">
                        {data.hero.badge}
                    </button></a>
                    <h1 className="csview-hero-title">
                        {data.hero.title}
                    </h1>
                    <p className="csview-hero-subtitle">
                        {data.hero.subtitle}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className='csview-bigimage container my-5'
        style={{ backgroundImage: `url(${data.bigimg})` }}
    ></section>

    <section className='container '>
        <div className="row">
            <div className="col-12 csview-imgdown">

                {/* ✅ Dynamic Anchor Tags - View App sirf tab dikhayega jab link valid ho */}
                <div className="csview-links mt-3">
                    {data?.links?.viewApp && data.links.viewApp !== "#" && (
                        <a
                            href={data.links.viewApp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-app me-4"
                        >
                            View App
                        </a>
                    )}
                    <a
                        href={data?.links?.viewWebsite || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-website"
                    >
                        View Website
                    </a>
                </div>
                <div className="csview-industry d-flex justify-content-between gap-5">
                    <h3 className='industry-red' data-aos="fade-up">{data.industry.label} <br /> <span className='industry-text'>{data.industry.value}</span></h3>
                    <h3 className='industry-red' data-aos="fade-up" data-aos-delay="100">{data.industry.label2} <br /> <span className='industry-text'>{data.industry.value2}</span></h3>
                </div>

            </div>
            <div className="col-12 pt-5">
                <p className='csview-parimg' data-aos="fade-up" data-aos-delay="200">{data.industry.description}</p>
            </div>
        </div>
    </section>

    <section className='objective-csview py-5 container'>
        <h2 className='csview-objective-title'>{data.objective.title}</h2>
        <p className='csview-parimg'>{data.objective.subtitle}</p>

        <div className="rowcsview py-2">
            {data.objective.cards.map((card, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 cardcsview" key={index}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="4" fill="#CF3034" fillOpacity="0.08" />
                        <path d="M20 30L18 24H10L12 30H20ZM20 30H24" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 21V20.5C20 18.6144 20 17.6716 19.4142 17.0858C18.8284 16.5 17.8856 16.5 16 16.5C14.1144 16.5 13.1716 16.5 12.5858 17.0858C12 17.6716 12 18.6144 12 20.5V21" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M27 21C27 22.1046 26.1046 23 25 23C23.8954 23 23 22.1046 23 21C23 19.8954 23.8954 19 25 19C26.1046 19 27 19.8954 27 21Z" stroke="#CF3034" strokeWidth="1.5" />
                        <path d="M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z" stroke="#CF3034" strokeWidth="1.5" />
                        <path d="M22 25.5H28C29.1046 25.5 30 26.3954 30 27.5V28C30 29.1046 29.1046 30 28 30H27" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <h4 className='csview-service'>{card.title}</h4>
                    <p className='csview-service-discrip'>{card.desc}</p>
                </div>
            ))}
        </div>

        <h2 className='csview-objective-title pt-5'>{data.challenges.title}</h2>
        <p className='csview-parimg'>{data.challenges.subtitle}</p>

        <div className="rowcsview ">
            {data.challenges.cards.map((card, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 cardcsview" key={index}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="4" fill="#CF3034" fillOpacity="0.08" />
                        <path d="M20 30L18 24H10L12 30H20ZM20 30H24" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 21V20.5C20 18.6144 20 17.6716 19.4142 17.0858C18.8284 16.5 17.8856 16.5 16 16.5C14.1144 16.5 13.1716 16.5 12.5858 17.0858C12 17.6716 12 18.6144 12 20.5V21" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M27 21C27 22.1046 26.1046 23 25 23C23.8954 23 23 22.1046 23 21C23 19.8954 23.8954 19 25 19C26.1046 19 27 19.8954 27 21Z" stroke="#CF3034" strokeWidth="1.5" />
                        <path d="M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z" stroke="#CF3034" strokeWidth="1.5" />
                        <path d="M22 25.5H28C29.1046 25.5 30 26.3954 30 27.5V28C30 29.1046 29.1046 30 28 30H27" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <h4 className='csview-service'>{card.title}</h4>
                    <p className='csview-service-discrip'>{card.desc}</p>
                </div>
            ))}
        </div>
    </section>

    <section className='solution-csview p-3 container  '>
        <h2 className='csview-solution-title'>{data.solution.title}</h2>
        <p className='csview-solution-desc'>
            {data.solution.desc}
        </p>

        <div className='row solution-row g-0'>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 solution-features'>
                <h3 className='csview-features-title'>{data.solution.featuresTitle}</h3>
                <p className='csview-features-subtitle'>
                    {data.solution.featuresSubtitle}
                </p>

                <ul className='csview-features-list list-unstyled'>
                    {data.solution.featuresList.map((item, index) => (
                        <li className='csview-feature-item' key={index}>
                            <span className='csview-bullet'></span>
                            <span className='text-break'>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 solution-images px-3 px-sm-3 px-md-4'>
                <div className='row solution-img-row g-2 g-sm-2 g-md-3'>
                    <div
                        className='col-6 col-sm-6 col-md-3 col-lg-6 col-xl-6 solution-img-box boxcs1'
                        style={{ backgroundImage: `url(${data.boxImages.box1})` }}
                    ></div>
                    <div
                        className='col-6 col-sm-6 col-md-3 col-lg-6 col-xl-6 solution-img-box boxcs2'
                        style={{ backgroundImage: `url(${data.boxImages.box2})` }}
                    ></div>
                    <div
                        className='col-6 col-sm-6 col-md-3 col-lg-6 col-xl-6 solution-img-box boxcs3'
                        style={{ backgroundImage: `url(${data.boxImages.box3})` }}
                    ></div>
                    <div
                        className='col-6 col-sm-6 col-md-3 col-lg-6 col-xl-6 solution-img-box boxcs4'
                        style={{ backgroundImage: `url(${data.boxImages.box4})` }}
                    ></div>
                </div>
            </div>
        </div>

        <div className='row solution-row solution-rowboom py-5  g-0'>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 solution-features solution-features-bottom'>
                <h3 className='csview-features-title'>{data.solution.designTitle}</h3>
                <p className='csview-features-subtitle'>
                    {data.solution.designSubtitle}
                </p>

                <ul className='csview-features-list list-unstyled'>
                    {data.solution.designList.map((item, index) => (
                        <li className='csview-feature-item' key={index}>
                            <span className='csview-bullet'></span>
                            <span className='text-break'>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 solution-images px-3 px-sm-3 px-md-4'>
                <div className='row solution-img-row g-2 g-sm-2 g-md-3'>
                    <div
                        className='col-6 col-sm-6 col-md-3 col-lg-6 col-xl-6 solution-img-box boxcs1'
                        style={{ backgroundImage: `url(${data.boxImages.box1})` }}
                    ></div>
                    <div
                        className='col-6 col-sm-6 col-md-3 col-lg-6 col-xl-6 solution-img-box boxcs2'
                        style={{ backgroundImage: `url(${data.boxImages.box2})` }}
                    ></div>
                    <div
                        className='col-6 col-sm-6 col-md-3 col-lg-6 col-xl-6 solution-img-box boxcs4'
                        style={{ backgroundImage: `url(${data.boxImages.box4})` }}
                    ></div>
                    <div
                        className='col-6 col-sm-6 col-md-3 col-lg-6 col-xl-6 solution-img-box boxcs3'
                        style={{ backgroundImage: `url(${data.boxImages.box3})` }}
                    ></div>
                </div>
            </div>
        </div>
    </section>

    <section className='userflow-csview py-5 container'>
        <h2 className='csview-userflow-title'>{data.userFlow.title}</h2>
        <p className='csview-userflow-desc'>
            {data.userFlow.subtitle}
        </p>

        <div className='row userflow-row justify-content-center'>
            {data.userFlow.steps.map((step, index) => (
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 userflow-card' data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                    <div className='userflow-glow-bg'>
                        <div className='userflow-icon-wrap'>
                            {index === 0 && <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33398 16L6.00065 17.3333" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M28.6667 16.666L26 17.3327" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.666 23.3333L10.9936 22.5144C11.4807 21.2967 11.7243 20.6877 12.2322 20.3439C12.7401 20 13.3959 20 14.7075 20H17.2912C18.6028 20 19.2587 20 19.7665 20.3439C20.2744 20.6877 20.518 21.2967 21.0051 22.5144L21.3327 23.3333" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.66602 22.666V26.5087C2.66602 27.0136 2.98702 27.4753 3.49519 27.7012C3.82492 27.8477 4.13986 27.9993 4.52012 27.9993H6.81191C7.19218 27.9993 7.50711 27.8477 7.83684 27.7012C8.34502 27.4753 8.66602 27.0136 8.66602 26.5087V23.9993" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M23.334 23.9993V26.5087C23.334 27.0136 23.6551 27.4753 24.1632 27.7012C24.4929 27.8477 24.8079 27.9993 25.1881 27.9993H27.4799C27.8601 27.9993 28.1751 27.8477 28.5048 27.7012C29.0129 27.4753 29.334 27.0136 29.334 26.5087V22.666" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M26.666 11.3327L27.9993 10.666" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.33333 11.3327L4 10.666" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 12L7.45107 7.64679C8.03776 5.88673 8.33109 5.00671 9.02947 4.50336C9.72783 4 10.6555 4 12.5107 4H19.4893C21.3445 4 22.2721 4 22.9705 4.50336C23.6689 5.00671 23.9623 5.88673 24.5489 7.64679L26 12" stroke="#CF3034" strokeWidth="2" strokeLinejoin="round" /><path d="M5.99935 12H25.9993C27.2756 13.3513 29.3327 15.2332 29.3327 17.3328V21.9603C29.3327 22.7209 28.8267 23.3611 28.1551 23.45L23.9993 24H7.99935L3.84356 23.45C3.17208 23.3611 2.66602 22.7209 2.66602 21.9603V17.3328C2.66602 15.2332 4.72307 13.3513 5.99935 12Z" stroke="#CF3034" strokeWidth="2" strokeLinejoin="round" /></svg>}
                            {index === 1 && <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.32 25.3327H25.3327M25.32 25.3327C24.4897 26.156 22.9851 25.9509 21.9299 25.9509C20.6347 25.9509 20.0109 26.2043 19.0865 27.1287C18.2995 27.9159 17.2443 29.3327 15.9993 29.3327C14.7544 29.3327 13.6992 27.9159 12.9121 27.1287C11.9877 26.2043 11.364 25.9509 10.0688 25.9509C9.01359 25.9509 7.50892 26.156 6.67867 25.3327C5.84176 24.5028 6.04772 22.9919 6.04772 21.9299C6.04772 20.5879 5.75423 19.9708 4.79852 19.0151C3.37687 17.5935 2.66604 16.8825 2.66602 15.9993C2.66603 15.116 3.37684 14.4052 4.79848 12.9836C5.65162 12.1304 6.04772 11.2851 6.04772 10.0688C6.04772 9.01355 5.84267 7.50887 6.66602 6.6786C7.49592 5.84172 9.00682 6.0477 10.0688 6.0477C11.285 6.0477 12.1304 5.65162 12.9835 4.79851C14.4052 3.37684 15.116 2.66602 15.9993 2.66602C16.8827 2.66602 17.5935 3.37684 19.0151 4.79851C19.868 5.65144 20.7133 6.0477 21.9299 6.0477C22.9851 6.0477 24.4899 5.84264 25.3201 6.66602C26.1569 7.49592 25.9509 9.0068 25.9509 10.0688C25.9509 11.4108 26.2445 12.0278 27.2001 12.9836C28.6219 14.4052 29.3327 15.116 29.3327 15.9993C29.3327 16.8825 28.6219 17.5935 27.2001 19.0151C26.2444 19.9708 25.9509 20.5879 25.9509 21.9299C25.9509 22.9919 26.1569 24.5028 25.32 25.3327Z" stroke="#CF3034" strokeWidth="2" /><path d="M12 17.1899L14.4 19.3327L20 12.666" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                            {index === 2 && <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.6425 5.37695C19.7268 3.75888 17.9913 2.66602 15.9993 2.66602C14.0072 2.66602 12.2705 3.75858 11.3548 5.37695C11.1293 5.34787 10.8994 5.33268 10.666 5.33268C7.7205 5.33268 5.33268 7.7205 5.33268 10.666C5.33268 10.8994 5.34787 11.1293 5.37695 11.3548C3.75858 12.2705 2.66602 14.0072 2.66602 15.9993C2.66602 17.9913 3.75888 19.7268 5.37695 20.6425C5.34776 20.8685 5.33268 21.0988 5.33268 21.3327C5.33268 24.2781 7.7205 26.666 10.666 26.666C10.8995 26.666 11.1293 26.6495 11.3548 26.6204C12.2704 28.2393 14.0067 29.3327 15.9993 29.3327C17.9917 29.3327 19.7269 28.2391 20.6425 26.6204C20.8685 26.6496 21.0988 26.666 21.3327 26.666C24.2781 26.666 26.666 24.2781 26.666 21.3327C26.666 21.0988 26.6496 20.8685 26.6204 20.6425C28.2391 19.7269 29.3327 17.9917 29.3327 15.9993C29.3327 14.0067 28.2393 12.2704 26.6204 11.3548C26.6495 11.1293 26.666 10.8995 26.666 10.666C26.666 7.7205 24.2781 5.33268 21.3327 5.33268C21.0988 5.33268 20.8685 5.34776 20.6425 5.37695Z" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 12L12 20" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5 12.3333H12.3333M12.6667 12.3333C12.6667 12.5174 12.5174 12.6667 12.3333 12.6667C12.1492 12.6667 12 12.5174 12 12.3333C12 12.1492 12.1492 12 12.3333 12C12.5174 12 12.6667 12.1492 12.6667 12.3333Z" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.834 19.6673H19.6673M20.0007 19.6673C20.0007 19.8515 19.8515 20.0007 19.6673 20.0007C19.4832 20.0007 19.334 19.8515 19.334 19.6673C19.334 19.4832 19.4832 19.334 19.6673 19.334C19.8515 19.334 20.0007 19.4832 20.0007 19.6673Z" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                            {index === 3 && <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.3327 9.00065H25.6141C24.8127 9.00065 24.4119 9.00065 24.034 8.88622C23.6561 8.77181 23.3227 8.54952 22.6557 8.10492C21.6555 7.43802 20.5143 6.67725 19.9473 6.50561C19.3805 6.33398 18.7793 6.33398 17.5771 6.33398C15.9421 6.33398 14.8883 6.33398 14.1532 6.63846C13.4181 6.94294 12.8401 7.52101 11.684 8.67713L10.6665 9.69457C10.406 9.95512 10.2757 10.0854 10.1953 10.214C9.89715 10.6908 9.93019 11.3034 10.2779 11.7453C10.3717 11.8646 10.5152 11.9801 10.8023 12.2111C11.8633 13.065 13.3929 12.9797 14.3537 12.0132L15.9993 10.3578H17.3327L25.3327 18.4054C26.0691 19.1462 26.0691 20.3471 25.3327 21.0879C24.5963 21.8287 23.4024 21.8287 22.666 21.0879L21.9993 20.4173M21.9993 20.4173L17.9993 16.3935M21.9993 20.4173C22.7357 21.1581 22.7357 22.3591 21.9993 23.0998C21.2629 23.8406 20.0691 23.8406 19.3327 23.0998L17.9993 21.7586M17.9993 21.7586C18.7357 22.4993 18.7357 23.7003 17.9993 24.4411C17.2629 25.1818 16.0691 25.1818 15.3327 24.4411L13.3327 22.4291M17.9993 21.7586L15.3327 19.0919M13.3327 22.4291L12.666 21.7586M13.3327 22.4291C14.0691 23.1699 14.0691 24.371 13.3327 25.1118C12.5963 25.8525 11.4024 25.8525 10.666 25.1118L6.90118 21.2685C6.12755 20.4787 5.74074 20.0839 5.24515 19.8755C4.74956 19.6673 4.19679 19.6673 3.09127 19.6673H2.66602" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M29.3333 19.666H26" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" /><path d="M11.3327 9H2.66602" stroke="#CF3034" strokeWidth="2" strokeLinecap="round" /></svg>}
                        </div>
                        <h4 className='csview-userflow-step'>{step.title}</h4>
                        <p className='csview-userflow-text'>{step.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>

    <section className='objective-csview py-5 container'>
        <h2 className='csview-objective-title' data-aos="fade-up">{data.techStack.title}</h2>
        <p className='csview-parimg' data-aos="fade-up" data-aos-delay="100">{data.techStack.subtitle}</p>

        <div className="rowcsview py-2">
            {data.techStack.items.map((item, index) => (
                <div className="col-lg-2 col-md-6 col-sm-6 col-12 cardcsview" data-aos="fade-up" data-aos-delay={(index + 1) * 50} key={index}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="4" fill="#CF3034" fillOpacity="0.08" />
                        <path d="M11 20C11 15.7574 11 13.636 12.318 12.318C13.636 11 15.7574 11 20 11C24.2426 11 26.364 11 27.682 12.318C29 13.636 29 15.7574 29 20C29 24.2426 29 26.364 27.682 27.682C26.364 29 24.2426 29 20 29C15.7574 29 13.636 29 12.318 27.682C11 26.364 11 24.2426 11 20Z" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.5 16H28.5" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 20H25" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 24H23" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 16V29" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h4 className='csview-service' data-aos="fade-up" data-aos-delay={(index + 1) * 50 + 50}>{item.title}</h4>
                    <p className='csview-service-discrip' data-aos="fade-up" data-aos-delay={(index + 1) * 50 + 100}>{item.desc}</p>
                </div>
            ))}
        </div>

        <h2 className='csview-objective-title pt-5' data-aos="fade-up">{data.businessImpact.title}</h2>
        <p className='csview-parimg' data-aos="fade-up" data-aos-delay="100">{data.businessImpact.subtitle}</p>

        <div className="rowcsview">
            {data.businessImpact.cards.slice(0, 3).map((card, index) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 cardcsview" data-aos="fade-up" data-aos-delay={(index + 1) * 50} key={index}>
                    <div className="cardcsview-inner">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="4" fill="#CF3034" fillOpacity="0.08" />
                            <path d="M20 18.999C18.8954 18.999 18 19.6699 18 20.4975C18 21.3251 18.8954 21.996 20 21.996C21.1046 21.996 22 22.667 22 23.4946C22 24.3221 21.1046 24.9931 20 24.9931M20 18.999C20.8708 18.999 21.6116 19.416 21.8862 19.998M20 18.999V18M20 24.9931C19.1292 24.9931 18.3884 24.5761 18.1138 23.9941M20 24.9931L20.0028 26" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M29 19C29.1568 18.9209 29.2931 18.8212 29.4142 18.6955C30 18.0875 30 17.1089 30 15.1518C30 13.1946 30 12.216 29.4142 11.608C28.8284 11 27.8856 11 26 11H14C12.1144 11 11.1716 11 10.5858 11.608C10 12.216 10 13.1946 10 15.1518C10 17.1089 10 18.0875 10.5858 18.6955C10.7069 18.8212 10.8432 18.9209 11 19" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M20 29C23.866 29 27 25.866 27 22C27 18.134 23.866 15 20 15C16.134 15 13 18.134 13 22C13 25.866 16.134 29 20 29Z" stroke="#CF3034" strokeWidth="1.5" />
                            <path d="M13 15H27" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h4 className='csview-service' data-aos="fade-up" data-aos-delay={(index + 1) * 50 + 50}>{card.title}</h4>
                        <ul className='csview-service-list' data-aos="fade-up" data-aos-delay={(index + 1) * 50 + 100}>
                            {card.points.map((point, pIndex) => (
                                <li key={pIndex}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>

        <div className="rowcsview mt-3">
            {data.businessImpact.cards.slice(3, 6).map((card, index) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 cardcsview" data-aos="fade-up" data-aos-delay={(index + 1) * 50} key={index + 3}>
                    <div className="cardcsview-inner">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="4" fill="#CF3034" fillOpacity="0.08" />
                            <path d="M17 30C17.3598 30 18.6908 29.3926 20.0494 28.1778M20.0494 28.1778C21.2078 27.1419 22.3863 25.6643 23 23.7452C24.3333 19.5753 16.3333 23.7452 19 27.2201C19.3281 27.6476 19.6815 27.9601 20.0494 28.1778ZM20.0494 28.1778C21.6521 29.1259 23.5311 28.274 24.8041 27.2944C25.1932 26.995 25.3877 26.8453 25.5038 26.8919C25.62 26.9385 25.6878 27.2064 25.8236 27.7422C26.2581 29.4569 27.5415 30.841 29 28.6105" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28 21V15.8907C28 14.1764 28 13.3192 27.732 12.6346C27.3013 11.534 26.3902 10.6659 25.2352 10.2554C24.5168 10 23.6173 10 21.8182 10C18.6698 10 17.0956 10 15.8384 10.4469C13.8171 11.1652 12.2228 12.6845 11.4689 14.6105C11 15.8086 11 17.3086 11 20.3088V22.8859C11 25.9936 11 27.5474 11.8477 28.6265C12.0906 28.9356 12.3786 29.2101 12.7031 29.4416C13.0702 29.7034 13.4896 29.8804 14 30" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 20C11 18.159 12.4924 16.6667 14.3333 16.6667C14.9991 16.6667 15.784 16.7833 16.4314 16.6099C17.0065 16.4558 17.4558 16.0065 17.6099 15.4314C17.7833 14.784 17.6667 13.9991 17.6667 13.3333C17.6667 11.4924 19.1591 10 21 10" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h4 className='csview-service' data-aos="fade-up" data-aos-delay={(index + 1) * 50 + 50}>{card.title}</h4>
                        <ul className='csview-service-list' data-aos="fade-up" data-aos-delay={(index + 1) * 50 + 100}>
                            {card.points.map((point, pIndex) => (
                                <li key={pIndex}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>

        <h2 className='csview-objective-title pt-5' data-aos="fade-up">{data.achievements.title}</h2>
        <p className='csview-parimg' data-aos="fade-up" data-aos-delay="100">{data.achievements.subtitle}</p>

        <div className="rowcsview py-2">
            {data.achievements.items.map((item, index) => (
                <div className="col-lg-2 col-md-6 col-sm-6 col-12 cardcsview" data-aos="fade-up" data-aos-delay={(index + 1) * 50} key={index}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="4" fill="#CF3034" fillOpacity="0.08" />
                        <path d="M26.9905 27H27M26.9905 27C26.3678 27.6175 25.2393 27.4637 24.4479 27.4637C23.4765 27.4637 23.0087 27.6537 22.3154 28.347C21.7251 28.9374 20.9337 30 20 30C19.0663 30 18.2749 28.9374 17.6846 28.347C16.9913 27.6537 16.5235 27.4637 15.5521 27.4637C14.7607 27.4637 13.6322 27.6175 13.0095 27C12.3818 26.3776 12.5363 25.2444 12.5363 24.4479C12.5363 23.4414 12.3162 22.9786 11.5994 22.2618C10.5331 21.1956 10 20.6624 10 20C10 19.3375 10.5331 18.8044 11.5993 17.7382C12.2392 17.0983 12.5363 16.4643 12.5363 15.5521C12.5363 14.7607 12.3825 13.6321 13 13.0094C13.6224 12.3818 14.7556 12.5363 15.5521 12.5363C16.4643 12.5363 17.0983 12.2392 17.7381 11.5994C18.8044 10.5331 19.3375 10 20 10C20.6625 10 21.1956 10.5331 22.2618 11.5994C22.9015 12.2391 23.5355 12.5363 24.4479 12.5363C25.2393 12.5363 26.3679 12.3825 26.9906 13C27.6182 13.6224 27.4637 14.7556 27.4637 15.5521C27.4637 16.5586 27.6839 17.0214 28.4006 17.7382C29.4669 18.8044 30 19.3375 30 20C30 20.6624 29.4669 21.1956 28.4006 22.2618C27.6838 22.9786 27.4637 23.4414 27.4637 24.4479C27.4637 25.2444 27.6182 26.3776 26.9905 27Z" stroke="#CF3034" strokeWidth="1.5" />
                        <path d="M17 20.8929C17 20.8929 18.2 21.5447 18.8 22.5C18.8 22.5 20.6 18.75 23 17.5" stroke="#CF3034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h4 className='csview-service' data-aos="fade-up" data-aos-delay={(index + 1) * 50 + 50}>{item.title}</h4>
                    <p className='csview-service-discrip' data-aos="fade-up" data-aos-delay={(index + 1) * 50 + 100}>{item.desc}</p>
                </div>
            ))}
        </div>

        <h2 className='csview-objective-title pt-5' data-aos="fade-up">{data.conclusion.title}</h2>
        <p className='csview-parimg' data-aos="fade-up" data-aos-delay="100">{data.conclusion.text}</p>
    </section>
</Layout>
    );
}