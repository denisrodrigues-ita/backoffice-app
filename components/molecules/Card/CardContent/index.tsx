import React from "react";
import { Text, View } from "react-native";
import { getStyles } from "./styles";
import { useTheme } from "@rneui/themed";

const CardContent: React.FC<CardContentProps> = ({ content, title }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

export default CardContent;
