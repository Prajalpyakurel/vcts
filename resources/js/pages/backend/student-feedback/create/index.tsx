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
import { studentFeedbackIndex, studentFeedbackStore } from '@/routes';
import { BreadcrumbItem, FlashMessageInterface } from '@/types';
import { handleChange } from '@/utils/globalFunctions';
import { useForm } from '@inertiajs/react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Student Feedback', href: studentFeedbackIndex().url },
    { title: 'Create', href: '#' },
];

export default function CreateHeroSection({
    flash,
}: {
    flash: FlashMessageInterface;
}) {
    const { data, setData, post, errors, processing } = useForm({
        image: null,
        name: null,
        email: null,
        student_course: null,
        feedback: null,
        status: 'inactive',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(studentFeedbackStore.url());
    }
    return (
        <AppLayout
            title="Create Student Feedback"
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
                                <CardTitle>Create Student Feedback</CardTitle>
                            </CardHeader>

                            <CardContent className="grid gap-6">
                                {/* Image */}
                                <div className="grid gap-2">
                                    <Label htmlFor="image">Student Image</Label>
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

                                {/* Student Course */}
                                <div className="grid gap-2">
                                    <Label htmlFor="student_course">Student Course</Label>
                                    <Input
                                        id="student_course"
                                        name="student_course"
                                        value={data.student_course || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'student_course')
                                        }
                                        placeholder="Enter student course"
                                    />
                                    <InputError message={errors.student_course} />
                                </div>

                                {/* Email */}
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type={'email'}
                                        value={data.email || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'email')
                                        }
                                        placeholder="Enter email"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                {/* Feedback */}
                                <div className="grid gap-2">
                                    <Label htmlFor="feedback">Feedback</Label>
                                    <Textarea
                                        id="feedback"
                                        name="feedback"
                                        rows={4}
                                        value={data.feedback || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'feedback')
                                        }
                                        placeholder="Enter feedback"
                                    />
                                    <InputError message={errors.feedback} />
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
