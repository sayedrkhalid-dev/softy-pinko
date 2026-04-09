# 🌸 Softy Pinko

A fully responsive, modern **agency/business landing page** built with **React 19**, **TailwindCSS v4**, and **DaisyUI v5**, powered by **Vite**. Softy Pinko features a polished purple-to-pink gradient design system, smooth scroll-reveal animations, and a clean component-driven architecture — making it a great template for any digital agency or SaaS product.

---

## 🖥️ Live Sections

The single-page app is organized into 8 distinct sections accessible via a sticky navigation bar:

| Section | Description |
|---|---|
| **Navbar** | Fixed top nav with transparent → frosted glass scroll effect, active link highlighting, mobile hamburger menu, and a CTA button |
| **Banner / Hero** | Full-screen hero with background image, headline, CTA buttons, and an animated stats bar |
| **About** | Two-column layout with circular image frame, company highlights, and a 3-stat grid |
| **Workflow** | 6-step process timeline with icon cards (Ideas → Sketch → Discuss → Revise → Approve → Launch) |
| **Services** | 3-card grid showcasing Modern Strategy, Best Relationship, and Ultimate Marketing |
| **Pricing** | 3-tier pricing cards (Starter, Premium, Advanced) with a "Most Popular" badge on the Premium plan |
| **Contact** | Split layout with contact info on the left and a full contact form on the right |
| **Footer** | Dark-themed footer with links for Services, Company, Legal, and a newsletter email input |

---

## ✨ Features

### 🎨 Design & UI
- **Purple-to-pink gradient** design language used consistently across CTAs, badges, and buttons
- **DaisyUI** component library (navbar, cards, inputs, footer, join) styled with `data-theme="night"`
- Custom background images per section (hero, wave, workflow, dark) for visual depth
- Smooth **hover lift effects** (`hover:-translate-y-0.5`) on cards and buttons throughout

### 🎬 Scroll Reveal Animations
A custom `Reveal` component + `useReveal` hook implements **IntersectionObserver-based** entry animations:
- Supports 5 directions: `up`, `down`, `left`, `right`, `none`
- Elements slide in 40px from their configured direction and fade from `opacity-0` to `opacity-100`
- Configurable `delay` (ms) and `duration` (ms) per element
- Observer fires once then disconnects — no performance overhead on re-scroll
- Used on nearly every section element for a polished, staggered entrance effect

### 🧭 Smooth Scroll Navigation
A `scrollToSection(id)` utility provides **anchor-link-style smooth scrolling** without React Router:
- Matches section IDs to nav link labels
- Scrolls to `top: 0` for `home`, or `offsetTop - 50px` for all other sections (accounts for fixed navbar height)
- Used by nav links, hero CTA buttons, and the "Get Started" button

### 📱 Fully Responsive
- Mobile-first layout using TailwindCSS responsive prefixes (`sm:`, `md:`, `lg:`)
- Hamburger dropdown menu on small screens (DaisyUI dropdown)
- Full horizontal navbar on large screens (`lg:flex`)
- Grid columns and flex directions adapt at every breakpoint

### 📊 Stats Bar
A reusable `Stats` component renders key business metrics in the hero banner with a glassmorphism-style container:
- 250+ Projects
- 500+ Clients
- 35 Awards
- 850K+ Lines of Code

---

## 🗂️ Project Structure

```
softy-pinko/
├── index.html                          # App shell — sets DaisyUI theme to "night"
├── vite.config.js                      # Vite config with React + TailwindCSS v4 plugins
├── eslint.config.js                    # ESLint config (flat config format)
├── package.json                        # Dependencies and scripts
├── public/
│   └── data/                           # All static data, separated from components
│       ├── links.js                    # Navigation links array
│       ├── stats.js                    # Banner stats, about stats & highlights
│       ├── services.js                 # Services cards data
│       ├── workflow.js                 # Workflow steps data
│       ├── pricing.js                  # Pricing tiers data
│       └── contact.js                  # Contact info data
└── src/
    ├── main.jsx                        # React DOM entry point
    ├── App.jsx                         # Root component — composes all sections
    ├── index.css                       # Global base styles
    ├── assets/                         # All image assets (PNGs & SVGs)
    ├── scrollToSection/
    │   └── scrollToSection.jsx         # Smooth scroll utility function
    ├── hooks/
    │   ├── useReveal.js                # IntersectionObserver hook (triggers once)
    │   └── Reveal.jsx                  # Wrapper component for scroll animations
    └── components/
        ├── Navbar/
        │   └── Navbar.jsx              # Fixed navbar with scroll effect & active state
        ├── Banner/
        │   └── Banner.jsx              # Hero section with CTA and stats
        ├── Stats/
        │   └── Stats.jsx               # Reusable stats bar component
        ├── About/
        │   └── About.jsx               # About section with image & highlights
        ├── Wrokflow/                   # (note: typo in folder name)
        │   └── Workflow.jsx            # 6-step workflow section
        ├── Services/
        │   └── Services.jsx            # 3-card services section
        ├── Pricing/
        │   └── Pricing.jsx             # 3-tier pricing section
        ├── Contact/
        │   └── Contact.jsx             # Contact info + contact form
        └── Footer/
            └── Footer.jsx              # Dark footer with links & newsletter
```

---

## 📦 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^19.2.4 | UI component library |
| React DOM | ^19.2.4 | DOM rendering |
| Vite | ^8.0.1 | Build tool and dev server |
| TailwindCSS | ^4.2.2 | Utility-first CSS framework |
| @tailwindcss/vite | ^4.2.2 | Official Tailwind Vite plugin |
| DaisyUI | ^5.5.19 | Component library (navbar, cards, inputs) |
| react-icons | ^5.6.0 | Icon library (FA, MD icon sets) |

---

## 🗃️ Data Architecture

All content is decoupled from components and stored in `public/data/`. This makes the site easy to customize — just edit the data files without touching any JSX.

### Navigation — `links.js`
7 nav links: Home, About, Workflow, Services, Pricing, Blogs, Contact.

### Stats — `stats.js`
- **Banner stats**: Projects (250+), Clients (500+), Awards (35), Lines of Code (850K+)
- **About stats**: 10+ Years, 200+ Clients, 50+ Team Members
- **Highlights**: Expert Team, Proven Results, 24/7 Support

### Services — `services.js`
| Service | Description |
|---|---|
| Modern Strategy | Cutting-edge digital strategies tailored to business objectives |
| Best Relationship | Lasting partnerships through transparency and communication |
| Ultimate Marketing | Data-driven campaigns to amplify reach and convert audiences |

### Workflow — `workflow.js`
6 steps with icon images: **Ideas → Sketch → Discuss → Revise → Approve → Launch**

### Pricing — `pricing.js`
| Plan | Price | Storage | Transfer | Support |
|---|---|---|---|---|
| Starter | $19/mo | 60 GB | 600 GB | 15-min Support |
| **Premium** ⭐ | **$49/mo** | **120 GB** | **1200 GB** | **Priority Support** |
| Advanced | $79/mo | 250 GB | 5000 GB | Dedicated Support |

All plans include: Pro Design Panel, Unlimited Emails, 24/7 Security.

### Contact — `contact.js`
- 📍 Address: 110-220 Business Ave, Suite 500, New York, NY 10260
- 📧 Email: hello@softypinko.com
- 📞 Phone: +1 (555) 123-4567

---

## ⚙️ Custom Hooks

### `useReveal.js`
```js
// Returns a ref and a `visible` boolean
const { ref, visible } = useReveal();
```
Uses `IntersectionObserver` with a `0.15` threshold. Once the element enters the viewport, `visible` is set to `true` and the observer disconnects — ensuring the animation only plays once.

### `Reveal.jsx`
```jsx
<Reveal direction="up" delay={200} duration={700}>
  <YourComponent />
</Reveal>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `direction` | `"up" \| "down" \| "left" \| "right" \| "none"` | `"up"` | Slide-in direction |
| `delay` | `number` (ms) | `0` | Animation start delay |
| `duration` | `number` (ms) | `700` | Animation duration |
| `className` | `string` | `""` | Extra classes on the wrapper div |

---

## 🚀 Getting Started

### Prerequisites
- Node.js **v18+**
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sayedrkhalid-dev/softy-pinko.git
cd softy-pinko

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the app at [http://localhost:5173](http://localhost:5173) with hot module replacement.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder, ready to deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🔮 Possible Improvements

- [ ] Wire up the contact form to a backend or email service (e.g., EmailJS, Formspree)
- [ ] Add the missing **Blog** section (nav link exists but no component yet)
- [ ] Add a **Testimonials** section (a `testimonial-icon.png` asset exists in `/src/assets`)
- [ ] Connect the footer newsletter input to a mailing list
- [ ] Add a **Fun Facts** section (a `fun-facts-bg.png` asset exists in `/src/assets`)
- [ ] Implement animated number counters for the stats (count up from 0 on scroll into view)
- [ ] Fix the typo in the `Wrokflow` folder name → `Workflow`
- [ ] Add page transitions or route-based navigation with React Router
- [ ] Optimize images with next-gen formats (WebP/AVIF)

---

## 👤 Author

**Sayed R. Khalid**
GitHub: [@sayedrkhalid-dev](https://github.com/sayedrkhalid-dev)

---

## 📄 License

This project is open source and available for personal and educational use.
