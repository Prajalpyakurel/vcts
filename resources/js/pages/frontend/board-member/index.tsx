import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import { BoardMemberMessage } from '@/pages/backend/boardMemberMessage/types';
import { FaQuoteLeft } from 'react-icons/fa';

function getInitials(name: string) {
    return name
        .trim()
        .split(/\s+/)
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();
}

export default function Index({
    boardMemberMessage,
}: {
    boardMemberMessage: BoardMemberMessage[];
}) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'About', href: '', isActive: false },
        { title: 'Board Members', href: '/board-members', isActive: true },
    ];

    const gridRef = useScrollReveal<HTMLDivElement>({ y: 32, stagger: 0.12 });

    return (
        <BannerPageLayout
            title="Board Members"
            breadcrumbs={breadcrumbs}
            pageTitle="Board Members"
        >
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mx-auto mb-14 max-w-2xl text-center">
                        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                            Our Leadership
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Meet the People Guiding{' '}
                            <span className="text-[#b8112e]">Valley College</span>
                        </h2>
                        <p className="mt-3 text-gray-500">
                            Messages from the principal, academic leadership, and
                            board members shaping our institution's vision
                        </p>
                    </div>

                    {/* Members grid */}
                    {boardMemberMessage.length > 0 ? (
                        <div
                            ref={gridRef}
                            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {boardMemberMessage.map((member, index) => (
                                <div
                                    key={index}
                                    className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    {/* Top gradient bar */}
                                    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#e2a63b] to-[#b8112e]" />

                                    {/* Avatar */}
                                    {member.image ? (
                                        <img
                                            src={`/storage/${member.image}`}
                                            alt={member.name}
                                            className="h-32 w-32 shrink-0 rounded-full object-cover ring-4 ring-rose-50 transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#003893] to-[#b8112e] text-3xl font-bold text-white ring-4 ring-rose-50 transition-transform duration-300 group-hover:scale-105">
                                            {getInitials(member.name)}
                                        </div>
                                    )}

                                    {/* Identity */}
                                    <h3 className="mt-5 text-lg font-bold text-gray-900">
                                        {member.name}
                                    </h3>
                                    <span className="mt-2 inline-flex items-center rounded-lg bg-rose-50 px-2.5 py-1 text-xs font-semibold text-[#b8112e]">
                                        {member.designation}
                                    </span>

                                    {/* Message */}
                                    <div className="mt-5">
                                        <FaQuoteLeft className="mx-auto mb-3 text-2xl text-[#b8112e]/15" />
                                        <p className="leading-relaxed text-gray-600">
                                            {member.message}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="py-12 text-center text-gray-400">
                            No board member messages available at the moment.
                        </p>
                    )}
                </div>
            </section>
        </BannerPageLayout>
    );
}
