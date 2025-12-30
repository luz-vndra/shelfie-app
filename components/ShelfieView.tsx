import React from "react";

import { View, SafeAreaView, useColorScheme } from "react-native";

// SafeAreaView
// @deprecated
// — Use react-native-safe-area-context instead.
// This component is deprecated and will be removed in a future release.

import { Colors } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ShelfieViewProps = React.ComponentProps<typeof View>;

const ShelfieView: React.FC<ShelfieViewProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  // ideally,
  const insets = useSafeAreaInsets();
  // - maybe can be used right at the base layout?
  // - even before using the custom Shelfie View?

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ShelfieView;
