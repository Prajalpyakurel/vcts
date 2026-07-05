import { PaginationLink } from '@/types';

export type StudentFeedback = {
    id: string;
    image: string;
    name: string;
    email: string;
    student_course: string;
    feedback: string;
    status: 'active' | 'inactive';
};

export type StudentFeedbackPagination = {
    current_page: number;
    data: StudentFeedback[];
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
