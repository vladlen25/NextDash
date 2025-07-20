'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function WelcomePage() {
    return (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground p-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Spendy</h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
                Track your expenses, manage your money, and take control of your financial future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                    <Button size="lg">Get Started</Button>
                </Link>
                <Link href="/login">
                    <Button variant="outline" size="lg">Sign In</Button>
                </Link>
            </div>
        </div>
    );
}
