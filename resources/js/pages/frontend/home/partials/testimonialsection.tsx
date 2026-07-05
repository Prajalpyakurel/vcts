import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { StudentFeedback } from '@/pages/backend/student-feedback/types';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function getInitials(name: string) {
    return name
        .trim()
        .split(/\s+/)
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();
}

function TestimonialAvatar({ name, image }: { name: string; image: string }) {
    const [imageFailed, setImageFailed] = useState(false);

    if (image && !imageFailed) {
        return (
            <img
                src={`/storage/${image}`}
                alt={name}
                onError={() => setImageFailed(true)}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-rose-100"
            />
        );
    }

    return (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#003893] to-[#b8112e] text-sm font-bold text-white ring-2 ring-rose-100">
            {getInitials(name)}
        </div>
    );
}

export default function TestimonialSection({
    studentFeedbacks,
}: {
    studentFeedbacks: StudentFeedback[];
}) {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const [navigationReady, setNavigationReady] = useState(false);
    const headerRef = useScrollReveal<HTMLDivElement>({ y: 20, stagger: 0.1 });
    const sliderRef = useScrollReveal<HTMLDivElement>({ selector: 'self', y: 24, duration: 0.9 });

    useEffect(() => {
        // Wait until refs are set
        if (prevRef.current && nextRef.current) {
            setNavigationReady(true);
        }
    }, []);

    if (!studentFeedbacks?.length) return null;

    return (
        <section className="relative overflow-hidden bg-white py-20">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #b8112e 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container relative mx-auto px-4">
                {/* Header */}
                <div ref={headerRef} className="mb-12 text-center">
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                        Student Voices
                    </span>
                    <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                        What Our Students Say About <span className="text-[#b8112e]">Valley College</span>
                    </h2>
                    <p className="mt-3 text-gray-500">Real stories from students who've experienced our programs firsthand</p>
                </div>

                {/* Slider */}
                <div ref={sliderRef}>
                {navigationReady && (
                    <Swiper
                        loop
                        spaceBetween={24}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                        modules={[Autoplay, Navigation]}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                        }}
                    >
                        {studentFeedbacks.map(({ name, image, feedback, student_course }, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    {/* Stars */}
                                    <div className="mb-4 flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <div className="mb-5 flex-1">
                                        <FaQuoteLeft className="mb-3 text-2xl text-[#b8112e]/20" />
                                        <p className="leading-relaxed text-gray-600">{feedback}</p>
                                    </div>

                                    <div className="flex items-center gap-4 border-t border-gray-100 pt-5">
                                        <TestimonialAvatar name={name} image={image} />
                                        <div>
                                            <p className="font-bold text-gray-900">{name}</p>
                                            <span className="text-sm text-[#b8112e]">{student_course}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                </div>

                {/* Navigation buttons */}
                <div className="mt-8 flex justify-center gap-3">
                    <button
                        ref={prevRef}
                        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#b8112e]/20 text-[#b8112e] transition-all duration-200 hover:border-[#b8112e] hover:bg-[#b8112e] hover:text-white"
                        aria-label="Previous testimonial"
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <button
                        ref={nextRef}
                        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#b8112e]/20 text-[#b8112e] transition-all duration-200 hover:border-[#b8112e] hover:bg-[#b8112e] hover:text-white"
                        aria-label="Next testimonial"
                    >
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
