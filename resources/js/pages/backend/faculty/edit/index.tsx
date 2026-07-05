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
import { facultyIndex, facultyUpdate } from '@/routes';
import { BreadcrumbItem, FlashMessageInterface } from '@/types';
import { handleChange } from '@/utils/globalFunctions';
import { useForm } from '@inertiajs/react';
import React from 'react';
import { Faculty } from '@/pages/backend/faculty/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Faculty', href: facultyIndex().url },
    { title: 'Edit', href: '#' },
];

export default function Edit({
    faculty,
    flash,
}: {
    faculty: Faculty;
    flash: FlashMessageInterface;
}) {
    const { data, setData, post, errors, processing } = useForm({
        image: null,
        name: faculty.name,
        designation: faculty.designation,
        order_no: faculty.order_no,
        phone_no: faculty.phone_no,
        email: faculty.email,
        description: faculty.description,
        message: faculty.message,
        status: 'active',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(facultyUpdate(Number(faculty.id)).url, {
            forceFormData: true,
        });
    }
    return (
        <AppLayout title="Edit Course" breadcrumbs={breadcrumbs} flash={flash}>
            <div className="flex flex-col gap-4 p-4">
                <div className="max-w-4xl">
                    <form
                        onSubmit={submit}
                        className="flex flex-col gap-6"
                        encType="multipart/form-data"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Edit Course</CardTitle>
                            </CardHeader>

                            <CardContent className="grid gap-6">
                                {/* Image */}
                                <div className="grid gap-2">
                                    <Label htmlFor="image">Image</Label>
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
                                        name={'name'}
                                        value={data.name || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'name')
                                        }
                                        placeholder="Enter full name"
                                    />
                                    <InputError message={errors.name} />
                                </div>

                                {/* Designation */}
                                <div className="grid gap-2">
                                    <Label htmlFor="designation">
                                        Designation
                                    </Label>
                                    <Input
                                        id="designation"
                                        name={'designation'}
                                        value={data.designation || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'designation',
                                            )
                                        }
                                        placeholder="e.g. Professor"
                                    />
                                    <InputError message={errors.designation} />
                                </div>

                                {/* Order No */}
                                <div className="grid gap-2">
                                    <Label htmlFor="order_no">Order No</Label>
                                    <Input
                                        id="order_no"
                                        type="number"
                                        name={'order_no'}
                                        value={data.order_no || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'order_no')
                                        }
                                        placeholder="Display order"
                                    />
                                    <InputError message={errors.order_no} />
                                </div>

                                {/* Phone */}
                                <div className="grid gap-2">
                                    <Label htmlFor="phone_no">Phone</Label>
                                    <Input
                                        id="phone_no"
                                        name={'phone_no'}
                                        value={data.phone_no || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'phone_no')
                                        }
                                        placeholder="Phone number"
                                    />
                                    <InputError message={errors.phone_no} />
                                </div>

                                {/* Email */}
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name={'email'}
                                        value={data.email || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'email')
                                        }
                                        placeholder="Email address"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                {/* Description */}
                                <div className="grid gap-2">
                                    <Label htmlFor="description">
                                        Description
                                    </Label>
                                    <Textarea
                                        id="description"
                                        name={'description'}
                                        rows={4}
                                        value={data.description || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'description',
                                            )
                                        }
                                        placeholder={
                                            'Enter faculty description'
                                        }
                                    />
                                    <InputError message={errors.description} />
                                </div>

                                {/* Message */}
                                <div className="grid gap-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name={'message'}
                                        rows={3}
                                        value={data.message || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'message')
                                        }
                                        placeholder={'Enter faculty message'}
                                    />
                                    <InputError message={errors.message} />
                                </div>

                                {/* Status */}
                                <div className="grid gap-2">
                                    <Label>Status</Label>
                                    <Select
                                        value={data.status}
                                        onValueChange={(value) =>
                                            setData('status', value)
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
                                        Update
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
