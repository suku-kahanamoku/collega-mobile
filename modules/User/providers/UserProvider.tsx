import React, { createContext, useState, useEffect, ReactNode } from "react";

import { FETCH } from "@/modules/Common/utils/api";

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  [key: string]: any;
}

interface IUserContextProps {
  users: IUser[];
  loading: boolean;
}

export const UserContext = createContext<IUserContextProps | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    try {
      const result = await FETCH("https://jsonplaceholder.typicode.com/users");
      setUsers(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, loading }}>
      {children}
    </UserContext.Provider>
  );
};
