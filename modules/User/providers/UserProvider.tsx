import React, { createContext, useState, useEffect, ReactNode } from "react";

import { useAuth } from "@/modules/Auth/hooks/useAuth";

import config from "../configs/config.json";
import { IUser } from "../type";

interface IUserContextProps {
  users: IUser[];
  loading: boolean;
}

export const UserContext = createContext<IUserContextProps | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { $fetch } = useAuth();
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const _fetchUsers = async () => {
    try {
      const result = await $fetch(config.restUrl);
      setUsers(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    _fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, loading }}>
      {children}
    </UserContext.Provider>
  );
};
