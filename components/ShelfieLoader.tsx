import { ActivityIndicator, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import ShelfieView from "./ShelfieView";

const ShelfieLoader = () => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return (
    <ShelfieView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size={"large"} color={theme.text} />
    </ShelfieView>
  );
};

export default ShelfieLoader;
