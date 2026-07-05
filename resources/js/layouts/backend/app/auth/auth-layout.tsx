import '../../../../../css/app.css';

import AppLayoutTemplate from '@/layouts/backend/app/auth/auth-sidebar-layout';
import { type BreadcrumbItem, FlashMessageInterface } from '@/types';
import { Head } from '@inertiajs/react';
import { type ReactNode } from 'react';
import { useFlashMessage } from '@/utils/globalFunctions';
import { Toaster } from 'react-hot-toast';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    flash: FlashMessageInterface;
    title: string;
}

export default function AuthLayout ({
    children,
    breadcrumbs,
    flash,
    title,
    ...props
}: AppLayoutProps) {
    useFlashMessage({ flash });
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props} data-tailwind>
            <Head title={title} />
            {children}
            <Toaster position="top-right" reverseOrder={true} />
        </AppLayoutTemplate>
    );
};
