import { Breadcrumbs } from '@/components/breadcrumbs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserMenuContent } from '@/components/user-menu-content';
import { useInitials } from '@/hooks/use-initials';
import { resolveUrl } from '@/lib/utils';
import {
    boardMemberMessageIndex,
    contactIndex,
    courseIndex,
    curriculumIndex,
    dashboard,
    departmentIndex,
    downloadIndex,
    eventIndex,
    facultyIndex,
    galleryIndex,
    heroSectionindex,
    informationIndex,
    studentFeedbackIndex,
    systemInformationEdit,
} from '@/routes';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import {
    BookOpen,
    Building2,
    CalendarDays,
    ChevronDown,
    Download,
    GalleryHorizontalIcon,
    GraduationCap,
    Home,
    Info,
    LayoutGrid,
    Menu,
    MessageSquare,
    Settings,
    SquarePenIcon,
    X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// ─── Nav groups ──────────────────────────────────────────────────────────────

const navGroups = [
    {
        label: 'Content',
        icon: Info,
        items: [
            { title: 'Hero Section', href: heroSectionindex(), icon: Home },
            { title: "Informations", href: informationIndex(), icon: Info },
            { title: 'Events', href: eventIndex(), icon: CalendarDays },
            { title: 'Gallery', href: galleryIndex(), icon: GalleryHorizontalIcon },
        ],
    },
    {
        label: 'Academic',
        icon: BookOpen,
        items: [
            { title: 'Courses', href: courseIndex(), icon: BookOpen },
            { title: 'Curriculum', href: curriculumIndex(), icon: SquarePenIcon },
            { title: 'Departments', href: departmentIndex(), icon: Building2 },
            { title: 'Faculties', href: facultyIndex(), icon: GraduationCap },
        ],
    },
    {
        label: 'People',
        icon: MessageSquare,
        items: [
            { title: 'Board Member Messages', href: boardMemberMessageIndex(), icon: MessageSquare },
            { title: 'Student Feedbacks', href: studentFeedbackIndex(), icon: MessageSquare },
            { title: 'Contacts', href: contactIndex(), icon: MessageSquare },
        ],
    },
    {
        label: 'Settings',
        icon: Settings,
        items: [
            { title: 'Downloads', href: downloadIndex(), icon: Download },
            { title: 'System Settings', href: systemInformationEdit(), icon: Settings },
        ],
    },
];

// ─── Component ───────────────────────────────────────────────────────────────

interface AppTopNavProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function AppTopNav({ breadcrumbs = [] }: AppTopNavProps) {
    const page = usePage<SharedData>();
    const { auth } = page.props;
    const getInitials = useInitials();

    const [activeGroup, setActiveGroup] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const navRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setActiveGroup(null);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    // Lock body scroll when mobile open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const handleEnter = (label: string) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setActiveGroup(label);
    };

    const handleLeave = () => {
        closeTimer.current = setTimeout(() => setActiveGroup(null), 100);
    };

    const isActive = (href: string) => page.url.startsWith(resolveUrl(href));

    return (
        <>
            {/* ── Top bar ─────────────────────────────────────────────── */}
            <div ref={navRef} className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm" data-tailwind>
                <div className="mx-auto flex h-14 max-w-screen-2xl items-center gap-4 px-4 lg:px-6">

                    {/* Logo */}
                    <Link href={dashboard()} className="flex shrink-0 items-center gap-2.5 mr-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b8112e]">
                            <span className="text-xs font-black text-white">VC</span>
                        </div>
                        <span className="hidden text-[13px] font-bold text-gray-900 lg:block">
                            Valley College <span className="text-[#b8112e]">Admin</span>
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden flex-1 items-center gap-0.5 lg:flex">
                        {/* Dashboard direct link */}
                        <Link
                            href={dashboard()}
                            className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
                                isActive(dashboard())
                                    ? 'bg-rose-50 text-[#b8112e]'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                        >
                            <LayoutGrid size={15} />
                            Dashboard
                        </Link>

                        {/* Grouped dropdowns */}
                        {navGroups.map((group) => {
                            const isGroupActive = group.items.some((item) => isActive(item.href));
                            const isOpen = activeGroup === group.label;

                            return (
                                <div
                                    key={group.label}
                                    className="relative"
                                    onMouseEnter={() => handleEnter(group.label)}
                                    onMouseLeave={handleLeave}
                                >
                                    <button
                                        onClick={() => setActiveGroup(isOpen ? null : group.label)}
                                        className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
                                            isGroupActive || isOpen
                                                ? 'bg-rose-50 text-[#b8112e]'
                                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                        }`}
                                    >
                                        <group.icon size={15} />
                                        {group.label}
                                        <ChevronDown
                                            size={13}
                                            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    {/* Dropdown panel */}
                                    <div
                                        className={`absolute top-full left-0 z-50 mt-1 w-56 origin-top-left overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl transition-all duration-150 ${
                                            isOpen
                                                ? 'pointer-events-auto scale-100 opacity-100'
                                                : 'pointer-events-none scale-95 opacity-0'
                                        }`}
                                    >
                                        <div className="py-1.5">
                                            {group.items.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    onClick={() => setActiveGroup(null)}
                                                    className={`flex items-center gap-3 px-4 py-2.5 text-[13px] transition-colors ${
                                                        isActive(item.href)
                                                            ? 'bg-rose-50 font-semibold text-[#b8112e]'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                                    }`}
                                                >
                                                    <item.icon
                                                        size={15}
                                                        className={isActive(item.href) ? 'text-[#b8112e]' : 'text-gray-400'}
                                                    />
                                                    {item.title}
                                                    {isActive(item.href) && (
                                                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </nav>

                    {/* Right side: user menu + mobile toggle */}
                    <div className="ml-auto flex items-center gap-2">
                        {/* User avatar dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-2 rounded-full p-0.5 transition-colors hover:bg-gray-100 focus:outline-none">
                                    <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                                        <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                                        <AvatarFallback className="rounded-full bg-[#b8112e] text-[11px] font-bold text-white">
                                            {getInitials(auth.user.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="hidden max-w-[120px] truncate text-[13px] font-medium text-gray-700 lg:block">
                                        {auth.user.name}
                                    </span>
                                    <ChevronDown size={13} className="hidden text-gray-400 lg:block" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                <UserMenuContent user={auth.user} />
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 lg:hidden"
                            aria-label="Open menu"
                        >
                            <Menu size={18} />
                        </button>
                    </div>
                </div>

                {/* Breadcrumbs row */}
                {breadcrumbs.length > 1 && (
                    <div className="border-t border-gray-100 bg-gray-50">
                        <div className="mx-auto flex h-10 max-w-screen-2xl items-center px-4 lg:px-6">
                            <Breadcrumbs breadcrumbs={breadcrumbs} />
                        </div>
                    </div>
                )}
            </div>

            {/* ── Mobile backdrop ─────────────────────────────────────── */}
            <div
                className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
                    mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
                onClick={() => setMobileOpen(false)}
                aria-hidden="true"
                data-tailwind
            />

            {/* ── Mobile drawer ───────────────────────────────────────── */}
            <div
                className={`fixed inset-y-0 left-0 z-[61] flex w-72 flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
                    mobileOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                data-tailwind
            >
                {/* Drawer header */}
                <div className="flex h-14 shrink-0 items-center justify-between border-b border-gray-100 px-4">
                    <Link href={dashboard()} className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b8112e]">
                            <span className="text-[10px] font-black text-white">VC</span>
                        </div>
                        <span className="text-[13px] font-bold text-gray-900">Valley College Admin</span>
                    </Link>
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-500"
                        aria-label="Close"
                    >
                        <X size={15} />
                    </button>
                </div>

                {/* Drawer links */}
                <div className="flex-1 overflow-y-auto px-3 py-3">
                    {/* Dashboard */}
                    <Link
                        href={dashboard()}
                        onClick={() => setMobileOpen(false)}
                        className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-colors ${
                            isActive(dashboard())
                                ? 'bg-rose-50 text-[#b8112e]'
                                : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        <LayoutGrid size={16} />
                        Dashboard
                    </Link>

                    {navGroups.map((group) => (
                        <div key={group.label} className="mb-1">
                            <button
                                onClick={() => setMobileExpanded(mobileExpanded === group.label ? null : group.label)}
                                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-semibold text-gray-500 hover:bg-gray-100"
                            >
                                <div className="flex items-center gap-2">
                                    <group.icon size={15} />
                                    {group.label}
                                </div>
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform ${mobileExpanded === group.label ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    mobileExpanded === group.label ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                <div className="ml-2 mt-0.5 border-l-2 border-rose-100 pl-3">
                                    {group.items.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] transition-colors ${
                                                isActive(item.href)
                                                    ? 'font-semibold text-[#b8112e]'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                        >
                                            <item.icon size={14} className={isActive(item.href) ? 'text-[#b8112e]' : 'text-gray-400'} />
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Drawer footer — user info */}
                <div className="border-t border-gray-100 p-3">
                    <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-3 py-3">
                        <Avatar className="h-8 w-8 rounded-full">
                            <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                            <AvatarFallback className="rounded-full bg-[#b8112e] text-[11px] font-bold text-white">
                                {getInitials(auth.user.name)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-[13px] font-semibold text-gray-900">{auth.user.name}</p>
                            <p className="truncate text-[11px] text-gray-400">{auth.user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
