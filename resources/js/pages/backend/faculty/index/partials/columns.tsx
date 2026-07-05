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
import { Faculty } from '@/pages/backend/faculty/types';
import { facultyDestroy, facultyEdit } from '@/routes';
import { router } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Edit, MoreHorizontal } from 'lucide-react';
import React from 'react';

export const facultyColumns: ColumnDef<Faculty>[] = [
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
                    src={`/storage/${row.getValue('image')}`}
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
        cell: ({ row }) => (
            <div>
                <div>{row.getValue('name')}</div>
                <div className={'text-gray-400'}>{row.original.phone_no}</div>
                <div className={'text-gray-400'}>{row.original.email}</div>
            </div>
        ),
    },
    {
        accessorKey: 'designation',
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="justify-start"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Designation <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div title={row.getValue('designation')}>
                {row.getValue('designation')}
            </div>
        ),
    },
    {
        accessorKey: 'description',
        header: () => <div className="w-[320px] font-medium">Description</div>,
        cell: ({ row }) => {
            const [showMore, setShowMore] = React.useState<boolean>(false);
            const text: string = row.getValue('description');

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
        accessorKey: 'message',
        header: () => <div className="w-[320px] font-medium">Message</div>,
        cell: ({ row }) => {
            const [showMore, setShowMore] = React.useState<boolean>(false);
            const text: string = row.getValue('message');

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
        accessorKey: 'order_no',
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="justify-start"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Order No <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div className={'text-center'} title={row.getValue('order_no')}>
                {row.getValue('order_no')}
            </div>
        ),
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
                                router.visit(
                                    facultyEdit(Number(row.original.id)),
                                )
                            }
                        >
                            <Edit className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DeleteConfirmDialog
                            onConfirm={() =>
                                router.delete(
                                    facultyDestroy(Number(row.original.id)),
                                )
                            }
                        />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        ),
    },
];
