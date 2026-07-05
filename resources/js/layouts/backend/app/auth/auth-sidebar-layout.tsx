import { AppTopNav } from '@/components/app-top-nav';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <AppTopNav breadcrumbs={breadcrumbs} />
            <main className="mx-auto w-full max-w-screen-2xl flex-1 px-4 py-6 lg:px-6">
                {children}
            </main>
        </div>
    );
}
