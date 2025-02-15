import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import Snackbar from 'react-native-snackbar';

export default function SnackbarDemo() {
    // function handleMakeSnackbar(): void {
    //     // throw new Error('Function not implemented.');
    //     Snackbar.show({
    //         text: 'Hello world',
    //         duration: Snackbar.LENGTH_SHORT,
    //       });
    // }

    return (
        <View>
            <Text style={styles.text}>some sort of snackbar goes here</Text>
            
            {/* <TouchableOpacity 
                style={styles.button}
                onPress={handleMakeSnackbar}>
                <Text style={styles.buttonText}>Make Snackbar</Text>
            </TouchableOpacity> */}

            {/* <TouchableOpacity 
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
            </TouchableOpacity> */}
        </View>
    );
};

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
