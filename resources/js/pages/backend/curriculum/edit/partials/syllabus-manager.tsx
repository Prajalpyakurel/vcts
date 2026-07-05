import { DeleteConfirmDialog } from '@/components/delete-confirm-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { CurriculumSyllabus } from '@/pages/backend/curriculum/types';
import {
    curriculumSyllabusDestroy,
    curriculumSyllabusStore,
    curriculumSyllabusUpdate,
} from '@/routes';
import { router, useForm } from '@inertiajs/react';
import { Check, Pencil, PlusIcon, X } from 'lucide-react';
import { type FormEvent, useState } from 'react';

function SyllabusRow({ subject }: { subject: CurriculumSyllabus }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(subject.name);

    const save = () => {
        if (!name.trim() || name === subject.name) {
            setIsEditing(false);
            setName(subject.name);
            return;
        }

        router.put(
            curriculumSyllabusUpdate(Number(subject.id)).url,
            { name },
            {
                preserveScroll: true,
                onSuccess: () => setIsEditing(false),
            },
        );
    };

    if (isEditing) {
        return (
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-2">
                <Input
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') save();
                        if (e.key === 'Escape') {
                            setIsEditing(false);
                            setName(subject.name);
                        }
                    }}
                    className="h-8"
                />
                <Button size="icon" className="h-8 w-8 shrink-0" onClick={save}>
                    <Check className="h-4 w-4" />
                </Button>
                <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 shrink-0"
                    onClick={() => {
                        setIsEditing(false);
                        setName(subject.name);
                    }}
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-between gap-2 rounded-lg border border-gray-200 px-3 py-2">
            <span className="text-sm font-medium">{subject.name}</span>
            <div className="flex items-center gap-1">
                <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7"
                    onClick={() => setIsEditing(true)}
                >
                    <Pencil className="h-3.5 w-3.5" />
                </Button>
                <DeleteConfirmDialog
                    description={`This will permanently delete "${subject.name}" from this curriculum's syllabus.`}
                    onConfirm={() =>
                        router.delete(
                            curriculumSyllabusDestroy(Number(subject.id)).url,
                            { preserveScroll: true },
                        )
                    }
                />
            </div>
        </div>
    );
}

export function SyllabusManager({
    curriculaId,
    subjects,
}: {
    curriculaId: number;
    subjects: CurriculumSyllabus[];
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        curricula_id: String(curriculaId),
        name: '',
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post(curriculumSyllabusStore.url(), {
            preserveScroll: true,
            onSuccess: () => reset('name'),
        });
    }

    return (
        <div className="grid gap-3">
            {subjects.length > 0 ? (
                <div className="grid gap-2 sm:grid-cols-2">
                    {subjects.map((subject) => (
                        <SyllabusRow key={subject.id} subject={subject} />
                    ))}
                </div>
            ) : (
                <p className="text-sm text-muted-foreground">
                    No subjects added yet. Add the first one below.
                </p>
            )}

            <form onSubmit={submit} className="flex items-start gap-2 pt-2">
                <div className="flex-1">
                    <Input
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Enter subject name (e.g. Mathematics)"
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                </div>
                <Button type="submit" disabled={processing || !data.name.trim()}>
                    {processing ? (
                        <Spinner className="mr-2" />
                    ) : (
                        <PlusIcon className="mr-2 h-4 w-4" />
                    )}
                    Add
                </Button>
            </form>
        </div>
    );
}
