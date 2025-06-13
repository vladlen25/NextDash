"use client";

import Image from "next/image";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useUserContext } from "@/context/UserContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import {useRouter} from "next/navigation";



const AppTransactionCard = () => {
  const { users } = useUserContext();
    const router = useRouter();
  return (
    <Card className="p-4 flex flex-col h-full  ">
      <h1 className="text-lg font-medium mb-2">Latest Transaction</h1>

      <ScrollArea className="h-full w-full flex-1 [&>[data-radix-scroll-area-viewport]]:max-h-[calc(100vh-400px)] pr-4">
        <div className="flex flex-col gap-2">
          {users.map((item) => (
            <Card
              key={item.id}
              className="flex-row items-center justify-between gap-4 p-4 cursor-pointer !border border-gray-300 hover:bg-green-100 dark:hover:bg-gray-900 "
              onClick={() => router.push(`/users/${item.id.toString()}`)}
            >
              <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.description}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex-1 p-0">
                <CardTitle className="text-sm font-medium">
                  {item.description}
                </CardTitle>
                <Badge variant="secondary">{item.username}</Badge>
              </CardContent>
              <CardFooter className="p-0">{item.amount / 1000}K</CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default AppTransactionCard;
