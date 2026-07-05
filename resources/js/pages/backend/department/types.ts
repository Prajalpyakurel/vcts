import { PaginationLink } from '@/types';
import { Faculty } from '@/pages/backend/faculty/types';

export type Department = {
    id: string;
    name: string;
    faculty_id: string[];
    faculties: Faculty[];
};

export type DepartmentPagination = {
    current_page: number;
    data: Department[];
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
