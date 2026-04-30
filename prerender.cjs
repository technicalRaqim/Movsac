const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const DIST_DIR = path.resolve(__dirname, 'dist');
const INDEX_HTML = path.join(DIST_DIR, 'index.html');

// Routes to prerender with their meta tags
const routes = [
  {
    path: '/',
    title: 'IT Services – Software & Web Development | Movsac',
    description: 'Movsac offers IT services including web development, mobile apps, software solutions, and digital transformation for modern businesses.',
    keywords: 'IT services, software development, web development, mobile apps',
    ogTitle: 'IT Services – Software & Web Development | Movsac',
  },
  {
    path: '/about',
    title: 'About Movsac – IT & Staffing Experts',
    description: 'Movsac is a trusted IT and staffing company providing innovative tech solutions and skilled professionals to businesses worldwide.',
    keywords: 'IT staffing, IT solutions, technology consulting',
    ogTitle: 'About Movsac – IT & Staffing Experts',
  },
  {
    path: '/services',
    title: 'Our Services – IT Solutions, Staffing & Web Development | Movsac',
    description: 'Explore Movsac services including IT solutions, software development, web development, and staffing services. Hire experts or build digital products with us.',
    keywords: 'IT services, staffing services, recruitment, web development, software development, hire developers, IT company India',
    ogTitle: 'Our Services – IT Solutions, Staffing & Web Development | Movsac',
  },
  {
    path: '/industries',
    title: 'Industries We Serve | Movsac',
    description: 'Industry-specific IT solutions and digital transformation services for modern businesses across all sectors.',
    keywords: 'industries, IT solutions, digital transformation',
    ogTitle: 'Industries We Serve | Movsac',
  },
  {
    path: '/portfolio',
    title: 'Portfolio – Our Work | Movsac',
    description: 'Explore our portfolio of successful IT projects and digital transformation initiatives.',
    keywords: 'portfolio, projects, case studies',
    ogTitle: 'Portfolio – Our Work | Movsac',
  },
  {
    path: '/insight',
    title: 'Insights & Blog | Movsac',
    description: 'Latest insights, articles, and thought leadership in technology and digital transformation.',
    keywords: 'blog, insights, technology news',
    ogTitle: 'Insights & Blog | Movsac',
  },
  {
    path: '/contact',
    title: 'Contact Us | Movsac',
    description: 'Get in touch with Movsac for your IT and digital transformation needs.',
    keywords: 'contact, get in touch, IT services',
    ogTitle: 'Contact Us | Movsac',
  },
];

async function prerender() {
  if (!fs.existsSync(INDEX_HTML)) {
    console.error('Error: dist/index.html not found. Run npm run build first.');
    process.exit(1);
  }

  const indexHtml = fs.readFileSync(INDEX_HTML, 'utf-8');

  // Create directories for each route
  for (const route of routes) {
    const routeDir = route.path === '/' ? DIST_DIR : path.join(DIST_DIR, route.path.slice(1));
    const routeFile = route.path === '/' ? path.join(DIST_DIR, 'index.html') : path.join(routeDir, 'index.html');

    // Create directory
    fs.mkdirSync(routeDir, { recursive: true });

    // Clone index.html and inject meta tags
    const dom = new JSDOM(indexHtml);
    const { document } = dom.window;

    // Update or create title
    const titleEl = document.querySelector('title');
    if (titleEl) {
      titleEl.textContent = route.title;
    }

    // Find existing meta tags and update/create them
    function updateOrCreateMeta(name, content) {
      // Try property (og:title) first
      let meta = document.querySelector(`meta[property="${name}"]`);
      if (!meta) {
        // Try name attribute
        meta = document.querySelector(`meta[name="${name}"]`);
      }
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        // Create new meta tag
        meta = document.createElement('meta');
        if (name.startsWith('og:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.querySelector('head').appendChild(meta);
      }
    }

    // Set meta tags
    updateOrCreateMeta('description', route.description);
    updateOrCreateMeta('keywords', route.keywords);
    updateOrCreateMeta('og:title', route.ogTitle);
    updateOrCreateMeta('og:description', route.description);

    const html = dom.serialize();
    fs.writeFileSync(routeFile, html);
    console.log(`✓ Generated: ${routeFile}`);
  }

  console.log('\n✓ Prerendering complete!');
}

prerender().catch(err => {
  console.error(err);
  process.exit(1);
});
