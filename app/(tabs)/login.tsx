import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Link } from "expo-router";

const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Login</Text>
        <Link href="/">Go to Home</Link>
      </View>
    </SafeAreaView>
  );
};

export default Login;
