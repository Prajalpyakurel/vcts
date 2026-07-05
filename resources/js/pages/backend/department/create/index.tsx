import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AppLayout from '@/layouts/backend/app/auth/auth-layout';
import { departmentIndex, departmentStore } from '@/routes';
import { BreadcrumbItem, FlashMessageInterface } from '@/types';
import { useForm } from '@inertiajs/react';
import React from 'react';
import { Faculty } from '@/pages/backend/faculty/types';
import { MultiSelect } from '@/components/multi-select';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Department', href: departmentIndex().url },
    { title: 'Create', href: '#' },
];
export default function Create({
    flash,
    faculties,
}: {
    flash: FlashMessageInterface;
    faculties: Faculty[];
}) {
    const { data, setData, post, errors, processing } = useForm<{
        image: File | null;
        name: string;
        faculty_id: string[];
    }>({
        image: null,
        name: '',
        faculty_id: [],
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(departmentStore.url());
    }

    const options = faculties.map((faculty) => ({
        value: faculty.id.toString(),
        label: faculty.name,
    }));

    return (
        <AppLayout
            title="Create Department"
            breadcrumbs={breadcrumbs}
            flash={flash}
        >
            <div className="flex flex-col gap-4 p-4">
                <div className="max-w-4xl">
                    <form
                        onSubmit={submit}
                        className="flex flex-col gap-6"
                        encType="multipart/form-data"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Create Department</CardTitle>
                            </CardHeader>

                            <CardContent className="grid gap-6">
                                {/* Name */}
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        placeholder="Enter name"
                                    />
                                    <InputError message={errors.name} />
                                </div>

                                {/* Faculty Multi Select */}
                                <div className="grid gap-2">
                                    <Label>Faculties</Label>
                                    <MultiSelect
                                        options={options}
                                        defaultValue={data.faculty_id}
                                        onValueChange={(values) =>
                                            setData('faculty_id', values)
                                        }
                                    />
                                    <InputError message={errors.faculty_id} />
                                </div>

                                {/* Actions */}
                                <div className="flex justify-end gap-3">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => window.history.back()}
                                    >
                                        Cancel
                                    </Button>

                                    <Button type="submit" disabled={processing}>
                                        {processing && (
                                            <Spinner className="mr-2" />
                                        )}
                                        Create
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
