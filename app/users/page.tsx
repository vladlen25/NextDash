'use client'
import UserGrid from "@/components/UserGrid";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";


const UsersPage = () => {

  return (
    <div className="">
        <Breadcrumb className="text-lg font-medium mb-6">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />

            </BreadcrumbList>
        </Breadcrumb>
      <UserGrid />
    </div>
  );
};

export default UsersPage;
