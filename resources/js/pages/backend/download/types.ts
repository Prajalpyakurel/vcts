import { PaginationLink } from '@/types';

export type Download = {
    id: string;
    file: string;
    name: string;
    description: string;
    status: 'active' | 'inactive';
};

export type DownloadPagination = {
    current_page: number;
    data: Download[];
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
