import { eventShow } from '@/actions/App/Http/Controllers/Frontend/IndexController';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import { EventPagination } from '@/pages/backend/event/types';
import { InformationPagination } from '@/pages/backend/information/types';
import { Link, router } from '@inertiajs/react';
import { ArrowRight, Calendar, CalendarDays, Clock, MapPin } from 'lucide-react';

export default function Index({
    events,
    recentEvents,
}: {
    events: EventPagination;
    recentEvents: InformationPagination;
}) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'Event', href: '/events', isActive: true },
    ];

    const gridRef = useScrollReveal<HTMLDivElement>({ y: 28, stagger: 0.12 });
    const sidebarRef = useScrollReveal<HTMLDivElement>({ y: 24, stagger: 0.08 });

    return (
        <BannerPageLayout title="Event" breadcrumbs={breadcrumbs} pageTitle="Event">
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mx-auto mb-14 max-w-2xl text-center">
                        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                            Campus Events
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Stay Connected With{' '}
                            <span className="text-[#b8112e]">Campus Life</span>
                        </h2>
                        <p className="mt-3 text-gray-500">
                            Workshops, ceremonies, and activities happening around
                            Valley College
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                        {/* Events */}
                        <div className="lg:col-span-8">
                            {events.data.length > 0 ? (
                                <div
                                    ref={gridRef}
                                    className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                                >
                                    {events.data.map((item, index) => (
                                        <div
                                            key={index}
                                            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-rose-100"
                                        >
                                            {/* Image */}
                                            <div className="relative h-48 overflow-hidden md:h-56">
                                                {item.image ? (
                                                    <img
                                                        src={`/storage/${item.image}`}
                                                        alt={item.name}
                                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#003893] to-[#b8112e]">
                                                        <CalendarDays
                                                            size={40}
                                                            className="text-white/70"
                                                        />
                                                    </div>
                                                )}
                                                <span className="absolute top-3 left-3 rounded-full bg-[#b8112e] px-3 py-1 text-xs font-semibold text-white">
                                                    Event
                                                </span>
                                            </div>

                                            {/* Content */}
                                            <div className="flex flex-1 flex-col p-5">
                                                <h3 className="mb-3 line-clamp-2 text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#b8112e]">
                                                    {item.name}
                                                </h3>

                                                <div className="mb-4 space-y-2 text-sm text-gray-500">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="h-4 w-4 shrink-0 text-[#b8112e]" />
                                                        <span>{item.event_date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="h-4 w-4 shrink-0 text-[#b8112e]" />
                                                        <span>{item.event_time}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="h-4 w-4 shrink-0 text-[#b8112e]" />
                                                        <span className="line-clamp-1">
                                                            {item.event_venue}
                                                        </span>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() =>
                                                        router.visit(
                                                            eventShow(item.slug).url,
                                                        )
                                                    }
                                                    className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-lg bg-[#b8112e] px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#7d0d22]"
                                                >
                                                    Read More
                                                    <ArrowRight size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="rounded-2xl bg-white py-16 text-center text-gray-400 shadow-sm">
                                    No events found at the moment.
                                </p>
                            )}

                            {/* Pagination */}
                            {(events.prev_page_url || events.next_page_url) && (
                                <div className="mt-8 flex justify-center gap-3">
                                    <button
                                        onClick={() =>
                                            router.visit(events.prev_page_url ?? '')
                                        }
                                        disabled={!events.prev_page_url}
                                        className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:border-[#b8112e] hover:text-[#b8112e] disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() =>
                                            router.visit(events.next_page_url ?? '')
                                        }
                                        disabled={!events.next_page_url}
                                        className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:border-[#b8112e] hover:text-[#b8112e] disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4">
                            <div className="sticky top-24 overflow-hidden rounded-2xl bg-white shadow-sm">
                                <h4 className="border-b border-gray-100 p-5 text-lg font-bold text-gray-900">
                                    Recent Information
                                </h4>

                                <div ref={sidebarRef}>
                                    {recentEvents.data.length > 0 ? (
                                        recentEvents.data.map((notice, index) => (
                                            <div
                                                key={notice.id}
                                                className={`group flex gap-4 p-5 transition-colors hover:bg-rose-50 ${
                                                    index < recentEvents.data.length - 1
                                                        ? 'border-b border-gray-100'
                                                        : ''
                                                }`}
                                            >
                                                <img
                                                    src={
                                                        notice.image
                                                            ? `/storage/${notice.image}`
                                                            : '/assets/images/logo/logo_1.png'
                                                    }
                                                    alt={notice.title}
                                                    className="h-14 w-14 shrink-0 rounded-lg object-cover"
                                                />

                                                <div className="min-w-0 flex-1">
                                                    <Link
                                                        href={`/${notice.type}/${notice.slug}`}
                                                        className="line-clamp-2 block text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#b8112e]"
                                                    >
                                                        {notice.title}
                                                    </Link>

                                                    <span className="mt-1.5 inline-block rounded-lg bg-rose-50 px-2 py-0.5 text-xs font-semibold text-[#b8112e] capitalize">
                                                        {notice.type}
                                                    </span>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="p-5 text-sm text-gray-400">
                                            No recent information found.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </BannerPageLayout>
    );
}
