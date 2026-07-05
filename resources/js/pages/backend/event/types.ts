import { PaginationLink } from '@/types';

export type Event = {
    id: string;
    image: string;
    name: string;
    slug: string;
    description: string;
    event_date: string;
    event_time: string;
    event_venue: string;
    status: 'active' | 'inactive';
};

export type EventPagination = {
    current_page: number;
    data: Event[];
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
