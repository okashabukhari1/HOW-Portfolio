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
    if (prefersReducedMotion) {
      gsap.set(scopeRef.current.querySelectorAll('.reveal-up, .reveal-stagger-item'), {
        clearProps: 'all',
      });
      return;
    }

    const ctx = gsap.context(() => {
      const revealElements = gsap.utils.toArray(scopeRef.current.querySelectorAll('.reveal-up'));
      revealElements.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 92%',
          once: true,
          onEnter: () => gsap.fromTo(el,
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.65, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }
          ),
        });
      });

      const staggerGroups = gsap.utils.toArray(scopeRef.current.querySelectorAll('.reveal-stagger-group'));
      staggerGroups.forEach((group) => {
        const items = group.querySelectorAll('.reveal-stagger-item');
        if (items.length) {
          ScrollTrigger.create({
            trigger: group,
            start: 'top 92%',
            once: true,
            onEnter: () => gsap.fromTo(items,
              { autoAlpha: 0, y: 22 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.075,
                ease: 'power3.out',
                clearProps: 'transform,opacity,visibility',
              }
            ),
          });
        }
      });
    }, scopeRef);

    const refreshId = window.requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.cancelAnimationFrame(refreshId);
      ctx.revert();
    };
  }, [scopeRef]);
}
