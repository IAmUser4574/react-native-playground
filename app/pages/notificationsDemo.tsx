import { View, Text, Alert, StyleSheet } from "react-native";
import * as Notifications from 'expo-notifications';
import StyledButton from "../components/styledButton";
import { useEffect } from "react";

// https://docs.expo.dev/versions/latest/sdk/notifications/

// Set how notifications are handled when received
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function NotificationsDemo() {
  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Please enable notifications in settings.');
    }
  };

  const sendNotification = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Hello!',
        body: 'This is an immediate notification.',
      },
      trigger: null, // Sends immediately
    });
  };

  const sendTimedNotification = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Hello!',
        body: 'This is a timed notification.',
      },
      trigger: {
        seconds: 2,
        repeats: false,
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      },
    });

    Alert.alert("Notification Scheduled", "A notification will appear in 15 seconds.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notifications!</Text>
      <StyledButton text="Immediate Local Push" onPress={sendNotification} />
      <StyledButton text="Timed (15s) Local Push" onPress={sendTimedNotification} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    padding: 50,
    gap: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 128,
    marginBottom: 24,
  },
});
