// SearchUser.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { UserInterface } from "@/types/types";

interface SearchUserProps {
  users: UserInterface[];
  onUserSelect: (userId: number | null) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  placeholder?: string;
  maxResults?: number;
}

const SearchUser: React.FC<SearchUserProps> = ({
  users,
  onUserSelect,
  open,
  setOpen,
  placeholder = "Search users by name or ID...",
  maxResults = 10,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserInterface | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredUsers = searchValue.trim()
    ? users.filter(
        (user) =>
          user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.id.toString().includes(searchValue),
      )
    : users;

  const handleUserSelect = (user: UserInterface) => {
    setSearchValue(`${user.username} (${user.email})`);
    setSelectedUser(user);
    setOpen(false);
    onUserSelect(user.id);
  };

  const handleClear = () => {
    setSearchValue("");
    setSelectedUser(null);
    setOpen(false);
    onUserSelect(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (!open) setOpen(true);
    if (!e.target.value && selectedUser) {
      setSelectedUser(null);
      onUserSelect(null);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full mb-4">
      <div className="flex items-center gap-2 border rounded-md px-4 py-2 bg-[#1f1f1f]">
        <Search className="w-4 h-4 text-[#9ca3af]" />
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleChange}
          onFocus={() => setOpen(true)}
          className="flex-1 bg-transparent text-sm text-[#d1d5db] placeholder-[#6b7280] focus:outline-none"
        />
        {(searchValue || selectedUser) && (
          <button
            onClick={handleClear}
            className="text-[#9ca3af] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {open && (
        <div className="absolute z-50 mt-1 w-full border rounded-md bg-background shadow-lg max-h-60 overflow-y-auto">
          {filteredUsers.length > 0 ? (
            <>
              {!searchValue.trim() && (
                <div className="px-4 py-2 text-xs text-muted-foreground bg-muted/50 border-b">
                  All users ({users.length} total)
                </div>
              )}
              {filteredUsers.slice(0, maxResults).map((user) => (
                <div
                  key={user.id}
                  onClick={() => handleUserSelect(user)}
                  className="px-4 py-2 cursor-pointer hover:bg-accent border-b last:border-b-0"
                >
                  <div className="font-medium">{user.username}</div>
                  <div className="text-sm text-muted-foreground">
                    {user.email}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    ID: {user.id}
                  </div>
                </div>
              ))}
              {filteredUsers.length > maxResults && (
                <div className="px-4 py-2 text-xs text-muted-foreground bg-muted/50">
                  +{filteredUsers.length - maxResults} more users...
                </div>
              )}
            </>
          ) : (
            <div className="px-4 py-2 text-sm text-muted-foreground">
              No users found for "{searchValue}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchUser;
