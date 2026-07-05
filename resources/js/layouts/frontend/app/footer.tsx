import {
    aboutUS,
    blogs,
    contacts,
    home,
    news,
    notices,
    programShow,
} from '@/routes';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { AcademicHeader } from './header';

const navigationMenus = [
    {
        name: 'Home',
        link: home().url,
    },
    {
        name: 'About Us',
        link: aboutUS().url,
    },
    {
        name: 'Notice',
        link: notices().url,
    },
    {
        name: 'Blogs',
        link: blogs().url,
    },
    {
        name: 'News',
        link: news().url,
    },
    {
        name: 'Gallery',
        link: news().url,
    },
    {
        name: 'Contact Us',
        link: contacts().url,
    },
];

export default function Footer() {
    const { academic_header, system, informations } =
        usePage<SharedData>().props;
    const gridRef = useScrollReveal<HTMLDivElement>({ y: 24, stagger: 0.1 });

    return (
        <>
            {/* Main Footer */}
            <footer className="relative overflow-hidden bg-[#00102b] pt-16 pb-10">
                {/* Decorative gradient blobs */}
                <div className="pointer-events-none absolute top-0 left-0 h-64 w-64 rounded-full bg-[#b8112e]/10 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#003893]/20 blur-3xl" />

                <div className="container relative mx-auto px-4">
                    {/* Top divider */}
                    <div className="mb-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div ref={gridRef} className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                        {/* About */}
                        <div>
                            <img
                                src={system?.logo ? `/storage/${system?.logo}` : 'assets/images/logo/logo_2.png'}
                                alt="College Logo"
                                className="mb-5 h-14 w-auto"
                            />
                            <p className="mb-4 text-sm leading-relaxed text-white/50">
                                Valley College of Technical Sciences — delivering internationally recognized qualifications and shaping tomorrow's technical leaders since 2011.
                            </p>

                            {/* Social */}
                            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/40">Follow Us</p>
                            <div className="flex gap-2">
                                {[
                                    { href: system?.facebook_link, Icon: FaFacebook, label: 'Facebook' },
                                    { href: system?.twitter_link, Icon: FaXTwitter, label: 'Twitter' },
                                    { href: system?.instagram_link, Icon: FaInstagram, label: 'Instagram' },
                                    { href: system?.youtube_link, Icon: FaYoutube, label: 'YouTube' },
                                ].map(({ href, Icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 text-white/60 transition-all duration-200 hover:bg-[#b8112e] hover:text-white"
                                    >
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white/40">Quick Links</h4>
                            <ul className="space-y-2.5">
                                {navigationMenus.map((menu, index) => (
                                    <li key={index}>
                                        <a
                                            href={menu.link}
                                            className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#e2a63b]"
                                        >
                                            <span className="h-1 w-1 rounded-full bg-[#b8112e] opacity-0 transition-opacity group-hover:opacity-100" />
                                            {menu.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Programs */}
                        <div>
                            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white/40">Programs</h4>
                            <ul className="space-y-2.5">
                                {academic_header.map((header: AcademicHeader) => (
                                    <li key={header.slug}>
                                        <a
                                            href={programShow(header.slug).url}
                                            className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#e2a63b]"
                                        >
                                            <span className="h-1 w-1 rounded-full bg-[#b8112e] opacity-0 transition-opacity group-hover:opacity-100" />
                                            {header.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Posts */}
                        <div>
                            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white/40">Recent Posts</h4>
                            <div className="space-y-4">
                                {informations.map((information, index) => (
                                    <div key={index} className="group flex gap-3">
                                        <div className="shrink-0 overflow-hidden rounded-lg">
                                            <img
                                                src={information.image ? `/storage/${information.image}` : '/assets/images/default-post.jpg'}
                                                alt={information.title}
                                                className="h-14 w-14 object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div>
                                            <p className="mb-1 text-xs text-white/30">{information.formatted_date}</p>
                                            <Link
                                                href={`/${information.type}/${information.slug}`}
                                                className="line-clamp-2 text-sm font-medium leading-snug text-white/70 transition-colors group-hover:text-[#e2a63b]"
                                            >
                                                {information.title}
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom divider */}
                    <div className="mt-12 mb-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Contact info row */}
                    <div className="mb-6 flex flex-wrap gap-6 text-sm text-white/40">
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#b8112e]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            {system?.phone}
                        </span>
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#b8112e]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            {system?.email}
                        </span>
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#b8112e]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            {system?.address}
                        </span>
                    </div>
                </div>
            </footer>

            {/* Copyright */}
            <div className="bg-[#000c1f] py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
                        <p className="text-sm text-white/30">
                            Copyright © <span className="text-[#e2a63b]">2025</span> Valley College of Technical Sciences. All Rights Reserved.
                        </p>
                        <div className="flex items-center gap-5 text-sm text-white/30">
                            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
                            <span className="h-3 w-px bg-white/20" />
                            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
