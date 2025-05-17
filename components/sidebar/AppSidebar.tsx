'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarSeparator,
    SidebarFooter,
    SidebarHeader
} from '@/components/ui/sidebar';

import SidebarUserHeader from '@/components/sidebar/SidebarUserHeader';
import SidebarApplicationGroup from '@/components/sidebar/SidebarApplicationGroup';
import SidebarProjectsGroup from '@/components/sidebar/SidebarProjectsGroup';
import SidebarCollapsibleGroup from '@/components/sidebar/SidebarCollapsibleGroup';
import SidebarNestedGroup from '@/components/sidebar/SidebarNestedGroup';
import SidebarUserFooter from '@/components/sidebar/SidebarUserFooter';

const AppSidebar = () => (
    <Sidebar collapsible="icon">
        <SidebarHeader>
            <SidebarUserHeader/>
        </SidebarHeader>
        <SidebarSeparator/>
        <SidebarContent>
            <SidebarApplicationGroup/>
            <SidebarProjectsGroup/>
            <SidebarCollapsibleGroup/>
            <SidebarNestedGroup/>
        </SidebarContent>
        <SidebarFooter>
            <SidebarUserFooter/>
        </SidebarFooter>
    </Sidebar>
);

export default AppSidebar;
