import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { CircleUserIcon, GraduationCap, LibraryBigIcon } from 'lucide-react';

const features = [
    {
        title: 'Diverse Programs',
        icon: GraduationCap,
        description:
            'Valley College offers a wide range of accredited technical programs tailored to meet the academic and professional needs of students in a changing world.',
        color: 'from-[#e2a63b] to-[#b8112e]',
        bg: 'bg-rose-50',
        iconBg: 'bg-rose-100',
        iconColor: 'text-[#b8112e]',
    },
    {
        title: 'Certified Teachers',
        icon: CircleUserIcon,
        description:
            'Our faculty are industry experts with deep knowledge, real-world experience, and a genuine passion for empowering the next generation of technical professionals.',
        color: 'from-blue-500 to-cyan-600',
        bg: 'bg-blue-50',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
    },
    {
        title: 'Modern Facilities',
        icon: LibraryBigIcon,
        description:
            'State-of-the-art labs, libraries, and learning spaces designed to enhance the academic experience and prepare students for professional success.',
        color: 'from-emerald-500 to-teal-600',
        bg: 'bg-emerald-50',
        iconBg: 'bg-emerald-100',
        iconColor: 'text-emerald-600',
    },
];

export default function FeatureSection() {
    const gridRef = useScrollReveal<HTMLDivElement>({ y: 24, stagger: 0.15 });

    return (
        <div className="container mx-auto px-4">
            <div ref={gridRef} className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Top gradient bar */}
                            <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${feature.color}`} />

                            <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${feature.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                                <Icon size={28} className={feature.iconColor} />
                            </div>

                            <h3 className="mb-3 text-lg font-bold text-gray-900">{feature.title}</h3>
                            <p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>

                            {/* Number watermark */}
                            <span className="absolute bottom-4 right-5 text-6xl font-black text-gray-50 select-none">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
