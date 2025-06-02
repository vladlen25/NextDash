"use client"
import { Card } from "@/components/ui/card";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {useUserContext} from "@/context/UserContext";


export default function UserGrid() {
    const {users} = useUserContext()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {users.map((user) => (
                <Card key={user.id} className="p-4 shadow-md rounded-lg">
                    <div className="flex flex-col items-center">
                        <Avatar>
                            <AvatarImage src={user.image || "/default-avatar.png"} alt={user.username} />
                            <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-semibold">{user.username}</h3>
                        <p className="text-sm text-gray-500">{user.username}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        {/*<Badge variant={statusVariants[user.status] || "default"} className="mt-2">*/}
                        {/*    {user.status}*/}
                        {/*</Badge>*/}
                        <Button variant="outline" className="mt-4 w-full">
                            View Profile
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    );
}
