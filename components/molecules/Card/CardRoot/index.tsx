import React from "react";
import { View } from "react-native";
import { useTheme } from "@rneui/themed";
import { getStyles } from "./styles";

const CardRoot: React.FC<CardRootProps> = ({ children }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return <View style={styles.container}>{children}</View>;
};

export default CardRoot;
