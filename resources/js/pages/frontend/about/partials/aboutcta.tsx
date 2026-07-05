import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export default function AboutCta() {
    const contentRef = useScrollReveal<HTMLDivElement>({ y: 24, stagger: 0.1 });

    return (
        <section className="relative overflow-hidden bg-white py-20">
            <div className="container mx-auto px-4">
                <div
                    ref={contentRef}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#001b44] via-[#003893] to-[#b8112e] px-8 py-16 text-center md:px-16"
                >
                    <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                    <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#e2a63b]/10 blur-2xl" />

                    <h2 className="relative mx-auto mb-4 max-w-2xl text-3xl font-bold text-white md:text-4xl">
                        Ready to Begin Your Journey With Us?
                    </h2>
                    <p className="relative mx-auto mb-8 max-w-xl text-white/80">
                        Explore our academic programs or get in touch with our
                        admissions team to take the next step toward your
                        future.
                    </p>
                    <div className="relative flex flex-wrap justify-center gap-4">
                        <Link
                            href="/programs"
                            className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#b8112e] shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                            Explore Programs
                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
