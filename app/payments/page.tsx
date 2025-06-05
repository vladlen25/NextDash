"use client";
import React, { FC, useState } from "react";
import { useUserContext } from "@/context/UserContext";
import SearchUser from "./SearchUser";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import { UserInterface } from "@/types/types";

const PaymentsPage: FC = () => {
  const { users } = useUserContext();
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const filteredUsers: UserInterface[] = selectedUserId
    ? users.filter((user) => user.id === selectedUserId)
    : users;

  const handleUserSelect = (userId: number | null) => {
    setSelectedUserId(userId);
  };

  return (
    <div className="mb-8">
      <div className="mb-4 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>

      <SearchUser
        users={users}
        onUserSelect={handleUserSelect}
        open={searchOpen}
        setOpen={setSearchOpen}
      />

      <div className="mb-4 text-sm text-muted-foreground">
        {selectedUserId ? (
          <span>
            Showing payments for user ID: {selectedUserId} (
            {filteredUsers.length} records)
          </span>
        ) : (
          <span>Showing all payments ({filteredUsers.length} records)</span>
        )}
      </div>

      <DataTable columns={columns} data={filteredUsers} />
    </div>
  );
};

export default PaymentsPage;
