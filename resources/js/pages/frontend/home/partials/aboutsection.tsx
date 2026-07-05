import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
    'Nationally accredited academic programs led by experienced faculty',
    'A supportive, student-centered learning environment',
    'Strong industry partnerships driving real career outcomes',
    'Modern labs and research facilities for hands-on learning',
];

export default function AboutSection() {
    const gridRef = useScrollReveal<HTMLDivElement>({ y: 40, x: 0, stagger: 0.2, duration: 0.9 });

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div ref={gridRef} className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                    {/* Image side */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-3xl">
                            <img
                                className="h-[420px] w-full object-cover lg:h-[500px]"
                                src="assets/images/about/about_students.png"
                                alt="Students at Valley College"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>

                        {/* Floating experience badge */}
                        <div className="absolute -bottom-6 -right-4 z-10 rounded-2xl border border-rose-100 bg-white p-5 shadow-xl lg:-right-8">
                            <p className="text-4xl font-black text-[#b8112e]">25+</p>
                            <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-gray-500">Years of<br/>Excellence</p>
                        </div>

                        {/* Floating students badge */}
                        <div className="absolute -top-4 -left-4 z-10 flex items-center gap-3 rounded-2xl border border-rose-100 bg-white p-4 shadow-xl lg:-left-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#b8112e]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                            </div>
                            <div>
                                <p className="text-xl font-black text-gray-900">3,200+</p>
                                <p className="text-xs text-gray-500">Enrolled Students</p>
                            </div>
                        </div>

                        {/* Decorative dots */}
                        <div className="absolute -bottom-10 -left-10 -z-10 h-40 w-40 opacity-30">
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                {Array.from({ length: 5 }).map((_, r) =>
                                    Array.from({ length: 5 }).map((_, c) => (
                                        <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="3" fill="#b8112e" />
                                    ))
                                )}
                            </svg>
                        </div>
                    </div>

                    {/* Text side */}
                    <div>
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                            About Us
                        </span>

                        <h2 className="mb-5 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-[2.6rem] lg:leading-[1.2]">
                            Welcome to{' '}
                            <span className="text-[#b8112e]">Valley College of<br />Technical Sciences</span>
                        </h2>

                        <p className="mb-8 border-l-4 border-[#b8112e] pl-4 text-base leading-relaxed text-gray-500">
                            For over 25 years, Valley College has been dedicated to delivering quality higher education
                            that equips students with the technical knowledge, practical skills, and professional values
                            needed to thrive in a competitive world.
                        </p>

                        <ul className="mb-8 space-y-4">
                            {highlights.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#b8112e]" />
                                    <span className="text-sm leading-relaxed text-gray-600 md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="/about"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#b8112e] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-200 transition-all duration-200 hover:bg-[#7d0d22] hover:shadow-xl hover:shadow-rose-300"
                        >
                            Learn More About Us
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
