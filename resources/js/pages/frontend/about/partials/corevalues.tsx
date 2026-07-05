import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Award, Handshake, Lightbulb, ShieldCheck } from 'lucide-react';

const values = [
    {
        icon: Award,
        title: 'Excellence',
        description:
            'We hold ourselves to the highest academic and professional standards in everything we teach.',
    },
    {
        icon: ShieldCheck,
        title: 'Integrity',
        description:
            'Honesty and accountability guide our classrooms, our administration, and our community.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description:
            'We continuously modernize our curriculum and labs to keep pace with real industry needs.',
    },
    {
        icon: Handshake,
        title: 'Community',
        description:
            'We build lasting relationships between students, faculty, alumni, and local industry partners.',
    },
];

export default function CoreValues() {
    const gridRef = useScrollReveal<HTMLDivElement>({ y: 24, stagger: 0.12 });

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                        What Drives Us
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Our Core <span className="text-[#b8112e]">Values</span>
                    </h2>
                    <p className="mt-3 text-gray-500">
                        The principles that shape how we teach, lead, and grow
                        together
                    </p>
                </div>

                <div
                    ref={gridRef}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {values.map((value, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#e2a63b] to-[#b8112e]" />
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-rose-50 transition-transform duration-300 group-hover:scale-110">
                                <value.icon size={26} className="text-[#b8112e]" />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-gray-900">
                                {value.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-500">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
