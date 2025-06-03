"use client";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {Button} from "./ui/button";
import {UserInterface} from "@/types/types";
import {useUserContext} from "@/context/UserContext";
import { useState} from "react";

const formSchema = z.object({
    username: z
        .string()
        .min(2, {message: "Username must be at least 2 characters!"})
        .max(50),
    email: z.string().email({message: "Invalid email address!"}),
    phone: z.string().min(10).max(15),
    location: z.string().min(2),
    role: z.enum(["admin", "user"]),
});

interface EditUserProps {
    user: UserInterface
}

const EditUser = ({user}: EditUserProps) => {
    const {updateUser} =useUserContext()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: user.username,
            email: user.email,
            phone: user.phone,
            location: user.location,
            role: user.role,
        },
    });
    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("Form data:", data); // здесь можно передать данные в контекст
        // Пример: updateUserContext(data)
        const updatedUser: UserInterface = {
            ...user,
            ...data,

        };
        updateUser(updatedUser);
        setIsOpen(false);

    };
    
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button onClick={() => setIsOpen(true)}>Edit User</Button>
            </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="mb-4">Edit User</SheetTitle>
                <SheetDescription asChild>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public username.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Only admin can see your email.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Only admin can see your phone number.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="location"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Location</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is the public location.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="role"
                                render={() => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Role"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="admin">Admin</SelectItem>
                                                    <SelectItem value="user">User</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription>
                                            Only verified users can be admin.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <SheetTrigger><Button  type="submit">Submit</Button></SheetTrigger>

                        </form>
                    </Form>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
        </Sheet>
    );
};

export default EditUser;
