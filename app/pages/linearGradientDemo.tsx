import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

// https://docs.expo.dev/versions/latest/sdk/linear-gradient/

export default function LinearGradientDemo() {
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#4fe71a', '#6add8a', '#30c3d4', '#1adbe7']}
                locations={[0, 0.2, 0.4, 1]}
                dither
                start={{ x: 0.1, y: 0.3 }}
                style={styles.background}>      

                <Text style={styles.text}>HELLO</Text>
            </LinearGradient>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    //   backgroundColor: 'orange',
    },
    background: {
        flex: 1, // Makes the gradient take up the full container
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    text: {
        textAlign: 'center', 
        justifyContent: 'center', 
        marginTop: 125, 
        fontSize: 24
    },
  });
