import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotFoundScreen() {
  return (
    <SafeAreaView>
      <Link href="index">Go to Home</Link>
    </SafeAreaView>
  );
}
