import { View, Text, Button, StyleSheet, TouchableOpacity, Linking } from "react-native";
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

export default function ToastMessage() {
    function showDefaultSuccessToast(): void {
        Toast.show({
            type: 'success',
            text1: 'Hello',
            text2: 'This is some something 👋'
          });
    }

    function showDefaultErrorToast(): void {
        Toast.show({
            type: 'error',
            text1: 'Hello',
            text2: 'This is some something wrong man'
          });
    }


    function showStyledSuccessToast() : void {
        Toast.show({
            type: 'successCustom',
            text1: 'You did it right!',
            text1Style: { fontSize: 24 },
            text2: 'Press this toast to learn more...',
            text2Style: { fontSize: 18 },
            onPress() {
                Linking.openURL('https://www.google.com');
            },
        })
    }


    function dismissToast(): void {
        Toast.hide();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>react-native-toast-message</Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={showDefaultSuccessToast}>
                <Text style={styles.buttonText}>Show Default Success Toast</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={showDefaultErrorToast}>
                <Text style={styles.buttonText}>Show Default Error Toast</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={showStyledSuccessToast}>
                <Text style={styles.buttonText}>Show Styled Success Toast</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.dismissButton}
                onPress={dismissToast}>
                <Text style={styles.buttonText}>Dismiss Toast</Text>
            </TouchableOpacity>

            <Toast
                config={{
                successCustom: (props) => (
                    <BaseToast
                        {...props}
                        style={toastStyles.base}
                        text1Style={toastStyles.text1}
                        text2Style={toastStyles.text2}
                    />
                ),
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.25,
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

const toastStyles = StyleSheet.create({
    base: {
        borderLeftColor: 'green',
        borderLeftWidth: 25,
        backgroundColor: '#222', // Custom Background
        borderRadius: 25, // Rounded corners
        maxHeight: 500
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff', // Text color
    },
    text2: {
        fontSize: 14,
        color: '#ddd',
    }
})
