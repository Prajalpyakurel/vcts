import { useForm } from '@inertiajs/react';
import JoditEditor from 'jodit-react';
import React, { useRef } from 'react';

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

import { informationIndex, informationUpdate } from '@/routes';
import { BreadcrumbItem, FlashMessageInterface } from '@/types';
import { handleChange } from '@/utils/globalFunctions';
import { Information } from '@/pages/backend/information/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Information', href: informationIndex().url },
    { title: 'Edit', href: '#' },
];

export default function Edit({ flash, information }: { flash: FlashMessageInterface, information: Information }) {
    const editor = useRef(null);

    const { data, setData, post, errors, processing } = useForm<{
        image: File | null;
        title: string;
        description: string;
        status: string;
        type: string;
    }>({
        image: null,
        title: information.title,
        description: information.description,
        type: information.type,
        status: information.status,
    });

    const config = {
        readonly: false,
        language: 'en',
        height: 400,
        toolbarAdaptive: false,
    };

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(informationUpdate(Number(information.id)).url);
    }

    return (
        <AppLayout
            title="Edit Information"
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
                                <CardTitle>Edit Information</CardTitle>
                            </CardHeader>

                            <CardContent className="grid gap-6">
                                {/* Image */}
                                <div className="grid gap-2">
                                    <Label htmlFor="image">Image</Label>
                                    <Input
                                        name={'image'}
                                        id="image"
                                        type="file"
                                        onChange={(e) =>
                                            handleChange(e, setData, 'image')
                                        }
                                    />
                                    <InputError message={errors.image} />
                                </div>

                                {/* Title */}
                                <div className="grid gap-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        name={'title'}
                                        id="title"
                                        value={data.title}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'title')
                                        }
                                        placeholder="Enter title"
                                    />
                                    <InputError message={errors.title} />
                                </div>

                                <div className="grid gap-2">
                                    <Label>Type</Label>
                                    <Select
                                        name={'type'}
                                        value={data.type}
                                        onValueChange={(value) =>
                                            setData('type', value)
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="activity">
                                                Activity
                                            </SelectItem>
                                            <SelectItem value="facility">
                                                Facility
                                            </SelectItem>
                                            <SelectItem value="notice">
                                                Notice
                                            </SelectItem>
                                            <SelectItem value="blog">
                                                Blog
                                            </SelectItem>
                                            <SelectItem value="news">
                                                News
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.type} />
                                </div>

                                {/* Description */}
                                <div className="jodit-wysiwyg grid gap-2">
                                    <Label>Description</Label>
                                    <JoditEditor
                                        name={'description'}
                                        ref={editor}
                                        value={data.description}
                                        config={config}
                                        onBlur={(content) =>
                                            setData('description', content)
                                        }
                                        className={'dark:text-black'}
                                    />
                                    <InputError message={errors.description} />
                                </div>

                                {/* Status */}
                                <div className="grid gap-2">
                                    <Label>Status</Label>
                                    <Select
                                        name={'status'}
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
