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
import { eventIndex, eventStore } from '@/routes';
import { BreadcrumbItem, FlashMessageInterface } from '@/types';
import { handleChange } from '@/utils/globalFunctions';
import { useForm } from '@inertiajs/react';
import JoditEditor from 'jodit-react';
import React, { useRef } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Event', href: eventIndex().url },
    { title: 'Create', href: '#' },
];

export default function Create({ flash }: { flash: FlashMessageInterface }) {
    const editor = useRef(null);
    const { data, setData, post, errors, processing } = useForm({
        image: null,
        name: '',
        description: '',
        event_date: null,
        event_time: null,
        event_venue: null,
        status: 'inactive',
    });

    const config = {
        readonly: false,
        language: 'en',
        height: 400,
        toolbarAdaptive: false,
    };

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(eventStore.url());
    }
    return (
        <AppLayout title="Create Event" breadcrumbs={breadcrumbs} flash={flash}>
            <div className="flex flex-col gap-4 p-4">
                <div className="max-w-4xl">
                    <form
                        onSubmit={submit}
                        className="flex flex-col gap-6"
                        encType="multipart/form-data"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Create Event</CardTitle>
                            </CardHeader>

                            <CardContent className="grid gap-6">
                                {/* Image */}
                                <div className="grid gap-2">
                                    <Label htmlFor="image">Event Image</Label>
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

                                {/* Event Date */}
                                <div className="grid gap-2">
                                    <Label htmlFor="event_date">
                                        Event Date
                                    </Label>
                                    <Input
                                        id="event_date"
                                        name="event_date"
                                        type={'date'}
                                        value={data.event_date || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'event_date',
                                            )
                                        }
                                        placeholder="Enter event date"
                                    />
                                    <InputError message={errors.event_date} />
                                </div>

                                {/* Event Time */}
                                <div className="grid gap-2">
                                    <Label htmlFor="event_time">
                                        Event Time
                                    </Label>
                                    <Input
                                        id="event_time"
                                        name="event_time"
                                        type={'time'}
                                        value={data.event_time || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'event_time',
                                            )
                                        }
                                        placeholder="Enter event time"
                                    />
                                    <InputError message={errors.event_time} />
                                </div>

                                {/* Event Place */}
                                <div className="grid gap-2">
                                    <Label htmlFor="event_venue">
                                        Event Venu
                                    </Label>
                                    <Input
                                        id="event_venue"
                                        name="event_venue"
                                        value={data.event_venue || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'event_venue',
                                            )
                                        }
                                        placeholder="Enter event venue"
                                    />
                                    <InputError message={errors.event_venue} />
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
