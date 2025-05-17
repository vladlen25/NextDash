import Link from 'next/link';
import { Home, Inbox, Calendar, Search, Settings } from 'lucide-react';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuBadge,
} from '@/components/ui/sidebar';

const items = [
    { title: 'Home', url: '/', icon: Home },
    { title: 'Inbox', url: '#', icon: Inbox },
    { title: 'Calendar', url: '#', icon: Calendar },
    { title: 'Search', url: '#', icon: Search },
    { title: 'Settings', url: '#', icon: Settings },
];

const SidebarApplicationGroup = () => (
    <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu>
                {items.map(({ title, url, icon: Icon }) => (
                    <SidebarMenuItem key={title}>
                        <SidebarMenuButton asChild>
                            <Link href={url}>
                                <Icon />
                                <span>{title}</span>
                            </Link>
                        </SidebarMenuButton>
                        {title === 'Inbox' && <SidebarMenuBadge>24</SidebarMenuBadge>}
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
);

export default SidebarApplicationGroup;
