import { HeroItem } from '@/pages/backend/hero-section/types';
import { Link } from '@inertiajs/react';
import gsap from 'gsap';
import { ArrowRight, GraduationCap, Star, Users } from 'lucide-react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const stats = [
    { icon: GraduationCap, value: '3200+', label: 'Students' },
    { icon: Users, value: '180+', label: 'Faculty' },
    { icon: Star, value: '25+', label: 'Years' },
];

function animateActiveSlide(swiper: SwiperType) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (!activeSlide) return;

    const content = activeSlide.querySelector('[data-hero-content]');
    const image = activeSlide.querySelector('[data-hero-image]');

    if (content) {
        gsap.fromTo(
            content.children,
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
        );
    }

    if (image) {
        gsap.fromTo(
            image,
            { opacity: 0, scale: 0.92 },
            { opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out', delay: 0.2 },
        );
    }
}

export default function HeroSection({
    heroSections,
}: {
    heroSections: HeroItem[];
}) {
    const paginationRef = useRef<HTMLDivElement>(null);

    if (!heroSections?.length) return null;

    return (
        <section className="relative overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={heroSections.length > 1}
                autoplay={
                    heroSections.length > 1
                        ? { delay: 6000, disableOnInteraction: false }
                        : false
                }
                pagination={
                    heroSections.length > 1
                        ? { clickable: true, el: paginationRef.current }
                        : false
                }
                onBeforeInit={(swiper) => {
                    if (swiper.params.pagination && typeof swiper.params.pagination === 'object') {
                        swiper.params.pagination.el = paginationRef.current;
                    }
                }}
                onSwiper={(swiper) => animateActiveSlide(swiper)}
                onSlideChangeTransitionStart={(swiper) =>
                    animateActiveSlide(swiper)
                }
            >
                {heroSections.map((heroSection) => (
                    <SwiperSlide key={heroSection.id}>
                        <div
                            className="relative min-h-[580px] md:min-h-[640px] lg:min-h-[680px]"
                            style={{
                                backgroundImage: `url(/storage/${heroSection.background_image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#001b44]/90 via-[#003893]/80 to-[#b8112e]/60" />

                            {/* Decorative circles */}
                            <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
                            <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-rose-400/10 blur-2xl" />

                            {/* Himalayan skyline silhouette */}
                            <svg
                                className="pointer-events-none absolute bottom-0 left-0 w-full text-[#00102b]/40"
                                viewBox="0 0 1440 140"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <path
                                    fill="currentColor"
                                    d="M0,140 L0,90 L120,40 L180,70 L260,15 L340,65 L420,25 L520,80 L610,30 L700,75 L790,20 L880,68 L980,35 L1080,85 L1180,45 L1280,90 L1360,55 L1440,90 L1440,140 Z"
                                />
                            </svg>

                            {/* Content */}
                            <div className="relative z-10 container mx-auto grid min-h-[580px] grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-20 md:min-h-[640px]">
                                {/* Left text content */}
                                <div data-hero-content className="max-w-xl">
                                    {/* Badge */}
                                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                                        <Star size={13} className="text-[#e2a63b] fill-[#e2a63b]" />
                                        <span className="text-xs font-semibold tracking-widest text-white/90 uppercase">
                                            {heroSection.title || 'Premier Technical Institution'}
                                        </span>
                                    </div>

                                    <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
                                        {heroSection.subtitle}
                                    </h1>

                                    <p className="mb-8 text-base leading-relaxed text-white/80 md:text-lg">
                                        {heroSection.description}
                                    </p>

                                    <div className="flex flex-wrap gap-4">
                                        <Link
                                            href="/programs"
                                            className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#b8112e] shadow-lg shadow-rose-950/30 transition-all duration-300 hover:bg-[#b8112e] hover:text-white hover:shadow-xl"
                                        >
                                            Explore Programs
                                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>

                                    {/* Stats row */}
                                    <div className="mt-10 flex flex-wrap gap-8">
                                        {stats.map((stat, i) => (
                                            <div key={i} className="flex items-center gap-2.5">
                                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
                                                    <stat.icon size={18} className="text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-lg font-bold leading-none text-white">{stat.value}</p>
                                                    <p className="text-xs text-white/70">{stat.label}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right image */}
                                {heroSection?.image && (
                                    <div data-hero-image className="relative flex max-lg:hidden lg:justify-end">
                                        <div className="relative">
                                            {/* Decorative ring */}
                                            <div className="absolute -inset-4 rounded-3xl border border-white/10" />
                                            <img
                                                className="relative z-10 max-h-[480px] w-full max-w-[500px] rounded-2xl object-cover shadow-2xl"
                                                src={`/storage/${heroSection.image}`}
                                                alt={heroSection.title || 'Hero'}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Slide indicators */}
            {heroSections.length > 1 && (
                <div
                    ref={paginationRef}
                    className="hero-pagination absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-white/40 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:w-6 [&_.swiper-pagination-bullet-active]:bg-[#e2a63b]"
                />
            )}
        </section>
    );
}
