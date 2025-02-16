import { Stack } from "expo-router";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <>
      <Stack />
      {/* Must place Toast element in root layout */}
      <Toast />
    </>
  );
}
