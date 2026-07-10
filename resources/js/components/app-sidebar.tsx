import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
    dashboard,
    heroSectionindex,
    studentFeedbackIndex,
    courseIndex,
    curriculumIndex,
    facultyIndex,
    boardMemberMessageIndex,
    eventIndex,
    downloadIndex,
    systemInformationEdit,
    informationIndex,
    galleryIndex,
    contactIndex,
} from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    LayoutGrid,
    Home,
    BookOpen,
    MessageSquare,
    CalendarDays,
    Info,
    GraduationCap,
    Download,
    Settings,
    SquarePenIcon,
    GalleryHorizontalIcon,
} from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    // Dashboard
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },

    // Website Sections
    {
        title: 'Contacts',
        href: contactIndex(),
        icon: Home,
    },
    {
        title: 'Hero Section',
        href: heroSectionindex(),
        icon: Home,
    },
    {
        title: 'Courses',
        href: courseIndex(),
        icon: BookOpen,
    },
    {
        title: 'Curriculum',
        href: curriculumIndex(),
        icon: SquarePenIcon,
    },
    {
        title: 'Student Feedbacks',
        href: studentFeedbackIndex(),
        icon: MessageSquare,
    },
    {
        title: 'Events',
        href: eventIndex(),
        icon: CalendarDays,
    },
    {
        title: "Information's",
        href: informationIndex(),
        icon: Info,
    },

    // Academic Structure
    {
        title: 'Faculties',
        href: facultyIndex(),
        icon: GraduationCap,
    },

    // People & Organization
    {
        title: 'Board Members Message',
        href: boardMemberMessageIndex(),
        icon: MessageSquare,
    },
    {
        title: 'Gallery',
        href: galleryIndex(),
        icon: GalleryHorizontalIcon,
    },

    // Resources
    {
        title: 'Downloads',
        href: downloadIndex(),
        icon: Download,
    },

    // System
    {
        title: 'System Setting',
        href: systemInformationEdit(),
        icon: Settings,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
