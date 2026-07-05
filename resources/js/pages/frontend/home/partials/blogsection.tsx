import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Information } from '@/pages/backend/information/types';
import { Link } from '@inertiajs/react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function BlogSection({ blogs }: { blogs: Information[] }) {
    const gridRef = useScrollReveal<HTMLDivElement>({ y: 28, stagger: 0.12 });

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                            Insights & Stories
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Latest News & <span className="text-[#b8112e]">Blogs</span>
                        </h2>
                    </div>
                    <Link
                        href="/blogs"
                        className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#b8112e] hover:gap-3 transition-all duration-200"
                    >
                        All Blogs <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Blog Grid */}
                <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-rose-100"
                            >
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={`/storage/${blog.image}`}
                                        alt={blog.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Blog label */}
                                    <span className="absolute top-3 left-3 rounded-full bg-[#b8112e] px-3 py-1 text-xs font-semibold text-white">
                                        Blog
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-5">
                                    <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
                                        <Calendar className="h-3.5 w-3.5 text-[#b8112e]" />
                                        <span>{blog.formatted_date}</span>
                                    </div>

                                    <h3 className="mb-4 line-clamp-2 text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#b8112e]">
                                        <Link href={`blog/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </h3>

                                    <Link
                                        href={`blog/${blog.slug}`}
                                        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#b8112e] transition-all duration-200 hover:gap-3"
                                    >
                                        Read More <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full py-12 text-center text-gray-400">
                            No blogs available at the moment.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
