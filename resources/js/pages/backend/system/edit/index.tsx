import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AppLayout from '@/layouts/backend/app/auth/auth-layout';
import { System } from '@/pages/backend/system/types';
import { systemInformationUpdate } from '@/routes';
import { BreadcrumbItem, FlashMessageInterface } from '@/types';
import { handleChange } from '@/utils/globalFunctions';
import { useForm } from '@inertiajs/react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'System', href: '#' },
    { title: 'Edit', href: '#' },
];

export default function Edit({
    system,
    flash,
}: {
    system: System;
    flash: FlashMessageInterface;
}) {
    const { data, setData, post, errors, processing } = useForm({
        logo: null,
        name: system?.name ?? '',
        email: system?.email ?? '',
        phone: system?.phone ?? '',
        facebook_link: system?.facebook_link ?? '',
        instagram_link: system?.instagram_link ?? '',
        youtube_link: system?.youtube_link ?? '',
        whatsapp_link: system?.whatsapp_link ?? '',
        twitter_link: system?.twitter_link ?? '',
        linkedin_link: system?.linkedin_link ?? '',
        address: system?.address ?? '',
        map_link: system?.map_link ?? '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(systemInformationUpdate().url, {
            forceFormData: true,
        });
    }

    return (
        <AppLayout title="Edit System" breadcrumbs={breadcrumbs} flash={flash}>
            <div className="flex flex-col gap-4 p-4">
                <div className="max-w-4xl">
                    <form
                        onSubmit={submit}
                        className="flex flex-col gap-6"
                        encType="multipart/form-data"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Edit System</CardTitle>
                            </CardHeader>

                            <CardContent className="grid gap-6">
                                {/* Logo */}
                                <div className="grid gap-2">
                                    <Label htmlFor="logo">System Logo</Label>
                                    <Input
                                        id="logo"
                                        type="file"
                                        name="logo"
                                        onChange={(e) =>
                                            handleChange(e, setData, 'logo')
                                        }
                                    />
                                    <InputError message={errors.logo} />
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
                                        placeholder="Enter system name"
                                    />
                                    <InputError message={errors.name} />
                                </div>

                                {/* Email */}
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
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
                                        value={data.phone || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'phone')
                                        }
                                        placeholder="Enter phone number"
                                    />
                                    <InputError message={errors.phone} />
                                </div>

                                {/* Address */}
                                <div className="grid gap-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Input
                                        id="address"
                                        name="address"
                                        value={data.address || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'address')
                                        }
                                        placeholder="Enter address"
                                    />
                                    <InputError message={errors.address} />
                                </div>

                                {/* Map Link */}
                                <div className="grid gap-2">
                                    <Label htmlFor="map_link">Map Link</Label>
                                    <Input
                                        id="map_link"
                                        name="map_link"
                                        value={data.map_link || ''}
                                        onChange={(e) =>
                                            handleChange(e, setData, 'map_link')
                                        }
                                        placeholder="Enter Google Map link"
                                    />
                                    <InputError message={errors.map_link} />
                                </div>

                                {/* Social Links */}
                                <div className="grid gap-2">
                                    <Label htmlFor="facebook_link">
                                        Facebook
                                    </Label>
                                    <Input
                                        id="facebook_link"
                                        name="facebook_link"
                                        type={'url'}
                                        value={data.facebook_link || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'facebook_link',
                                            )
                                        }
                                        placeholder="Facebook URL"
                                    />
                                    <InputError
                                        message={errors.facebook_link}
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="linkedin_link">
                                        Linked In
                                    </Label>
                                    <Input
                                        id="linkedin_link"
                                        name="linkedin_link"
                                        type={'url'}
                                        value={data.linkedin_link || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'linkedin_link',
                                            )
                                        }
                                        placeholder="LinkedIn URL"
                                    />
                                    <InputError
                                        message={errors.linkedin_link}
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="instagram_link">
                                        Instagram
                                    </Label>
                                    <Input
                                        id="instagram_link"
                                        type={'url'}
                                        name="instagram_link"
                                        value={data.instagram_link || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'instagram_link',
                                            )
                                        }
                                        placeholder="Instagram URL"
                                    />
                                    <InputError
                                        message={errors.instagram_link}
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="youtube_link">
                                        YouTube
                                    </Label>
                                    <Input
                                        id="youtube_link"
                                        type={'url'}
                                        name="youtube_link"
                                        value={data.youtube_link || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'youtube_link',
                                            )
                                        }
                                        placeholder="YouTube URL"
                                    />
                                    <InputError message={errors.youtube_link} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="whatsapp_link">
                                        WhatsApp
                                    </Label>
                                    <Input
                                        id="whatsapp_link"
                                        type={'url'}
                                        name="whatsapp_link"
                                        value={data.whatsapp_link || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'whatsapp_link',
                                            )
                                        }
                                        placeholder="WhatsApp URL"
                                    />
                                    <InputError
                                        message={errors.whatsapp_link}
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="twitter_link">
                                        Twitter
                                    </Label>
                                    <Input
                                        id="twitter_link"
                                        type={'url'}
                                        name="twitter_link"
                                        value={data.twitter_link || ''}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                setData,
                                                'twitter_link',
                                            )
                                        }
                                        placeholder="Twitter URL"
                                    />
                                    <InputError message={errors.twitter_link} />
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
