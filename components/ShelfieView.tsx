import React from "react";

import { View, SafeAreaView, useColorScheme } from "react-native";

// SafeAreaView
// @deprecated
// — Use react-native-safe-area-context instead.
// This component is deprecated and will be removed in a future release.

import { Colors } from "../constants/Colors";

type ShelfieViewProps = React.ComponentProps<typeof View>;

const ShelfieView: React.FC<ShelfieViewProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return (
    // <View style={[{backgroundColor: theme.background}, style]} {...props}/>
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
};

export default ShelfieView;
