import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { contactStoreFrontend } from '@/routes';
import { useForm } from '@inertiajs/react';
import { CheckCircle2, Loader2, Mail } from 'lucide-react';
import { type FormEvent, type ReactNode, useState } from 'react';

export function AdmissionInquiryDialog({
    programName,
    trigger,
}: {
    programName: string;
    trigger: ReactNode;
}) {
    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: `Admission Inquiry: ${programName}`,
        description: `I'm interested in the ${programName} program. Please share more details on eligibility, fees, and intake dates.`,
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post(contactStoreFrontend().url, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => setSubmitted(true),
        });
    }

    function onOpenChange(next: boolean) {
        setOpen(next);
        if (!next) {
            // Reset after the close animation finishes
            setTimeout(() => {
                setSubmitted(false);
                reset('name', 'email', 'phone');
            }, 200);
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="sm:max-w-md">
                {submitted ? (
                    <div className="flex flex-col items-center gap-3 py-6 text-center">
                        <CheckCircle2 size={40} className="text-[#b8112e]" />
                        <DialogTitle>Message sent</DialogTitle>
                        <DialogDescription>
                            Thanks for reaching out about {programName}. Our
                            admissions team will get back to you shortly.
                        </DialogDescription>
                        <Button
                            className="mt-2"
                            onClick={() => onOpenChange(false)}
                        >
                            Close
                        </Button>
                    </div>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle>Contact Admissions</DialogTitle>
                            <DialogDescription>
                                Interested in {programName}? Send us your
                                details and we'll be in touch.
                            </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={submit} className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="admission-name">Name</Label>
                                <Input
                                    id="admission-name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    placeholder="Your full name"
                                />
                                {errors.name && (
                                    <p className="text-xs text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="admission-email">
                                        Email
                                    </Label>
                                    <Input
                                        id="admission-email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        placeholder="you@example.com"
                                    />
                                    {errors.email && (
                                        <p className="text-xs text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="admission-phone">
                                        Phone
                                    </Label>
                                    <Input
                                        id="admission-phone"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData('phone', e.target.value)
                                        }
                                        placeholder="98XXXXXXXX"
                                    />
                                    {errors.phone && (
                                        <p className="text-xs text-red-600">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="admission-message">
                                    Message
                                </Label>
                                <Textarea
                                    id="admission-message"
                                    rows={4}
                                    value={data.description}
                                    onChange={(e) =>
                                        setData(
                                            'description',
                                            e.target.value,
                                        )
                                    }
                                />
                                {errors.description && (
                                    <p className="text-xs text-red-600">
                                        {errors.description}
                                    </p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                disabled={processing}
                                className="mt-1 w-full bg-[#b8112e] hover:bg-[#7d0d22]"
                            >
                                {processing ? (
                                    <Loader2
                                        size={16}
                                        className="mr-2 animate-spin"
                                    />
                                ) : (
                                    <Mail size={16} className="mr-2" />
                                )}
                                Send Inquiry
                            </Button>
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
