import { Stack } from "expo-router";

import { useUser } from "../../hooks/useUser";

import GuestOnly from "../../components/auth/GuestOnly";

const AuthLayout = () => {
  const { user } = useUser();
  console.log("Logged-in User under UserProvider provider: ", { user });

  return (
    <GuestOnly>
      <Stack screenOptions={{ headerShown: false }} />
    </GuestOnly>
  );
};

export default AuthLayout;
