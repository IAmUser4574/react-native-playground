import { FlashList } from "@shopify/flash-list";
import { useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter, useNavigation } from "expo-router"; // Using Expo Router navigation


const DATA = [
  {
    page: 'toastMessage',
    title: 'toast message',
  },
  {
    page: 'bottomSheetDemo',
    title: 'gorhom bottom sheet',
  },
  {
    page: 'notificationsDemo',
    title: 'push notifications',
  },
  {
    page: 'onboardingPaginationDemo',
    title: 'onboarding pagination',
  },
  {
    page: 'linearGradientDemo',
    title: 'linear gradient',
  },
  {
    page: 'animatedCarouselDemo',
    title: 'carousel swipe',
  },
  {
    page: 'autocompleteInput',
    title: 'autocomplete input',
  },
  {
    page: 'gestureHandlerSwipeable',
    title: 'flatlist gestures',
  },
  {
    page: 'snackbarDemo',
    title: 'TODO - snackbar',
  },
  {
    page: 'stripeDemo',
    title: 'TODO - stripe',
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

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "React Native Playground",
      headerStyle: { },
      headerTintColor: "#000000",
      headerTitleStyle: { fontWeight: "bold", fontSize: 24 }
    });
  }, [navigation]);

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
    backgroundColor: "#f5f5f5", // Light gray background
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  item: {
    backgroundColor: "#e5e5e5",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16, // Extra margin to prevent shadow cutoff
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4, // Shadow for Android
  },
  title: {
    fontSize: 32,
  },
});
