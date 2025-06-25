"use client";

import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { useExpenseContext } from "@/context/ExpenseContext";
import { Card } from "@/components/ui/card";

// Конфигурация для чарта
const chartConfig = {
  amount: {
    label: "Сумма",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const AppLineChart = () => {
  const { expenses } = useExpenseContext();

  const monthlyData = useMemo(() => {
    const map = new Map<string, number>();

    for (const expense of expenses) {
      const month = expense.month;
      map.set(month, (map.get(month) || 0) + expense.amount);
    }

    return Array.from(map.entries()).map(([month, amount]) => ({
      month,
      amount,
    }));
  }, [expenses]);

  return (
      <Card className="h-full flex flex-col p-4">
        <h2 className="text-lg font-semibold mb-4">Динамика расходов</h2>
        <ChartContainer config={chartConfig} className="min-h-[250px]">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                  dataKey="month"
                  tickFormatter={(val) =>
                      val.charAt(0).toUpperCase() + val.slice(1)
                  }
                  tickMargin={10}
                  axisLine={false}
                  tickLine={false}
              />
              <YAxis
                  tickFormatter={(val) => `${val} ₽`}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
              />
              <ChartTooltip
                  content={<ChartTooltipContent indicator="line" />}
              />
              <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="var(--chart-1)"
                  strokeWidth={2}
                  dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Card>
  );
};

export default AppLineChart;
