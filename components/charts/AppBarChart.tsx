"use client";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { DesktopIcon, MobileIcon } from "@radix-ui/react-icons";
import React, {useState} from "react";
import AppDeviceModal from "@/components/modal/AppDeviceModal";
import {useDeviceContext} from "@/context/DeviceContext";
import {Button} from "@/components/ui/button";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
    icon: DesktopIcon,
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
    icon: MobileIcon,
  },
} satisfies ChartConfig;



const AppBarChart = () => {

  const { devices, updateDevice } = useDeviceContext();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="border rounded-lg">

      <div className="flex justify-between space-x-4 mb-4 p-4">
          <h1 className="text-lg font-medium mb-6">Bar Chart - Multiple</h1>
        <AppDeviceModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            data={devices}
            onUpdate={updateDevice}/>
        <Button onClick={() => setModalOpen(true)}>Change Data</Button>
      </div>

      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={devices}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AppBarChart;
