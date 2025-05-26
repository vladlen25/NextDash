"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {useBrowserContext} from "@/context/BrowserContext";
import {Button} from "@/components/ui/button";
import AppBrowserModal from "@/components/modal/AppBrowserModal";
import {useState} from "react";


const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function AppPieChart() {
  const {browsers, updateBrowser} = useBrowserContext()
  const [modalOpen, setModalOpen] = useState(false);

  const totalVisitors = React.useMemo(() => {
    return browsers.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [browsers]);



  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>

        <AppBrowserModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            data={browsers}
            onUpdate={updateBrowser}/>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-full max-w-[600px] h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={browsers}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>

        </ChartContainer>
      </CardContent>
      <Button className={'ml-4 mr-4'} onClick={() => setModalOpen(true)}>Change Data</Button>

      <CardFooter className="flex-col gap-2 text-sm">

          {/*<div className="flex items-center gap-2 font-medium leading-none">*/}
          {/*    Trending up by 5.2% this month <TrendingUp className="h-4 w-4"/>*/}
          {/*</div>*/}
          {/*<div className="leading-none text-muted-foreground">*/}
          {/*    Showing total visitors for the last 6 months*/}
          {/*</div>*/}
      </CardFooter>
    </Card>
  );
}
