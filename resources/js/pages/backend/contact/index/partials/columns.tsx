import { DeleteConfirmDialog } from '@/components/delete-confirm-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Contact } from '@/pages/backend/contact/types';
import { contactDestroy, contactEdit } from '@/routes';
import { router } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Edit, MoreHorizontal } from 'lucide-react';
import React from 'react';

const statusConfig: Record<
    string,
    {
        label: string;
        variant: 'default' | 'secondary' | 'outline' | 'destructive';
    }
> = {
    new: {
        label: 'New',
        variant: 'secondary',
    },
    in_review: {
        label: 'In Review',
        variant: 'outline',
    },
    contracted: {
        label: 'Contracted',
        variant: 'default',
    },
    closed: {
        label: 'Closed',
        variant: 'secondary',
    },
    dropped: {
        label: 'Dropped',
        variant: 'destructive',
    },
};


export const contactColumns: ColumnDef<Contact>[] = [
    {
        id: 'sn',
        header: 'S.N',
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: 'name',
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="w-48 justify-start"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Name <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div>
                {row.getValue('name')}
                <p className={'text-gray-600'}>{row.original.email}</p>
                <p className={'text-gray-600'}>{row.original.phone}</p>
            </div>
        ),
    },
    {
        accessorKey: 'subject',
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="w-48 justify-start"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Subject <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="w-48" title={row.getValue('subject')}>
                {row.getValue('subject')}
            </div>
        ),
    },
    {
        accessorKey: 'description',
        header: () => <div className="w-[320px] font-medium">Description</div>,
        cell: ({ row }) => {
            const [showMore, setShowMore] = React.useState<boolean>(false);
            const text: string = row.getValue('description') ?? '';

            return (
                <div className="w-[320px]">
                    <p
                        className={`truncate ${showMore ? 'overflow-visible text-wrap' : ''}`}
                        title={!showMore ? text : undefined}
                    >
                        {text}
                    </p>
                    {text.length > 50 && (
                        <Button
                            variant="link"
                            size="sm"
                            className="mt-1 p-0"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? 'Show Less' : 'Show More'}
                        </Button>
                    )}
                </div>
            );
        },
    },
    {
        accessorKey: 'formatted_date',
        header: () => <div className="w-48 justify-start">Date</div>,
        cell: ({ row }) => (
            <div className="w-48" title={row.getValue('formatted_date')}>
                {row.getValue('formatted_date')}
            </div>
        ),
    },
    {
        accessorKey: 'status',
        header: () => <div className="w-48 justify-start">Status</div>,
        cell: ({ row }) => {
            const value = row.getValue<string>('status');
            const status = statusConfig[value];

            if (!status) return null;

            return <Badge variant={status.variant}>{status.label}</Badge>;
        },
    },
    {
        id: 'actions',
        header: () => <div className="text-right">Actions</div>,
        cell: ({ row }) => (
            <div className="flex justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                router.visit(
                                    contactEdit(Number(row.original.id)),
                                )
                            }
                        >
                            <Edit className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DeleteConfirmDialog
                            onConfirm={() =>
                                router.delete(
                                    contactDestroy(Number(row.original.id)),
                                )
                            }
                        />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        ),
    },
];
