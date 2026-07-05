import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import { Download as DownloadType } from '@/pages/backend/download/types';
import { Download as DownloadIcon, FileText } from 'lucide-react';

export default function Index({ downloads }: { downloads: DownloadType[] }) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'Students', href: '', isActive: false },
        { title: 'Download', href: '/downloads', isActive: true },
    ];

    const gridRef = useScrollReveal<HTMLDivElement>({ y: 28, stagger: 0.1 });

    return (
        <BannerPageLayout
            title="Download"
            breadcrumbs={breadcrumbs}
            pageTitle="Download"
        >
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mx-auto mb-14 max-w-2xl text-center">
                        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                            Resources
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Forms &amp; <span className="text-[#b8112e]">Downloads</span>
                        </h2>
                        <p className="mt-3 text-gray-500">
                            Academic calendars, application forms, and student
                            resources available for download
                        </p>
                    </div>

                    {/* Downloads grid */}
                    {downloads.length > 0 ? (
                        <div
                            ref={gridRef}
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {downloads.map((download, index) => (
                                <div
                                    key={index}
                                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#e2a63b] to-[#b8112e]" />

                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#003893] to-[#b8112e] transition-transform duration-300 group-hover:scale-110">
                                        <FileText size={26} className="text-white" />
                                    </div>

                                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                                        {download.name}
                                    </h3>
                                    <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-500">
                                        {download.description}
                                    </p>

                                    <a
                                        href={`/downloads/${Number(download.id)}`}
                                        className="mt-auto inline-flex w-fit items-center gap-2 rounded-xl bg-[#b8112e] px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#7d0d22]"
                                    >
                                        <DownloadIcon size={16} />
                                        Download
                                    </a>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="rounded-2xl bg-white py-16 text-center text-gray-400 shadow-sm">
                            No downloads available at the moment.
                        </p>
                    )}
                </div>
            </section>
        </BannerPageLayout>
    );
}
