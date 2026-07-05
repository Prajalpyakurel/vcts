import { FacultyCard } from '@/components/faculty-card';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import { Faculty } from '@/pages/backend/faculty/types';

export default function Index({ faculties }: { faculties: Faculty[] }) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'About', href: '', isActive: false },
        { title: 'Our Teachers', href: '/teachers', isActive: true },
    ];

    const gridRef = useScrollReveal<HTMLDivElement>({ y: 32, stagger: 0.1 });

    return (
        <BannerPageLayout
            title="Our Teachers"
            breadcrumbs={breadcrumbs}
            pageTitle="Our Teachers"
        >
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mx-auto mb-14 max-w-2xl text-center">
                        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                            Our Faculty
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Meet Our Expert{' '}
                            <span className="text-[#b8112e]">Teachers</span>
                        </h2>
                        <p className="mt-3 text-gray-500">
                            Experienced educators dedicated to guiding students
                            toward academic and professional success
                        </p>
                    </div>

                    {/* Faculty grid */}
                    {faculties.length > 0 ? (
                        <div
                            ref={gridRef}
                            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        >
                            {faculties.map((faculty, idx) => (
                                <FacultyCard key={idx} faculty={faculty} />
                            ))}
                        </div>
                    ) : (
                        <p className="py-12 text-center text-gray-400">
                            No teachers available at the moment.
                        </p>
                    )}
                </div>
            </section>
        </BannerPageLayout>
    );
}
