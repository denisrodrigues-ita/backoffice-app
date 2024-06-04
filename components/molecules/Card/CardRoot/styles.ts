import { ThemeOptions } from "@rneui/themed";
import { StyleSheet } from "react-native";

export const getStyles = (theme: ThemeOptions) =>
  StyleSheet.create({
    container: {
      padding: 8,
      borderColor: theme.colors.tertiary,
      borderWidth: 1,
      borderRadius: 4,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.colors.secondary,
      gap: 8,
    },
  });
