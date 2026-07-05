import {
    newsShow,
    noticeShow,
} from '@/actions/App/Http/Controllers/Frontend/IndexController';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Information } from '@/pages/backend/information/types';
import { router } from '@inertiajs/react';
import DOMPurify from 'dompurify';
import { Calendar } from 'lucide-react';
import truncate from 'truncate-html';

export default function NewsNoticeSection({
    news,
    notices,
}: {
    news: Information[];
    notices: Information[];
}) {
    const newsGridRef = useScrollReveal<HTMLDivElement>({ y: 24, stagger: 0.12 });
    const noticeListRef = useScrollReveal<HTMLDivElement>({ y: 16, stagger: 0.08 });

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-12 text-center">
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                        News & Notices
                    </span>
                    <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                        Announcements, Events & <span className="text-[#b8112e]">Updates</span>
                    </h2>
                    <p className="mt-3 text-gray-500">Stay informed with the latest news and important notices from Valley College</p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* News */}
                    <div className="lg:col-span-8">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-gray-900">Latest News</h3>
                            <a href="/news" className="text-sm font-semibold text-[#b8112e] hover:underline">View All →</a>
                        </div>

                        <div ref={newsGridRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            {news.length > 0 ? (
                                news.map((item, index) => {
                                    const safeHtml = DOMPurify.sanitize(item.description || '');
                                    const truncatedHtml = truncate(safeHtml, 20, { byWords: true });

                                    return (
                                        <div
                                            key={index}
                                            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <div className="relative h-44 overflow-hidden">
                                                <img
                                                    src={`storage/${item.image}`}
                                                    alt={item.title}
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                            </div>

                                            <div className="flex flex-1 flex-col p-5">
                                                <div className="mb-2.5 flex items-center gap-2 text-xs text-gray-400">
                                                    <Calendar className="h-3.5 w-3.5 text-[#b8112e]" />
                                                    <span>{item.formatted_date}</span>
                                                </div>

                                                <h4 className="mb-2 text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#b8112e]">
                                                    {item.title}
                                                </h4>

                                                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-2"
                                                    dangerouslySetInnerHTML={{ __html: truncatedHtml }}
                                                />

                                                <button
                                                    onClick={() => router.visit(newsShow(item.slug).url)}
                                                    className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-[#b8112e] px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#7d0d22]"
                                                >
                                                    Read More
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="col-span-2 py-8 text-center text-gray-400">No news available at the moment.</p>
                            )}
                        </div>
                    </div>

                    {/* Notices */}
                    <div className="lg:col-span-4">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-gray-900">Important Notices</h3>
                            <a href="/notices" className="text-sm font-semibold text-[#b8112e] hover:underline">View All →</a>
                        </div>

                        <div ref={noticeListRef} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                            {notices.length > 0 ? (
                                notices.map((notice, index) => {
                                    const safeHtml = DOMPurify.sanitize(notice.description || '');
                                    const truncatedHtml = truncate(safeHtml, 15, { byWords: true });

                                    return (
                                        <div
                                            key={index}
                                            className={`group p-5 transition-colors hover:bg-rose-50 ${index < notices.length - 1 ? 'border-b border-gray-100' : ''}`}
                                        >
                                            <div className="mb-1.5 flex items-start gap-3">
                                                <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-[#b8112e]" />
                                                <h4 className="text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-[#b8112e]">
                                                    {notice.title}
                                                </h4>
                                            </div>

                                            <p className="mb-3 ml-5 text-xs leading-relaxed text-gray-500 line-clamp-2"
                                                dangerouslySetInnerHTML={{ __html: truncatedHtml }}
                                            />

                                            <button
                                                onClick={() => router.visit(noticeShow(notice.slug).url)}
                                                className="ml-5 text-xs font-semibold text-[#b8112e] hover:underline"
                                            >
                                                View Details →
                                            </button>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="p-6 text-sm text-gray-400">No notices found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
