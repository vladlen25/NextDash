"use client";

import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/Spinner";

export default function HomePage() {
    const router = useRouter();
    const { user, isLoading } = useAuthContext();
    const [delayedLoading, setDelayedLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayedLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isLoading && !delayedLoading) {
            if (user) {
                router.replace("/dashboard");
            } else {
                router.replace("/welcome");
            }
        }
    }, [user, isLoading, delayedLoading, router]);

    if (isLoading || delayedLoading) {
        return (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
                <Spinner size="large" show />
            </div>
        );
    }
    return null;
}
