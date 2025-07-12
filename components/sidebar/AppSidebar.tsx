import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

import SidebarUserHeader from "@/components/sidebar/SidebarUserHeader";
import SidebarApplicationGroup from "@/components/sidebar/SidebarApplicationGroup";

const AppSidebar = () => (
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <SidebarUserHeader />
    </SidebarHeader>
    <Separator className="my-4 mb-0 mt-0" />
    <SidebarContent>
      <SidebarApplicationGroup />
    </SidebarContent>
  </Sidebar>
);

export default AppSidebar;
