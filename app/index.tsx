import { Card } from "@/components/molecules";
import { Header } from "@/components/organisms";
import { useTheme } from "@rneui/themed";
import { View } from "react-native";

const HomeScreen = () => {
  const { theme } = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.secondary, flex: 1 }}>
      <Header />
      <View style={{ padding: 8 }}>
        <Card.Root>
          <Card.Icon icon="people" theme={theme} />
          <Card.Content content={3} title="Convidados" />
        </Card.Root>
      </View>
    </View>
  );
};

export default HomeScreen;
