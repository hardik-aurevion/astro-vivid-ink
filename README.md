# Vivid Ink Tattoos - Astro Website

A production-ready, high-performance Astro website rebuilt from WordPress, optimized for maximum Lighthouse scores (95+ in all categories).

## 🚀 Features

- **Zero JavaScript by default** - Astro islands only when strictly required
- **Static Site Generation (SSG)** - Pre-rendered HTML for maximum performance
- **Tailwind CSS** - Utility-first styling with minimal CSS output
- **SEO Optimized** - Semantic HTML, meta tags, Open Graph, Twitter cards
- **Accessibility First** - WCAG compliant, semantic HTML, proper ARIA labels
- **Image Optimization** - Lazy loading, modern formats (WebP/AVIF), responsive images
- **Clean URLs** - SEO-friendly URL structure
- **Sitemap & Robots.txt** - Automatically generated

## 📁 Project Structure

```
/
├── public/
│   ├── assets/
│   │   ├── images/     # Optimized images
│   │   └── fonts/      # Self-hosted fonts
│   └── robots.txt      # Search engine directives
├── src/
│   ├── components/
│   │   ├── ui/         # Reusable UI components
│   │   │   ├── Button.astro
│   │   │   ├── Footer.astro
│   │   │   └── Header.astro
│   │   └── sections/   # Page sections
│   │       ├── Contact.astro
│   │       ├── Gallery.astro
│   │       ├── Hero.astro
│   │       └── Pricing.astro
│   ├── layouts/
│   │   └── MainLayout.astro  # Main page layout
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── about.astro      # About page
│   │   ├── contact.astro    # Contact page
│   │   ├── gallery.astro    # Gallery page
│   │   └── pricing.astro    # Pricing page
│   ├── styles/
│   │   └── global.css       # Global styles & Tailwind
│   └── types/               # TypeScript types
├── astro.config.mjs         # Astro configuration
├── package.json
└── tsconfig.json
```

## 🛠️ Setup & Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:4321`

## 🏗️ Build & Deployment

### Build Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the static site:**
   ```bash
   npm run build
   ```

3. **Output directory:**
   The static files will be generated in the `dist/` directory.

### Deployment Options

#### Nginx / VPS Deployment

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Upload the `dist/` folder** to your server

3. **Configure Nginx:**
   ```nginx
   server {
       listen 80;
       server_name vividinktattoos.co.uk;
       root /var/www/vividinktattoos/dist;
       index index.html;

       # Gzip compression
       gzip on;
       gzip_vary on;
       gzip_min_length 1024;
       gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

       # Cache static assets
       location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       # SPA fallback
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **Enable HTTPS** (recommended):
   ```bash
   sudo certbot --nginx -d vividinktattoos.co.uk
   ```

#### Alternative Deployment Platforms

- **Netlify:** Connect your Git repository or drag & drop the `dist/` folder
- **Vercel:** Connect your Git repository
- **Cloudflare Pages:** Connect your Git repository
- **GitHub Pages:** Use GitHub Actions to build and deploy

## 🧪 Lighthouse Testing

### Run Lighthouse Locally

1. **Build the site:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Open Chrome DevTools** and navigate to the Lighthouse tab

3. **Run Lighthouse** for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

### Target Scores

- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 95+

### Performance Optimizations Implemented

- ✅ Zero client-side JavaScript (except minimal mobile menu toggle)
- ✅ Static HTML generation
- ✅ Image lazy loading
- ✅ Modern image formats (WebP/AVIF)
- ✅ CSS minification
- ✅ HTML compression
- ✅ Preconnect/DNS prefetch for external resources
- ✅ Semantic HTML5
- ✅ Proper heading hierarchy
- ✅ Optimized font loading
- ✅ No third-party scripts
- ✅ Minimal CSS (Tailwind purging unused styles)

## 📝 Customization

### Update Content

- **Pages:** Edit files in `src/pages/`
- **Components:** Edit files in `src/components/`
- **Layout:** Edit `src/layouts/MainLayout.astro`
- **Styles:** Edit `src/styles/global.css`

### Add Images

1. Place images in `public/assets/images/`
2. Reference them in components: `/assets/images/your-image.jpg`
3. Use the `<picture>` element for responsive images

### Update Site Metadata

Edit `astro.config.mjs` to update:
- Site URL
- Sitemap configuration

### Update SEO Meta Tags

Edit `src/layouts/MainLayout.astro` to customize:
- Default title and description
- Open Graph images
- Twitter card settings

## 🔧 Configuration

### Astro Config (`astro.config.mjs`)

- **Site URL:** Configured for `https://vividinktattoos.co.uk`
- **Sitemap:** Auto-generated with weekly changefreq
- **HTML Compression:** Enabled
- **Tailwind CSS:** Integrated via Vite plugin

### TypeScript

Strict TypeScript is enabled. Type definitions can be added in `src/types/`.

## 📊 Performance Tips

1. **Optimize Images:**
   - Use WebP/AVIF formats
   - Compress images before adding to `public/assets/images/`
   - Use appropriate image sizes (not larger than needed)

2. **Minimize Custom CSS:**
   - Prefer Tailwind utility classes
   - Remove unused styles

3. **Avoid Client-Side JavaScript:**
   - Use Astro islands only when necessary
   - Prefer CSS-only solutions for interactions

4. **Font Optimization:**
   - Self-host fonts in `public/assets/fonts/`
   - Use `font-display: swap` in CSS
   - Preload critical fonts

## 🐛 Troubleshooting

### Build Errors

- Ensure Node.js 18+ is installed
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run astro check`

### Performance Issues

- Run `npm run build` and check the output size
- Use Lighthouse to identify bottlenecks
- Ensure images are optimized

## 📄 License

This project is proprietary. All rights reserved.

## 🤝 Support

For issues or questions, contact the development team.

---

**Built with ❤️ using Astro**
# astro-vivid-ink
