"use client";

import { useParams } from "next/navigation";
import { Eye, PlayCircle, User } from "lucide-react";
import Image from "next/image";
import { initialContent } from "@/utils/data";

export default function Page() {
    const params = useParams();
    const contentId = parseInt(params.id as string);

    const content = initialContent.find((item) => item.id === contentId);

    if (!content) return <div className="p-4">Content is not found</div>;

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="w-full mb-6">
                <Image
                    src={content.image}
                    alt={content.title}
                    width={900}
                    height={400}
                    className="rounded-lg object-cover w-full h-[400px]"
                    priority
                />
            </div>

            <h1 className="text-3xl font-bold mb-4">{content.title}</h1>


            <div className="text-sm text-muted-foreground flex flex-wrap gap-4 mb-6">
                <p className="flex items-center gap-2">
                    <User className="w-4 h-4" /> {content.creator}
                </p>
                <p className="flex items-center gap-2">
                    <PlayCircle className="w-4 h-4" /> {content.type}
                </p>
                <p className="flex items-center gap-2">
                    <Eye className="w-4 h-4" /> {content.views.toLocaleString()} views
                </p>
                <p>Platform: {content.platform}</p>
            </div>


            <p className="text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
                elit eget purus sagittis tempus. Sed ac orci ac metus pulvinar dapibus.
                Duis fermentum, lorem non porttitor bibendum, justo purus suscipit erat,
                non tristique nulla neque a ligula. Suspendisse potenti. Phasellus
                laoreet, ligula ut scelerisque pretium, lorem erat tempus ligula, eget
                varius sem magna sit amet justo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
                elit eget purus sagittis tempus. Sed ac orci ac metus pulvinar dapibus.
                Duis fermentum, lorem non porttitor bibendum, justo purus suscipit erat,
                non tristique nulla neque a ligula. Suspendisse potenti. Phasellus
                laoreet, ligula ut scelerisque pretium, lorem erat tempus ligula, eget
                varius sem magna sit amet justo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
                elit eget purus sagittis tempus. Sed ac orci ac metus pulvinar dapibus.
                Duis fermentum, lorem non porttitor bibendum, justo purus suscipit erat,
                non tristique nulla neque a ligula. Suspendisse potenti. Phasellus
                laoreet, ligula ut scelerisque pretium, lorem erat tempus ligula, eget
                varius sem magna sit amet justo.
            </p>
        </div>
    );
}
