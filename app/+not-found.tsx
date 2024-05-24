import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const NotFoundScreen = () => {
  return (
    <SafeAreaView>
      <Link href="/">Go to Home</Link>
    </SafeAreaView>
  );
};

export default NotFoundScreen;
