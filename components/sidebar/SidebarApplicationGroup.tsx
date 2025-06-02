import Link from "next/link";
import {
  Home,
  User2Icon, WalletIcon,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Users", url: "/users", icon: User2Icon },
  { title: "Payments", url: "/payments", icon: WalletIcon}
];

const SidebarApplicationGroup = () => (
  <SidebarGroup>
    <SidebarGroupLabel>Application</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        {items.map(({ title, url, icon: Icon, }) => (
          <SidebarMenuItem key={title}>
            <SidebarMenuButton asChild>
              <Link href={url}>
                <Icon />
                <span>{title}</span>
              </Link>
            </SidebarMenuButton>

          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
);

export default SidebarApplicationGroup;
