import { Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Singin = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Singin</Text>
        <Link href="/login/firstAcess">Go to Home / singin</Link>
      </View>
    </SafeAreaView>
  );
};

export default Singin;
