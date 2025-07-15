"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(4, "Minimum 4 characters"),
});

type LoginData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const { user, login } = useAuthContext();
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  const onSubmit = (data: LoginData) => {
    const success = login(data.email, data.password);
    if (success) {
      router.push("/");
    } else {
      form.setError("password", { message: "Wrong email or password" });
    }
  };

  return (
    <div className="min-h-screen fixed inset-0 z-50 flex items-center justify-center bg-muted px-4 py-12">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-6 rounded-2xl bg-background p-8 shadow-xl border border-border"
        >
          <h2 className="text-2xl font-bold text-center text-foreground">
            Sign in
          </h2>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-muted-foreground">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    type="email"
                    className="bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-muted-foreground">
                  Password
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="••••••••"
                      type={showPassword ? "text" : "password"}
                      className="bg-muted/40 pr-10 focus-visible:ring-2 focus-visible:ring-ring"
                      {...field}
                    />
                  </FormControl>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                    tabIndex={-1}
                  >
                    {!showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full text-base">
            Sign in
          </Button>
          <div className="text-sm text-left text-muted-foreground">
            Don’t have an account?{" "}
            <Link
                href="/register"
                className="text-primary  hover:text-primary/80"
            >
              Create one
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
