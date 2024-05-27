import { Stack } from "expo-router";

const LoginLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="firstAcess" />
      <Stack.Screen name="singin" />
    </Stack>
  );
};

export default LoginLayout;
