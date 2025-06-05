"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TablePagination } from "./TablePagination";
import { useState } from "react";

interface DataTableProps<TData extends { id: number }, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData extends { id: number }, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getRowId: (row) => row.id.toString(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
  });

  return (
    <div className="w-full max-w-full space-y-4">
      {/* Desktop версия - обычная таблица */}
      <div className="hidden md:block rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => row.toggleSelected()}
                  className="cursor-pointer dark:hover:bg-muted transition hover:bg-green-100"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile версия - карточки с вертикальным layout */}
      <div className="md:hidden space-y-3 w-full max-w-full">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <div
              key={row.id}
              className="rounded-lg border bg-card shadow-sm cursor-pointer hover:bg-muted/50 transition-colors w-full"
              onClick={() => row.toggleSelected()}
              data-state={row.getIsSelected() && "selected"}
            >
              {/* Поля - каждое на отдельной строке */}
              <div className="p-3 space-y-3">
                {row.getVisibleCells().map((cell, index) => {
                  const header = cell.column.columnDef.header;

                  // Определяем название поля на основе заголовка или позиции
                  let headerText = "";
                  if (typeof header === "string") {
                    headerText = header;
                  } else {
                    const fieldNames = [
                      "Ready",
                      "User",
                      "Email",
                      "Status",
                      "Amount",
                      "Actions",
                    ];
                    headerText = fieldNames[index] || `Поле ${index + 1}`;
                  }

                  return (
                    <div
                      key={cell.id}
                      className="flex justify-between items-center py-1"
                    >
                      <span className="text-sm text-muted-foreground font-medium">
                        {headerText}:
                      </span>
                      <span className="text-sm font-medium text-right ml-4">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No results.
          </div>
        )}
      </div>

      <TablePagination table={table} />
    </div>
  );
}
