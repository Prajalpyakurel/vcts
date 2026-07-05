import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealOptions {
    /** CSS selector (relative to the container) for the elements to animate. Defaults to direct children. Use 'self' to animate the container itself. */
    selector?: string | 'self';
    y?: number;
    x?: number;
    scale?: number;
    stagger?: number;
    duration?: number;
    /** ScrollTrigger start position */
    start?: string;
}

/**
 * Attaches a fade + slide reveal animation (GSAP + ScrollTrigger) to a container's
 * children (or the container itself) the first time it scrolls into view.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
    selector,
    y = 32,
    x = 0,
    scale,
    stagger = 0.12,
    duration = 0.8,
    start = 'top 82%',
}: ScrollRevealOptions = {}) {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const targets: Element | NodeListOf<Element> =
            selector === 'self' ? el : el.querySelectorAll(selector ?? ':scope > *');

        if (!(targets instanceof Element) && targets.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                targets,
                { opacity: 0, y, x, ...(scale ? { scale } : {}) },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    ...(scale ? { scale: 1 } : {}),
                    duration,
                    stagger,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start,
                        once: true,
                    },
                },
            );
        }, el);

        return () => ctx.revert();
    }, [selector, y, x, scale, stagger, duration, start]);

    return ref;
}
