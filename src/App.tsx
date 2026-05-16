/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';

// Utility: Convert a string to Title Case (first letter of each word uppercase)
const toTitleCase = (str: string): string =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from 'motion/react';
import { 
  Utensils, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Facebook, 
  Youtube, 
  ChevronRight, 
  Menu as MenuIcon, 
  X,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Coffee,
  Heart,
  ArrowUp,
  Eye,
  ShoppingBag,
  Leaf,
  Star,
  Quote,
  ChevronLeft,
  ChevronDown,
  Truck,
  Play,
  Moon,
  Sun,
  Search,
  Mail,
  MessageSquare,
  Smartphone,
  Download,
  Plus
} from 'lucide-react';
import { MENU_DATA, BRANCHES, MenuCategory, MenuItem, TESTIMONIALS } from './constants';

// --- Social Media SVG Icons ---
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.18 8.18 0 004.78 1.53V6.87a4.85 4.85 0 01-1.01-.18z"/>
  </svg>
);

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// --- Components ---

const ExperienceGoodness = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-6 ${className}`}>
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="shrink-0"
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Simplified Cup Icon matching screenshot */}
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M20 40 L80 40 L70 90 L30 90 Z" />
          <path d="M80 45 Q90 45 90 55 Q90 65 80 65" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M40 30 Q45 20 50 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M55 30 Q60 20 65 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </motion.div>
    <span className="font-cursive text-3xl md:text-5xl lg:text-7xl whitespace-nowrap text-current tracking-wide pt-2 drop-shadow-2xl">
      Experience The Goodness
    </span>
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="shrink-0"
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Reversed Cup Icon */}
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current scale-x-[-1]">
          <path d="M20 40 L80 40 L70 90 L30 90 Z" />
          <path d="M80 45 Q90 45 90 55 Q90 65 80 65" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M40 30 Q45 20 50 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M55 30 Q60 20 65 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </motion.div>
  </div>
);

const CafeLogo = ({ size = "lg", className = "" }: { size?: "sm" | "md" | "lg", className?: string }) => {
  const dimensions = size === "lg" ? "w-32 h-32 md:w-44 md:h-44" : size === "md" ? "w-20 h-20" : "w-12 h-12";
  
  return (
    <div className={`relative flex items-center justify-center ${dimensions} ${className}`}>
      <img src="/brand/LOGO.png" alt="Kumbakonam Cafe Logo" className="w-full h-full object-contain" />
    </div>
  );
};

const SectionSeparator = ({ theme, flip = false, variant = 'wave' }: { theme: string, flip?: boolean, variant?: 'wave' | 'curve' }) => (
  <div className={`relative w-full h-24 overflow-hidden z-30 pointer-events-none transition-colors duration-1000 ${flip ? 'rotate-180 -mb-px' : '-mt-px'}`}>
    <svg 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none" 
      className={`w-full h-full fill-current ${theme === 'dark' ? 'text-dark-bg' : 'text-cafe-cream'} opacity-40`}
    >
      {variant === 'wave' ? (
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      ) : (
        <path d="M600,112.77C268.63,112.77,0,65.81,0,7.23V120H1200V7.23C1200,65.81,931.37,112.77,600,112.77Z"></path>
      )}
    </svg>
  </div>
);

const AboutTimeline = ({ theme }: { theme: string }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const opacityLine = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const ParticleBackground = () => {
    const { scrollYProgress: localScroll } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
    });

    const particles = useMemo(() => Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      depth: Math.random(),
      size: Math.random() * 3 + 1,
      drift: Math.random() * 10 - 5
    })), []);

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 perspective-1000">
        {particles.map((p) => {
          // Adjust y based on scroll and depth
          const yRange = p.depth * 200 + 100; // Parallax intensity
          const yParallax = useTransform(localScroll, [0, 1], [-yRange, yRange]);
          
          return (
            <motion.div
              key={p.id}
              className="absolute bg-[#1e9ab0] rounded-full"
              initial={{ 
                left: `${p.x}%`, 
                top: `${p.y}%`,
                z: p.depth * -500,
                opacity: p.depth * 0.3 + 0.1
              }}
              style={{
                width: p.size,
                height: p.size,
                y: yParallax,
                filter: `blur(${Math.max(0, (1 - p.depth) * 1.5)}px)`,
              }}
              animate={{
                x: [0, p.drift, 0],
              }}
              transition={{
                duration: (1 - p.depth) * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
    );
  };

  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  
  const galleryImages = [
    { 
      url: "/about/img01.jpg", 
      alt: "Authentic Kumbakonam Filter Coffee being poured into a traditional brass dabara and tumbler" 
    },
    { 
      url: "/about/img02.jpg", 
      alt: "A vibrant assortment of South Indian vegetarian dishes including Masala Dosa, Sambar, and Chutneys" 
    },
    { 
      url: "/about/img03.jpg", 
      alt: "Artisan chef preparing traditional South Indian meals with fresh, locally sourced ingredients" 
    },
    { 
      url: "/about/img04.jpg", 
      alt: "Close-up of a beautifully plated South Indian feast served on a traditional banana leaf" 
    }
  ];

  return (
    <section id="about" ref= {containerRef} className={`relative z-20 overflow-hidden transition-colors duration-1000 bg-[#1e9ab0]`}>
      <ParticleBackground />
      
      <AnimatePresence>
        {activeGalleryIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-xl"
            onClick={() => setActiveGalleryIndex(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-huge border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[activeGalleryIndex].url} 
                alt={galleryImages[activeGalleryIndex].alt} 
                className="w-full h-full object-cover" 
              />
              <button 
                onClick={() => setActiveGalleryIndex(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all transform hover:rotate-90"
              >
                <X size={24} />
              </button>
              
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-lg font-display italic text-center opacity-90">{galleryImages[activeGalleryIndex].alt}</p>
              </div>

              <button 
                onClick={(e) => { e.stopPropagation(); setActiveGalleryIndex((activeGalleryIndex - 1 + galleryImages.length) % galleryImages.length); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setActiveGalleryIndex((activeGalleryIndex + 1) % galleryImages.length); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
              >
                <ChevronRight size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 relative">
        {/* Timeline Progress Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden lg:block">
          <motion.div 
            style={{ height, opacity: opacityLine }}
            className="absolute top-0 left-0 right-0 bg-[#1e9ab0] shadow-glow origin-top"
          />
        </div>
        
        <div className="relative space-y-16 lg:space-y-24">
          {/* Chapter 1: The Story Behind K Café */}
          <div className="relative flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full"
            >
              <div className="bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-6 md:p-10 lg:p-12 text-black shadow-huge w-full border border-[#fff628]/20 relative overflow-hidden">
                <div className="noise-texture absolute inset-0 opacity-[0.05]" />
                <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 py-1.5 px-5 rounded-full bg-black/5 border border-black/10 w-fit mb-6 shadow-sm">
                      <Sun size={18} className="text-[#fff628] fill-[#fff628]/30" />
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-black/60">OUR STORY</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 leading-[1.1] italic tracking-tight underline decoration-[#fff628]/40 underline-offset-8 text-[#fff628]">The Story Behind K Café</h2>
                    <div className="space-y-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed italic text-black opacity-100">
                      <p>Kumbakonam Café was founded in 2024 by three friends with a shared dream: to bring authentic, homely vegetarian food to Abu Dhabi in a way that feels both comforting and memorable.</p>
                      <p>From day one, our vision has been simple yet powerful, to create a place where customers always come first, employees are family, and society benefits from the values we uphold.</p>
                      <p>Our promise is to serve high-quality, homely vegetarian food at reasonable prices, stay true to our roots.</p>
                    </div>
                  </div>
                  <div className="lg:w-1/3">
                    {/* VIDEO PLACEHOLDER */}
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      className="aspect-video lg:aspect-square bg-white/5 border border-white/10 rounded-2xl overflow-hidden relative flex items-center justify-center group shadow-massive"
                    >
                      <video autoPlay muted loop playsInline controls className="w-full h-full object-cover">
                        <source src="/about/video-about-kumbakonam-cafe.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute top-4 left-4 z-20 text-[10px] font-bold text-white/80 uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full pointer-events-none">Featured Story Video</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Connector Node */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-2.5 h-2.5 bg-[#1e9ab0] rounded-full mt-10 relative z-20 hidden lg:block shadow-glow" 
            />
          </div>

          {/* Chapter 2: Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="space-y-4 bg-white dark:bg-dark-surface p-6 lg:p-8 rounded-[2rem] shadow-massive border border-[#1e9ab0]/10 dark:border-white/10"
            >
              <div className="flex items-center gap-3 py-1 px-4 rounded-full border border-[#1e9ab0]/20 dark:border-white/10 w-fit bg-[#1e9ab0]/5 dark:bg-[#1e9ab0]/20 shadow-sm transition-colors">
                <Sun size={14} className="text-[#1e9ab0]" />
                <span className="text-[8px] font-black uppercase tracking-widest text-black dark:text-white">VISION</span>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl font-display italic text-[#1e9ab0] transition-colors font-bold">
                To make our Cafe a place that honors tradition and bridges generations through authentic flavors.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="space-y-4 bg-white dark:bg-dark-surface p-6 lg:p-8 rounded-[2rem] shadow-massive border border-[#1e9ab0]/10 dark:border-white/10"
            >
              <div className="flex items-center gap-3 py-1 px-4 rounded-full border border-[#1e9ab0]/20 dark:border-white/10 w-fit bg-[#1e9ab0]/5 dark:bg-[#1e9ab0]/20 shadow-sm transition-colors">
                <Sparkles size={14} className="text-[#1e9ab0]" />
                <span className="text-[8px] font-black uppercase tracking-widest text-black dark:text-white">MISSION</span>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl font-display italic text-[#1e9ab0] transition-colors font-bold">
                ENSURING every guest experiences the goodness of authentic vegetarian food in every single bite.
              </p>
            </motion.div>
            {/* Node */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#1e9ab0] rounded-full z-20 hidden lg:block shadow-glow" 
            />
          </div>

          {/* Chapter 3: The Gallery (4 Images) */}
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 1.5 }}
              className="w-full bg-brand-gradient rounded-[2.5rem] overflow-hidden text-brand-lightest p-6 md:p-10 lg:p-12 shadow-huge border border-white/10"
            >
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium italic mb-4 leading-tight">Visual Journey at K Café</h2>
                <div className="w-20 h-px bg-white/20 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`aspect-[3/4] rounded-xl overflow-hidden shadow-massive bg-white/5 border border-white/5 cursor-pointer group ${idx % 2 === 1 ? 'mt-6' : ''}`}
                  >
                    <img 
                      src={img.url} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      alt={img.alt} 
                    />
                    <div className="absolute inset-0 bg-[#1e9ab0]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Eye size={32} className="text-white drop-shadow-lg" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Final Node */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-2.5 h-2.5 bg-[#1e9ab0] rounded-full mt-10 relative z-20 hidden lg:block shadow-glow" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-brand text-brand-lightest rounded-2xl flex items-center justify-center neo-raised shadow-glow transition-all"
          title="Scroll to top"
        >
          <ArrowUp size={28} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const QuickViewModal = ({ item, isOpen, onClose }: { item: MenuItem | null, isOpen: boolean, onClose: () => void }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-brand-lightest dark:bg-dark-surface rounded-[2.5rem] overflow-hidden shadow-huge border border-brand/5 dark:border-brand/5"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-brand/5 dark:bg-brand-lightest/5 rounded-full flex items-center justify-center text-cafe-dark dark:text-dark-text hover:text-brand z-10 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
                <motion.img 
                  initial={{ scale: 1.4, opacity: 0, filter: 'blur(10px)' }}
                  animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  src={item.image || "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000&auto=format&fit=crop"} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center bg-brand-lightest dark:bg-dark-surface transition-colors">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-4 py-2 px-6 rounded-full bg-brand-gradient text-brand-lightest w-fit mb-6 shadow-glow"
                >
                  <Sparkles size={14} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Dish Details</span>
                </motion.div>
                <h2 className="text-4xl font-display font-medium mb-4 italic text-cafe-dark dark:text-dark-text">{item.name}</h2>
                <div className="text-4xl font-display font-bold text-[#1e9ab0] mb-6 leading-none">AED {item.price}</div>
                <p className="text-cafe-muted dark:text-dark-muted font-light leading-relaxed mb-8">
                  {item.description || "Our signature recipe made with authentic ingredients sourced directly from the heart of Tamil Nadu. A pure vegetarian delight."}
                </p>
                <div className="flex items-center gap-4 py-6 border-t border-brand/5 dark:border-brand-lightest/5">
                  <div className="w-10 h-10 bg-brand/5 rounded-full flex items-center justify-center text-brand">
                    <Clock size={16} />
                  </div>
                  <span className="text-cafe-muted/60 dark:text-dark-muted/60 text-sm italic font-light">Freshly prepared on order</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const TestimonialsSection = ({ theme }: { theme: string }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section 
      ref={containerRef}
      id="testimonials"
      className="py-24 lg:py-32 px-6 relative z-20 transition-colors duration-1000 overflow-hidden bg-transparent"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: parallaxY }}
          className="absolute -top-40 -right-20 w-[600px] h-[600px] bg-[#1e9ab0]/5 blur-[120px] rounded-full opacity-30"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] font-black uppercase tracking-[0.6em] text-[#fff628] mb-4 block"
          >
            OUR COMMUNITY
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold italic text-[#fff628] tracking-tight"
          >
            Real Stories, <span className="text-brand">Real Flavors</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Video Stack */}
          <div className="lg:col-span-6 space-y-10">
            {/* Portrait Video */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[3.5/5] rounded-[3rem] overflow-hidden shadow-huge border border-white/10 group"
            >
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                controls
                className="w-full h-full object-cover"
              >
                <source src="/Testimonials/review-potrait.mp4" type="video/mp4" />
              </video>
              <div className="absolute top-8 left-8 z-30 pointer-events-none">
                <div className="px-4 py-1.5 rounded-full bg-brand/80 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest w-fit mb-2">Exclusive Review</div>
                <h3 className="text-2xl font-display font-bold italic text-white drop-shadow-md">"A Spiced Masterpiece"</h3>
              </div>
            </motion.div>

            {/* Landscape Video */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-huge border border-white/10 group"
            >
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                controls
                className="w-full h-full object-cover"
              >
                <source src="/Testimonials/review-landscape.mp4" type="video/mp4" />
              </video>
              <div className="absolute top-6 left-6 z-30 pointer-events-none bg-black/40 px-3 py-1 rounded-full">
                <span className="text-[9px] font-black uppercase tracking-widest text-white/80">Kitchen Chronicles</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Reviews List */}
          <div className="lg:col-span-6 lg:h-[1200px] overflow-y-auto scrollbar-hide pr-4">
            <div className="space-y-8">
              {TESTIMONIALS.map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-black/5 shadow-massive hover:shadow-glow transition-all group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full border border-[#1e9ab0]/30 overflow-hidden">
                      <img src={['/Assets/Thatte Idly and Dosa/ghee-podi-masal-dosa.png', '/Assets/Hot Beverages/Kumbakonam-filter-coffee-2-scaled.jpg', '/Assets/Sweets/ashoka-halwa.png'][idx % 3]} alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-bold text-black uppercase tracking-widest">{testimonial.author}</h4>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#1e9ab0]">{testimonial.tagline}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < testimonial.rating ? "text-[#1e9ab0] fill-[#1e9ab0]" : "text-[#1e9ab0]/10"} />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-light italic leading-relaxed text-black/70 group-hover:text-black transition-colors">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-6 pt-6 border-t border-[#1e9ab0]/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1e9ab0]/40 italic">
                      <Clock size={12} /> VERIFIED EXPERIENCE
                    </div>
                    <Quote size={24} className="text-[#1e9ab0]/20 group-hover:text-[#1e9ab0]/40 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Navbar = ({ onBulkOrderClick, onDeliveryPartnersClick, theme }: { 
  onBulkOrderClick: () => void, 
  onDeliveryPartnersClick: () => void,
  theme: string
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'BRANCHES', href: '#branches' },
    { name: 'MENU', href: '#menu' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'top-0' : 'top-4 lg:top-8'}`} role="navigation">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative">
          <div className={`flex items-center justify-between px-6 lg:px-8 py-2 lg:py-3 rounded-[3rem] border transition-all duration-700 bg-white dark:bg-dark-surface/95 border-[#1e9ab0] shadow-xl border-[3px] ${isScrolled ? 'rounded-none border-t-0 border-x-0 border-b-[3px]' : ''}`}>
          
          {/* Left Brand */}
          <div className="flex items-center z-50 shrink-0">
             <a href="#home" className="flex items-center gap-2 sm:gap-3 group" aria-label="Kumbakonam Cafe Home">
                 <img src="/brand/LOGO.png" alt="Kumbakonam Cafe Logo" className="w-10 h-10 md:w-16 md:h-16 object-contain drop-shadow-md" />
               <div className="text-left flex flex-col justify-center">
                 <div className="font-bold text-[12px] sm:text-[14px] md:text-[18px] leading-tight text-[#1e9ab0] font-brand">KUMBAKONAM</div>
                 <div className="text-[10px] sm:text-[12px] md:text-[15px] leading-[1.1] font-semibold text-[#1e9ab0] font-brand">CAFE - L.L.C</div>
                 <div className="hidden sm:block text-[8px] md:text-[13px] leading-tight text-[#1e9ab0] font-brand mt-0.5">Authentic Veg Eatery</div>
               </div>
             </a>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[14px] font-bold uppercase tracking-wide text-[#1e9ab0] hover:text-[#002B49] transition-all relative group font-brand"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Tools */}
          <div className="flex items-center gap-2 sm:gap-4 z-50 shrink-0">
            <div className="flex items-center gap-4">
                <button 
                  onClick={onDeliveryPartnersClick}
                  className="px-3 py-1.5 sm:px-6 sm:py-2.5 bg-[#1e9ab0] text-white text-[10px] sm:text-[13px] font-bold tracking-wide flex items-center gap-1 sm:gap-2 rounded-full hover:bg-[#167d90] transition-all active:scale-95 shadow-glow font-brand"
                >
                  ORDER <span className="hidden sm:inline">NOW</span> <ArrowRight size={14} className="sm:w-[18px] sm:h-[18px]" />
                </button>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden text-cafe-dark dark:text-dark-text w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-brand/5 dark:bg-brand-lightest/5 rounded-full shrink-0"
              aria-label="Toggle Menu"
            >
              <MenuIcon size={20} className="sm:w-[24px] sm:h-[24px]" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#1e9ab0] z-[90] flex items-center justify-center lg:hidden"
            >
               <button onClick={() => setMobileMenuOpen(false)} className="absolute top-10 right-10 text-white/70 hover:text-white transition-colors"><X size={40} /></button>
                       <div className="flex flex-col gap-12 text-center">
                {['HOME', 'MENU', 'ABOUT', 'BRANCHES', 'CONTACT'].map((item, i) => (
                  <motion.a 
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    href={`#${item.toLowerCase()}`}
                    className="text-6xl font-display font-bold italic text-white hover:text-[#fff628] transition-all hover:scale-110"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const DELIVERY_CONFIG = {
    locations: {
        uae: {
            name: "United Arab Emirates",
            partners: [
                {
                    name: "Order Direct (TMBill)",
                    description: "Order directly from our cafe",
                    iconColor: "tmbill",
                    url: "https://menu.tmbill.com/brand/KCafe"
                },
                {
                    name: "Talabat",
                    description: "Fast delivery via Talabat",
                    iconColor: "talabat",
                    url: "https://www.talabat.com/uae/kumbakonam-cafe"
                },
                {
                    name: "Noon Food",
                    description: "Order via Noon Food",
                    iconColor: "noon",
                    url: "https://food.noon.com/search?f[tags]=kumbakonam"
                },
                {
                    name: "Smiles",
                    description: "Order via Smiles app",
                    iconColor: "smiles",
                    url: "https://smilesuae.go.link/42fC6"
                }
            ]
        }
    }
};

const DeliveryPartnersModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void, theme: string }) => {
  const [selectedLocation, setSelectedLocation] = useState("uae");


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-0 bg-white"
        >
          <div className="w-full h-full flex flex-col bg-white overflow-y-auto">
            {/* Header */}
            <div className="w-full flex flex-col items-center pt-8">
               <div className="flex items-center gap-4 mb-4">
                 <CafeLogo size="sm" className="text-[#1e9ab0]" />
                 <h1 className="text-2xl font-brand font-bold text-black uppercase tracking-widest leading-none">Kumbakonam cafe</h1>
               </div>
               <div className="w-full h-[1px] bg-gray-100" />
            </div>

            <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 lg:px-20 py-10 lg:py-0">
               {/* Content Left */}
               <div className="space-y-12">
                  <div className="space-y-6">
                    <p className="text-black/60 font-black text-xl lg:text-2xl">Let's order !</p>
                    <h2 className="text-4xl lg:text-5xl font-black text-black leading-[1.1] tracking-tight">
                      Choose Delivery Location <br />
                      to place an order.
                    </h2>
                  </div>

                  <div className="space-y-8 max-w-lg w-full">
                    <AnimatePresence mode="wait">
                      {selectedLocation && DELIVERY_CONFIG.locations[selectedLocation as keyof typeof DELIVERY_CONFIG.locations] && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="space-y-4 pt-4"
                        >
                          <label className="text-[#3a7c3a] font-black text-[15px] block mb-2">Choose a delivery partner</label>
                          <div className="grid grid-cols-1 gap-4">
                            {DELIVERY_CONFIG.locations[selectedLocation as keyof typeof DELIVERY_CONFIG.locations].partners.map((partner, idx) => (
                              <a
                                key={idx}
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md
                                  ${partner.iconColor === 'talabat' ? 'border-[#FF5A00] bg-[#FF5A00]/5 hover:bg-[#FF5A00]/10 text-[#FF5A00]' : 
                                    partner.iconColor === 'noon' ? 'border-[#FEE000] bg-[#FEE000]/10 hover:bg-[#FEE000]/20 text-[#000000]' : 
                                    partner.iconColor === 'smiles' ? 'border-[#E94359] bg-[#E94359]/5 hover:bg-[#E94359]/10 text-[#E94359]' : 
                                    partner.iconColor === 'tmbill' ? 'border-[#1e9ab0] bg-[#1e9ab0]/5 hover:bg-[#1e9ab0]/10 text-[#1e9ab0]' : 
                                    'border-[#47B749] bg-[#47B749]/5 hover:bg-[#47B749]/10 text-[#47B749]'}`}
                              >
                                <div className="flex-1">
                                  <h4 className="font-bold text-xl leading-tight font-brand mb-1">{partner.name}</h4>
                                  <p className="text-sm opacity-80 font-sans">{partner.description}</p>
                                </div>
                                <ArrowRight size={24} />
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
               </div>

               {/* Illustration Right */}
               <div className="flex justify-center items-center lg:justify-end">
                  <div className="relative w-full max-w-sm aspect-square">
                     {/* Simplified representation of the illustration in the image */}
                     <div className="absolute inset-x-0 bottom-0 top-1/4 bg-black/90 rounded-[4rem] flex items-center justify-center p-12 overflow-hidden">
                        <div className="absolute inset-0 noise-texture opacity-10" />
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                           <div className="relative">
                             <div className="w-32 h-32 rounded-full bg-white/10 blur-xl absolute -inset-10" />
                             <MapPin size={80} className="text-white drop-shadow-glow" />
                           </div>
                        </div>
                        {/* Decorative floating elements */}
                        <div className="absolute top-10 left-10 w-4 h-4 bg-white/20 rounded-full" />
                        <div className="absolute top-20 right-20 w-2 h-2 bg-white/40 rounded-full" />
                        <div className="absolute bottom-10 left-1/4 w-3 h-3 bg-white/20 rounded-full" />
                     </div>
                  </div>
               </div>
            </div>

            {/* Footer Steps */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10 py-12 px-6 lg:px-20 mt-auto border-t border-gray-50">
               <div className="flex items-center gap-6">
                 <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 border border-gray-100">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-black/80 text-xl">Set your location</h4>
                   <p className="text-sm text-gray-400 italic">Tell us where you want to get your items delivered</p>
                 </div>
               </div>
               <div className="flex items-center gap-6">
                 <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 border border-gray-100">
                   <ShoppingBag size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-black/80 text-xl">Choose your items</h4>
                   <p className="text-sm text-gray-400 italic">Add the items you want in your cart</p>
                 </div>
               </div>
               <div className="flex items-center gap-6">
                 <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 border border-gray-100">
                   <Truck size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-black/80 text-xl">Have it delivered instantly</h4>
                   <p className="text-sm text-gray-400 italic">Our delivery partners will deliver your order at your doorstep</p>
                 </div>
               </div>
            </div>

            {/* Absolute Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-3 text-gray-300 hover:text-black transition-colors"
            >
              <X size={32} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const BulkOrderModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-2xl bg-[#1e9ab0] rounded-[2rem] shadow-massive overflow-hidden border border-white/20"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-20"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-12 relative">
              <div className="flex flex-col items-center text-center">
                {/* Yellow badge Header */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#fff628] px-8 py-4 rounded-2xl mb-8 shadow-lg transform -rotate-1"
                >
                  <h3 className="text-black font-display font-black text-lg md:text-2xl leading-tight">
                    Customised no Onion & Garlic bulk orders are undertaken
                  </h3>
                </motion.div>

                {/* Main Content */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative px-4 max-w-2xl"
                >
                  <p className="text-2xl md:text-3xl font-display font-medium text-white italic leading-[1.3] mb-10 tracking-tight drop-shadow-lg">
                    Bulk orders for family function & corporate events to private parties, our team delivers authentic food and impeccable service to make your event unforgettable.
                  </p>
                </motion.div>

                {/* Footer Enquiry Bar */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-[#fff628] px-8 py-5 rounded-2xl flex flex-wrap items-center justify-center gap-5 shadow-massive overflow-hidden"
                >
                  <span className="text-black font-display font-black text-lg md:text-xl uppercase tracking-widest relative z-10">
                    For enquiries and order
                  </span>
                  <div className="flex items-center gap-3 text-black text-xl font-black relative z-10">
                    <Phone size={24} className="fill-black" />
                    <span>/</span>
                    <div className="bg-white rounded-full p-1 shadow-sm">
                      <MessageSquare size={18} className="text-[#1e9ab0] fill-[#1e9ab0]" />
                    </div>
                    <span>0501715991</span>
                  </div>
                </motion.div>
              </div>

              {/* Free Delivery Stamp */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: -25 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute bottom-6 right-6 md:right-14 pointer-events-none"
              >
                <div className="relative group">
                   <div className="absolute inset-0 bg-[#fff628] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                   <div className="bg-[#fff628] border-4 border-dashed border-white/30 text-black px-6 py-3 rounded-xl font-black text-lg md:text-2xl uppercase tracking-[0.2em] shadow-massive transform hover:scale-110 transition-transform">
                      FREE DELIVERY
                   </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Hero = ({ onBulkOrderClick, onDeliveryPartnersClick, theme }: { 
  onBulkOrderClick: () => void, 
  onDeliveryPartnersClick: () => void,
  theme: string 
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const allItems = useMemo(() => {
    const items = MENU_DATA.flatMap(cat => cat.items).filter(item => item.image);
    // Fisher-Yates Shuffle
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % allItems.length);
    }, 4000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [allItems.length]);

  const currentSlideItem = allItems[slideIndex];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 lg:pt-20 overflow-hidden transition-colors duration-1000 bg-[rgb(41,128,155)]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 z-10 bg-[#1e9ab0] opacity-40 mix-blend-multiply" />
          <div className="absolute inset-0 noise-texture z-20 opacity-20" />
        </motion.div>

        {/* Decorative Mandala */}
        <div className="absolute -right-1/4 -top-1/4 w-[80vw] h-[80vw] opacity-[0.03] dark:opacity-[0.05] pointer-events-none rotate-[15deg]">
          <svg viewBox="0 0 200 200" className="w-full h-full fill-brand">
            <path d="M100 0C100 0 110 30 140 30C170 30 180 0 180 0C180 0 170 30 200 30C200 30 170 40 170 70C170 100 200 110 200 110C200 110 170 120 170 150C170 180 200 190 200 190C200 190 170 180 140 180C110 180 100 200 100 200C100 200 90 180 60 180C30 180 20 200 20 200C20 200 30 180 0 180C0 180 30 170 30 140C30 110 0 100 0 100C0 100 30 90 30 60C30 30 0 20 0 20C0 20 30 30 60 30C90 30 100 0 100 0Z" />
          </svg>
        </div>

        <div className={`absolute inset-0 transition-opacity duration-1000 ${theme === 'dark' ? 'bg-[radial-gradient(circle_at_top_right,rgba(42,131,152,0.15)_0%,transparent_60%)]' : 'bg-[radial-gradient(circle_at_top_right,rgba(42,131,152,0.1)_0%,transparent_50%)]'}`} />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg_40deg,rgba(42,131,152,0.02)_40deg_80deg)] opacity-40 animate-slow-pan" />
        
        {/* Massive Backdrop Stamps */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] select-none pointer-events-none overflow-hidden">
          <motion.h2 
            style={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.015 }}
            transition={{ duration: 2 }}
            className="text-[35vw] font-black uppercase text-brand font-display leading-none rotate-[-8deg] whitespace-nowrap"
          >
            SAVOR
          </motion.h2>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 bg-transparent rounded-[4rem] lg:my-12 overflow-hidden grid grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Content: Text + CTAs + Metadata */}
        <div className="col-span-12 xl:col-span-7 flex flex-col items-start order-1 p-10 lg:p-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-[40]"
            >
              <div className="flex items-center gap-3 py-2.5 px-8 rounded-full border-2 border-[#1e9ab0]/30 w-fit mb-8 lg:mb-12 mx-auto lg:mx-0 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Heart size={16} className="text-[#fff628] fill-[#fff628]" />
                    <span className="text-[11px] font-brand font-black uppercase tracking-[0.5em] text-[#1e9ab0] bg-white px-3 py-2 rounded-full">WELCOME TO KUMBAKONAM CAFE</span>
                  </div>
              </div>
              
                           <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.1] font-display tracking-tighter text-brand-lightest mb-10 lg:mb-12 text-center lg:text-left transition-colors flex flex-col lg:items-start gap-6 lg:gap-10 justify-center lg:justify-start">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="shrink-0 flex items-center justify-center lg:justify-start opacity-100 mb-4"
                >
                  <div className="text-center lg:text-left flex flex-col items-center lg:items-start text-white">
                    <div className="font-bold text-[32px] md:text-[56px] lg:text-[72px] leading-tight font-brand">KUMBAKONAM</div>
                    <div className="text-[20px] md:text-[32px] lg:text-[40px] font-semibold font-brand">CAFE - L.L.C</div>
                    <div className="text-[16px] md:text-[24px] lg:text-[28px] italic text-[#fff628] font-brand mt-2">Authentic Veg Eatery</div>
                  </div>
                </motion.div>
                <motion.img 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  src="/brand/homescreen-removebg-preview.png"
                  alt="Homescreen visual"
                  className="w-full max-w-[400px] lg:max-w-[700px] xl:max-w-[850px] object-contain drop-shadow-2xl mt-4"
                />
               </h1>
              
              <div className="flex flex-col gap-8 mb-12 lg:mb-16 max-w-2xl text-center lg:text-left">
                <p className="text-[20px] md:text-[24px] font-medium leading-[1.6] text-white drop-shadow-md">
                   Enjoy a unique dining experience with live kitchens, authentic vegetarian flavors, and warm service that keeps you coming back.
                </p>
              </div>
            </motion.div>

            {/* Main Action CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a 
                href="#menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-[#fff628] text-black font-black text-[13px] uppercase tracking-[0.3em] rounded-full shadow-2xl flex items-center justify-center gap-3 transition-all hover:bg-white active:scale-95 border-none"
              >
                VIEW MENU <Utensils size={18} />
              </motion.a>
              <motion.a 
                href="#branches"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-[#fff628] text-black font-black text-[13px] uppercase tracking-[0.3em] rounded-full flex items-center justify-center gap-3 transition-all hover:bg-white active:scale-95 shadow-2xl border-none"
              >
                VISIT BRANCHES <MapPin size={18} />
              </motion.a>
            </motion.div>

               <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start"
             >
                <motion.button 
                  onClick={onBulkOrderClick}
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 sm:flex-none px-12 py-7 lg:py-8 bg-[#fff628] text-black font-black text-[11px] lg:text-[12px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 rounded-full shadow-2xl active:scale-95 border border-black/5 hover:bg-white transition-all"
                >
                  <ArrowLeft size={18} strokeWidth={2.5} /> PARTY & BULK ORDERS
                </motion.button>
             </motion.div>

            <div className="flex flex-col md:flex-row items-center gap-12 mt-20 lg:mt-24">
               <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-col gap-6"
               >
                <div className="flex -space-x-4 items-center">
                  {[
                    '/Assets/Thatte Idly and Dosa/ghee-podi-masal-dosa.png',
                    '/Assets/Hot Beverages/Kumbakonam-filter-coffee-2-scaled.jpg',
                    '/Assets/Lunch Varieties/Combo-1-4-variety-sadham-.png'
                  ].map((imgSrc, i) => (
                    <div key={i} className="w-16 h-16 rounded-full border-4 border-cafe-cream dark:border-dark-bg overflow-hidden bg-cafe-sand shadow-huge hover:scale-110 transition-transform group">
                      <img src={imgSrc} alt="Our Food" className="w-full h-full object-cover group-hover:scale-110 transition-all" />
                    </div>
                  ))}
                  <div className="pl-6 flex flex-col">
                    <span className="text-[14px] font-black tracking-widest text-cafe-dark dark:text-dark-text transition-colors">5,000+</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand">Happy Visitors</span>
                  </div>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-cafe-muted dark:text-dark-muted leading-relaxed max-w-[350px] italic transition-colors">
                   We’re here to serve you fresh and authentic delicacies every day.
                </p>
               </motion.div>
            </div>
        </div>

        {/* Right Feature Slide Card */}
        <div className="col-span-12 xl:col-span-5 flex justify-center xl:justify-end order-2 py-10 lg:py-20 lg:pr-12">
           <AnimatePresence mode="wait">
             <motion.div
               key={slideIndex}
               style={{ y: mousePosition.y * 1.5, x: mousePosition.x * 1.5 }}
               initial={{ opacity: 0, x: 40, rotate: 5, filter: 'blur(10px)' }}
               animate={{ opacity: 1, x: 0, rotate: 0, filter: 'blur(0px)' }}
               exit={{ opacity: 0, x: -40, rotate: -5, filter: 'blur(10px)' }}
               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
               className="w-full max-w-[400px] glass-card rounded-[3.5rem] p-8 shadow-huge hover:shadow-glow transition-all duration-700 group cursor-pointer relative"
             >
                <div className="relative aspect-[4/5] rounded-[2.8rem] overflow-hidden mb-8">
                   <img 
                     src={currentSlideItem?.image || 'https://images.unsplash.com/photo-1626777552726-4a6b54c97eb4?q=80&w=1000&auto=format&fit=crop'} 
                     alt={currentSlideItem?.name} 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                   />
                   <div className="absolute inset-0 bg-brand/5 group-hover:opacity-0 transition-opacity" />
                </div>
                <div className="flex flex-col gap-4">
                   <h4 className="text-[11px] font-black uppercase tracking-[0.6em] text-brand leading-none">
                     Featured Item
                   </h4>
                   <h3 className="text-4xl font-display font-medium text-cafe-dark dark:text-dark-text italic transition-colors">
                     {currentSlideItem?.name}
                   </h3>
                   <div className="flex items-center justify-between mt-4">
                      <span className="text-3xl font-display font-bold text-brand">
                        AED {currentSlideItem?.price}
                      </span>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-px bg-brand/20" />
                        <ArrowRight size={20} className="text-brand group-hover:translate-x-2 transition-transform" />
                      </div>
                   </div>
                </div>
                
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand text-brand-lightest rounded-full flex flex-col items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform">
                   <span className="text-[9px] font-black uppercase tracking-widest mb-1">Authentic</span>
                   <Heart size={24} fill="currentColor" />
                </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>

      {/* Aesthetic Circle Accents */}
      <div className="absolute -bottom-32 -left-32 w-1/2 aspect-square rounded-full bg-brand/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 border border-brand-lightest/5 rounded-full glass opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 left-[20%] w-24 h-24 bg-brand/10 border border-brand/20 rounded-full blur-xl animate-pulse" />
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
         {allItems.slice(0, Math.min(allItems.length, 6)).map((_, i) => (
           <div key={i} className={`h-1.5 rounded-full transition-all duration-700 ${i === slideIndex % 6 ? 'w-16 bg-brand' : 'w-2 bg-brand/20'}`} />
         ))}
      </div>
    </section>
  );
};

const branchHoursInfo = () => "6:30 AM - 11:30 PM";

const MenuCard = ({ item, onQuickView, index = 0 }: { item: MenuItem, onQuickView: (item: MenuItem) => void, index?: number, key?: string | number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02, 
        y: -10,
        boxShadow: "0 20px 40px rgba(30, 154, 176, 0.15)"
      }}
      transition={{ 
        duration: 0.8, 
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="cafe-card group cursor-pointer dark:bg-dark-surface dark:border-brand-lightest/5 relative overflow-hidden bg-brand-lightest hover:bg-gradient-to-br hover:from-white hover:to-brand/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand/5 dark:bg-brand/10">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-brand/10 dark:via-brand/20 to-transparent skew-x-12" />
        )}
        <img 
          src={item.image || "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000&auto=format&fit=crop"} 
          alt={item.name} 
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'} group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-brand/5 dark:bg-brand-lightest/5 group-hover:bg-transparent transition-colors duration-500" />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(item);
          }}
          className="absolute top-6 right-6 w-14 h-14 bg-brand-lightest dark:bg-dark-surface rounded-full flex items-center justify-center text-cafe-dark dark:text-dark-text hover:text-brand neo-raised hover:neo-inset transition-all translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10"
          aria-label={`View ${item.name}`}
        >
          <Eye size={20} />
        </button>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-display font-medium text-cafe-dark dark:text-dark-text italic group-hover:text-brand transition-colors leading-tight">{item.name}</h3>
          <span className="font-display font-bold text-[#1e9ab0] leading-none text-2xl tracking-tight">AED {item.price}</span>
        </div>
        {item.description && (
          <p className="text-cafe-muted dark:text-dark-muted text-[13px] italic font-light line-clamp-2 leading-relaxed opacity-80">{item.description}</p>
        )}
        <div className="mt-8 flex items-center justify-between border-t border-brand/5 dark:border-brand-lightest/5 pt-6">
          <div className="flex items-center gap-2">
            <Star size={12} fill="#1e9ab0" className="text-[#1e9ab0]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-black">Live Kitchen Fresh</span>
          </div>
          <button 
            onClick={() => onQuickView(item)}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-black flex items-center gap-2 group-hover:gap-4 transition-all"
            aria-label={`Quick view ${item.name}`}
          >
            Quick View <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const MenuSection = ({ theme, searchQuery, setSearchQuery }: { 
  theme: string,
  searchQuery: string,
  setSearchQuery: (val: string) => void
}) => {
  const [activeTab, setActiveTab] = useState(MENU_DATA[0].id);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const activeCategory = MENU_DATA.find(c => c.id === activeTab);
  const activeIndex = MENU_DATA.findIndex(c => c.id === activeTab);

  // Search logic: If search query exists, look across all categories
  const filteredItems = searchQuery.trim() === '' 
    ? (activeCategory?.items || [])
    : MENU_DATA.flatMap(cat => cat.items).filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (item.description?.toLowerCase() ?? '').includes(searchQuery.toLowerCase())
      );

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    // Silent state change, no jump scroll
  };

  const nextCategory = () => {
    const nextIdx = (activeIndex + 1) % MENU_DATA.length;
    handleTabChange(MENU_DATA[nextIdx].id);
  };

  const prevCategory = () => {
    const prevIdx = (activeIndex - 1 + MENU_DATA.length) % MENU_DATA.length;
    handleTabChange(MENU_DATA[prevIdx].id);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextCategory();
      if (e.key === 'ArrowLeft') prevCategory();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <section id="menu" className={`py-20 lg:py-32 px-4 lg:px-6 relative min-h-screen transition-colors duration-1000 overflow-hidden ${theme === 'dark' ? 'bg-[#1e9ab0] bg-gradient-to-b from-[#1e9ab0] to-black' : 'bg-[#1e9ab0] bg-gradient-to-b from-[#1e9ab0] to-black'}`}>
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      <QuickViewModal 
        item={selectedItem!} 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
      <div className="max-w-7xl mx-auto relative px-4 text-center mb-16">
        <span className="text-[12px] font-black uppercase tracking-[0.8em] text-brand-lightest mb-10 block opacity-100 drop-shadow-sm">OUR CRAFT</span>
        <h2 className="text-5xl md:text-8xl font-display font-bold mb-16 italic text-black dark:text-brand-lightest transition-colors tracking-tight underline decoration-brand/20 underline-offset-12">Our <span className="text-white">Menu</span></h2>
        
        {/* Search Bar for Menu */}
        <div className="max-w-xl mx-auto relative group">
          <div className="absolute inset-y-0 left-6 flex items-center text-cafe-muted/40 dark:text-dark-muted/40 pointer-events-none group-focus-within:text-brand transition-colors">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-brand-lightest dark:bg-dark-surface border border-brand/10 dark:border-brand-lightest/10 rounded-full py-6 pl-16 pr-8 outline-none focus:border-brand shadow-huge text-sm italic transition-all text-cafe-dark dark:text-dark-text"
            placeholder="Search for your favorite dosa, coffee, or tiffin..."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative px-4">
        {/* Horizontal Navigation Redesign - Now Sticky */}
        <div className="sticky top-20 lg:top-24 z-40 flex items-center justify-center w-full gap-4 lg:gap-12 mb-12 lg:mb-20 px-4 py-6 lg:py-8 bg-[#1e9ab0]/90 dark:bg-black/90 backdrop-blur-xl rounded-[2.5rem] lg:rounded-[3rem] border border-white/10 relative shadow-massive transition-all">
          {/* Previous Label (Desktop) */}
          <button 
            onClick={prevCategory}
            className="hidden xl:flex flex-1 flex-col items-end opacity-20 hover:opacity-100 hover:text-brand transition-all duration-500 cursor-pointer group/prev text-right outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-brand/30 rounded-xl p-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-1 text-white/50">Previous</span>
            <span className="text-sm font-display font-light italic truncate max-w-[200px] text-white group-hover/prev:-translate-x-2 transition-transform duration-500">
              {MENU_DATA[(activeIndex - 1 + MENU_DATA.length) % MENU_DATA.length].title}
            </span>
          </button>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 lg:gap-10">
              <motion.button 
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevCategory}
              className="w-14 h-14 lg:w-20 lg:h-20 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand transition-all bg-white/5 backdrop-blur-sm shadow-xl group"
              aria-label="Previous Category"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform lg:hidden" />
              <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform hidden lg:block" />
            </motion.button>
            
            <div className="flex flex-col items-center min-w-[140px] md:min-w-[400px]">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.9, y: 15, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.1, y: -15, filter: 'blur(10px)' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                  >
                     <div className="text-[9px] lg:text-[10px] text-black uppercase tracking-[0.4em] lg:tracking-[0.6em] mb-2 lg:mb-3 font-black">
                       {activeCategory?.timing || 'All Day'}
                     </div>
                     <h3 className="text-xl lg:text-4xl font-display italic text-[#fff628] hover:text-white transition-colors duration-500 cursor-default leading-tight">
                       {activeCategory?.title}
                     </h3>
                  </motion.div>
               </AnimatePresence>
                
                {/* Visual indicator of active tab */}
                <div className="flex gap-2 mt-4 lg:mt-6">
                  {MENU_DATA.map((_, i) => (
                    <motion.button 
                      key={i}
                      onClick={() => handleTabChange(MENU_DATA[i].id)}
                      animate={{ 
                        width: i === activeIndex ? (window.innerWidth < 1024 ? 16 : 24) : 6,
                        backgroundColor: i === activeIndex ? '#fff628' : 'rgba(255,255,255,0.2)'
                      }}
                      whileHover={{ scale: 1.2, backgroundColor: '#fff628' }}
                      className="h-1.5 rounded-full transition-colors cursor-pointer"
                      aria-label={`Go to category ${MENU_DATA[i].id}`}
                    />
                  ))}
                </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextCategory}
              className="w-14 h-14 lg:w-20 lg:h-20 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand transition-all bg-white/5 backdrop-blur-sm shadow-xl group"
              aria-label="Next Category"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform lg:hidden" />
              <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform hidden lg:block" />
            </motion.button>
          </div>

          {/* Next Label (Desktop) */}
          <button 
            onClick={nextCategory}
            className="hidden xl:flex flex-1 flex-col items-start opacity-20 hover:opacity-100 hover:text-brand transition-all duration-500 cursor-pointer group/next text-left outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-brand/30 rounded-xl p-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-1 text-white/50">Coming Next</span>
            <span className="text-sm font-display font-light italic truncate max-w-[200px] text-white group-hover/next:translate-x-2 transition-transform duration-500">
              {MENU_DATA[(activeIndex + 1) % MENU_DATA.length].title}
            </span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Central Featured centerpiece */}
              <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative aspect-square max-w-[500px] mx-auto lg:ml-0">
                  <div className="absolute inset-0 bg-brand/10 blur-[100px] rounded-full" />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-8 border border-black/10 rounded-full border-dashed"
                  />
                  <div className="w-full h-full rounded-full border border-brand/5 bg-brand-lightest p-8 relative overflow-hidden group shadow-2xl">
                    <img 
                      src={activeCategory?.items[0]?.image || "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2670&auto=format&fit=crop"} 
                      alt={activeCategory?.title}
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-all duration-1000"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-lightest rounded-full flex items-center justify-center p-2 shadow-xl border border-brand/5">
                     <div className="w-full h-full rounded-full bg-brand flex items-center justify-center">
                        <Coffee size={24} className="text-brand-lightest" />
                     </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                   <div className="relative">
                      <span className="text-[12rem] md:text-[15rem] font-display font-black text-white/[0.05] absolute -top-32 -left-12 select-none pointer-events-none">
                        {activeIndex + 1}
                      </span>
                      <div className="relative z-10 space-y-8">
                         <div className="text-5xl md:text-7xl font-display font-medium text-black"><span className="text-[#fff628]">AED {activeCategory?.items[0].price}</span> <span className="text-base md:text-xl text-white uppercase tracking-[0.2em] font-light italic opacity-95">starting</span></div>
                         <p className="text-black text-sm md:text-lg font-medium uppercase tracking-[0.2em] leading-relaxed max-w-lg italic">
                           {activeCategory?.title}. Available daily across all our live kitchens.
                         </p>
                         <button 
                           onClick={() => document.getElementById('menu-grid')?.scrollIntoView({ behavior: 'smooth' })}
                           className="px-12 py-6 bg-[#fff628] text-black rounded-full font-bold uppercase tracking-[0.3em] text-[10px] shadow-massive hover:bg-white transition-all active:scale-95"
                         >
                           Explore Selection
                         </button>
                      </div>
                   </div>
                </div>
              </div>

              {/* Items Grid */}
              <AnimatePresence mode="wait">
                {searchQuery.trim() !== '' ? (
                  <motion.div 
                    key="search-results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-12"
                  >
                    <div className="flex items-center justify-between border-b border-black/5 pb-8">
                       <h3 className="text-2xl font-display italic text-cafe-dark dark:text-dark-text">
                         Found <span className="text-brand font-medium">{filteredItems.length}</span> results for "<span className="text-brand">{searchQuery}</span>"
                       </h3>
                       <button 
                         onClick={() => setSearchQuery('')}
                         className="text-sm font-black uppercase tracking-widest text-brand hover:underline"
                       >
                         Clear Search
                       </button>
                    </div>
                    {filteredItems.length > 0 ? (
                      <div id="menu-grid" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                        {filteredItems.map((item, idx) => (
                          <MenuCard key={`${item.name}-${idx}`} item={item} onQuickView={setSelectedItem} index={idx} />
                        ))}
                      </div>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-32 text-center flex flex-col items-center justify-center space-y-10"
                      >
                        <div className="relative">
                          <div className="w-32 h-32 rounded-full bg-brand/10 flex items-center justify-center text-brand animate-pulse">
                            <Search size={48} />
                          </div>
                          <div className="absolute -top-2 -right-2 w-10 h-10 bg-brand-lightest dark:bg-dark-surface rounded-full flex items-center justify-center shadow-lg border border-brand/5">
                            <Sparkles size={20} className="text-brand" />
                          </div>
                        </div>
                        <div className="space-y-6 max-w-md">
                          <h3 className="text-4xl font-display font-medium italic text-cafe-dark dark:text-dark-text leading-tight">Mmm, nothing found</h3>
                          <p className="text-xl text-cafe-muted dark:text-dark-muted font-light italic">
                            We couldn't find "<span className="text-brand font-medium">{searchQuery}</span>" on today's list. Maybe it's a secret item?
                          </p>
                          <button 
                            onClick={() => setSearchQuery('')}
                            className="px-10 py-4 bg-brand text-brand-lightest rounded-full font-bold shadow-huge hover:scale-105 transition-transform flex items-center gap-3 mx-auto"
                          >
                            Reset Search <ArrowRight size={18} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    id="menu-grid" 
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pt-12 border-t border-black/5"
                  >
                    {filteredItems.map((item, idx) => (
                      <MenuCard key={`${activeTab}-${idx}`} item={item} onQuickView={setSelectedItem} index={idx} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Quick Branch Detail Modal
const BranchModal = ({ branch, isOpen, onClose, onPrev, onNext }: {
  branch: any,
  isOpen: boolean,
  onClose: () => void,
  onPrev: () => void,
  onNext: () => void
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!isOpen || !branch?.outletImages) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % branch.outletImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen, branch]);

  if (!branch) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[500] flex items-center justify-center p-4 lg:p-10 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Prev Branch Button */}
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 lg:left-8 z-10 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center text-white backdrop-blur-md transition-all"
            aria-label="Previous Branch"
          >
            <ChevronLeft size={28} />
          </motion.button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-7xl bg-white rounded-[2rem] overflow-hidden overflow-y-auto shadow-2xl relative max-h-[90vh] flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left side: Slideshow of images */}
            <div className="w-full lg:w-[45%] bg-[#e5e5e5] p-8 lg:p-12 flex flex-col gap-6">
                {/* Main Image */}
                <div className="flex-1 min-h-[300px] lg:min-h-0 bg-[#d1d1d1] rounded-3xl overflow-hidden relative shadow-inner">
                   <AnimatePresence mode="wait">
                     <motion.img
                       key={slideIndex}
                       src={branch.outletImages[slideIndex]}
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       transition={{ duration: 0.8 }}
                       className="w-full h-full object-cover"
                       alt="Branch View"
                     />
                   </AnimatePresence>
                </div>

                {/* Thumbnails / Previews below */}
                <div className="grid grid-cols-2 gap-6 h-28 lg:h-32 shrink-0">
                   {branch.outletImages.slice(1, 3).map((img: string, i: number) => (
                      <div key={i} className="bg-[#d1d1d1] rounded-2xl overflow-hidden shadow-sm">
                        <img src={img} className="w-full h-full object-cover opacity-60" alt="Preview" />
                      </div>
                   ))}
                </div>
            </div>

            {/* Right side: Info and QRs */}
            <div className="w-full lg:w-[55%] p-8 lg:p-12 flex flex-col bg-white">
               <div className="mb-8">
                 <div className="flex items-center gap-3 mb-2">
                    <CafeLogo size="sm" className="text-[#1e9ab0]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1e9ab0]">Authentic Heritage</span>
                 </div>
                 <h3 className="text-3xl lg:text-4xl font-brand font-black text-black leading-tight mb-4 tracking-tight">
                   {branch.name}
                 </h3>
                 
                 <div className="space-y-3 text-lg lg:text-xl font-sans text-black/80">
                   <p className="flex items-center gap-1.5"><span className="font-semibold text-black">Location:</span> <span className="font-light">{branch.address}</span></p>
                   <p className="flex items-center gap-1.5"><span className="font-semibold text-black">Phone Number:</span> <span className="font-light">{branch.phone}</span></p>
                   <p className="flex items-center gap-1.5"><span className="font-semibold text-black">Timings:</span> <span className="font-light">{branch.hours}</span></p>
                 </div>
               </div>

               <div className="mt-auto flex flex-col sm:flex-row gap-8 lg:gap-12">
                  <div className="flex flex-col items-center gap-3">
                     <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">SCAN FOR LOCATION</span>
                     <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-xl border-4 border-[#1e9ab0] p-1.5 flex items-center justify-center relative overflow-hidden bg-[#1e9ab0] shadow-lg transition-transform hover:scale-105">
                        <img src={branch.qrImage} className="w-full h-full object-contain filter invert bg-white rounded-sm p-1" alt="Location" />
                     </div>
                     <span className="text-xl lg:text-2xl font-sans uppercase text-black font-medium">REACH US</span>
                  </div>

                  <div className="flex flex-col items-center gap-3 relative">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">SCAN FOR FEEDBACK</span>
                     <div className="absolute -inset-2 border-2 border-black border-t-0 border-r-0 w-6 h-6 rounded-bl-lg" />
                     <div className="absolute -inset-2 border-2 border-black border-b-0 border-l-0 w-6 h-6 rounded-tr-lg right-[-8px] left-auto" />
                     <div className="absolute -inset-2 border-2 border-black border-b-0 border-r-0 w-6 h-6 rounded-tl-lg" />
                     <div className="absolute -inset-2 border-2 border-black border-t-0 border-l-0 w-6 h-6 rounded-br-lg bottom-[-8px] top-auto right-[-8px] left-auto" />

                     <div className="w-32 h-32 lg:w-40 lg:h-40 p-3 flex items-center justify-center transition-transform hover:scale-105">
                        <img src={branch.feedbackQrImage || branch.qrImage} className="w-full h-full object-contain opacity-80" alt="Feedback" />
                     </div>
                     <span className="text-xl lg:text-2xl font-sans text-black font-medium">RATE US</span>
                  </div>
               </div>
            </div>

            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-black/30 hover:text-[#1e9ab0] transition-colors p-2"
            >
              <X size={40} />
            </button>
          </motion.div>

          {/* Next Branch Button */}
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 lg:right-8 z-10 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center text-white backdrop-blur-md transition-all"
            aria-label="Next Branch"
          >
            <ChevronRight size={28} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Final modern redesigned BranchesSection
const BranchesSection = ({ theme, onBranchSelect }: { theme: string, onBranchSelect: (branch: any) => void }) => {
  const [activeBranchIndex, setActiveBranchIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundTextX = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="branches" ref={sectionRef} className="py-24 lg:py-40 px-6 relative overflow-hidden bg-[#0c0c0c] text-white">


      {/* Immersive Background Text - Releasing the "Big Bold" into the background properly */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] overflow-hidden whitespace-nowrap select-none">
        <motion.h2 
          style={{ x: backgroundTextX }}
          className="text-[40vw] font-black uppercase font-display"
        >
          LOCATIONS
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-3 py-2 px-6 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <MapPin size={14} className="text-brand" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Our Heritage Branches</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-medium italic leading-[1.1] mb-6"
          >
            Visit us in <span className="text-brand">Abu Dhabi</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl font-light italic text-white/40 max-w-2xl mx-auto"
          >
            Experience authentic South Indian flavors across our three custom-designed locations, each reflecting a unique blend of tradition and modernity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 min-h-[600px]">
          {BRANCHES.map((branch, idx) => {
            const branchId = `branch-${branch.name.toLowerCase().split(' ')[0]}`;
            const isActive = idx === activeBranchIndex;
            return (
            <motion.div
              key={idx}
              id={branchId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ scale: isActive ? 1.03 : 1 }}
              transition={{ delay: idx * 0.1, scale: { duration: 0.4, ease: [0.22,1,0.36,1] } }}
              viewport={{ once: true }}
              onClick={() => { setActiveBranchIndex(idx); onBranchSelect(branch); }}
              className={`relative group h-[500px] lg:h-[600px] rounded-[3.5rem] overflow-hidden cursor-pointer transition-all outline-none ${isActive ? 'border-2 border-brand shadow-glow z-10' : 'border border-white/5 bg-white/5'}`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={idx}
                    src={branch.coverImage || branch.outletImages?.[0] || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2674&auto=format&fit=crop"} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    alt={branch.name} 
                  />
                </AnimatePresence>
                {/* Default Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10 opacity-80" />
              </div>

              {/* White Transparent Shadow / Overlay for Content visibility */}
              <div className="absolute inset-0 z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white/10 backdrop-blur-[2px]" />

              {/* Content Holder */}
              <div className="absolute inset-0 z-20 p-8 lg:p-10 flex flex-col justify-end">
                {/* Text Visibility Guarding Overlay (White-ish soft glow) */}
                <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                <div className="relative z-30 transition-transform duration-500 group-hover:-translate-y-4">
                  {/* Visual Label */}
                  <div className="mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{branch.name.split(' (')[1]?.replace(')', '') || 'Flagship'}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-display italic font-bold mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] text-white group-hover:text-brand transition-colors leading-[1.1]">
                    {branch.name.split(' (')[0]}
                  </h3>

                  {/* Description below name */}
                  <p className="text-white/60 text-sm italic font-light mb-6 transition-all group-hover:text-white/90 line-clamp-2">
                    {branch.description}
                  </p>

                  {/* Quick Detail Hint */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center text-white scale-75">
                      <Plus size={12} />
                    </div>
                     Explore Branch Details
                  </motion.div>
                </div>
              </div>

              {/* Interaction Decor */}
              <div className="absolute top-8 right-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', serviceType: 'General Enquiry', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', serviceType: 'General Enquiry', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please call us directly at 050 171 5991.');
    }
  };

  const inputClass = "w-full bg-brand-lightest dark:bg-brand/10 border border-brand/20 dark:border-brand-lightest/10 rounded-2xl px-6 py-5 focus:border-brand outline-none transition-all placeholder:text-brand-dark/30 dark:placeholder:text-brand-lightest/30 text-brand-dark dark:text-brand-lightest";

  return (
    <div className="bg-brand-lightest dark:bg-dark-surface rounded-[2.5rem] md:rounded-[3.5rem] shadow-huge p-8 md:p-16 border border-brand/10 dark:border-brand-lightest/10 relative overflow-hidden group transition-colors">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand/5 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000" />
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 flex flex-col items-center justify-center py-16 text-center gap-6"
          >
            <div className="w-24 h-24 rounded-full bg-[#1e9ab0] flex items-center justify-center shadow-glow">
              <Heart size={40} className="text-white fill-white" />
            </div>
            <h3 className="text-3xl font-display font-bold italic text-cafe-dark dark:text-dark-text">Message Received!</h3>
            <p className="text-cafe-muted dark:text-dark-muted text-lg font-light italic max-w-sm">
              Thank you! We'll get back to you soon on your number.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-10 py-4 bg-[#fff628] text-black rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white transition-all shadow-glow"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8 relative z-10"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-[0.4em] text-cafe-dark/40 dark:text-dark-text/40">Your Name</label>
                <input name="name" type="text" value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Doe" required aria-label="Your Name" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-[0.4em] text-cafe-dark/40 dark:text-dark-text/40">Phone Number</label>
                <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+971 ..." required aria-label="Phone Number" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] uppercase font-black tracking-[0.4em] text-cafe-dark/40 dark:text-dark-text/40">Service Type</label>
              <select name="serviceType" value={formData.serviceType} onChange={handleChange} className={inputClass} aria-label="Service Type">
                <option>General Enquiry</option>
                <option>Bulk/Party Order</option>
                <option>Experience Feedback</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] uppercase font-black tracking-[0.4em] text-cafe-dark/40 dark:text-dark-text/40">Message</label>
              <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="How can we help make your event special?" required aria-label="Message"></textarea>
            </div>
            {status === 'error' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm italic font-light px-2">
                ⚠ {errorMsg}
              </motion.p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-6 bg-[#fff628] text-black rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] hover:bg-white transition-all active:scale-[0.98] shadow-glow disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Sending...
                </>
              ) : 'Deliver Inquiry'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactSection = ({ theme }: { theme: string }) => {
  return (
    <section id="contact" className={`py-24 lg:py-40 px-4 lg:px-6 relative transition-colors duration-1000 ${theme === 'dark' ? 'bg-transparent' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand/60 mb-8 block font-bold">Connect With Us</span>
          <h2 className="text-4xl md:text-[5.5rem] font-display font-medium mb-10 italic text-cafe-dark dark:text-dark-text leading-[0.9] transition-colors">Get in <span className="text-brand">Touch</span></h2>
          <p className="text-cafe-muted dark:text-dark-muted text-lg mb-16 font-light leading-relaxed italic transition-colors">
            Planning a private party or a corporate event? Our team delivers authentic Kumbakonam flavors and impeccable service to make your event unforgettable.
          </p>
          <div className="space-y-10">
            <div className="flex gap-8 items-start group">
              <div className="w-16 h-16 bg-brand-lightest dark:bg-dark-surface shadow-xl rounded-[1.5rem] flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-brand-lightest transition-all duration-500 border border-brand/10 dark:border-brand-lightest/10"><Phone size={28} /></div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.4em] text-cafe-muted/40 dark:text-dark-muted/40 font-black mb-2">Enquiries &amp; Orders</span>
                <span className="text-3xl font-display font-medium text-cafe-dark dark:text-dark-text italic">050 171 5991</span>
              </div>
            </div>
            <div className="flex gap-8 items-start group">
              <div className="w-16 h-16 bg-brand-lightest dark:bg-dark-surface shadow-xl rounded-[1.5rem] flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-brand-lightest transition-all duration-500 border border-brand/10 dark:border-brand-lightest/10"><Utensils size={28} /></div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.4em] text-cafe-muted/40 dark:text-dark-muted/40 font-black mb-2">Special Requests</span>
                <span className="text-xl font-light text-cafe-muted dark:text-dark-muted italic">Customised No Onion &amp; Garlic bulk orders available.</span>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

const Footer = ({ theme, onBranchSelect }: { theme: string, onBranchSelect: (branch: any) => void }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-8 bg-[#fdfaf5] text-black">
      <div className="noise-texture absolute inset-0 opacity-[0.08]" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative mb-8">
               <CafeLogo size="lg" className="w-40 h-40 object-contain drop-shadow-md" />
            </div>
            
            <div className="text-center md:text-left space-y-4 mb-10">
              <p className="text-xl font-display font-light text-black/80 italic leading-relaxed">
                Authentic Veg Eatery, <br />
                Abu Dhabi, UAE
              </p>
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/kcafe.uae/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[#1e9ab0] text-[#1e9ab0] rounded-full flex items-center justify-center hover:bg-[#1e9ab0] hover:text-white transition-all shadow-sm" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/in/about" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[#1e9ab0] text-[#1e9ab0] rounded-full flex items-center justify-center hover:bg-[#1e9ab0] hover:text-white transition-all shadow-sm" aria-label="TikTok">
                <TikTokIcon size={16} />
              </a>
              <a href="https://wa.me/971501715991" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[#1e9ab0] text-[#1e9ab0] rounded-full flex items-center justify-center hover:bg-[#1e9ab0] hover:text-white transition-all shadow-sm" aria-label="WhatsApp">
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Menu Column */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-display font-medium text-black mb-8">Menu</h4>
            <a href="/Assets/MAZYAD MENU MAy 26.pdf" download="Kumbakonam Cafe Menu.pdf" className="px-10 py-3.5 bg-[#2c8496] text-white font-display font-bold uppercase tracking-widest text-[13px] rounded-md mb-12 inline-flex items-center justify-center hover:bg-black transition-colors shadow-md">
               DOWNLOAD MENU
            </a>
            <h4 className="text-2xl font-display font-medium text-black mb-8">Branches</h4>
            <ul className="space-y-6">
              {BRANCHES.map((branch) => {
                const branchShortName = branch.name.split(' (')[0];
                return (
                  <li key={branch.name}>
                    <button
                      onClick={() => onBranchSelect(branch)}
                      className="flex items-center justify-center md:justify-start gap-3 text-black/80 hover:text-[#1e9ab0] transition-colors italic text-lg group w-full"
                    >
                      <ChevronRight size={16} className="text-[#1e9ab0] group-hover:translate-x-1 transition-transform shrink-0" /> {branchShortName}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-display font-medium text-black mb-8">Contact Us</h4>
            <div className="space-y-12">
              <div>
                <p className="text-lg font-display italic mb-6 text-black/80">For Queries:</p>
                <div className="space-y-6">
                  <a href="mailto:info@kumbakonam-cafe.com" className="flex items-center justify-center md:justify-start gap-4 text-black/80 hover:text-[#1e9ab0] transition-colors text-lg italic group">
                    <Mail size={18} className="text-[#2c8496]" /> 
                    <span className="group-hover:underline">info@kumbakonam-cafe.com</span>
                  </a>
                  <a href="tel:025175464" className="flex items-center justify-center md:justify-start gap-4 text-black/80 hover:text-[#1e9ab0] transition-colors text-lg italic group">
                    <Phone size={18} className="text-[#2c8496]" /> 
                    <span>02-5175464</span>
                  </a>
                  <a href="tel:0501680792" className="flex items-center justify-center md:justify-start gap-4 text-black/80 hover:text-[#1e9ab0] transition-colors text-lg italic group">
                    <Smartphone size={18} className="text-[#2c8496]" /> 
                    <span>050-1680792</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Column */}
          <div className="text-center md:text-left">
            <div className="space-y-12 lg:mt-0 lg:pt-0">
               <div>
                 <p className="text-lg font-display italic mb-6 text-black/80 max-w-[280px] leading-relaxed mx-auto md:mx-0">For Customer Feedback & Order Support:</p>
                 <div className="space-y-6">
                    <a href="mailto:support@kumbakonam-cafe.com" className="flex items-center justify-center md:justify-start gap-4 text-black/80 hover:text-[#1e9ab0] transition-colors text-lg italic group">
                      <Mail size={18} className="text-[#2c8496]" /> 
                      <span className="group-hover:underline">support@kumbakonam-cafe.com</span>
                    </a>
                    <a href="tel:0501715991" className="flex items-center justify-center md:justify-start gap-4 text-black/80 hover:text-[#1e9ab0] transition-colors text-lg italic group">
                      <Phone size={18} className="text-[#2c8496]" /> 
                      <span>050-1715991</span>
                    </a>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 pt-10 pb-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-black/70 italic font-display text-lg">
            <a href="mailto:kcafe.uae@gmail.com" className="hover:text-[#1e9ab0] transition-colors">kcafe.uae@gmail.com</a>
            <a href="tel:+971502872787" className="hover:text-[#1e9ab0] transition-colors">+971 502872787</a>
          </div>
        </div>

        {/* Floating Scroll To Top */}
        <div className="fixed bottom-6 right-6 z-[100]">
           <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-[#1e9ab0] text-white rounded-full flex items-center justify-center shadow-massive hover:scale-110 transition-transform active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [isBulkOrderOpen, setIsBulkOrderOpen] = useState(false);
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<any>(null);
  const [theme] = useState<'light' | 'dark'>('dark');
  const [searchQuery, setSearchQuery] = useState('');

  const selectedBranchIndex = selectedBranch
    ? BRANCHES.findIndex(b => b.name === selectedBranch.name)
    : -1;

  const navigateBranch = (dir: 1 | -1) => {
    if (selectedBranchIndex === -1) return;
    const next = (selectedBranchIndex + dir + BRANCHES.length) % BRANCHES.length;
    setSelectedBranch(BRANCHES[next]);
  };

  useEffect(() => {
    document.body.classList.add('dark');
  }, []);

  const allItems = useMemo(() => {
    return MENU_DATA.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.title })));
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return allItems.filter(item => 
      item.name.toLowerCase().includes(query) || 
      (item.description && item.description.toLowerCase().includes(query)) ||
      item.category.toLowerCase().includes(query)
    );
  }, [searchQuery, allItems]);

  return (
    <div className={`relative transition-all duration-1000 ${theme === 'dark' ? 'text-dark-text' : 'text-cafe-dark'}`}>
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05] grayscale contrast-150 mix-blend-overlay">
        <div className="noise-texture absolute inset-0" />
      </div>
      <Navbar 
        onBulkOrderClick={() => setIsBulkOrderOpen(true)} 
        onDeliveryPartnersClick={() => setIsDeliveryModalOpen(true)}
        theme={theme} 
      />
      <BulkOrderModal isOpen={isBulkOrderOpen} onClose={() => setIsBulkOrderOpen(false)} />
      <DeliveryPartnersModal isOpen={isDeliveryModalOpen} onClose={() => setIsDeliveryModalOpen(false)} theme={theme} />
      <BranchModal
        branch={selectedBranch}
        isOpen={!!selectedBranch}
        onClose={() => setSelectedBranch(null)}
        onPrev={() => navigateBranch(-1)}
        onNext={() => navigateBranch(1)}
      />
      
      <AnimatePresence>
        {searchQuery && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-[110] bg-brand-lightest/98 dark:bg-dark-bg/98 backdrop-blur-2xl px-6 py-32 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <div>
                  <h2 className="text-5xl md:text-7xl font-display font-medium italic text-brand mb-4">Search Results</h2>
                  <p className="text-cafe-muted dark:text-dark-muted italic text-lg">Found {searchResults.length} items matching "{searchQuery}"</p>
                </div>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="px-10 py-5 bg-brand-dark dark:bg-brand-lightest dark:text-brand-dark text-brand-lightest rounded-full font-bold uppercase tracking-widest text-[10px] shadow-2xl transition-all active:scale-95"
                >
                  Close Results
                </button>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {searchResults.map((item, idx) => (
                    <MenuCard key={`search-${idx}`} item={item as any} onQuickView={() => {}} index={idx} />
                  ))}
                </div>
              ) : (
                <div className="py-32 text-center">
                  <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand animate-bounce">
                    <X size={40} />
                  </div>
                  <h3 className="text-2xl font-display italic text-cafe-muted dark:text-dark-muted">No items found. Let's try another flavor!</h3>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollToTop />
      <main>
        <Hero 
          onBulkOrderClick={() => setIsBulkOrderOpen(true)} 
          onDeliveryPartnersClick={() => setIsDeliveryModalOpen(true)}
          theme={theme} 
        />
        <MenuSection 
          theme={theme} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <BranchesSection theme={theme} onBranchSelect={setSelectedBranch} />
        
        <AboutTimeline theme={theme} />
        
        <TestimonialsSection theme={theme} />

        <ContactSection theme={theme} />
      </main>
      <Footer theme={theme} onBranchSelect={setSelectedBranch} />
    </div>
  );
}
