import { PaginationLink } from '@/types';
import { Course } from '@/pages/backend/course/types';

export type CurriculumSyllabus = {
    id: string;
    curricula_id: string;
    name: string;
};

export type Curriculum = {
    id: string;
    course_id: string;
    course: Course;
    name: string;
    credit_hours: string;
    curricula_duration: string;
    curriculum_syllabus: CurriculumSyllabus[];
};

export type CurriculumPagination = {
    current_page: number;
    data: Curriculum[];
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
