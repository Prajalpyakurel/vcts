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
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/backend/app/auth/auth-layout';
import { courseIndex, courseStore } from '@/routes';
import { BreadcrumbItem, FlashMessageInterface } from '@/types';
import { handleChange } from '@/utils/globalFunctions';
import { useForm } from '@inertiajs/react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Course', href: courseIndex().url },
    { title: 'Create', href: '#' },
];

export default function Create({
    flash,
}: {
    flash: FlashMessageInterface;
}) {
    const { data, setData, post, errors, processing } = useForm({
        image: null,
        name: null,
        course_short_name: null,
        education_level: null,
        university: null,
        description: null,
        status: 'inactive',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(courseStore.url());
    }
    return (
        <AppLayout
            title="Create Course"
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
                                <CardTitle>Create Course</CardTitle>
                            </CardHeader>

                            <CardContent className="grid gap-6">
                                {/* Image */}
                                <div className="grid gap-2">
                                    <Label htmlFor="image">Course Image</Label>
                                    <Input
                                        id="image"
                                        type="file"
                                        name="image"
                                        onChange={(e) =>
                                            handleChange(e, setData, 'image')
                                        }
                                    />
                                    <InputError message={errors.image} />
                                </div>

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

                                {/* Course Short Name */}
                                <div className="grid gap-2">
                                    <Label htmlFor="course_short_name">
                                        Course Short Name
                                    </Label>
                                    <Input
                                        id="course_short_name"
                                        name="course_short_name"
                                        value={data.course_short_name || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'course_short_name',
                                            )
                                        }
                                        placeholder="Enter course short name"
                                    />
                                    <InputError
                                        message={errors.course_short_name}
                                    />
                                </div>

                                {/* Education Level */}
                                <div className="grid gap-2">
                                    <Label htmlFor="education_level">
                                        Education Level
                                    </Label>
                                    <Input
                                        id="education_level"
                                        name="education_level"
                                        type={'education_level'}
                                        value={data.education_level || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'education_level',
                                            )
                                        }
                                        placeholder="Enter education level"
                                    />
                                    <InputError
                                        message={errors.education_level}
                                    />
                                </div>

                                {/* Education Level */}
                                <div className="grid gap-2">
                                    <Label htmlFor="university">
                                        University Name
                                    </Label>
                                    <Input
                                        id="university"
                                        name="university"
                                        type={'university'}
                                        value={data.university || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'university',
                                            )
                                        }
                                        placeholder="Enter university name"
                                    />
                                    <InputError
                                        message={errors.university}
                                    />
                                </div>

                                {/* Description */}
                                <div className="grid gap-2">
                                    <Label htmlFor="description">
                                        Description
                                    </Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        rows={4}
                                        value={data.description || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'description',
                                            )
                                        }
                                        placeholder="Enter description"
                                    />
                                    <InputError message={errors.description} />
                                </div>

                                {/* Status */}
                                <div className="grid gap-2">
                                    <Label>Status</Label>
                                    <Select
                                        value={data.status || 'active'}
                                        onValueChange={(e) =>
                                            handleChange(e, setData, 'status')
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="active">
                                                Active
                                            </SelectItem>
                                            <SelectItem value="inactive">
                                                Inactive
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.status} />
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
