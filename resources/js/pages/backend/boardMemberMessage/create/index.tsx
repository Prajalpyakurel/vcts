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
import { boardMemberMessageIndex, boardMemberMessageStore } from '@/routes';
import { BreadcrumbItem, FlashMessageInterface } from '@/types';
import { handleChange } from '@/utils/globalFunctions';
import { useForm } from '@inertiajs/react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Board Member Message', href: boardMemberMessageIndex().url },
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
        designation: null,
        order_no: null,
        message: null,
        status: 'inactive',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(boardMemberMessageStore.url());
    }
    return (
        <AppLayout
            title="Create Board Member Message"
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
                                <CardTitle>Create Board Member Message</CardTitle>
                            </CardHeader>

                            <CardContent className="grid gap-6">
                                {/* Image */}
                                <div className="grid gap-2">
                                    <Label htmlFor="image">Board Member Message Image</Label>
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

                                {/* Board Member Message Short Name */}
                                <div className="grid gap-2">
                                    <Label htmlFor="designation">
                                        Board Member Message Short Name
                                    </Label>
                                    <Input
                                        id="designation"
                                        name="designation"
                                        value={data.designation || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'designation',
                                            )
                                        }
                                        placeholder="Enter designation"
                                    />
                                    <InputError
                                        message={errors.designation}
                                    />
                                </div>


                                {/* Order No */}
                                <div className="grid gap-2">
                                    <Label htmlFor="order_no">
                                        Order No
                                    </Label>
                                    <Input
                                        id="order_no"
                                        name="order_no"
                                        type={'number'}
                                        value={data.order_no || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'order_no',
                                            )
                                        }
                                        placeholder="Enter order no"
                                    />
                                    <InputError
                                        message={errors.order_no}
                                    />
                                </div>

                                {/* Message */}
                                <div className="grid gap-2">
                                    <Label htmlFor="message">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={data.message || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'message',
                                            )
                                        }
                                        placeholder="Enter message"
                                    />
                                    <InputError message={errors.message} />
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
