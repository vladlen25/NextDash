import Link from 'next/link';
import { Plus, Projector } from 'lucide-react';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
} from '@/components/ui/sidebar';

const SidebarNestedGroup = () => (
    <SidebarGroup>
        <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href="/#">
                            <Projector />
                            See All Projects
                        </Link>
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                                <Link href="/#">
                                    <Plus />
                                    Add Project
                                </Link>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                                <Link href="/#">
                                    <Plus />
                                    Add Category
                                </Link>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
);

export default SidebarNestedGroup;
