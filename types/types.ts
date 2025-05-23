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
}

export interface TaskInterface {
    id: number;
    text: string;
    date: Date | undefined;
    completed: boolean;
}