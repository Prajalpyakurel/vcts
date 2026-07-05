import AppLayout from '@/layouts/frontend/app/app-layout';
import { Course } from '@/pages/backend/course/types';
import { HeroItem } from '@/pages/backend/hero-section/types';
import { Information } from '@/pages/backend/information/types';
import { StudentFeedback } from '@/pages/backend/student-feedback/types';
import AboutSection from './partials/aboutsection';
import BlogSection from './partials/blogsection';
import CounterSection from './partials/countersection';
import CourseSection from './partials/coursesection';
import FeatureSection from './partials/featuresection';
import HeroSection from './partials/herosection';
import NewsNoticeSection from './partials/news&noticesection';
import TestimonialSection from './partials/testimonialsection';

export default function Welcome({
    heroSections,
    studentFeedbacks,
    courses,
    notices,
    news,
    blogs,
}: {
    heroSections: HeroItem[];
    studentFeedbacks: StudentFeedback[];
    courses: Course[];
    notices: Information[];
    news: Information[];
    blogs: Information[];
}) {
    return (
        <AppLayout title="Valley College">
            <HeroSection heroSections={heroSections} />
            <FeatureSection />
            <AboutSection />
            <CounterSection />
            <CourseSection courses={courses} />
            <TestimonialSection studentFeedbacks={studentFeedbacks} />
            <NewsNoticeSection notices={notices} news={news} />
            <BlogSection blogs={blogs} />
        </AppLayout>
    );
}
