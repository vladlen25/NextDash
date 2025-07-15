"use client";

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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { UserInterface } from "@/types/types";
import { useAuthContext } from "@/context/AuthContext";

const registerSchema = z.object({
  username: z.string().min(2, "Enter a valid username"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(4, "Minimum 4 characters"),
  role: z.enum(["admin", "user"]),
});

type RegisterData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const form = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: "admin",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const { register } = useAuthContext();

  const onSubmit = (formData: RegisterData) => {
    const newUser: UserInterface = {
      id: Date.now(),
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: formData.role,


      description: "",
      image: "/default-avatar.png",
      status: "pending",
      amount: 0,
      location: "",
      phone: undefined,
    };

    register(newUser);
  };

  return (
    <div className="min-h-screen fixed inset-0 z-50 flex items-center justify-center bg-muted px-4 py-12">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-6 rounded-2xl bg-background p-8 shadow-xl border border-border"
        >
          <h2 className="text-2xl font-bold text-center text-foreground">
            Create Account
          </h2>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Your name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="you@example.com"
                    type="email"
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
                <FormLabel>Password</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pr-10"
                    />
                  </FormControl>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                  >
                    {showPassword ? (
                      <Eye className="h-4 w-4" />
                    ) : (
                      <EyeOff className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full text-base">
            Register
          </Button>

          <div className="text-sm text-left text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary  hover:text-primary/80">
              Sign in
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
