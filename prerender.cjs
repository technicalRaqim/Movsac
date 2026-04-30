const fs = require('fs');
const path = require('path');

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

function generateMetaTags(route) {
  return `  <meta name="description" content="${route.description}">\n  <meta name="keywords" content="${route.keywords}">\n  <meta property="og:title" content="${route.ogTitle}">\n  <meta property="og:description" content="${route.description}">`;
}

function prerender() {
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

    // Check if meta tags already exist
    const metaPattern = /<meta name="description" content=".*?">\s*<meta name="keywords" content=".*?">\s*<meta property="og:title" content=".*?">\s*<meta property="og:description" content=".*?">/s;
    const hasMetaTags = metaPattern.test(indexHtml);

    let html;
    if (hasMetaTags) {
      // Replace title and meta tags
      html = indexHtml
        .replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`)
        .replace(metaPattern, generateMetaTags(route));
    } else {
      // Insert meta tags after the closing </title> tag
      html = indexHtml
        .replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`)
        .replace('</title>', `</title>\n${generateMetaTags(route)}`);
    }

    fs.writeFileSync(routeFile, html, 'utf-8');
    console.log(`✓ Generated: ${routeFile}`);
  }

  console.log('\n✓ Prerendering complete!');
}

prerender();
