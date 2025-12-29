import { StyleSheet } from "react-native";

import Spacer from "../../components/Spacer";
import ShelfieText from "../../components/ShelfieText";
import ShelfieView from "../../components/ShelfieView";

const Books = () => {
  return (
    <ShelfieView style={styles.container}>
      {/* <Spacer /> */}
      <ShelfieText title={true} style={styles.heading}>
        Your Reading List
      </ShelfieText>
    </ShelfieView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
