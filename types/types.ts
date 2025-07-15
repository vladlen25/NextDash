export interface ExpenseInterface {
  id: number;
  amount: number | undefined;
  category: string;
  month: string;
  description?: string;
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

export interface UserInterface {
  id: number;
  password: string;
  description: string;
  username: string;
  email: string;
  image: string;
  status: "success" | "pending" | "failed";
  amount: number;
  phone: string | undefined;
  location: string;
  role: "admin" | "user";
}

export interface ContentInterface {
  id: number;
  password: string;
  title: string;
  description: string;
  creator: string;
  image: string;
  status: "published" | "draft" | "archived";
  views: number;
  type: "video" | "article" | "podcast";
  platform: string;
}
