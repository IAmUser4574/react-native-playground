import { FlashList } from "@shopify/flash-list";
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from "expo-router"; // Using Expo Router navigation


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
    page: 'notificationsDemo',
    title: 'Notifications',
  },
  {
    page: 'onboardingPaginationDemo',
    title: 'Onboarding Pagination',
  },
  {
    page: 'linearGradientDemo',
    title: 'Linear Gradient',
  },
  {
    page: 'snackbarDemo',
    title: 'TODO - Snackbar',
  },
  {
    page: 'animatedCarouselDemo',
    title: 'Carousel Swipe',
  },
  {
    page: 'stripeDemo',
    title: 'Stripe',
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
