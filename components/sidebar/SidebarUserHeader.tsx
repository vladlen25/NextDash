import Link from "next/link";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton, useSidebar,
} from "@/components/ui/sidebar";
import {useAuthContext} from "@/context/AuthContext";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const SidebarUserHeader = () => {
  const {state} = useSidebar();
  const {user} = useAuthContext()
  return (
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/" className={`${state === 'collapsed' && 'justify-center'} `}>
                <Avatar>
                  <AvatarImage src={user?.image || '/default-avatar.png'}/>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>{user?.username}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
  )


}


export default SidebarUserHeader;

