import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Header as HeaderUi, useThemeMode } from "@rneui/themed";
import { useTheme } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";
import { getStyles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { mode, setMode } = useThemeMode();
  const { theme } = useTheme();
  const styles = getStyles(theme, isVisible);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <HeaderUi
        containerStyle={styles.container}
        leftComponent={<Text>Ddev</Text>}
        rightComponent={
          <View style={styles.menuView}>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <Feather
                name="menu"
                size={24}
                style={styles.iconMenu}
                onPress={() => setIsVisible(true)}
              />
            </TouchableOpacity>
            <View style={styles.dropdown}>
              <Text style={[styles.dropdownContent, styles.text]}>test 1a</Text>
              <Text style={[styles.dropdownContent, styles.text]}>teste</Text>
              <View style={styles.dropdownContent}>
                {mode === "dark" ? (
                  <Feather name="moon" size={24} style={styles.text} />
                ) : (
                  <Feather name="sun" size={24} style={styles.text} />
                )}
                <Text
                  style={styles.text}
                  onPress={() => setMode(mode === "dark" ? "light" : "dark")}
                >
                  Tema
                </Text>
              </View>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Header;
