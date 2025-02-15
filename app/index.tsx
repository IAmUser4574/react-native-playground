import { FlashList } from "@shopify/flash-list";
import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from "expo-router"; // Using Expo Router navigation
import Toast from 'react-native-toast-message';


const DATA = [
  {
    page: 'toastMessage',
    title: 'toast-message',
  },
  {
    page: 'bottomSheetDemo',
    title: 'gorhom/bottom-sheet',
  },
  {
    page: 'test2',
    title: 'Next Item',
  },
  {
    page: 'test3',
    title: 'Next Item',
  },
  {
    page: 'test4',
    title: 'Next Item',
  },
  {
    page: 'test5',
    title: 'Next Item',
  },
  {
    page: 'test6',
    title: 'Next Item',
  },
  {
    page: 'test7',
    title: 'Next Item',
  },
  {
    page: 'test8',
    title: 'Next Item',
  },
  {
    page: 'test9',
    title: 'Next Item',
  },
  {
    page: 'test10',
    title: 'Next Item',
  },
];

type ItemProps = {page: string, title: string};

const Item = ({ page, title }: ItemProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(`./pages/${page}`)}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlashList
          data={DATA}
          renderItem={({ item }) => <Item page={item.page} title={item.title} />}
          keyExtractor={(item) => item.page}
          estimatedItemSize={99}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// {/* <Toast /> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#ddd',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15
  },
  title: {
    fontSize: 32,
  },
});
