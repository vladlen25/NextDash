"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Eye } from "lucide-react";
import {initialContent} from "@/utils/data";


const PopularContentCard = () => {
    const router = useRouter();

    return (
        <Card className="p-4 flex flex-col h-full">
            <h1 className="text-lg font-medium mb-2">Popular Content</h1>

            <ScrollArea className="h-full w-full flex-1 [&>[data-radix-scroll-area-viewport]]:max-h-[calc(100vh-300px)] pr-4">
                <div className="flex flex-col gap-2">
                    {initialContent.map((item) => (
                        <Card
                            key={item.id}
                            className=" h-full flex-row items-center justify-between gap-4 p-4 cursor-pointer !border border-gray-300 hover:bg-muted/50 dark:hover:bg-gray-900"
                            onClick={() => router.push(`/content/${item.id.toString()}`)}
                        >
                            <div className="w-14 h-14 rounded-md relative overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardContent className="flex-1 p-0">
                                <CardTitle className="text-sm font-medium line-clamp-1">
                                    {item.title}
                                </CardTitle>
                                <p className="text-xs text-muted-foreground line-clamp-1">
                                    {item.creator}
                                </p>
                                <Badge variant="secondary" className="capitalize mt-1">
                                    {item.type}
                                </Badge>
                            </CardContent>
                            <CardFooter className="p-0 text-xs text-muted-foreground flex flex-col items-end">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" /> {item.views.toLocaleString()}
                </span>
                                <span className="mt-1">{item.platform}</span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
        </Card>
    );
};

export default PopularContentCard;