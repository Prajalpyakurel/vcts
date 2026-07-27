import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { contactStoreFrontend } from '@/routes';
import { useForm } from '@inertiajs/react';
import {
    CheckCircle2,
    Loader2,
    Mail,
    MessageSquare,
    Phone,
    Send,
    User,
} from 'lucide-react';
import { type FormEvent, type ReactNode, useState } from 'react';

const inputClasses =
    'w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-700 placeholder:text-gray-400 transition-all focus:border-[#b8112e] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b8112e]/10';

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
            <DialogContent
                className="max-h-[90vh] overflow-y-auto rounded-2xl border-0 bg-white p-0 shadow-2xl sm:max-w-md"
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {submitted ? (
                    <div className="flex flex-col items-center gap-3 px-6 py-10 text-center sm:px-8">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-50">
                            <CheckCircle2 size={32} className="text-[#b8112e]" />
                        </div>
                        <DialogTitle className="text-xl font-bold text-gray-900">
                            Message Sent
                        </DialogTitle>
                        <DialogDescription className="text-sm text-gray-500">
                            Thanks for reaching out about{' '}
                            <span className="font-medium text-gray-700">
                                {programName}
                            </span>
                            . Our admissions team will get back to you
                            shortly.
                        </DialogDescription>
                        <Button
                            className="mt-3 w-full bg-[#b8112e] hover:bg-[#7d0d22]"
                            onClick={() => onOpenChange(false)}
                        >
                            Close
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="border-b border-gray-100 bg-gradient-to-br from-rose-50 to-white px-6 py-6 sm:px-8">
                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#b8112e]">
                                <Mail size={22} className="text-white" />
                            </div>
                            <DialogTitle className="text-xl font-bold text-gray-900">
                                Contact Admissions
                            </DialogTitle>
                            <DialogDescription className="mt-1 text-sm text-gray-500">
                                Interested in{' '}
                                <span className="font-medium text-gray-700">
                                    {programName}
                                </span>
                                ? Send us your details and we'll be in touch.
                            </DialogDescription>
                        </div>

                        <form
                            onSubmit={submit}
                            className="grid gap-4 px-6 py-6 sm:px-8"
                        >
                            <div>
                                <div className="relative">
                                    <User
                                        size={17}
                                        className="absolute top-1/2 left-4 -translate-y-1/2 text-[#b8112e]"
                                    />
                                    <input
                                        id="admission-name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        placeholder="Your full name"
                                        className={inputClasses}
                                    />
                                </div>
                                {errors.name && (
                                    <p className="mt-1.5 text-xs text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <div className="relative">
                                        <Mail
                                            size={17}
                                            className="absolute top-1/2 left-4 -translate-y-1/2 text-[#b8112e]"
                                        />
                                        <input
                                            id="admission-email"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData(
                                                    'email',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="you@example.com"
                                            className={inputClasses}
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-1.5 text-xs text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div className="relative">
                                        <Phone
                                            size={17}
                                            className="absolute top-1/2 left-4 -translate-y-1/2 text-[#b8112e]"
                                        />
                                        <input
                                            id="admission-phone"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData(
                                                    'phone',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="98XXXXXXXX"
                                            className={inputClasses}
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="mt-1.5 text-xs text-red-600">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className="relative">
                                    <MessageSquare
                                        size={17}
                                        className="absolute top-4 left-4 text-[#b8112e]"
                                    />
                                    <textarea
                                        id="admission-message"
                                        rows={4}
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                'description',
                                                e.target.value,
                                            )
                                        }
                                        className={`${inputClasses} resize-none pt-3.5`}
                                    />
                                </div>
                                {errors.description && (
                                    <p className="mt-1.5 text-xs text-red-600">
                                        {errors.description}
                                    </p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                disabled={processing}
                                className="mt-1 w-full gap-2 rounded-xl bg-[#b8112e] py-5 text-sm font-bold shadow-lg shadow-rose-200 hover:bg-[#7d0d22] hover:shadow-xl"
                            >
                                {processing ? (
                                    <Loader2
                                        size={16}
                                        className="animate-spin"
                                    />
                                ) : (
                                    <Send size={16} />
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
