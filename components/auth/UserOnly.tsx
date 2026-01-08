import { PropsWithChildren, useEffect } from "react";

import { useRouter } from "expo-router";

import { useUser } from "../../hooks/useUser";

import ShelfieLoader from "../ShelfieLoader";

const UserOnly = ({ children }: PropsWithChildren) => {
  const { user, authChecked } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (authChecked && user == null) {
      router.replace("/login");
    }
  }, [user, authChecked]);

  if (!authChecked && !user) {
    return <ShelfieLoader />;
  }

  return children;
};

export default UserOnly;
