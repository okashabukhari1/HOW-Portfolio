import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollAnimation(scopeRef) {
  useEffect(() => {
    if (!scopeRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate individual reveal-up elements
      const revealElements = gsap.utils.toArray('.reveal-up');
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Animate card groups with staggering
      const staggerGroups = gsap.utils.toArray('.reveal-stagger-group');
      staggerGroups.forEach((group) => {
        const items = group.querySelectorAll('.reveal-stagger-item');
        if (items.length) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 32, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: group,
                start: 'top 84%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // Animate stepped roadmap / lines
      const stepLines = gsap.utils.toArray('.reveal-line');
      stepLines.forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 1.1,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
            },
          }
        );
      });
    }, scopeRef);

    return () => ctx.revert();
  }, [scopeRef]);
}
