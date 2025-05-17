import Link from 'next/link';
import Image from 'next/image';
import {
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from '@/components/ui/sidebar';

const SidebarHeaderComponent = () => (
    <SidebarHeader className="py-4">
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="/">
                        <Image className={ 'rounded-full'} src="https://github.com/shadcn.png" alt="logo" width={20} height={20} />
                        <span>Morty Smith</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarHeader>
);

export default SidebarHeaderComponent;
