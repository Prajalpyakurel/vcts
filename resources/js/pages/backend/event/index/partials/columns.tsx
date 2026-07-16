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
import { eventDestroy, eventEdit } from '@/routes';
import { router } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Edit, MoreHorizontal } from 'lucide-react';
import React from 'react';
import {Event} from '@/pages/backend/event/types';

export const eventColumns: ColumnDef<Event>[] = [
    {
        id: 'sn',
        header: 'S.N',
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: 'image',
        header: 'Image',
        cell: ({ row }) => (
            <span className="p-3">
                <img
                    src={
                        row.getValue('image')
                            ? `/storage/${row.getValue('image')}`
                            : '/assets/images/logo/logo_2.png'
                    }
                    alt="hero-image"
                    className="h-12 w-12 rounded-full object-cover"
                />
            </span>
        ),
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
        cell: ({ row }) => <div>{row.getValue('name')}</div>,
    },
    {
        accessorKey: 'event_date',
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="w-48 justify-start"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Event Date <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="w-48" title={row.getValue('event_date')}>
                {row.getValue('event_date')}
            </div>
        ),
    },
    {
        accessorKey: 'event_time',
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="w-48 justify-start"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Event Time <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="w-48" title={row.getValue('event_time')}>
                {row.getValue('event_time')}
            </div>
        ),
    },
    {
        accessorKey: 'event_venue',
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="w-48 justify-start"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Event Venue <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="w-48" title={row.getValue('event_venue')}>
                {row.getValue('event_venue')}
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
        accessorKey: 'status',
        header: () => <div>Status</div>,
        cell: ({ row }) => {
            const value: string = row.getValue('status');
            return (
                <Badge variant={value === 'active' ? 'default' : 'destructive'}>
                    {value}
                </Badge>
            );
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
                                router.visit(eventEdit(Number(row.original.id)))
                            }
                        >
                            <Edit className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DeleteConfirmDialog
                            onConfirm={() =>
                                router.delete(
                                    eventDestroy(Number(row.original.id)),
                                )
                            }
                        />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        ),
    },
];
