import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Launch screen — shows first when the app opens */}
      <Stack.Screen name="launch" />

      {/* Onboarding screen — appears after launch */}
      <Stack.Screen name="onboarding" />

      {/* Auth screens — from onboarding buttons */}
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />

      {/* Main app (only after login/signup) */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
