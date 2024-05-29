import { Header } from "@/components/organisms";
import { Link } from "expo-router";
import { View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <View>
        <Text>Home Screen</Text>
        <Link href="/login/firstAcess">Login</Link>
      </View>
    </>
  );
};

export default HomeScreen;
