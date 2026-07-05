import { PaginationLink } from '@/types';

export type Gallery = {
    id: string;
    image: string;
    name: string;
    status: 'active' | 'inactive';
};

export type GalleryPagination = {
    current_page: number;
    data: Gallery[];
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
