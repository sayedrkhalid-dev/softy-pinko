/**
 * Softy Pinko - Background Images
 * All backgrounds exported as SVG data URIs and CSS gradient strings
 * Import this file and use the exported constants in your components.
 */

// ─── Hero Background (deep purple-blue → pink wave) ────────────────────────
export const heroBg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4F46E5"/>
      <stop offset="40%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
    <linearGradient id="wave1Grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6D28D9" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#DB2777" stop-opacity="0.4"/>
    </linearGradient>
  </defs>
  <rect width="1440" height="700" fill="url(#heroGrad)"/>
  <!-- Sparkles -->
  <circle cx="200" cy="100" r="2" fill="white" opacity="0.5"/>
  <circle cx="400" cy="180" r="1.5" fill="white" opacity="0.4"/>
  <circle cx="700" cy="80" r="2" fill="white" opacity="0.6"/>
  <circle cx="1000" cy="150" r="1" fill="white" opacity="0.3"/>
  <circle cx="1200" cy="60" r="2.5" fill="white" opacity="0.5"/>
  <circle cx="1350" cy="200" r="1.5" fill="white" opacity="0.4"/>
  <circle cx="100" cy="350" r="2" fill="white" opacity="0.3"/>
  <circle cx="550" cy="300" r="1" fill="white" opacity="0.5"/>
  <!-- Wave layers -->
  <path d="M0,400 C200,300 400,500 600,380 C800,260 1000,450 1200,350 C1350,280 1400,320 1440,300 L1440,700 L0,700 Z" fill="url(#wave1Grad)"/>
  <path d="M0,500 C300,420 500,560 700,480 C900,400 1100,520 1300,460 L1440,440 L1440,700 L0,700 Z" fill="#5B21E8" opacity="0.3"/>
</svg>
`.trim();

export const heroBgUrl = `data:image/svg+xml;utf8,${encodeURIComponent(heroBg)}`;

// ─── Section Wave Background (light lavender waves) ─────────────────────────
export const waveBg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EDE9FE"/>
      <stop offset="100%" stop-color="#FCE7F3"/>
    </linearGradient>
  </defs>
  <rect width="1440" height="500" fill="white"/>
  <path d="M0,200 C180,120 360,280 540,200 C720,120 900,260 1080,200 C1260,140 1380,180 1440,160 L1440,500 L0,500 Z" fill="url(#waveGrad)" opacity="0.6"/>
  <path d="M0,280 C240,200 480,340 720,270 C960,200 1200,320 1440,270 L1440,500 L0,500 Z" fill="#DDD6FE" opacity="0.4"/>
  <!-- Sparkle dots -->
  <circle cx="120" cy="180" r="3" fill="#A78BFA" opacity="0.4"/>
  <circle cx="400" cy="100" r="2" fill="#F9A8D4" opacity="0.5"/>
  <circle cx="900" cy="150" r="2.5" fill="#A78BFA" opacity="0.3"/>
</svg>
`.trim();

export const waveBgUrl = `data:image/svg+xml;utf8,${encodeURIComponent(waveBg)}`;

// ─── Testimonials Background (vibrant purple-pink gradient with waves) ───────
export const testimonialBg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="testGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="50%" stop-color="#9D4FCA"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
    <linearGradient id="testWave" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6D28D9" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#BE185D" stop-opacity="0.3"/>
    </linearGradient>
  </defs>
  <rect width="1440" height="600" fill="url(#testGrad)"/>
  <path d="M0,300 C300,200 600,400 900,300 C1100,230 1300,350 1440,280 L1440,600 L0,600 Z" fill="url(#testWave)"/>
  <path d="M0,400 C200,350 500,450 800,380 C1100,310 1300,420 1440,370 L1440,600 L0,600 Z" fill="white" opacity="0.07"/>
  <!-- Sparkles -->
  <circle cx="150" cy="100" r="2" fill="white" opacity="0.4"/>
  <circle cx="500" cy="60" r="1.5" fill="white" opacity="0.5"/>
  <circle cx="950" cy="120" r="2" fill="white" opacity="0.3"/>
  <circle cx="1300" cy="80" r="2.5" fill="white" opacity="0.4"/>
</svg>
`.trim();

export const testimonialBgUrl = `data:image/svg+xml;utf8,${encodeURIComponent(testimonialBg)}`;

// ─── Dark Navy Background (for footer/dark sections) ────────────────────────
export const darkBg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="darkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2E1065"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="1440" height="400" fill="url(#darkGrad)"/>
  <path d="M0,200 C360,130 720,270 1080,180 C1260,140 1380,200 1440,170 L1440,400 L0,400 Z" fill="#4C1D95" opacity="0.3"/>
  <!-- Stars -->
  <circle cx="100" cy="80" r="1.5" fill="white" opacity="0.6"/>
  <circle cx="300" cy="40" r="1" fill="white" opacity="0.4"/>
  <circle cx="700" cy="100" r="1.5" fill="white" opacity="0.5"/>
  <circle cx="1100" cy="50" r="1" fill="white" opacity="0.6"/>
  <circle cx="1350" cy="90" r="1.5" fill="white" opacity="0.4"/>
</svg>
`.trim();

export const darkBgUrl = `data:image/svg+xml;utf8,${encodeURIComponent(darkBg)}`;

// ─── CSS Gradient Strings (use directly in style={{ background: ... }}) ─────
export const cssGradients = {
  hero:        'linear-gradient(135deg, #4F46E5 0%, #7C3AED 45%, #EC4899 100%)',
  section:     'linear-gradient(135deg, #F5F3FF 0%, #FDF2F8 100%)',
  testimonial: 'linear-gradient(135deg, #7C3AED 0%, #9D4FCA 50%, #EC4899 100%)',
  footer:      'linear-gradient(135deg, #2E1065 0%, #1E1B4B 100%)',
  card:        'linear-gradient(135deg, #ffffff 0%, #F5F3FF 100%)',
  button:      'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
  buttonHover: 'linear-gradient(135deg, #6D28D9 0%, #DB2777 100%)',
};

export default { heroBgUrl, waveBgUrl, testimonialBgUrl, darkBgUrl, cssGradients };
