"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { ExpenseInterface } from "@/types/types";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const CATEGORIES = [
  "Housing",
  "Food",
  "Transport",
  "Entertainment",
  "Health",
  "Education",
  "Other",
];

interface Props {
  open: boolean;
  onCloseAction: () => void;
  expense?: ExpenseInterface | null;
  onCreateAction: (expense: ExpenseInterface) => void;
  onUpdateAction: (expense: ExpenseInterface) => void;
  onDeleteAction: (id: number) => void;
}

function initForm(expense?: ExpenseInterface | null): ExpenseInterface {
  return expense
    ? { ...expense }
    : {
        id: Date.now(),
        amount: undefined,
        category: "",
        month: "",
        description: "",
      };
}

function ExpenseFields({
  form,
  onChange,
  onSelect,
}: {
  form: ExpenseInterface;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSelect: (name: keyof ExpenseInterface, value: string) => void;
}) {
  return (
    <div className="grid gap-4 py-4">
      {/* Amount */}
      <div className="space-y-1.5">
        <Label>Amount</Label>
        <Input
          name="amount"
          type="number"
          min={0}
          placeholder="Amount"
          value={form.amount ?? ""}
          onChange={onChange}
        />
      </div>

      {/* Category */}
      <div className="space-y-1.5">
        <Label>Category</Label>
        <Select
          value={form.category}
          onValueChange={(val) => onSelect("category", val)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Month */}
      <div className="space-y-1.5">
        <Label>Month</Label>
        <Select
          value={form.month}
          onValueChange={(val) => onSelect("month", val)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            {MONTHS.map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <Label>Description</Label>
        <Input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default function AppExpenseModal({
  open,
  onCloseAction,
  expense,
  onCreateAction,
  onUpdateAction,
  onDeleteAction,
}: Props) {
  const isEditing = Boolean(expense);
  const [form, setForm] = useState<ExpenseInterface>(initForm(expense));

  useEffect(() => {
    setForm(initForm(expense));
  }, [expense]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };
  const handleSelect = (name: keyof ExpenseInterface, value: string) => {
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = () => {
    if (isEditing) {
      onUpdateAction(form);
    } else {
      onCreateAction({ ...form, id: Date.now() });
    }
    onCloseAction();
  };

  const handleDelete = () => {
    if (expense) onDeleteAction(expense.id);
    onCloseAction();
  };

  return (
    <Dialog key={expense?.id ?? "new"} open={open} onOpenChange={onCloseAction}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit" : "Add"} Expense</DialogTitle>
        </DialogHeader>

        <ExpenseFields
          form={form}
          onChange={handleChange}
          onSelect={handleSelect}
        />

        <DialogFooter className="justify-between">
          {isEditing && (
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          )}
          <div className="ml-auto flex gap-2">
            <Button variant="outline" onClick={onCloseAction}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>{isEditing ? "Save" : "Add"}</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
