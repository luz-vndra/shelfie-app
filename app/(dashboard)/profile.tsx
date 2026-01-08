import { StyleSheet, Text } from "react-native";

import Spacer from "../../components/Spacer";
import ShelfieText from "../../components/ShelfieText";
import ShelfieView from "../../components/ShelfieView";
import ShelfiePressable from "../../components/ShelfiePressable";

import { useUser } from "../../hooks/useUser";

const Profile = () => {
  const { logout, user } = useUser();

  return (
    <ShelfieView style={styles.container}>
      <ShelfieText title={true} style={styles.heading}>
        {user?.email ?? "email not found"}
      </ShelfieText>
      <Spacer />

      <ShelfieText>Time to start reading some books...</ShelfieText>
      <Spacer />

      <ShelfiePressable onPress={logout}>
        <Text style={{ color: "#f2f2f2" }}>Logout</Text>
      </ShelfiePressable>
    </ShelfieView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
