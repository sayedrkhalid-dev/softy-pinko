# Softy Pinko - Modern React SPA

## Project Structure
```
src/
  App.jsx          ← Main SPA (all sections)
  backgrounds.js   ← All background SVGs & CSS gradients (SEPARATE FILE)
  index.css        ← Global styles & animations
  main.jsx         ← React entry point
public/
  logo.svg         ← Vector logo (SEPARATE FILE)
```

## Getting Started
```bash
npm install
npm run dev      # Development
npm run build    # Production build
```

## Customization
- **Logo**: Edit `public/logo.svg`
- **Backgrounds**: Edit `src/backgrounds.js` — each background is an SVG string + encoded URL
- **Colors**: Edit `cssGradients` in `backgrounds.js`
- **Content**: Edit sections in `src/App.jsx`

## Sections
1. Navbar (sticky, transparent → white on scroll)
2. Hero (full-height with animated gradient background)
3. Features (3-column cards)
4. About (split layout)
5. Work Process (6-step with connectors)
6. Testimonials (carousel with dots)
7. Pricing (3 plans, middle highlighted)
8. Blog (3 posts)
9. Contact (form + info)
10. Footer (4-column + social links)
