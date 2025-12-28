import { StyleSheet } from "react-native";

import Spacer from "../../components/Spacer";

import ShelfieText from "../../components/ShelfieText";
import ShelfieView from "../../components/ShelfieView";

const Create = () => {
  return (
    <ShelfieView style={styles.container}>
      <ShelfieText title={true} style={styles.heading}>
        Add a New Book
      </ShelfieText>
      <Spacer />
    </ShelfieView>
  );
};

export default Create;

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
