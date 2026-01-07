import React, { createContext, useEffect, useState } from "react";

import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

interface User {
  email: string;
}

interface UserContextType {
  user: User | null;
  authChecked: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextType | null>(null); // brand new empty context

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  const register = async (email: string, password: string) => {
    try {
      await account.create(ID.unique(), email, password);

      await login(email, password);
    } catch (error) {
      console.log("Registration In UserContext: ", { error });
      throw Error((error as any).message ?? "Unknown Error");
    }
  };

  const login = async (email: string, password: string) => {
    try {
      // first create a session with given email and password
      await account.createEmailPasswordSession(email, password);

      // then get the session info via then SDK
      const response = await account.get();
      console.log("Account Session Response: ", { response });

      // then directly set the response as the user
      setUser(response);

      //
    } catch (error) {
      console.log("Login In UserContext: ", { error });
      throw Error((error as any).message ?? "Unknown Error");
    }
  };

  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
    console.log("Logged out user.");
  };

  // to make available to provider's component tree
  const payload: UserContextType = {
    user,
    authChecked,
    login,
    logout,
    register,
  };

  // useEffect function fires
  const getInitialUserValue = async () => {
    try {
      const response = await account.get();
      setUser(response);
    } catch (error) {
      setUser(null);
    } finally {
      setAuthChecked(true);
    }
  };

  // load user if logged-in
  useEffect(() => {
    getInitialUserValue();
  }, []);

  return (
    <UserContext.Provider value={payload}>{children}</UserContext.Provider>
  );
};
