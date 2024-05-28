import { ThemeOptions } from "@rneui/themed";
import { StyleSheet } from "react-native";

export const getStyles = (theme: ThemeOptions, isVisible: boolean) =>
  StyleSheet.create({
    safeAreaView: {
      backgroundColor: theme.colors.primary,
    },
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.colors.secondary,
    },
    dropdown: {
      flexDirection: "column",
      alignItems: "flex-end",
      backgroundColor: theme.colors.primary,
      position: "absolute",
      top: 28,
      right: 4,
      gap: 8,
      width: 100,
      display: `${isVisible ? "flex" : "none"}`,
    },
    dropdownContent: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: 8,
      gap: 4,
    },
    menuView: {
      position: "relative",
      backgroundColor: "transparent",
      color: theme.colors.secondary,
    },
    iconMenu: {
      color: theme.colors.primary,
    },
    text: {
      color: theme.colors.secondary,
      fontSize: 16,
    },
  });
