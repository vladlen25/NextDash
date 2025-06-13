"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Eye, PlayCircle, User } from "lucide-react";
import {initialContent} from "@/utils/data";

export default function Page() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 p-4">
      {initialContent.map((item) => (
        <Card
          key={item.id}
          className="p-4 shadow-md rounded-lg border border-gray-400 flex flex-col justify-between"
        >
          <div className="flex items-start gap-4">

            <Avatar className="w-24 h-24">
              <AvatarImage
                src={item.image || "/default-thumbnail.png"}
                alt={item.title}
                className="!rounded-md object-cover"
              />
              <AvatarFallback>{item.title.charAt(0)}</AvatarFallback>
            </Avatar>


            <div className="flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-base font-semibold line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-1 flex items-center gap-1 mt-1">
                  <User className="w-3 h-3" /> {item.creator} —{" "}
                  <PlayCircle className="w-3 h-3 ml-1" /> {item.type}
                </p>
                <span className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                  <Eye className="w-4 h-4" /> {item.views.toLocaleString()}{" "}
                  views
                </span>
                <span className="text-xs text-gray-500 mt-1 block">
                  Platform: {item.platform}
                </span>
              </div>
            </div>
          </div>

          <Button
            className="mt-4 w-full"
            onClick={() => router.push(`/content/${item.id.toString()}`)}
          >
            Open
          </Button>
        </Card>
      ))}
    </div>
  );
}
