import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import { contactStoreFrontend } from '@/routes';
import { FlashMessageInterface, SharedData } from '@/types';
import { useFlashMessage } from '@/utils/globalFunctions';
import { useForm, usePage } from '@inertiajs/react';
import { type FormEvent } from 'react';
import {
    Clock,
    Facebook,
    Instagram,
    Linkedin,
    Loader2,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Send,
    Twitter,
    User,
    Youtube,
} from 'lucide-react';
import { Toaster } from 'react-hot-toast';

const inputClasses =
    'w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-sm text-gray-700 placeholder:text-gray-400 transition-all focus:border-[#b8112e] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b8112e]/10';

export default function Index({ flash }: { flash: FlashMessageInterface }) {
    const { system } = usePage<SharedData>().props;

    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'Contact Us', href: '/contacts', isActive: true },
    ];

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        subject: '',
        phone: '',
        description: '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post(contactStoreFrontend().url, {
            preserveScroll: true,
            onSuccess: () => {
                setData({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    description: '',
                });
            },
        });
    };

    useFlashMessage({ flash });

    const infoCards = [
        {
            icon: Mail,
            label: 'Email Address',
            lines: [system?.email].filter(Boolean),
            href: system?.email ? `mailto:${system.email}` : undefined,
        },
        {
            icon: MapPin,
            label: 'Our Location',
            lines: [system?.address].filter(Boolean),
            href: system?.map_link || undefined,
        },
        {
            icon: Phone,
            label: 'Phone Number',
            lines: [system?.phone].filter(Boolean),
            href: system?.phone ? `tel:${system.phone}` : undefined,
        },
    ];

    const socials = [
        { icon: Facebook, href: system?.facebook_link, label: 'Facebook' },
        { icon: Twitter, href: system?.twitter_link, label: 'Twitter' },
        { icon: Instagram, href: system?.instagram_link, label: 'Instagram' },
        { icon: Linkedin, href: system?.linkedin_link, label: 'LinkedIn' },
        { icon: Youtube, href: system?.youtube_link, label: 'YouTube' },
    ].filter((s) => s.href);

    const cardsRef = useScrollReveal<HTMLDivElement>({ y: 28, stagger: 0.12 });
    const formRef = useScrollReveal<HTMLDivElement>({ selector: 'self', x: -30, y: 0, duration: 0.9 });
    const sidebarRef = useScrollReveal<HTMLDivElement>({ selector: 'self', x: 30, y: 0, duration: 0.9 });

    return (
        <BannerPageLayout
            title="Contact Us"
            breadcrumbs={breadcrumbs}
            pageTitle="Contact Us"
        >
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mx-auto mb-14 max-w-2xl text-center">
                        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8112e]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b8112e]" />
                            Get In Touch
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            We'd Love to{' '}
                            <span className="text-[#b8112e]">Hear From You</span>
                        </h2>
                        <p className="mt-3 text-gray-500">
                            Have a question about admissions, programs, or campus
                            life? Reach out — our team is here to help.
                        </p>
                    </div>

                    {/* Info cards */}
                    <div
                        ref={cardsRef}
                        className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3"
                    >
                        {infoCards.map((card, i) => (
                            <a
                                key={i}
                                href={card.href}
                                target={card.label === 'Our Location' ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#003893] to-[#b8112e] transition-transform duration-300 group-hover:scale-110">
                                    <card.icon size={24} className="text-white" />
                                </div>
                                <div className="min-w-0">
                                    <p className="mb-1 text-xs font-bold tracking-widest text-gray-400 uppercase">
                                        {card.label}
                                    </p>
                                    {card.lines.length > 0 ? (
                                        card.lines.map((line, j) => (
                                            <p
                                                key={j}
                                                className="truncate font-semibold text-gray-900"
                                            >
                                                {line}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="text-gray-400">Not available</p>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Form + sidebar */}
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                        {/* Form */}
                        <div
                            ref={formRef}
                            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-8 lg:p-10"
                        >
                            <h3 className="mb-2 text-2xl font-bold text-gray-900">
                                Send Us a Message
                            </h3>
                            <p className="mb-8 text-sm text-gray-500">
                                Your email address will not be published.
                                Required fields are marked *
                            </p>

                            <form onSubmit={submit} className="space-y-5">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div>
                                        <div className="relative">
                                            <User
                                                size={18}
                                                className="absolute top-1/2 left-4 -translate-y-1/2 text-[#b8112e]"
                                            />
                                            <input
                                                name="name"
                                                id="name"
                                                type="text"
                                                placeholder="Enter your name*"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData('name', e.target.value)
                                                }
                                                className={inputClasses}
                                            />
                                        </div>
                                        {errors.name && (
                                            <p className="mt-1.5 text-xs text-red-600">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <div className="relative">
                                            <Mail
                                                size={18}
                                                className="absolute top-1/2 left-4 -translate-y-1/2 text-[#b8112e]"
                                            />
                                            <input
                                                name="email"
                                                id="email"
                                                type="email"
                                                placeholder="Enter email address*"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData('email', e.target.value)
                                                }
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
                                            <MessageSquare
                                                size={18}
                                                className="absolute top-1/2 left-4 -translate-y-1/2 text-[#b8112e]"
                                            />
                                            <input
                                                name="subject"
                                                type="text"
                                                value={data.subject}
                                                onChange={(e) =>
                                                    setData('subject', e.target.value)
                                                }
                                                placeholder="Subject"
                                                className={inputClasses}
                                            />
                                        </div>
                                        {errors.subject && (
                                            <p className="mt-1.5 text-xs text-red-600">
                                                {errors.subject}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <div className="relative">
                                            <Phone
                                                size={18}
                                                className="absolute top-1/2 left-4 -translate-y-1/2 text-[#b8112e]"
                                            />
                                            <input
                                                name="phone"
                                                type="text"
                                                placeholder="Your phone number"
                                                value={data.phone}
                                                onChange={(e) =>
                                                    setData('phone', e.target.value)
                                                }
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
                                            size={18}
                                            className="absolute top-4 left-4 text-[#b8112e]"
                                        />
                                        <textarea
                                            name="description"
                                            id="description"
                                            placeholder="Write your message here*"
                                            value={data.description}
                                            onChange={(e) =>
                                                setData(
                                                    'description',
                                                    e.target.value,
                                                )
                                            }
                                            rows={6}
                                            className={`${inputClasses} resize-none pt-4`}
                                        />
                                    </div>
                                    {errors.description && (
                                        <p className="mt-1.5 text-xs text-red-600">
                                            {errors.description}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#b8112e] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-200 transition-all duration-200 hover:bg-[#7d0d22] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {processing ? (
                                        <Loader2 size={18} className="animate-spin" />
                                    ) : (
                                        <Send size={18} />
                                    )}
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Sidebar */}
                        <div ref={sidebarRef} className="lg:col-span-4">
                            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#001b44] via-[#003893] to-[#b8112e] p-8">
                                <div className="pointer-events-none absolute" />
                                <h4 className="mb-6 text-lg font-bold text-white">
                                    Office Hours
                                </h4>
                                <div className="space-y-4 text-sm text-white/80">
                                    <div className="flex items-center gap-3">
                                        <Clock size={18} className="shrink-0 text-[#e2a63b]" />
                                        <span>Sunday – Friday: 9:00 AM – 5:00 PM</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock size={18} className="shrink-0 text-[#e2a63b]" />
                                        <span>Saturday: Closed</span>
                                    </div>
                                </div>

                                {socials.length > 0 && (
                                    <>
                                        <div className="my-6 h-px bg-white/10" />
                                        <p className="mb-3 text-xs font-bold tracking-widest text-white/50 uppercase">
                                            Follow Us
                                        </p>
                                        <div className="flex gap-2">
                                            {socials.map(({ icon: Icon, href, label }) => (
                                                <a
                                                    key={label}
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={label}
                                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/80 transition-all duration-200 hover:bg-white hover:text-[#b8112e]"
                                                >
                                                    <Icon size={16} />
                                                </a>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Toaster position="top-right" reverseOrder={true} />
        </BannerPageLayout>
    );
}
