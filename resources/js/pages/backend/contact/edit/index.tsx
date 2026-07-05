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
import { contactIndex, contactUpdate } from '@/routes';
import { BreadcrumbItem, FlashMessageInterface } from '@/types';
import { handleChange } from '@/utils/globalFunctions';
import { useForm } from '@inertiajs/react';
import React, { useRef } from 'react';
import { Contact } from '@/pages/backend/contact/types';
import { Textarea } from '@/components/ui/textarea';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Contact', href: contactIndex().url },
    { title: 'Edit', href: '#' },
];

export default function Edit({ flash, contact }: { flash: FlashMessageInterface, contact: Contact }) {
    const editor = useRef(null);
    const { data, setData, post, errors, processing } = useForm({
        name: contact.name ?? '',
        email: contact.email ?? '',
        phone: contact.phone ?? '',
        subject: contact.subject ?? '',
        description: contact.description ?? '',
        status:  contact.status,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(contactUpdate(Number(contact.id)).url);
    }
    return (
        <AppLayout title="Edit Contact" breadcrumbs={breadcrumbs} flash={flash}>
            <div className="flex flex-col gap-4 p-4">
                <div className="max-w-4xl">
                    <form
                        onSubmit={submit}
                        className="flex flex-col gap-6"
                        encType="multipart/form-data"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Edit Contact</CardTitle>
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

                                {/* Phone */}
                                <div className="grid gap-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type={'number'}
                                        value={data.phone || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'phone')
                                        }
                                        placeholder="Enter phone number"
                                    />
                                    <InputError message={errors.phone} />
                                </div>

                                {/* Subject */}
                                <div className="grid gap-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={data.subject || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'subject')
                                        }
                                        placeholder="Enter subject"
                                    />
                                    <InputError message={errors.subject} />
                                </div>

                                {/* Description */}
                                <div className="grid gap-2">
                                    <Label>Description</Label>
                                    <Textarea
                                        name={'description'}
                                        ref={editor}
                                        value={data.description}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'description',
                                            )
                                        }
                                        placeholder={'Enter description'}
                                    />
                                    <InputError message={errors.description} />
                                </div>

                                {/* Status */}
                                <div className="grid gap-2">
                                    <Label>Status</Label>
                                    <Select
                                        value={data.status || 'new'}
                                        onValueChange={(e) =>
                                            handleChange(e, setData, 'status')
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="new">
                                                New
                                            </SelectItem>
                                            <SelectItem value="in_review">
                                                In Review
                                            </SelectItem>
                                            <SelectItem value="contracted">
                                                Contracted
                                            </SelectItem>
                                            <SelectItem value="closed">
                                                Closed
                                            </SelectItem>
                                            <SelectItem value="dropped">
                                                Dropped
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
