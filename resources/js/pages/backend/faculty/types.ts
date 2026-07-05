import { PaginationLink } from '@/types';

export type Faculty = {
    id: string;
    slug: string;
    image: string;
    name: string;
    description: string;
    message: string;
    phone_no: string;
    order_no: number;
    email: string;
    designation: string;
    status: 'active' | 'inactive';
};

export type FacultyPagination = {
    current_page: number;
    data: Faculty[];
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
