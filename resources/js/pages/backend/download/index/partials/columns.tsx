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
import { downloadDestroy, downloadEdit, downloadFile } from '@/routes';
import { router } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Edit, MoreHorizontal } from 'lucide-react';
import React from 'react';
import { Download } from '@/pages/backend/download/types';

export const downloadColumns: ColumnDef<Download>[] = [
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
        cell: ({ row }) => <div>{row.getValue('name')}</div>,
    },
    {
        accessorKey: 'file',
        header: () => <div className="w-48 justify-start">File</div>,
        cell: ({ row }) => (
            <a
                href={`/download/file/${Number(row.original.id)}`}
                className="w-48 text-blue-600 hover:underline"
                title={row.getValue('file')}
            >
                Download
            </a>
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
                                router.visit(
                                    downloadEdit(Number(row.original.id)),
                                )
                            }
                        >
                            <Edit className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DeleteConfirmDialog
                            onConfirm={() =>
                                router.delete(
                                    downloadDestroy(Number(row.original.id)),
                                )
                            }
                        />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        ),
    },
];
