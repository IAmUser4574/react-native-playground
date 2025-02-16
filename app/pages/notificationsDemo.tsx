import { View, Text, Alert, StyleSheet } from "react-native";
import * as Notifications from 'expo-notifications';
import StyledButton from "../components/styledButton";
import { useEffect } from "react";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

export default function NotificationsDemo () {

    useEffect(() => {
        // Request permissions on mount
        requestPermissions();
      }, []);
    

    // Function to request notification permissions
    const requestPermissions = async () => {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
        Alert.alert('Permission required', 'Please enable notifications in settings.');
        }
    };


    // Function to trigger a local push notification
    const sendNotification = async () => {
        await Notifications.scheduleNotificationAsync({
        content: {
            title: 'Hello!',
            body: 'This is a test notification.',
            data: { extraData: 'Some data' },
        },
        trigger: null, // Sends immediately
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notifications!</Text>
            <StyledButton text="Local Push" onPress={sendNotification} />
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
        marginBottom: 24
    },
});
