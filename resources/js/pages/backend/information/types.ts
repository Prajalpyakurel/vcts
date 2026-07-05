import { PaginationLink } from '@/types';

export type Information = {
    id: string;
    type: string;
    slug: string;
    image: string;
    title: string;
    description: string;
    status: 'active' | 'inactive';
    created_at: string;
    formatted_date: string;
};

export type InformationPagination = {
    current_page: number;
    data: Information[];
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
