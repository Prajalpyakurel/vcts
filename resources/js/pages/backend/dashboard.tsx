import AppLayout from '@/layouts/backend/app/auth/auth-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem, FlashMessageInterface } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard({ flash }: { flash: FlashMessageInterface }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs} title="Dashboard" flash={flash}>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 grid-cols-1">
                        Hello, Admin!
                </div>
            </div>
        </AppLayout>
    );
}
