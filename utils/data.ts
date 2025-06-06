import {
  DeviceInterface,
  BrowserInterface,
  TaskInterface,
  UserInterface,
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

export const initialUsers: UserInterface[] = [
  {
    id: 1,
    description: "Owner",
    username: "Morty Smith",
    email: "MortySmith@gmail.com",
    image: "https://github.com/shadcn.png",
    status: "success",
    amount: 10000000,
    phone: "+344343434",
    location: "dimension 34-C",
    role: "admin",
  },
  {
    id: 2,
    description: "Domain renewal",
    username: "Lucas Bennett",
    email: "lucasbennett@gmail.com",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "pending",
    amount: 870,
    phone: "+1 202-555-0111",
    location: "Chicago, IL",
    role: "admin",
  },
  {
    id: 3,
    description: "Annual membership",
    username: "Emily Sanders",
    email: "emilysanders@gmail.com",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "failed",
    amount: 1050,
    phone: "+1 202-555-0112",
    location: "San Francisco, CA",
    role: "admin",
  },
  {
    id: 4,
    description: "One-time service fee",
    username: "Mike Galloway",
    email: "mikegalloway@gmail.com",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "success",
    amount: 1200,
    phone: "+1 202-555-0113",
    location: "Seattle, WA",
    role: "user",
  },
  {
    id: 5,
    description: "Account upgrade",
    username: "Minerva Robinson",
    email: "minerbarobinson@gmail.com",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "failed",
    amount: 1600,
    phone: "+1 202-555-0114",
    location: "Austin, TX",
    role: "user",
  },
  {
    id: 6,
    description: "Course enrollment",
    username: "Mable Clayton",
    email: "mableclayton@gmail.com",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "pending",
    amount: 1800,
    phone: "+1 202-555-0115",
    location: "Boston, MA",
    role: "user",
  },
  {
    id: 7,
    description: "Monthly plan payment",
    username: "Nathan McDaniel",
    email: "nathanmcdaniel@gmail.com",
    image: "https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "pending",
    amount: 1100,
    phone: "+1 202-555-0116",
    location: "Denver, CO",
    role: "user",
  },
  {
    id: 8,
    description: "E-book purchase",
    username: "Myrtie Lamb",
    email: "myrtielamb@gmail.com",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "success",
    amount: 450,
    phone: "+1 202-555-0117",
    location: "Miami, FL",
    role: "user",
  },
  {
    id: 9,
    description: "Software license",
    username: "Leona Bryant",
    email: "leonabryant@gmail.com",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "success",
    amount: 2100,
    phone: "+1 202-555-0118",
    location: "Portland, OR",
    role: "user",
  },
  {
    id: 10,
    description: "Consulting session",
    username: "Aaron Willis",
    email: "aaronwillis@gmail.com",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "pending",
    amount: 1350,
    phone: "+1 202-555-0119",
    location: "Atlanta, GA",
    role: "user",
  },
  {
    id: 11,
    description: "Donation",
    username: "Joel Keller",
    email: "joelkeller@gmail.com",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "failed",
    amount: 3000,
    phone: "+1 202-555-0120",
    location: "Phoenix, AZ",
    role: "user",
  },
  {
    id: 12,
    description: "Video editing tools",
    username: "Clara Jennings",
    email: "clarajennings@gmail.com",
    image: "https://images.pexels.com/photos/3775535/pexels-photo-3775535.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "success",
    amount: 980,
    phone: "+1 202-555-0121",
    location: "Philadelphia, PA",
    role: "user",
  },
  {
    id: 13,
    description: "Cloud storage upgrade",
    username: "Trevor Miles",
    email: "trevormiles@gmail.com",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "pending",
    amount: 1250,
    phone: "+1 202-555-0122",
    location: "Dallas, TX",
    role: "user",
  },
  {
    id: 14,
    description: "Webinar ticket",
    username: "Olivia Patterson",
    email: "oliviapatterson@gmail.com",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "failed",
    amount: 400,
    phone: "+1 202-555-0123",
    location: "Detroit, MI",
    role: "user",
  },
  {
    id: 15,
    description: "Plugin installation",
    username: "Raymond Chen",
    email: "raymondchen@gmail.com",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "success",
    amount: 730,
    phone: "+1 202-555-0124",
    location: "Las Vegas, NV",
    role: "user",
  },
  {
    id: 16,
    description: "Software bundle",
    username: "Natalie Ruiz",
    email: "natalieruiz@gmail.com",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "pending",
    amount: 1950,
    phone: "+1 202-555-0125",
    location: "Houston, TX",
    role: "user",
  },
  {
    id: 17,
    description: "Support contribution",
    username: "Bryce Newman",
    email: "brycenewman@gmail.com",
    image: "https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "success",
    amount: 300,
    phone: "+1 202-555-0126",
    location: "Charlotte, NC",
    role: "user",
  },
  {
    id: 18,
    description: "Business tools package",
    username: "Diana Holloway",
    email: "dianaholloway@gmail.com",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "failed",
    amount: 1470,
    phone: "+1 202-555-0127",
    location: "Cleveland, OH",
    role: "user",
  },
  {
    id: 19,
    description: "Hosting service",
    username: "George Turner",
    email: "georgeturner@gmail.com",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "pending",
    amount: 890,
    phone: "+1 202-555-0128",
    location: "San Diego, CA",
    role: "user",
  },
  {
    id: 20,
    description: "Design assets",
    username: "Lena Marks",
    email: "lenamarks@gmail.com",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "success",
    amount: 680,
    phone: "+1 202-555-0129",
    location: "Tampa, FL",
    role: "user",
  },
];


