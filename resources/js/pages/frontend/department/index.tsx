import { FacultyCard } from '@/components/faculty-card';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import { Department } from '@/pages/backend/department/types';

function DepartmentSection({ department }: { department: Department }) {
    const gridRef = useScrollReveal<HTMLDivElement>({ y: 32, stagger: 0.1 });

    return (
        <div>
            <div className="mb-10 flex items-center gap-4">
                <span className="h-px flex-1 bg-gray-200" />
                <h3 className="shrink-0 text-2xl font-bold text-gray-900">
                    {department.name}
                </h3>
                <span className="h-px flex-1 bg-gray-200" />
            </div>

            {department.faculties.length > 0 ? (
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    {department.faculties.map((faculty, idx) => (
                        <FacultyCard key={idx} faculty={faculty} />
                    ))}
                </div>
            ) : (
                <p className="py-8 text-center text-gray-400">
                    No faculty assigned to this department yet.
                </p>
            )}
        </div>
    );
}

export default function Index({ departments }: { departments: Department[] }) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'About', href: '', isActive: false },
        { title: 'Department', href: '/departments', isActive: true },
    ];

    return (
        <BannerPageLayout
            title="Department"
            breadcrumbs={breadcrumbs}
            pageTitle="Department"
        >
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                            Our Departments
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Explore Our Academic{' '}
                            <span className="text-[#b8112e]">Departments</span>
                        </h2>
                        <p className="mt-3 text-gray-500">
                            Meet the faculty leading each department at Valley
                            College
                        </p>
                    </div>

                    {departments.length > 0 ? (
                        <div className="space-y-20">
                            {departments.map((department, index) => (
                                <DepartmentSection
                                    key={index}
                                    department={department}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="py-12 text-center text-gray-400">
                            No departments available at the moment.
                        </p>
                    )}
                </div>
            </section>
        </BannerPageLayout>
    );
}
