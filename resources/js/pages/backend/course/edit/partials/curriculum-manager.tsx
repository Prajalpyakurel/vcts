import { DeleteConfirmDialog } from '@/components/delete-confirm-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { CourseCurriculum } from '@/pages/backend/course/types';
import { SyllabusManager } from '@/pages/backend/curriculum/edit/partials/syllabus-manager';
import {
    courseEdit,
    curriculumDestroy,
    curriculumStore,
    curriculumUpdate,
} from '@/routes';
import { router, useForm } from '@inertiajs/react';
import { Check, ChevronDown, Pencil, PlusIcon, X } from 'lucide-react';
import { type FormEvent, useState } from 'react';

function CurriculumRow({
    curriculum,
    courseId,
    isOpen,
    onToggleOpen,
}: {
    curriculum: CourseCurriculum;
    courseId: number;
    isOpen: boolean;
    onToggleOpen: () => void;
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(curriculum.name);
    const [creditHours, setCreditHours] = useState(curriculum.credit_hours);
    const [duration, setDuration] = useState(curriculum.curricula_duration);
    const [saving, setSaving] = useState(false);

    const redirectTo = courseEdit(courseId).url;

    function save() {
        setSaving(true);
        router.put(
            curriculumUpdate(Number(curriculum.id)).url,
            {
                course_id: courseId,
                name,
                credit_hours: creditHours,
                curricula_duration: duration,
                redirect_to: redirectTo,
            },
            {
                preserveScroll: true,
                onSuccess: () => setIsEditing(false),
                onFinish: () => setSaving(false),
            },
        );
    }

    function cancel() {
        setName(curriculum.name);
        setCreditHours(curriculum.credit_hours);
        setDuration(curriculum.curricula_duration);
        setIsEditing(false);
    }

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200">
            <div className="flex flex-wrap items-center gap-3 p-4">
                {isEditing ? (
                    <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-3">
                        <Input
                            autoFocus
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Year 1"
                        />
                        <Input
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            placeholder="e.g. 1 Year"
                        />
                        <Input
                            value={creditHours}
                            onChange={(e) => setCreditHours(e.target.value)}
                            placeholder="Credit hours"
                        />
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={onToggleOpen}
                        className="flex flex-1 items-center gap-3 text-left"
                    >
                        <ChevronDown
                            size={18}
                            className={`shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        />
                        <div>
                            <p className="font-semibold text-gray-900">
                                {curriculum.name}
                            </p>
                            <p className="text-xs text-gray-500">
                                {curriculum.curricula_duration}
                                {curriculum.credit_hours &&
                                    curriculum.credit_hours !== '—' &&
                                    ` · ${curriculum.credit_hours} credit hours`}
                                {' · '}
                                {curriculum.curriculum_syllabus.length} subject
                                {curriculum.curriculum_syllabus.length === 1
                                    ? ''
                                    : 's'}
                            </p>
                        </div>
                    </button>
                )}

                <div className="flex shrink-0 items-center gap-1">
                    {isEditing ? (
                        <>
                            <Button
                                size="icon"
                                className="h-8 w-8"
                                onClick={save}
                                disabled={saving}
                            >
                                {saving ? (
                                    <Spinner className="h-4 w-4" />
                                ) : (
                                    <Check className="h-4 w-4" />
                                )}
                            </Button>
                            <Button
                                size="icon"
                                variant="outline"
                                className="h-8 w-8"
                                onClick={cancel}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8"
                                onClick={() => setIsEditing(true)}
                            >
                                <Pencil className="h-3.5 w-3.5" />
                            </Button>
                            <DeleteConfirmDialog
                                description={`This will permanently delete "${curriculum.name}" and all ${curriculum.curriculum_syllabus.length} of its subjects.`}
                                onConfirm={() =>
                                    router.delete(
                                        curriculumDestroy(
                                            Number(curriculum.id),
                                        ).url,
                                        {
                                            data: { redirect_to: redirectTo },
                                            preserveScroll: true,
                                        },
                                    )
                                }
                            />
                        </>
                    )}
                </div>
            </div>

            {isOpen && !isEditing && (
                <div className="border-t border-gray-100 bg-gray-50/60 p-4">
                    <p className="mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                        Subjects
                    </p>
                    <SyllabusManager
                        curriculaId={Number(curriculum.id)}
                        subjects={curriculum.curriculum_syllabus}
                    />
                </div>
            )}
        </div>
    );
}

export function CurriculumManager({
    courseId,
    curricula,
}: {
    courseId: number;
    curricula: CourseCurriculum[];
}) {
    const [openId, setOpenId] = useState<string | null>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        course_id: String(courseId),
        name: '',
        credit_hours: '',
        curricula_duration: '',
        redirect_to: courseEdit(courseId).url,
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post(curriculumStore.url(), {
            preserveScroll: true,
            onSuccess: () =>
                reset('name', 'credit_hours', 'curricula_duration'),
        });
    }

    return (
        <div className="grid gap-4">
            {curricula.length > 0 ? (
                <div className="grid gap-3">
                    {curricula.map((curriculum) => (
                        <CurriculumRow
                            key={curriculum.id}
                            curriculum={curriculum}
                            courseId={courseId}
                            isOpen={openId === curriculum.id}
                            onToggleOpen={() =>
                                setOpenId(
                                    openId === curriculum.id
                                        ? null
                                        : curriculum.id,
                                )
                            }
                        />
                    ))}
                </div>
            ) : (
                <p className="text-sm text-muted-foreground">
                    No curriculum years added yet. Add the first one below.
                </p>
            )}

            <form
                onSubmit={submit}
                className="grid grid-cols-1 gap-3 rounded-xl border border-dashed border-gray-300 p-4 sm:grid-cols-4"
            >
                <div className="sm:col-span-1">
                    <Label htmlFor="curriculum-name" className="mb-1.5 text-xs">
                        Name
                    </Label>
                    <Input
                        id="curriculum-name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="e.g. Year 1"
                    />
                    {errors.name && (
                        <p className="mt-1 text-xs text-red-600">
                            {errors.name}
                        </p>
                    )}
                </div>
                <div className="sm:col-span-1">
                    <Label
                        htmlFor="curriculum-duration"
                        className="mb-1.5 text-xs"
                    >
                        Duration
                    </Label>
                    <Input
                        id="curriculum-duration"
                        value={data.curricula_duration}
                        onChange={(e) =>
                            setData('curricula_duration', e.target.value)
                        }
                        placeholder="e.g. 1 Year"
                    />
                    {errors.curricula_duration && (
                        <p className="mt-1 text-xs text-red-600">
                            {errors.curricula_duration}
                        </p>
                    )}
                </div>
                <div className="sm:col-span-1">
                    <Label
                        htmlFor="curriculum-credit-hours"
                        className="mb-1.5 text-xs"
                    >
                        Credit Hours
                    </Label>
                    <Input
                        id="curriculum-credit-hours"
                        value={data.credit_hours}
                        onChange={(e) =>
                            setData('credit_hours', e.target.value)
                        }
                        placeholder="Optional"
                    />
                    {errors.credit_hours && (
                        <p className="mt-1 text-xs text-red-600">
                            {errors.credit_hours}
                        </p>
                    )}
                </div>
                <div className="flex items-end sm:col-span-1">
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={processing || !data.name.trim()}
                    >
                        {processing ? (
                            <Spinner className="mr-2 h-4 w-4" />
                        ) : (
                            <PlusIcon className="mr-2 h-4 w-4" />
                        )}
                        Add Year
                    </Button>
                </div>
            </form>
        </div>
    );
}
