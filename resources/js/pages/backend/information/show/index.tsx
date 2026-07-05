import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/backend/app/auth/auth-layout';

import { informationIndex } from '@/routes';
import { BreadcrumbItem, FlashMessageInterface } from '@/types';

interface Information {
    id: number;
    title: string;
    description: string;
    image?: string;
    status: 'active' | 'inactive';
    type: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Information', href: informationIndex().url },
    { title: 'View', href: '#' },
];

export default function Show({
    flash,
    information,
}: {
    flash: FlashMessageInterface;
    information: Information;
}) {
    return (
        <AppLayout
            title="View Information"
            breadcrumbs={breadcrumbs}
            flash={flash}
        >
            <div className="max-w-4xl p-4">
                <Card>
                    <CardHeader className="flex flex-col gap-2">
                        <CardTitle>{information.title}</CardTitle>

                        <div className="flex gap-2">
                            <Badge variant="secondary">
                                {information.type}
                            </Badge>

                            <Badge
                                variant={
                                    information.status === 'active'
                                        ? 'default'
                                        : 'outline'
                                }
                            >
                                {information.status}
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {/* Image */}
                        {information.image && (
                            <div>
                                <img
                                    src={`/storage/${information.image}`}
                                    alt={information.title}
                                    className="max-h-96 rounded-lg object-cover"
                                />
                            </div>
                        )}

                        {/* Description */}
                        <div className="prose dark:prose-invert max-w-none">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: information.description,
                                }}
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end">
                            <Button
                                variant="outline"
                                onClick={() => window.history.back()}
                            >
                                Back
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
