import { StyleSheet } from "react-native";

import Spacer from "../../components/Spacer";
import ShelfieText from "../../components/ShelfieText";
import ShelfieView from "../../components/ShelfieView";

const Profile = () => {
  return (
    <ShelfieView style={styles.container}>
      <ShelfieText title={true} style={styles.heading}>
        Your Email
      </ShelfieText>
      <Spacer />

      <ShelfieText>Time to start reading some books...</ShelfieText>
      <Spacer />
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
