import React, { createContext, useState } from "react";

interface UserContextType {
  user: {} | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextType | null>(null); // brand new empty context

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState("");

  const login = async (email: string, password: string) => {};

  const register = async (email: string, password: string) => {};

  const logout = async () => {};

  // to make available to provider's component tree
  const payload: UserContextType = {
    user,
    login,
    logout,
    register,
  };

  return (
    <UserContext.Provider value={payload}>{children}</UserContext.Provider>
  );
};
