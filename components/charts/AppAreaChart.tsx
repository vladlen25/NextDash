"use client";

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AppExpenseModal from "@/components/modal/AppExpenseModal";
import { useExpenseContext } from "@/context/ExpenseContext";

export default function AppAreaChart() {
  const { expenses, createExpense, updateExpense, deleteExpense } =
    useExpenseContext();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between mb-4">
          <div>
            <CardTitle>Expenses</CardTitle>
            <CardDescription>By month and category</CardDescription>
          </div>
          <Button onClick={() => setModalOpen(true)}>Add expense</Button>
        </div>
      </CardHeader>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={expenses}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tickFormatter={(val) => val.slice(0, 3)} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>

      <AppExpenseModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={createExpense}
        onUpdate={updateExpense}
        onDelete={deleteExpense}
      />

      <CardFooter className="text-sm text-muted-foreground">
        Expenses by Data for the last 6 months
      </CardFooter>
    </Card>
  );
}
