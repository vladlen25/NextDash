"use client";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Progress } from "@/components/ui/progress";

import { Sheet } from "@/components/ui/sheet";

import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLineChart from "@/components/charts/AppLineChart";
import { useParams } from "next/navigation";
import { useUserContext } from "@/context/UserContext";
import { Card } from "@/components/ui/card";

const SingleUserPage = () => {
  const params = useParams();
  const { getUserById } = useUserContext();
  const id = params?.id;
  const user = getUserById(Number(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{user.username}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-6 flex flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-2/3 space-y-6 border border-gray-500  rounded-lg">
          <div className="bg-primary-foreground p-4 rounded-lg ">
            <AppLineChart />

            {/*<h1 className="text-xl font-semibold">User Activity</h1>*/}
            {/*<div className="bg-primary-foreground p-4 rounded-lg">*/}
            {/*  <AppTransactionCard title="Recent Transactions" />*/}
            {/*</div>*/}
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
            {/*<p className="text-sm text-muted-foreground">{user.description}</p>*/}
          </div>

          <div className="bg-primary-foreground  rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <EditUser user={user} />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>{user.username}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>{user.email}</span>
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
