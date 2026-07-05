import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import { InformationPagination } from '@/pages/backend/information/types';
import { Link } from '@inertiajs/react';
import DOMPurify from 'dompurify';
import { Calendar } from 'lucide-react';
import truncate from 'truncate-html';

export default function Index({
    notices,
    recentNotices,
}: {
    notices: InformationPagination;
    recentNotices: InformationPagination;
}) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'Notice', href: '/notices', isActive: true },
    ];

    return (
        <BannerPageLayout
            title="Notice"
            breadcrumbs={breadcrumbs}
            pageTitle="Notice"
        >
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
                            {notices.data.length > 0 ? (
                                notices.data.map((notice) => {
                                    const safeHtml = DOMPurify.sanitize(
                                        notice.description || '',
                                    );
                                    const truncatedHtml = truncate(
                                        safeHtml,
                                        15,
                                        {
                                            byWords: true,
                                        },
                                    );

                                    return (
                                        <div
                                            key={notice.id}
                                            className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            {/* Image */}
                                            {notice.image && (
                                                <div className="h-44 w-full overflow-hidden rounded-t-xl">
                                                    <img
                                                        src={`/storage/${notice.image}`}
                                                        alt={notice.title}
                                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                            )}

                                            {/* Content */}
                                            <div className="flex flex-col p-4 md:p-5">
                                                <h3 className="text-blackColor mb-2 text-lg font-bold">
                                                    {notice.title}
                                                </h3>

                                                <div className="text-contentColor mb-2 flex items-center gap-2 text-sm">
                                                    <Calendar className="text-primaryColor h-4 w-4" />
                                                    <span>
                                                        {notice.formatted_date}
                                                    </span>
                                                </div>

                                                <p
                                                    className="text-contentColor mb-3 text-sm"
                                                    dangerouslySetInnerHTML={{
                                                        __html: truncatedHtml,
                                                    }}
                                                />

                                                <Link
                                                    href={`/notice/${notice.slug}`}
                                                    className="main-button main-button--primary-alternate mt-6 inline-flex items-center gap-2 self-start"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p>No Notices Found!</p>
                            )}
                        </div>

                        <aside className="lg:col-span-4">
                            <div className="shadow-blog sticky top-24 rounded-xl bg-white p-5">
                                <h4 className="text-blackColor mb-5 text-lg font-bold">
                                    Recent Information
                                </h4>

                                <ul className="space-y-4">
                                    {recentNotices.data.length > 0 ? (
                                        recentNotices.data.map((notice) => (
                                            <li
                                                key={notice.id}
                                                className="flex gap-4"
                                            >
                                                {notice.image && (
                                                    <img
                                                        src={`/storage/${notice.image}`}
                                                        alt={notice.title}
                                                        className="h-16 w-16 rounded-lg object-cover"
                                                    />
                                                )}

                                                <div className="flex-1">
                                                    <Link
                                                        href={`/${notice.type}/${notice.slug}`}
                                                        className="text-blackColor hover:text-primaryColor block text-sm font-medium transition"
                                                    >
                                                        {notice.title}
                                                    </Link>

                                                    <span className="bg-whitegrey3 text-primaryColor mt-1 inline-block rounded-lg px-2 py-0.5 text-xs font-semibold capitalize">
                                                        {notice.type}
                                                    </span>
                                                </div>
                                            </li>
                                        ))
                                    ) : (
                                        <p className="text-contentColor text-sm">
                                            No recent notices found
                                        </p>
                                    )}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </BannerPageLayout>
    );
}
