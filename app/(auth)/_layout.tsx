import { Stack } from "expo-router";
import { useUser } from "../../hooks/useUser";

const AuthLayout = () => {
  const { user } = useUser();
  console.log("Logged-in User under UserProvider provider: ", { user });

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
};

export default AuthLayout;
