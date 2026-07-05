import { PaginationLink } from '@/types';

export type Course = {
    id: string;
    slug: string;
    image: string;
    name: string;
    description: string;
    education_level: string;
    status: 'active' | 'inactive';
    university: string;
    course_curriculum: CourseCurriculum[];
    total_credit_hours: number;
};

export type CourseCurriculum = {
    id: string;
    name: string;
    credit_hours: string;
    curricula_duration: string;
    course_id: string;
    created_at: string;
    updated_at: string;
    curriculum_syllabus: CurriculumSyllabus[];
};

export type CurriculumSyllabus = {
    id: string;
    name: string;
    curricula_id: string;
    created_at: string;
    updated_at: string;
};

export type CoursePagination = {
    current_page: number;
    data: Course[];
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
