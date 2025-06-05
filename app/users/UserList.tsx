"use client";
import { Card } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function UserList() {
  const { users } = useUserContext();
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
      {users.map((user) => (
        <Card
          key={user.id}
          className="p-4 shadow-md rounded-lg border border-gray-400"
        >
          <div className="flex justify-between items-center">
            {/* Левая часть: аватар и данные */}
            <div className="flex flex-col items-start space-y-1">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage
                    src={user.image || "/default-avatar.png"}
                    alt={user.username}
                    className="!rounded-none object-cover"
                  />
                  <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">{user.username}</h3>
              </div>

              {/*<p className="text-sm text-gray-500">{user.email}</p>*/}
              {/* <Badge variant={statusVariants[user.status] || "default"}>{user.status}</Badge> */}
            </div>

            <Button
              className="ml-4"
              onClick={() => router.push(`/users/${user.id.toString()}`)}
            >
              View Profile
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
