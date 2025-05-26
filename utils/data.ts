import {
  DeviceInterface,
  BrowserInterface,
  TaskInterface,
} from "@/types/types";

export const initialDevices: DeviceInterface[] = [
  { id: 1, month: "January", desktop: 186, mobile: 80 },
  { id: 2, month: "February", desktop: 305, mobile: 200 },
  { id: 3, month: "March", desktop: 237, mobile: 120 },
  { id: 4, month: "April", desktop: 73, mobile: 190 },
  { id: 5, month: "May", desktop: 209, mobile: 130 },
  { id: 6, month: "June", desktop: 214, mobile: 140 },
];

export const initialBrowsers: BrowserInterface[] = [
  { id: 1, browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { id: 2, browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { id: 3, browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { id: 4, browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { id: 5, browser: "other", visitors: 190, fill: "var(--color-other)" },
];

export const initialTasks: TaskInterface[] = [
  {
    id: 1,
    title: "task",
    date: new Date(),
    completed: false,
  },
  {
    id: 2,
    title: "task",
    date: new Date(),
    completed: false,
  },
];
