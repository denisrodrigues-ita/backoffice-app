import { Link } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
        <Link href="login">Login</Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
