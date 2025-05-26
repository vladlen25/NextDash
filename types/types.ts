export interface DeviceInterface {
  id: number;
  month: string;
  desktop: number;
  mobile: number;
}

export interface BrowserInterface {
  id: number;
  browser: string;
  visitors: number;
  fill: string;
}

export interface TaskInterface {
  id: number;
  title: string;
  date: Date | undefined;
  completed: boolean;
}
