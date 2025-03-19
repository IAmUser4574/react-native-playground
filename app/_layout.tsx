import { Stack } from "expo-router";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <>
    <GestureHandlerRootView>
      <Stack />
      {/* Must place Toast element in root layout */}
      <Toast />
    </GestureHandlerRootView>
      
    </>
  );
}
