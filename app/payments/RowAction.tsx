"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { UserInterface } from "@/types/types";
import React from "react";

interface RowActionsProps {
    user: UserInterface;
}

export const RowAction = ({ user }: RowActionsProps) => {
    const router = useRouter();
    const copyId = (id: string, e: React.MouseEvent) => {
        e.stopPropagation()
        navigator.clipboard.writeText(id)
    }
    const viewUser = (id: string, e: React.MouseEvent) => {
        e.stopPropagation()
        router.push(`/users/${id}`)
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                    onClick={(e) => copyId(user.id.toString(), e) }
                >
                    Copy user ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={(e) => viewUser(user.id.toString(), e)}>
                    View user
                </DropdownMenuItem>
                {/*<DropdownMenuItem>View payment details</DropdownMenuItem>*/}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
