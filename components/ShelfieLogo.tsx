import React from "react";

import { Image, useColorScheme } from "react-native";

// image imports as modules
import DarkLogo from "../assets/img/logo_dark.png";
import LightLogo from "../assets/img/logo_light.png";

type ShelfieLogoProps = React.ComponentProps<typeof Image>;

const ShelfieLogo: React.FC<ShelfieLogoProps> = ({ ...props }) => {
  const colorScheme = useColorScheme() ?? "light";

  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return <Image source={logo} {...props} />;
};

export default ShelfieLogo;
