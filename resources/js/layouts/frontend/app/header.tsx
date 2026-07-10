import { boardMembers } from '@/actions/App/Http/Controllers/Frontend/IndexController';
import {
    aboutUS,
    activities,
    blogs,
    contacts,
    downloads,
    events,
    facilities,
    galleries,
    home,
    news,
    notices,
    programShow,
    teachers,
} from '@/routes';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import gsap from 'gsap';
import { ChevronDown, Menu, PlusIcon, Phone, Mail, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaXTwitter,
    FaWhatsapp
} from 'react-icons/fa6';

export type AcademicHeader = {
    name: string;
    slug: string;
};

export default function Header() {
    const { academic_header, system } = usePage<SharedData>().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const barRef = useRef<HTMLDivElement>(null);
    const drawerPanelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!barRef.current) return;
        gsap.from(barRef.current.children, {
            opacity: 0,
            y: -16,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
        });
    }, []);

    useEffect(() => {
        if (!drawerPanelRef.current) return;
        if (mobileMenuOpen) {
            gsap.fromTo(
                drawerPanelRef.current.querySelectorAll('li, a'),
                { opacity: 0, x: 16 },
                { opacity: 1, x: 0, duration: 0.4, stagger: 0.03, ease: 'power2.out', delay: 0.15 },
            );
        }
    }, [mobileMenuOpen]);

    const navigationMenus = [
        { name: 'Messages', link: boardMembers().url },
        { name: 'Faculty', link: teachers().url },
        { name: 'About Us', link: aboutUS().url },
    ];

    const updateMenus = [
        { name: 'Events', link: events().url },
        { name: 'Activities', link: activities().url },
        { name: 'Notices', link: notices().url },
        { name: 'Blogs', link: blogs().url },
        { name: 'News', link: news().url },
    ];

    const rightNavigation = [
        { name: 'Gallery', link: galleries().url },
        { name: 'Contact Us', link: contacts().url },
    ];

    const studentNavigation = [
        { name: 'Facilities', link: facilities().url },
        { name: 'Download', link: downloads().url },
    ];

    return (
        <header className="relative w-full">
            {/* Top Utility Bar */}
            <div className="hidden bg-slate-900 border-b border-slate-800/80 text-slate-300 lg:block py-2.5">
                <div className="container mx-auto flex items-center justify-between px-4">
                    <div className="flex items-center gap-6 text-xs font-medium">
                        {system?.phone && (
                            <a href={`tel:${system.phone}`} className="flex items-center gap-2 hover:text-[#b8112e] transition-colors duration-200">
                                <Phone size={13} className="text-[#b8112e]" />
                                Call Us: {system.phone}
                            </a>
                        )}
                        {system?.email && (
                            <a href={`mailto:${system.email}`} className="flex items-center gap-2 hover:text-[#b8112e] transition-colors duration-200">
                                <Mail size={13} className="text-[#b8112e]" />
                                Mail Us: {system.email}
                            </a>
                        )}
                        {system?.address && (
                            <span className="flex items-center gap-2">
                                <MapPin size={13} className="text-[#b8112e]" />
                                {system.address}
                            </span>
                        )}
                    </div>
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {system?.facebook_link && (
                            <a href={system.facebook_link} target="_blank" rel="noopener noreferrer" className="hover:text-[#b8112e] transition-colors duration-200">
                                <FaFacebookF size={12} />
                            </a>
                        )}
                        {system?.instagram_link && (
                            <a href={system.instagram_link} target="_blank" rel="noopener noreferrer" className="hover:text-[#b8112e] transition-colors duration-200">
                                <FaInstagram size={12} />
                            </a>
                        )}
                        {system?.twitter_link && (
                            <a href={system.twitter_link} target="_blank" rel="noopener noreferrer" className="hover:text-[#b8112e] transition-colors duration-200">
                                <FaXTwitter size={12} />
                            </a>
                        )}
                        {system?.linkedin_link && (
                            <a href={system.linkedin_link} target="_blank" rel="noopener noreferrer" className="hover:text-[#b8112e] transition-colors duration-200">
                                <FaLinkedinIn size={12} />
                            </a>
                        )}
                        {system?.youtube_link && (
                            <a href={system.youtube_link} target="_blank" rel="noopener noreferrer" className="hover:text-[#b8112e] transition-colors duration-200">
                                <FaYoutube size={12} />
                            </a>
                        )}
                        {system?.whatsapp_link && (
                            <a href={system.whatsapp_link} target="_blank" rel="noopener noreferrer" className="hover:text-[#b8112e] transition-colors duration-200">
                                <FaWhatsapp size={12} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Sticky Header */}
            <div className="sticky top-0 z-50 w-full border-b border-slate-100/80 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
                <div className="container mx-auto px-4">
                    <div ref={barRef} className="flex h-20 items-center justify-between gap-4">
                        {/* Logo */}
                        <div className="flex items-center flex-shrink-0">
                            <a href="/" className="group block transition-transform duration-300 hover:scale-[1.02]">
                                <img
                                    src={
                                        system?.logo
                                            ? `/storage/${system.logo}`
                                            : '/assets/images/logo/logo_1.png'
                                    }
                                    alt="Logo"
                                    className="h-12 w-auto md:h-14 lg:h-16"
                                />
                            </a>
                        </div>

                        {/* Desktop Horizontal Navigation */}
                        <nav className="hidden lg:block">
                            <ul className="flex items-center gap-1">
                                {/* Home Link */}
                                <li>
                                    <Link
                                        href={home().url}
                                        className="relative text-sm font-semibold tracking-wide text-slate-700 hover:text-[#b8112e] px-4 py-2.5 rounded-xl transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-0 after:bg-[#b8112e] after:rounded-full after:transition-all after:duration-300 hover:after:w-3/5"
                                    >
                                        Home
                                    </Link>
                                </li>

                                {/* About Dropdown */}
                                <li className="group relative">
                                    <span className="relative flex cursor-pointer items-center gap-1.5 text-sm font-semibold tracking-wide text-slate-700 hover:text-[#b8112e] px-4 py-2.5 rounded-xl transition-all duration-300">
                                        About
                                        <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                                    </span>
                                    <div className="absolute top-full left-1/2 z-50 w-56 -translate-x-1/2 pt-2 opacity-0 scale-95 invisible pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:visible group-hover:pointer-events-auto origin-top transition-all duration-300">
                                        <ul className="space-y-0.5 rounded-2xl border border-slate-100 bg-white/95 backdrop-blur-xl p-2 shadow-xl">
                                            {navigationMenus.map((item, i) => (
                                                <li key={i}>
                                                    <Link
                                                        href={item.link}
                                                        className="flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-[#b8112e] hover:bg-slate-50 transition-all duration-200"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>

                                {/* Academic Programs Dropdown */}
                                <li className="group relative">
                                    <span className="relative flex cursor-pointer items-center gap-1.5 text-sm font-semibold tracking-wide text-slate-700 hover:text-[#b8112e] px-4 py-2.5 rounded-xl transition-all duration-300">
                                        Programs
                                        <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                                    </span>
                                    <div className="absolute top-full left-1/2 z-50 w-64 -translate-x-1/2 pt-2 opacity-0 scale-95 invisible pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:visible group-hover:pointer-events-auto origin-top transition-all duration-300">
                                        <ul className="space-y-0.5 rounded-2xl border border-slate-100 bg-white/95 backdrop-blur-xl p-2 shadow-xl">
                                            {academic_header && academic_header.length > 0 ? (
                                                academic_header.map((i) => (
                                                    <li key={i.slug}>
                                                        <Link
                                                            href={programShow(i.slug).url}
                                                            className="flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-[#b8112e] hover:bg-slate-50 transition-all duration-200"
                                                        >
                                                            {i.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            ) : (
                                                <li>
                                                    <span className="block px-4 py-2.5 text-sm text-slate-400">No programs active</span>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </li>

                                {/* Students Dropdown */}
                                <li className="group relative">
                                    <span className="relative flex cursor-pointer items-center gap-1.5 text-sm font-semibold tracking-wide text-slate-700 hover:text-[#b8112e] px-4 py-2.5 rounded-xl transition-all duration-300">
                                        Students
                                        <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                                    </span>
                                    <div className="absolute top-full left-1/2 z-50 w-56 -translate-x-1/2 pt-2 opacity-0 scale-95 invisible pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:visible group-hover:pointer-events-auto origin-top transition-all duration-300">
                                        <ul className="space-y-0.5 rounded-2xl border border-slate-100 bg-white/95 backdrop-blur-xl p-2 shadow-xl">
                                            {studentNavigation.map((item, i) => (
                                                <li key={i}>
                                                    <Link
                                                        href={item.link}
                                                        className="flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-[#b8112e] hover:bg-slate-50 transition-all duration-200"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>

                                {/* Updates Dropdown */}
                                <li className="group relative">
                                    <span className="relative flex cursor-pointer items-center gap-1.5 text-sm font-semibold tracking-wide text-slate-700 hover:text-[#b8112e] px-4 py-2.5 rounded-xl transition-all duration-300">
                                        Updates
                                        <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                                    </span>
                                    <div className="absolute top-full left-1/2 z-50 w-56 -translate-x-1/2 pt-2 opacity-0 scale-95 invisible pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:visible group-hover:pointer-events-auto origin-top transition-all duration-300">
                                        <ul className="space-y-0.5 rounded-2xl border border-slate-100 bg-white/95 backdrop-blur-xl p-2 shadow-xl">
                                            {updateMenus.map((item, i) => (
                                                <li key={i}>
                                                    <Link
                                                        href={item.link}
                                                        className="flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-[#b8112e] hover:bg-slate-50 transition-all duration-200"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>

                                {/* Right Navigation Links */}
                                {rightNavigation.map((item, i) => (
                                    <li key={i}>
                                        <Link
                                            href={item.link}
                                            className="relative text-sm font-semibold tracking-wide text-slate-700 hover:text-[#b8112e] px-4 py-2.5 rounded-xl transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-0 after:bg-[#b8112e] after:rounded-full after:transition-all after:duration-300 hover:after:w-3/5"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* CTA / Portal Access Button */}
                        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
                            <Link
                                href="/login"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#b8112e] to-[#7d0d22] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#b8112e]/20 hover:shadow-lg hover:shadow-[#b8112e]/30 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Portal Access
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="flex items-center lg:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className="rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 transition-colors"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer (Slides from Right) */}
            <div
                className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${
                    mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
                    onClick={() => setMobileMenuOpen(false)}
                />

                {/* Content Panel */}
                <div
                    ref={drawerPanelRef}
                    className={`absolute inset-y-0 right-0 w-full max-w-sm bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col justify-between ${
                        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div>
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                            <img
                                src={
                                    system?.logo
                                        ? `/storage/${system.logo}`
                                        : '/assets/images/logo/logo_1.png'
                                }
                                alt="Logo"
                                className="h-10 w-auto"
                            />
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 transition-colors"
                            >
                                <PlusIcon className="rotate-45" size={20} />
                            </button>
                        </div>

                        {/* Drawer Body - Scrollable Links */}
                        <div className="mt-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href={home().url}
                                        className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#b8112e] transition-all"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </li>

                                {/* About Accordion */}
                                <li>
                                    <details className="group">
                                        <summary className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#b8112e] transition-all">
                                            About
                                            <ChevronDown size={18} className="transition-transform duration-300 group-open:rotate-180" />
                                        </summary>
                                        <ul className="mt-1 ml-4 space-y-1 pl-4 border-l border-slate-100">
                                            {navigationMenus.map((item, index) => (
                                                <li key={index}>
                                                    <Link
                                                        href={item.link}
                                                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#b8112e] transition-all"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </li>

                                {/* Programs Accordion */}
                                <li>
                                    <details className="group">
                                        <summary className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#b8112e] transition-all">
                                            Programs
                                            <ChevronDown size={18} className="transition-transform duration-300 group-open:rotate-180" />
                                        </summary>
                                        <ul className="mt-1 ml-4 space-y-1 pl-4 border-l border-slate-100">
                                            {academic_header && academic_header.map((header, index) => (
                                                <li key={index}>
                                                    <Link
                                                        href={programShow(header.slug).url}
                                                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#b8112e] transition-all"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {header.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </li>

                                {/* Student Accordion */}
                                <li>
                                    <details className="group">
                                        <summary className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#b8112e] transition-all">
                                            Student
                                            <ChevronDown size={18} className="transition-transform duration-300 group-open:rotate-180" />
                                        </summary>
                                        <ul className="mt-1 ml-4 space-y-1 pl-4 border-l border-slate-100">
                                            {studentNavigation.map((item, index) => (
                                                <li key={index}>
                                                    <Link
                                                        href={item.link}
                                                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#b8112e] transition-all"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </li>

                                {/* Updates Accordion */}
                                <li>
                                    <details className="group">
                                        <summary className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#b8112e] transition-all">
                                            Updates
                                            <ChevronDown size={18} className="transition-transform duration-300 group-open:rotate-180" />
                                        </summary>
                                        <ul className="mt-1 ml-4 space-y-1 pl-4 border-l border-slate-100">
                                            {updateMenus.map((item, index) => (
                                                <li key={index}>
                                                    <Link
                                                        href={item.link}
                                                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#b8112e] transition-all"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </li>

                                {/* Right navigation simple links */}
                                {rightNavigation.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.link}
                                            className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#b8112e] transition-all"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Drawer Footer CTA */}
                    <div className="border-t border-slate-100 pt-6">
                        <Link
                            href="/login"
                            className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#b8112e] to-[#7d0d22] py-3.5 text-base font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Portal Access
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
