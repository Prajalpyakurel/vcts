import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import { Course, CourseCurriculum } from '@/pages/backend/course/types';
import { Link } from '@inertiajs/react';
import {
    BookOpen,
    Building2,
    Calendar,
    ChevronDown,
    Clock,
    GraduationCap,
    Layers,
    Mail,
} from 'lucide-react';
import { useState } from 'react';

function CurriculumAccordionItem({
    curriculum,
    index,
    isOpen,
    onToggle,
}: {
    curriculum: CourseCurriculum;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-rose-50/40 md:p-6"
            >
                <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#003893] to-[#b8112e] text-sm font-bold text-white">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                        <h3 className="text-base font-bold text-gray-900 md:text-lg">
                            {curriculum.name}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                                <Clock size={13} className="text-[#b8112e]" />
                                {curriculum.curricula_duration}
                            </span>
                            {curriculum.credit_hours &&
                                curriculum.credit_hours !== '—' && (
                                    <span className="flex items-center gap-1">
                                        <Layers size={13} className="text-[#b8112e]" />
                                        {curriculum.credit_hours} Credit Hours
                                    </span>
                                )}
                        </div>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`shrink-0 text-gray-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#b8112e]' : ''
                    }`}
                />
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-wrap gap-2.5 border-t border-gray-100 p-5 pt-5 md:p-6 md:pt-5">
                        {curriculum.curriculum_syllabus.length > 0 ? (
                            curriculum.curriculum_syllabus.map((syllabus) => (
                                <span
                                    key={syllabus.id}
                                    className="inline-flex items-center gap-1.5 rounded-lg bg-rose-50 px-3 py-1.5 text-xs font-semibold text-[#b8112e]"
                                >
                                    <BookOpen size={12} />
                                    {syllabus.name}
                                </span>
                            ))
                        ) : (
                            <p className="text-sm text-gray-400">
                                Syllabus details coming soon.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProgramShow({ program }: { program: Course }) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'Academic Programs', href: '/programs', isActive: false },
        { title: program.name, href: '#', isActive: true },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const totalYears = program.course_curriculum.length;
    const totalSubjects = program.course_curriculum.reduce(
        (sum, c) => sum + c.curriculum_syllabus.length,
        0,
    );

    const headerRef = useScrollReveal<HTMLDivElement>({ y: 24, stagger: 0.1 });
    const curriculumRef = useScrollReveal<HTMLDivElement>({ y: 24, stagger: 0.08 });

    return (
        <BannerPageLayout
            title={program.name}
            pageTitle="Academic Program"
            breadcrumbs={breadcrumbs}
        >
            <section className="bg-white py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div ref={headerRef} className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                        {/* Image */}
                        <div className="lg:col-span-12">
                            <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
                                <img
                                    src={
                                        program.image
                                            ? `/storage/${program.image}`
                                            : '/assets/images/blog/blog_8.png'
                                    }
                                    alt={program.name}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                                    <span className="rounded-full bg-[#b8112e] px-3 py-1 text-xs font-bold text-white">
                                        {program.university}
                                    </span>
                                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-800 backdrop-blur-sm">
                                        {program.education_level}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Title + description */}
                        <div className="lg:col-span-8">
                            <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
                                {program.name}
                            </h1>
                            <p className="leading-relaxed text-gray-600">
                                {program.description}
                            </p>
                        </div>

                        {/* Stats card */}
                        <div className="lg:col-span-4">
                            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-5 lg:grid-cols-1">
                                <div className="text-center lg:flex lg:items-center lg:gap-3 lg:text-left">
                                    <div className="mx-auto mb-1.5 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 lg:mx-0 lg:mb-0">
                                        <Layers size={18} className="text-[#b8112e]" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-black text-gray-900">
                                            {program.total_credit_hours || 0}
                                        </p>
                                        <p className="text-xs text-gray-500">Credit Hours</p>
                                    </div>
                                </div>
                                <div className="text-center lg:flex lg:items-center lg:gap-3 lg:border-t lg:border-gray-200 lg:pt-3 lg:text-left">
                                    <div className="mx-auto mb-1.5 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 lg:mx-0 lg:mb-0">
                                        <Calendar size={18} className="text-[#b8112e]" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-black text-gray-900">
                                            {totalYears}
                                        </p>
                                        <p className="text-xs text-gray-500">Curriculum Stages</p>
                                    </div>
                                </div>
                                <div className="text-center lg:flex lg:items-center lg:gap-3 lg:border-t lg:border-gray-200 lg:pt-3 lg:text-left">
                                    <div className="mx-auto mb-1.5 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 lg:mx-0 lg:mb-0">
                                        <BookOpen size={18} className="text-[#b8112e]" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-black text-gray-900">
                                            {totalSubjects}
                                        </p>
                                        <p className="text-xs text-gray-500">Subjects Covered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                        {/* Curriculum roadmap */}
                        <div className="lg:col-span-8">
                            <div className="mb-8">
                                <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                                    Program Structure
                                </span>
                                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                    Curriculum <span className="text-[#b8112e]">Roadmap</span>
                                </h2>
                            </div>

                            {program.course_curriculum.length > 0 ? (
                                <div ref={curriculumRef} className="space-y-4">
                                    {program.course_curriculum.map((curriculum, index) => (
                                        <CurriculumAccordionItem
                                            key={curriculum.id}
                                            curriculum={curriculum}
                                            index={index}
                                            isOpen={openIndex === index}
                                            onToggle={() =>
                                                setOpenIndex(
                                                    openIndex === index ? null : index,
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                            ) : (
                                <p className="rounded-2xl bg-white py-16 text-center text-gray-400 shadow-sm">
                                    Curriculum details will be published soon.
                                </p>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-24 overflow-hidden rounded-2xl bg-gradient-to-br from-[#001b44] via-[#003893] to-[#b8112e] p-8">
                                <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
                                <h3 className="relative mb-2 text-lg font-bold text-white">
                                    Interested in {program.name}?
                                </h3>
                                <p className="relative mb-6 text-sm text-white/70">
                                    Reach out to our admissions team for eligibility,
                                    fees, and intake dates.
                                </p>
                                <div className="relative space-y-3">
                                    <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3.5 text-sm text-white/90 backdrop-blur-sm">
                                        <Building2 size={17} className="shrink-0 text-[#e2a63b]" />
                                        {program.university}
                                    </div>
                                    <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3.5 text-sm text-white/90 backdrop-blur-sm">
                                        <GraduationCap size={17} className="shrink-0 text-[#e2a63b]" />
                                        {program.education_level}
                                    </div>
                                </div>
                                <Link
                                    href="/contact"
                                    className="relative mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#b8112e] shadow-lg transition-all duration-300 hover:shadow-xl"
                                >
                                    <Mail size={16} />
                                    Contact Admissions
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BannerPageLayout>
    );
}
