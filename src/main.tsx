import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Lenis from 'lenis';
import App from './App.tsx';
import './index.css';

// ─── Apple-style Smooth Scrolling ──────────────────────────────────────────
// Lenis replicates the smooth, inertia-based scrolling feel used by
// Apple.com, Stripe, and Linear. The easing curve below is tuned to match
// Apple's signature scroll deceleration.

const lenis = new Lenis({
  duration: 1.1,
  // Smooth exponential deceleration — snappy start, graceful stop
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1.2,
  touchMultiplier: 2.0,
  infinite: false,
});

// Expose globally so anchor links can use it
(window as any).__lenis = lenis;

// RAF loop — drives Lenis on every frame
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Override all same-page anchor links to use Lenis smooth scroll
document.addEventListener('click', (e) => {
  const target = (e.target as HTMLElement).closest('a[href^="#"]');
  if (!target) return;
  const href = target.getAttribute('href');
  if (!href || href === '#') return;
  const el = document.querySelector(href);
  if (!el) return;
  e.preventDefault();
  // Branch cards need extra offset to account for sticky nav
  const isBranchLink = href.startsWith('#branch-');
  lenis.scrollTo(el as HTMLElement, { offset: isBranchLink ? -120 : -80, duration: 1.4 });
});

// ────────────────────────────────────────────────────────────────────────────

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
