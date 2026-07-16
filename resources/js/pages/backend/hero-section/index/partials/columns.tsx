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
import { HeroItem } from '@/pages/backend/hero-section/types';
import { heroSectiondestroy, heroSectionedit } from '@/routes';
import { router } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { Edit, MoreHorizontal } from 'lucide-react';
import React from 'react';

export const heroSectionColumns: ColumnDef<HeroItem>[] = [
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
        accessorKey: 'title',
        header: 'Title',
        cell: ({ row }) => (
            <div className="w-48" title={row.getValue('title')}>
                {row.getValue('title')}
            </div>
        ),
    },
    {
        accessorKey: 'subtitle',
        header: 'Sub Title',
        cell: ({ row }) => (
            <div className="w-48" title={row.getValue('subtitle')}>
                {row.getValue('subtitle')}
            </div>
        ),
    },
    {
        accessorKey: 'order_no',
        header: 'Order',
        cell: ({ row }) => <div>{row.getValue('order_no')}</div>,
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
                                    heroSectionedit(Number(row.original.id)),
                                )
                            }
                        >
                            <Edit className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DeleteConfirmDialog
                            onConfirm={() =>
                                router.delete(
                                    heroSectiondestroy(Number(row.original.id)),
                                )
                            }
                        />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        ),
    },
];
