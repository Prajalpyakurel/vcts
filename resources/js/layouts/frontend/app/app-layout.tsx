import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { type ReactNode } from 'react';
import '../../../../css/style.css';

import Footer from './footer';
import Header from './header';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    title: string;
}

export default ({ children, title, ...props }: AppLayoutProps) => (
    <div {...props} className="home-3">
        <div className="font-inter relative bg-white text-base leading-[1.8] font-normal">
            <Head title={title} />
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    </div>
);
