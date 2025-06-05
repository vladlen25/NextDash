"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { UserInterface } from "@/types/types";
import { RowAction } from "@/app/payments/RowAction";

export const columns: ColumnDef<UserInterface>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        checked={row.getIsSelected()}
      />
    ),
  },
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
          <Button
              className={'ml-[-12px]'}
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            User
            <ArrowUpDown className=" h-4 w-4" />
          </Button>
      );
    },
  },

  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
            className={'ml-[-12px]'}
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className=" h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
  header: ({ column }) => {
  return (
      <Button
          className={'ml-[-12px]'}
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status
        <ArrowUpDown className=" h-4 w-4" />
      </Button>
  );
},

    cell: ({ row,  }) => {
      const status = row.getValue("status");

      return (
        <div
          className={cn(
            `p-1 rounded-md  w-[100px] text-xs`,
            status === "pending" && "bg-yellow-500/40",
            status === "success" && "bg-green-500/40",
            status === "failed" && "bg-red-500/40",
          )}
        >

            {status as string}


        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
          <div  className={'text-right'}>
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="h-4 w-4" />

        </Button>

          </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium pr-4">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <RowAction user={row.original} />;
    },
  },
];
