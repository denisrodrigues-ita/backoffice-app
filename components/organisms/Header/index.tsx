import React from "react";
import { Text, View } from "react-native";
import { Header as HeaderUi, useThemeMode } from "@rneui/themed";
import { useTheme } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";
import { getStyles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DdevIcon } from "@/assets/svg";

const Header = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { mode, setMode } = useThemeMode();
  const { theme } = useTheme();
  const styles = getStyles(theme, isVisible);

  const actions: Action[] = [
    {
      label: "Log-out",
      onPress: () => console.log("log-out"),
      icon: "log-out",
    },
    {
      label: `Modo ${mode === "dark" ? "Light" : "Dark"}`,
      onPress: () => setMode(mode === "light" ? "dark" : "light"),
      icon: mode === "dark" ? "sun" : "moon",
    },
  ];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <HeaderUi
        containerStyle={styles.container}
        leftComponent={
          <DdevIcon
            width={80}
            height={40}
            viewBox="0 0 1080 400"
            fill={theme.colors.primary}
          />
        }
        rightComponent={
          <View style={styles.menuView}>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <Feather name="menu" size={32} style={styles.iconMenu} />
            </TouchableOpacity>
            <View style={styles.dropdown}>
              {actions.map((action, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={action.onPress}
                  style={styles.dropdownContent}
                >
                  <Feather name={action.icon} size={24} style={styles.text} />
                  <Text style={styles.text}>{action.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Header;
