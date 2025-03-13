import React, { createContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  [key: string]: any;
}

interface UserContextProps {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch users");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
