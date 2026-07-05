import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import { Course } from '@/pages/backend/course/types';
import { Link } from '@inertiajs/react';
import { ArrowRight, Clock, GraduationCap } from 'lucide-react';

type CoursesIndexProps = {
    programs: Course[];
};

export default function CoursesIndex({ programs }: CoursesIndexProps) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'Academic Programs', href: '#', isActive: true },
    ];

    const gridRef = useScrollReveal<HTMLDivElement>({ y: 28, stagger: 0.1 });

    return (
        <BannerPageLayout
            title="Academic Programs"
            pageTitle="Academic Programs"
            breadcrumbs={breadcrumbs}
        >
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mx-auto mb-14 max-w-2xl text-center">
                        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                            Academic Programs
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Find the Right{' '}
                            <span className="text-[#b8112e]">Program for You</span>
                        </h2>
                        <p className="mt-3 text-gray-500">
                            Nationally accredited diploma and bachelor programs
                            designed for real career outcomes
                        </p>
                    </div>

                    {/* Programs Grid */}
                    {programs.length > 0 ? (
                        <div
                            ref={gridRef}
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {programs.map((program) => (
                                <Link
                                    key={program.id}
                                    href={`/programs/${program.slug}`}
                                    className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-rose-100"
                                >
                                    {/* Image */}
                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={
                                                program.image
                                                    ? `/storage/${program.image}`
                                                    : '/assets/images/blog/blog_8.png'
                                            }
                                            alt={program.name}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <span className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur-sm">
                                            {program.education_level}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col p-5">
                                        <span className="mb-2 inline-flex w-fit items-center rounded-lg bg-rose-50 px-2.5 py-1 text-xs font-semibold text-[#b8112e]">
                                            {program.university}
                                        </span>

                                        <h3 className="mb-2 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#b8112e]">
                                            {program.name}
                                        </h3>

                                        <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-500">
                                            {program.description}
                                        </p>

                                        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                                                <Clock size={15} className="text-[#b8112e]" />
                                                <span className="font-medium">
                                                    {program.total_credit_hours} Credits
                                                </span>
                                            </div>
                                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#b8112e] opacity-0 transition-all duration-200 group-hover:opacity-100">
                                                Learn More <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl bg-white py-20 text-center shadow-sm">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-50">
                                <GraduationCap size={28} className="text-[#b8112e]" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-gray-900">
                                Programs Coming Soon
                            </h3>
                            <p className="text-gray-500">
                                Our academic programs are currently being prepared.
                                Please check back soon for updates.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </BannerPageLayout>
    );
}
