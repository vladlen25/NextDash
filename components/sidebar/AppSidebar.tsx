"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

import SidebarUserHeader from "@/components/sidebar/SidebarUserHeader";
import SidebarApplicationGroup from "@/components/sidebar/SidebarApplicationGroup";
import SidebarProjectsGroup from "@/components/sidebar/SidebarProjectsGroup";
import SidebarCollapsibleGroup from "@/components/sidebar/SidebarCollapsibleGroup";
import SidebarNestedGroup from "@/components/sidebar/SidebarNestedGroup";
import SidebarUserFooter from "@/components/sidebar/SidebarUserFooter";

const AppSidebar = () => (
  <div>
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarUserHeader />
      </SidebarHeader>
      <Separator className="my-4" />
      <SidebarContent>
        <SidebarApplicationGroup />
        <SidebarProjectsGroup />
        <SidebarCollapsibleGroup />
        <SidebarNestedGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarUserFooter />
      </SidebarFooter>
    </Sidebar>
  </div>
);

export default AppSidebar;
