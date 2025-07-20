"use client";
import React, { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { useExpenseContext } from "@/context/ExpenseContext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import AppExpenseModal from "@/components/modal/AppExpenseModal";
import { ExpenseInterface } from "@/types/types";
import { Button } from "@/components/ui/button";

interface MonthlyData {
  month: string;
  amount: number;
}

const chartConfig = {
  amount: { label: "Amount", color: "var(--chart-1)" },
} satisfies ChartConfig;

export default function AppBarChart() {
  const { expenses, createExpense, updateExpense, deleteExpense } =
    useExpenseContext();

  const [selectedExpense, setSelectedExpense] =
    useState<ExpenseInterface | null>(null);

  const monthlyData = useMemo(() => {
    const map = new Map<string, number>();
    for (const e of expenses) {
      map.set(e.month, (map.get(e.month) || 0) + (e.amount ?? 0));
    }
    return Array.from(map, ([month, amount]) => ({ month, amount }));
  }, [expenses]);

  const handleBarClick = (data: MonthlyData) => {
    const month = data.month;
    const found = expenses.find((e) => e.month === month) || null;
    setSelectedExpense(found);
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Card className="h-full flex flex-col p-4">
      <CardHeader className="p-0 mb-4">
        <div className="flex justify-between mb-4 mt-2">
          <div>
            <CardTitle className="text-lg">Expenses by month</CardTitle>
            <CardDescription>Total amount for each month</CardDescription>
          </div>
          <Button onClick={() => setModalOpen(true)}>Add expense</Button>
        </div>
      </CardHeader>

      <ChartContainer
        config={chartConfig}
        className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[550px] chart-4k-height"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={monthlyData}
            onClick={({ activePayload }) => {
              if (activePayload?.[0]) handleBarClick(activePayload[0].payload);
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickFormatter={(m) => m.charAt(0).toUpperCase() + m.slice(1)}
            />
            <YAxis tickFormatter={(v) => `${v} $`} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="amount" fill="var(--chart-1)" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <AppExpenseModal
        open={!!selectedExpense}
        expense={selectedExpense}
        onCloseAction={() => setSelectedExpense(null)}
        onCreateAction={createExpense}
        onUpdateAction={updateExpense}
        onDeleteAction={deleteExpense}
      />
      <AppExpenseModal
        open={modalOpen}
        onCloseAction={() => setModalOpen(false)}
        onCreateAction={createExpense}
        onUpdateAction={updateExpense}
        onDeleteAction={deleteExpense}
      />
    </Card>
  );
}
