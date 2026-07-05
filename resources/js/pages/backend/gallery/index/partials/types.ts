import { PaginationLink } from '@/types';

export type HeroItem = {
    id: string;
    key: string;
    image: string;
    title: string;
    subtitle: string;
    description: string;
    status: 'active' | 'inactive';
};

export type HeroItemPagination = {
    current_page: number;
    data: HeroItem[];
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
