import { FlashMessageInterface } from '@/types';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

type FlashType = 'success' | 'error' | 'info' | 'warning';

export const handleChange = (
    e: any,
    setData: any,
    field?: any,
) => {
    // For Select component
    if (typeof e === 'string' && field) {
        setData(field, e);
        return;
    }

    const target = e.target as HTMLInputElement;

    // File input
    if (target.type === 'file') {
        setData(target.name, target.files?.[0] ?? null);
        return;
    }

    // Text inputs & textarea
    setData(target.name, target.value);
};

export const useFlashMessage = ({
    flash,
}: {
    flash: FlashMessageInterface;
}) => {
    useEffect(() => {
        if (!flash) return;

        (Object.entries(flash) as [FlashType, string | undefined][]).forEach(
            ([type, message]) => {
                if (!message) return;

                // @ts-ignore
                toast[type](message, {
                    duration: 5000,
                    dismissible: true,
                    classNames: {
                        description:
                            'text-foreground/80 dark:text-foreground/70',
                    },
                });
            },
        );
    }, [flash]);

    return null;
};
