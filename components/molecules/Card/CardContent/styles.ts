import { ThemeOptions } from "@rneui/themed";
import { StyleSheet } from "react-native";

export const getStyles = (theme: ThemeOptions) =>
  StyleSheet.create({
    text: {
      color: theme.colors.tertiary,
      fontSize: 16,
      fontWeight: "bold",
    },
  });
