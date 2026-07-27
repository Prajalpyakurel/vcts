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

                    {/* Members list */}
                    {boardMemberMessage.length > 0 ? (
                        <div ref={gridRef} className="flex flex-col gap-8">
                            {boardMemberMessage.map((member, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl md:flex-row"
                                >
                                    {/* Image - left */}
                                    <div className="relative h-64 shrink-0 md:h-auto md:w-80">
                                        {member.image ? (
                                            <img
                                                src={`/storage/${member.image}`}
                                                alt={member.name}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#003893] to-[#b8112e] text-5xl font-bold text-white">
                                                {getInitials(member.name)}
                                            </div>
                                        )}
                                        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#e2a63b] to-[#b8112e] md:hidden" />
                                    </div>

                                    {/* Message - right */}
                                    <div className="flex flex-1 flex-col justify-center p-8">
                                        <FaQuoteLeft className="mb-3 text-3xl text-[#b8112e]/15" />
                                        <p className="text-lg leading-relaxed text-gray-600 italic">
                                            {member.message}
                                        </p>
                                        <div className="mt-6 border-t border-gray-100 pt-4">
                                            <h3 className="text-lg font-bold text-gray-900">
                                                {member.name}
                                            </h3>
                                            <span className="mt-2 inline-flex items-center rounded-lg bg-rose-50 px-2.5 py-1 text-xs font-semibold text-[#b8112e]">
                                                {member.designation}
                                            </span>
                                        </div>
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
