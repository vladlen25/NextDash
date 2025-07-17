"use client";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Sheet } from "@/components/ui/sheet";
import EditUser from "./EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLineChart from "@/components/charts/AppLineChart";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {useEffect, useState} from "react";
import {UserInterface} from "@/types/types";

const SingleUserPage = () => {
  const params = useParams();
  const id = params?.id;
  const [user, setUser] = useState<UserInterface | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('auth_users');
    if (!stored) return;

    try {
      const users: UserInterface[] = JSON.parse(stored);
      const foundUser = users.find((u) => u.id === Number(id));
      setUser(foundUser || null);
    } catch (e) {
      console.error('Error parsing users from localStorage', e);
    }
  }, [id]);

  if (!user) return <div className="p-4 text-red-500">User not found</div>;

  return (
    <div className="px-4 mb-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/" className="hover:text-white">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/users" className="hover:text-white">
              Users
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href={`/users/${id}`} className="hover:text-white">
              {user?.username}
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-6 flex flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-2/3 space-y-6 border border-gray-500  rounded-lg">
          <div className="bg-primary-foreground p-4 rounded-lg ">
            <AppLineChart />

          </div>
        </div>
        <Card className="w-full xl:w-1/3 space-y-6 border border-gray-500 p-8 rounded-lg">
          <div className="bg-primary-foreground  rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="w-12 h-12">
                <AvatarImage src={user.image} alt={user.username} />
                <AvatarFallback>{user.username[0]}</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">{user.username}</h1>
            </div>

          </div>

          <div className="bg-primary-foreground  rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <EditUser user={user} />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>{user.username}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Password:</span>
                <span>{user.password}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Description:</span>
                <span>{user.description}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Status:</span>
                <Badge
                  className={`text-dark-900 ${
                    user.status === "success"
                      ? "bg-green-500"
                      : user.status === "pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                >
                  {user.status}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Amount:</span>
                <span>${user.amount.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2025.01.01
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SingleUserPage;
