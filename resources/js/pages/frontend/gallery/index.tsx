import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import { Gallery } from '@/pages/backend/gallery/types';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, Images, X, ZoomIn } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Index({ galleries }: { galleries: Gallery[] }) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'Gallery', href: '/galleries', isActive: true },
    ];

    const gridRef = useScrollReveal<HTMLDivElement>({ y: 28, stagger: 0.08 });
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const modalImageRef = useRef<HTMLDivElement>(null);

    const close = () => setActiveIndex(null);
    const showPrev = () =>
        setActiveIndex((i) =>
            i === null ? null : (i - 1 + galleries.length) % galleries.length,
        );
    const showNext = () =>
        setActiveIndex((i) => (i === null ? null : (i + 1) % galleries.length));

    useEffect(() => {
        if (activeIndex === null || !modalImageRef.current) return;
        gsap.fromTo(
            modalImageRef.current,
            { opacity: 0, scale: 0.92 },
            { opacity: 1, scale: 1, duration: 0.35, ease: 'power3.out' },
        );
    }, [activeIndex]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (activeIndex === null) return;
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeIndex, galleries.length]);

    return (
        <BannerPageLayout
            title="Gallery"
            breadcrumbs={breadcrumbs}
            pageTitle="Gallery"
        >
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mx-auto mb-14 max-w-2xl text-center">
                        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                            Campus Gallery
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Moments From{' '}
                            <span className="text-[#b8112e]">Valley College</span>
                        </h2>
                        <p className="mt-3 text-gray-500">
                            A glimpse into campus life, workshops, events, and
                            student achievements
                        </p>
                    </div>

                    {/* Gallery grid */}
                    {galleries.length > 0 ? (
                        <div
                            ref={gridRef}
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {galleries.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-rose-100"
                                >
                                    {item.image ? (
                                        <img
                                            src={`/storage/${item.image}`}
                                            alt={item.name}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#003893] to-[#b8112e]">
                                            <Images size={40} className="text-white/70" />
                                        </div>
                                    )}

                                    {/* Overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <div className="flex items-center justify-between p-5">
                                            <h3 className="line-clamp-1 text-sm font-bold text-white">
                                                {item.name}
                                            </h3>
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                                                <ZoomIn size={16} />
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p className="rounded-2xl bg-white py-16 text-center text-gray-400 shadow-sm">
                            No gallery photos available at the moment.
                        </p>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {activeIndex !== null && galleries[activeIndex] && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={close}
                >
                    <button
                        onClick={close}
                        aria-label="Close"
                        className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                        <X size={20} />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            showPrev();
                        }}
                        aria-label="Previous image"
                        className="absolute left-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <div
                        ref={modalImageRef}
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-h-[80vh] max-w-4xl"
                    >
                        <img
                            src={`/storage/${galleries[activeIndex].image}`}
                            alt={galleries[activeIndex].name}
                            className="max-h-[80vh] w-full rounded-xl object-contain shadow-2xl"
                        />
                        <p className="mt-4 text-center text-sm font-semibold text-white/90">
                            {galleries[activeIndex].name}
                        </p>
                        <p className="mt-1 text-center text-xs text-white/50">
                            {activeIndex + 1} / {galleries.length}
                        </p>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            showNext();
                        }}
                        aria-label="Next image"
                        className="absolute right-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
                    >
                        <ChevronRight size={22} />
                    </button>
                </div>
            )}
        </BannerPageLayout>
    );
}
