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
import { Course } from '@/pages/backend/course/types';
import { courseDestroy, courseEdit } from '@/routes';
import { router } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Edit, MoreHorizontal } from 'lucide-react';
import React from 'react';

export const courseColumns: ColumnDef<Course>[] = [
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
        cell: ({ row }) => <div>{row.getValue('name')}</div>,
    },
    {
        accessorKey: 'education_level',
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="w-48 justify-start"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Student Course <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="w-48" title={row.getValue('education_level')}>
                {row.getValue('education_level')}
            </div>
        ),
    },
    {
        accessorKey: 'university',
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="w-48 justify-start"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Student Course <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="w-48" title={row.getValue('university')}>
                {row.getValue('university')}
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
                                    courseEdit(Number(row.original.id)),
                                )
                            }
                        >
                            <Edit className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DeleteConfirmDialog
                            onConfirm={() =>
                                router.delete(
                                    courseDestroy(Number(row.original.id)),
                                )
                            }
                        />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        ),
    },
];
