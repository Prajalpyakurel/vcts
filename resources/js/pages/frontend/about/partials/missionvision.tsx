import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Eye, Target } from 'lucide-react';

const cards = [
    {
        icon: Target,
        title: 'Our Mission',
        description:
            "To deliver industry-relevant technical education that combines rigorous academics with hands-on practice, equipping every student with the skills, confidence, and ethics needed to thrive in Nepal's evolving workforce.",
    },
    {
        icon: Eye,
        title: 'Our Vision',
        description:
            'To be recognized as one of the leading technical colleges in Nepal — a place where curious minds become capable professionals, and where innovation, integrity, and community shape everything we do.',
    },
];

export default function MissionVision() {
    const gridRef = useScrollReveal<HTMLDivElement>({ y: 32, stagger: 0.15 });

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div ref={gridRef} className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10"
                        >
                            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#e2a63b] to-[#b8112e]" />
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#003893] to-[#b8112e] transition-transform duration-300 group-hover:scale-110">
                                <card.icon size={26} className="text-white" />
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-gray-900">
                                {card.title}
                            </h3>
                            <p className="leading-relaxed text-gray-600">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
