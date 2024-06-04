import { ThemeOptions } from "@rneui/themed";
import { StyleSheet } from "react-native";

export const getStyles = (theme: ThemeOptions, isVisible: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.colors.secondary,
      zIndex: 1,
    },
    dropdown: {
      flexDirection: "column",
      alignItems: "flex-end",
      backgroundColor: theme.colors.primary,
      position: "absolute",
      top: 32,
      right: 4,
      gap: 8,
      width: 140,
      display: `${isVisible ? "flex" : "none"}`,
      borderRadius: 4,
    },
    dropdownContent: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: 12,
      width: "100%",
      textAlign: "right",
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
