import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, BookOpen, GraduationCap, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const counters = [
    { icon: BookOpen, value: 45, title: 'Academic Programs' },
    { icon: GraduationCap, value: 3200, title: 'Enrolled Students' },
    { icon: Users, value: 180, title: 'Qualified Faculty' },
    { icon: Award, value: 25, title: 'Years of Excellence' },
];

export default function CounterSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const [counts, setCounts] = useState(counters.map(() => 0));

    useEffect(() => {
        const section = sectionRef.current;
        const grid = gridRef.current;
        if (!section || !grid) return;

        const ctx = gsap.context(() => {
            gsap.from(grid.children, {
                opacity: 0,
                y: 24,
                stagger: 0.12,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 75%', once: true },
            });

            counters.forEach((counter, index) => {
                const proxy = { value: 0 };
                gsap.to(proxy, {
                    value: counter.value,
                    duration: 1.8,
                    ease: 'power2.out',
                    scrollTrigger: { trigger: section, start: 'top 75%', once: true },
                    onUpdate: () => {
                        setCounts((prev) => {
                            const updated = [...prev];
                            updated[index] = Math.floor(proxy.value);
                            return updated;
                        });
                    },
                });
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="relative overflow-hidden">
            {/* Gradient background */}
            <div className="bg-gradient-to-r from-[#001b44] via-[#003893] to-[#b8112e] py-16 lg:py-20">
                {/* Decorative */}
                <div className="absolute top-0 left-0 h-full w-full opacity-10">
                    <div className="absolute top-4 left-8 h-48 w-48 rounded-full border border-white/30" />
                    <div className="absolute right-8 bottom-4 h-32 w-32 rounded-full border border-white/30" />
                    <div className="absolute top-1/2 left-1/3 h-20 w-20 rounded-full border border-white/20" />
                </div>

                <div className="container relative mx-auto px-4">
                    <div ref={gridRef} className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                        {counters.map((counter, index) => {
                            const Icon = counter.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                                        <Icon size={32} className="text-white" />
                                    </div>
                                    <p className="text-4xl font-black text-white lg:text-5xl">
                                        {counts[index]}<span className="text-[#e2a63b]">+</span>
                                    </p>
                                    <p className="mt-1.5 text-sm font-medium uppercase tracking-wider text-white/70">
                                        {counter.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
