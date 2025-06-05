"use client";
import UserList from "./UserList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useUserContext } from "@/context/UserContext";

const UsersPage = () => {
  const params = useParams();
  const { getUserById } = useUserContext();
  const id = params?.id;
  const user = getUserById(Number(id));
  return (
    <div className="">
      <Breadcrumb className="text-lg font-medium mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/users">Users</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href={`/users/${id}`}>{user?.username}</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <UserList />
    </div>
  );
};

export default UsersPage;
