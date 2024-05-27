import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Link } from "expo-router";

const FirstAcess = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>FirstAcess</Text>
        <Link href="/login/singin">Go to Home / first</Link>
      </View>
    </SafeAreaView>
  );
};

export default FirstAcess;
