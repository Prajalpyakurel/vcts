import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import { Event } from '@/pages/backend/event/types';
import { InformationPagination } from '@/pages/backend/information/types';
import { Link } from '@inertiajs/react';
import { Calendar, CalendarDays, Clock, MapPin } from 'lucide-react';

export default function Show({
    event,
    recentEvents,
}: {
    event: Event;
    recentEvents: InformationPagination;
}) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'Event', href: '/events', isActive: false },
        { title: event.name, href: '#', isActive: true },
    ];

    const contentRef = useScrollReveal<HTMLDivElement>({ y: 24, stagger: 0.1 });
    const sidebarRef = useScrollReveal<HTMLDivElement>({ y: 24, stagger: 0.08 });

    return (
        <BannerPageLayout
            title="Event Detail"
            breadcrumbs={breadcrumbs}
            pageTitle="Event"
        >
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                        {/* Main content */}
                        <div ref={contentRef} className="lg:col-span-8">
                            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                                {/* Image */}
                                <div className="h-64 md:h-80">
                                    {event.image ? (
                                        <img
                                            src={`/storage/${event.image}`}
                                            alt={event.name}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#003893] to-[#b8112e]">
                                            <CalendarDays
                                                size={56}
                                                className="text-white/70"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8">
                                    <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                                        Event
                                    </span>
                                    <h1 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                                        {event.name}
                                    </h1>

                                    {/* Meta Info */}
                                    <div className="mb-8 grid gap-4 rounded-2xl bg-gray-50 p-5 sm:grid-cols-2">
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-50">
                                                <Calendar className="h-5 w-5 text-[#b8112e]" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">
                                                    Event Date
                                                </p>
                                                <p className="font-medium text-gray-900">
                                                    {event.event_date}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-50">
                                                <Clock className="h-5 w-5 text-[#b8112e]" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">
                                                    Event Time
                                                </p>
                                                <p className="font-medium text-gray-900">
                                                    {event.event_time}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 sm:col-span-2">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-50">
                                                <MapPin className="h-5 w-5 text-[#b8112e]" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">
                                                    Venue
                                                </p>
                                                <p className="font-medium text-gray-900">
                                                    {event.event_venue}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div
                                        className="prose max-w-none text-gray-600"
                                        dangerouslySetInnerHTML={{
                                            __html: event.description,
                                        }}
                                    />
                                </div>
                            </div>
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
