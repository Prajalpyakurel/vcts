import AppLayout from '@/layouts/frontend/app/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Link } from '@inertiajs/react';
import gsap from 'gsap';
import { type ReactNode, useEffect, useRef } from 'react';
import { PiCaretDoubleRightBold } from 'react-icons/pi';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    pageTitle: string;
    title: string;
}

export default ({ children, pageTitle, title, breadcrumbs }: AppLayoutProps) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!contentRef.current) return;
        gsap.from(contentRef.current.children, {
            opacity: 0,
            y: 20,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
        });
    }, []);

    return (
        <AppLayout title={pageTitle}>
            <section className="relative overflow-hidden bg-gradient-to-r from-[#001b44] via-[#003893] to-[#b8112e] py-20 md:py-24">
                {/* Decorative glows */}
                <div className="pointer-events-none absolute top-10 right-16 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-10 h-40 w-40 rounded-full bg-[#e2a63b]/10 blur-2xl" />

                {/* Himalayan skyline silhouette */}
                <svg
                    className="pointer-events-none absolute bottom-0 left-0 w-full text-[#00102b]/40"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path
                        fill="currentColor"
                        d="M0,120 L0,80 L110,35 L170,60 L250,10 L330,55 L410,20 L510,70 L600,25 L690,65 L780,15 L870,58 L970,30 L1070,75 L1170,40 L1270,80 L1350,48 L1440,80 L1440,120 Z"
                    />
                </svg>

                <div className="relative z-10 container mx-auto px-4">
                    <div ref={contentRef} className="text-center">
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#e2a63b] uppercase backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#e2a63b]" />
                            Valley College
                        </span>
                        <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                            {title}
                        </h1>
                        <ul className="flex flex-wrap justify-center gap-1.5">
                            {breadcrumbs?.map((item, index) => (
                                <span key={index} className="flex items-center gap-1.5">
                                    {!item.isActive ? (
                                        <li>
                                            <Link
                                                href={item.href}
                                                className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                                            >
                                                {item.title}
                                                <PiCaretDoubleRightBold className="text-[#e2a63b]" size={12} />
                                            </Link>
                                        </li>
                                    ) : (
                                        <li>
                                            <span className="text-sm font-semibold text-white">
                                                {item.title}
                                            </span>
                                        </li>
                                    )}
                                </span>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            {children}
        </AppLayout>
    );
};
