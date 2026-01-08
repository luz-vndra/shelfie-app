import React, { PropsWithChildren, useEffect } from "react";

import { useRouter } from "expo-router";

import ShelfieLoader from "../ShelfieLoader";

import { useUser } from "../../hooks/useUser";

const GuestOnly = ({ children }: PropsWithChildren) => {
  const { user, authChecked } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace("/profile");
    }
  }, [user, authChecked]);

  if (!authChecked && user) {
    return <ShelfieLoader />;
  }

  return children;
};

export default GuestOnly;
