import { PaginationLink } from '@/types';

export type BoardMemberMessage = {
    id: string;
    image: string;
    name: string;
    designation: string;
    message: string;
    order_no: number;
    status: 'active' | 'inactive';
};

export type BoardMemberMessagePagination = {
    current_page: number;
    data: BoardMemberMessage[];
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
