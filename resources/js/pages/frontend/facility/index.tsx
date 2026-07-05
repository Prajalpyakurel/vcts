import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import { InformationPagination } from '@/pages/backend/information/types';
import DOMPurify from 'dompurify';
import truncate from 'truncate-html';

export default function Index({
    facilities,
}: {
    facilities: InformationPagination;
}) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'Students', href: '#', isActive: false },
        { title: 'Facility', href: '/facilities', isActive: true },
    ];

    return (
        <BannerPageLayout
            title="Facility"
            breadcrumbs={breadcrumbs}
            pageTitle="Facility"
        >
            <div className="mx-auto max-w-7xl px-4 py-20">
                {facilities.data.length > 0 ? (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {facilities.data.map((facility) => {
                            const safeHtml = DOMPurify.sanitize(
                                facility.description || '',
                            );

                            const truncatedHtml = truncate(safeHtml, 20, {
                                byWords: true,
                            });

                            return (
                                <div
                                    key={facility.id}
                                    className="group overflow-hidden bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    {/* Image */}
                                    <div className="h-150 overflow-hidden">
                                        <img
                                            src={facility.image ? `/storage/${facility.image}` : ''}
                                            alt={facility.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h3 className="mb-3 text-lg font-semibold text-gray-900">
                                            {facility.title}
                                        </h3>

                                        <div
                                            className="text-sm leading-relaxed text-gray-600"
                                            dangerouslySetInnerHTML={{
                                                __html: truncatedHtml,
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">
                        No Facility Found!
                    </p>
                )}
            </div>
        </BannerPageLayout>
    );
}
