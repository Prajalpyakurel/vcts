import { Faculty } from '@/pages/backend/faculty/types';
import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export function getInitials(name: string) {
    return name
        .trim()
        .split(/\s+/)
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();
}

export function FacultyAvatar({ faculty }: { faculty: Faculty }) {
    const [imageFailed, setImageFailed] = useState(false);

    if (faculty.image && !imageFailed) {
        return (
            <img
                src={`/storage/${faculty.image}`}
                alt={faculty.name}
                onError={() => setImageFailed(true)}
                className="h-28 w-28 shrink-0 rounded-full object-cover ring-4 ring-rose-50 transition-transform duration-300 group-hover:scale-105"
            />
        );
    }

    return (
        <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#003893] to-[#b8112e] text-2xl font-bold text-white ring-4 ring-rose-50 transition-transform duration-300 group-hover:scale-105">
            {getInitials(faculty.name)}
        </div>
    );
}

export function FacultyCard({ faculty }: { faculty: Faculty }) {
    return (
        <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Top gradient bar */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#e2a63b] to-[#b8112e]" />

            <FacultyAvatar faculty={faculty} />

            {/* Identity */}
            <h3 className="mt-5 text-lg font-bold text-gray-900 capitalize">
                {faculty.name}
            </h3>
            <span className="mt-2 inline-flex items-center rounded-lg bg-rose-50 px-2.5 py-1 text-xs font-semibold text-[#b8112e]">
                {faculty.designation}
            </span>

            {/* Description */}
            {faculty.description && (
                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-500">
                    {faculty.description}
                </p>
            )}

            {/* Contact */}
            {(faculty.email || faculty.phone_no) && (
                <div className="mt-5 flex w-full flex-col gap-1.5 border-t border-gray-100 pt-4">
                    {faculty.email && (
                        <a
                            href={`mailto:${faculty.email}`}
                            className="flex items-center justify-center gap-2 text-xs text-gray-500 transition-colors hover:text-[#b8112e]"
                        >
                            <Mail size={13} className="shrink-0 text-[#b8112e]" />
                            <span className="truncate">{faculty.email}</span>
                        </a>
                    )}
                    {faculty.phone_no && (
                        <a
                            href={`tel:${faculty.phone_no}`}
                            className="flex items-center justify-center gap-2 text-xs text-gray-500 transition-colors hover:text-[#b8112e]"
                        >
                            <Phone size={13} className="shrink-0 text-[#b8112e]" />
                            {faculty.phone_no}
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}
