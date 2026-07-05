import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';
import AppLayout from '@/layouts/backend/app/auth/auth-layout';
import { Course } from '@/pages/backend/course/types';
import { curriculumIndex, curriculumStore } from '@/routes';
import { BreadcrumbItem, FlashMessageInterface } from '@/types';
import { handleChange } from '@/utils/globalFunctions';
import { useForm } from '@inertiajs/react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Curriculum', href: curriculumIndex().url },
    { title: 'Create', href: '#' },
];

export default function Create({
    flash,
    courses,
}: {
    flash: FlashMessageInterface;
    courses: Course[];
}) {
    const { data, setData, post, errors, processing } = useForm({
        course_id: '',
        name: null,
        credit_hours: null,
        curricula_duration: null,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(curriculumStore.url());
    }
    return (
        <AppLayout
            title="Create Curriculum"
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
                                <CardTitle>Create Curriculum</CardTitle>
                            </CardHeader>

                            <CardContent className="grid gap-6">
                                {/* Name */}
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={data.name || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'name')
                                        }
                                        placeholder="Enter name"
                                    />
                                    <InputError message={errors.name} />
                                </div>

                                {/* Credit hours */}
                                <div className="grid gap-2">
                                    <Label htmlFor="credit_hours">
                                        Credit Hours
                                    </Label>
                                    <Input
                                        id="credit_hours"
                                        name="credit_hours"
                                        value={data.credit_hours || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'credit_hours',
                                            )
                                        }
                                        placeholder="Enter credit hours"
                                    />
                                    <InputError message={errors.credit_hours} />
                                </div>

                                {/* Curricula Duration */}
                                <div className="grid gap-2">
                                    <Label htmlFor="curricula_duration">
                                        Education Level
                                    </Label>
                                    <Input
                                        id="curricula_duration"
                                        name="curricula_duration"
                                        type={'curricula_duration'}
                                        value={data.curricula_duration || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'curricula_duration',
                                            )
                                        }
                                        placeholder="Enter curricula duration"
                                    />
                                    <InputError
                                        message={errors.curricula_duration}
                                    />
                                </div>

                                {/* Course */}
                                <div className="grid gap-2">
                                    <Label>Course</Label>
                                    <Select
                                        value={data.course_id}
                                        name={'course_id'}
                                        onValueChange={(value) =>
                                            setData('course_id', value)
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select course" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {courses.map((value) => (
                                                <SelectItem
                                                    key={value.id}
                                                    value={String(value.id)}
                                                >
                                                    {value.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.course_id} />
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
