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
import { HeroItem } from '@/pages/backend/hero-section/types';
import { heroSectionindex, heroSectionupdate } from '@/routes';
import { BreadcrumbItem, FlashMessageInterface } from '@/types';
import { handleChange } from '@/utils/globalFunctions';
import { useForm } from '@inertiajs/react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Hero Section', href: heroSectionindex().url },
    { title: 'Edit', href: '#' },
];

export default function EditHeroSection({
    heroSection,
    flash,
}: {
    heroSection: HeroItem;
    flash: FlashMessageInterface;
}) {
    const { data, setData, post, errors, processing } = useForm({
        image: null,
        background_image: null,
        title: heroSection?.title,
        subtitle: heroSection?.subtitle,
        description: heroSection?.description,
        order_no: heroSection?.order_no,
        status: heroSection?.status || 'active',
    });

    const [imagePreview, setImagePreview] = React.useState<string | null>(
        heroSection?.image ? `/storage/${heroSection.image}` : null,
    );
    const [backgroundPreview, setBackgroundPreview] = React.useState<
        string | null
    >(
        heroSection?.background_image
            ? `/storage/${heroSection.background_image}`
            : null,
    );

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: 'image' | 'background_image',
    ) => {
        const file = e.target.files?.[0];
        if (file) {
            setData(field, file as any);
            const reader = new FileReader();
            reader.onloadend = () => {
                if (field === 'image') setImagePreview(reader.result as string);
                else setBackgroundPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(heroSectionupdate.url(Number(heroSection.id)), {
            forceFormData: true,
        });
    }
    return (
        <AppLayout
            title="Edit Hero Section"
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
                                <CardTitle>Edit Hero Section</CardTitle>
                            </CardHeader>

                            <CardContent className="grid gap-6">
                                {/* Image */}
                                <div className="grid gap-2">
                                    <Label htmlFor="image">Hero Image</Label>
                                    <Input
                                        id="image"
                                        type="file"
                                        name="image"
                                        onChange={(e) =>
                                            handleFileChange(e, 'image')
                                        }
                                    />
                                    {imagePreview && (
                                        <div className="mt-2">
                                            <img
                                                src={imagePreview}
                                                alt="Image Preview"
                                                className="h-32 w-auto rounded-md border object-cover"
                                            />
                                        </div>
                                    )}
                                    <InputError message={errors.image} />
                                </div>

                                {/* Background Image */}
                                <div className="grid gap-2">
                                    <Label htmlFor="background_image">
                                        Background Image
                                    </Label>
                                    <Input
                                        id="background_image"
                                        type="file"
                                        name="background_image"
                                        onChange={(e) =>
                                            handleFileChange(
                                                e,
                                                'background_image',
                                            )
                                        }
                                    />
                                    {backgroundPreview && (
                                        <div className="mt-2">
                                            <img
                                                src={backgroundPreview}
                                                alt="Background Preview"
                                                className="h-32 w-auto rounded-md border object-cover"
                                            />
                                        </div>
                                    )}
                                    <InputError
                                        message={errors.background_image}
                                    />
                                </div>

                                {/* Title */}
                                <div className="grid gap-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        name="title"
                                        value={data.title || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'title')
                                        }
                                        placeholder="Enter title"
                                    />
                                    <InputError message={errors.title} />
                                </div>

                                {/* Sub Title */}
                                <div className="grid gap-2">
                                    <Label htmlFor="subtitle">Sub Title</Label>
                                    <Input
                                        id="subtitle"
                                        name="subtitle"
                                        value={data.subtitle || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'subtitle')
                                        }
                                        placeholder="Enter subtitle"
                                    />
                                    <InputError message={errors.subtitle} />
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

                                {/* Order No */}
                                <div className="grid gap-2">
                                    <Label htmlFor="order_no">
                                        Order No
                                    </Label>
                                    <Input
                                        id="order_no"
                                        type="number"
                                        name="order_no"
                                        value={data.order_no || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'order_no',
                                            )
                                        }
                                        placeholder="Display order in the slider"
                                    />
                                    <InputError message={errors.order_no} />
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
