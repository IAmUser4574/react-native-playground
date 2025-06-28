import { useCallback, useMemo, useRef } from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

// https://gorhom.dev/react-native-bottom-sheet/components/bottomsheetview

export default function BottomSheetDemo() {

  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // button handlers
  const handleSheetChange = useCallback((index: number) => {
    console.log("handleSheetChange", index);
  }, []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  return (
    <GestureHandlerRootView style={styles.container}>
      <TouchableOpacity
        onPress={() => handleSnapPress(2)}
        style={styles.button}>
        <Text style={styles.buttonText} >Snap To 90%</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSnapPress(1)}
        style={styles.button}>
        <Text style={styles.buttonText} >Snap To 50%</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSnapPress(0)}
        style={styles.button}>
        <Text style={styles.buttonText} >Snap To 25%</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleClosePress()}
        style={styles.dismissButton}>
        <Text style={styles.buttonText} >Dismiss</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        onChange={handleSheetChange}
      >
        <BottomSheetView style={styles.bottomsheet}>
          <Text>Awesome 🔥</Text>
          <Text>by @gorhom/bottom-sheet</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 24,
      paddingHorizontal: 50,
      gap: 20,
    // backgroundColor: 'grey',
  },
  bottomsheet: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
  text: {
      textAlign: 'center',
      fontSize: 24,
      marginTop: 128,
      marginBottom: 24
  },
  button: {
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      backgroundColor: '#2471a3',

  },
  buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
  },
  dismissButton: {
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      backgroundColor: '#c0392b',
  }
});
