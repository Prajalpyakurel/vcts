import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import {
    Award,
    BookOpen,
    GraduationCap,
    Microscope,
    Users2,
} from 'lucide-react';

const reasons = [
    {
        icon: GraduationCap,
        title: 'Industry-Aligned Curriculum',
        description:
            'Programs co-developed with technical partners so graduates enter the workforce job-ready.',
    },
    {
        icon: Microscope,
        title: 'Modern Labs & Facilities',
        description:
            'Hands-on learning spaces equipped for real practice, not just theory.',
    },
    {
        icon: Users2,
        title: 'Experienced Faculty',
        description:
            'Learn from instructors who bring real industry and academic experience into the classroom.',
    },
    {
        icon: Award,
        title: 'Recognized Qualifications',
        description:
            'Nationally accredited programs that carry weight with employers and universities alike.',
    },
];

const stats = [
    { value: '45+', label: 'Academic Programs' },
    { value: '3,200+', label: 'Enrolled Students' },
    { value: '180+', label: 'Qualified Faculty' },
    { value: '98%', label: 'Placement Rate' },
];

export default function WhyChooseUs() {
    const listRef = useScrollReveal<HTMLDivElement>({ y: 24, stagger: 0.1 });
    const statsRef = useScrollReveal<HTMLDivElement>({
        selector: 'self',
        x: 40,
        y: 0,
        duration: 0.9,
    });

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                    {/* Left: checklist */}
                    <div>
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                            Why Choose Us
                        </span>
                        <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
                            What Makes{' '}
                            <span className="text-[#b8112e]">Valley College</span>{' '}
                            Different
                        </h2>

                        <div ref={listRef} className="space-y-6">
                            {reasons.map((reason, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-50">
                                        <reason.icon
                                            size={22}
                                            className="text-[#b8112e]"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-bold text-gray-900">
                                            {reason.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-gray-500">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: stats card */}
                    <div
                        ref={statsRef}
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#001b44] via-[#003893] to-[#b8112e] p-10"
                    >
                        <div className="pointer-events-none absolute top-0 right-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
                        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#e2a63b]/10 blur-2xl" />

                        <div className="relative mb-8 flex items-center gap-3">
                            <BookOpen size={24} className="text-[#e2a63b]" />
                            <p className="text-sm font-bold tracking-widest text-white/80 uppercase">
                                Valley College at a Glance
                            </p>
                        </div>

                        <div className="relative grid grid-cols-2 gap-8">
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <p className="text-4xl font-black text-white">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1.5 text-sm font-medium text-white/70">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
