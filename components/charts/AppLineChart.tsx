"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import {useDeviceContext} from "@/context/DeviceContext";
import React, {useState} from "react";
import AppDeviceModal from "@/components/modal/AppDeviceModal";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";


const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig;

const AppLineChart = () => {
    const { devices, updateDevice } = useDeviceContext();
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Card className="h-full flex flex-col  p-0 border-0" >

            <div className="flex justify-between space-x-4 mb-4 p-4">
                <h1 className="text-xl font-semibold pl-4">User Activity</h1>

                <AppDeviceModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    data={devices}
                    onUpdate={updateDevice}/>
                <Button onClick={() => setModalOpen(true)}>Change Data</Button>
            </div>
        <ChartContainer config={chartConfig} className="mt-6">
            <LineChart
                accessibilityLayer
                data={devices}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                    dataKey="desktop"
                    type="monotone"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                />
                <Line
                    dataKey="mobile"
                    type="monotone"
                    stroke="var(--color-mobile)"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </ChartContainer>
        </Card>

    );
};

export default AppLineChart;