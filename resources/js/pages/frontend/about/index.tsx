import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import AboutSection from '@/pages/frontend/home/partials/aboutsection';
import AboutCta from '@/pages/frontend/about/partials/aboutcta';
import CoreValues from '@/pages/frontend/about/partials/corevalues';
import MissionVision from '@/pages/frontend/about/partials/missionvision';
import WhyChooseUs from '@/pages/frontend/about/partials/whychooseus';

export default function Index() {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'About', href: '', isActive: false },
        { title: 'About Us', href: '/abouts', isActive: true },
    ];

    return (
        <BannerPageLayout
            title="About Us"
            breadcrumbs={breadcrumbs}
            pageTitle="About Us"
        >
            <AboutSection />
            <MissionVision />
            <CoreValues />
            <WhyChooseUs />
            <AboutCta />
        </BannerPageLayout>
    );
}
