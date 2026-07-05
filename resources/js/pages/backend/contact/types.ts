import { PaginationLink } from '@/types';

export type Contact = {
    id: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    description: string;
    created_at: string;
    update_at: string;
    formatted_date: string;
    status: 'active' | 'inactive';
};

export type ContactPagination = {
    current_page: number;
    data: Contact[];
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
