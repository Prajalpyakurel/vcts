import { Information } from '@/pages/backend/information/types';
import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
    isActive?: boolean;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    academic_header: { name: string; slug: string }[];
    informations: Information[];
    system: SystemInformation;
    [key: string]: unknown;
}

export interface SystemInformation {
    id: number;
    logo: string;
    name: string;
    email: string;
    phone: string;
    facebook_link: string;
    instagram_link: string;
    youtube_link: string;
    whatsapp_link: string;
    twitter_link: string;
    linkedin_link: string;
    address: string;
    map_link: string;
    created_at: string;
    updated_at: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
};

export type FlashMessageInterface = {
    success: string;
    error: string;
    warning: string;
    info: string;
};
