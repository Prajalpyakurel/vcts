import { PaginationLink } from '@/types';

export type System = {
    id: string;
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
};

export type SystemPagination = {
    current_page: number;
    data: System[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
};
