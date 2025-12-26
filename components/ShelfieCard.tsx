import React from "react";

import { View, useColorScheme, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

type ShelfieCardProps = React.ComponentProps<typeof View>;

const ShelfieCard: React.FC<ShelfieCardProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...props}
    />
  );
};

export default ShelfieCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
