import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WidgetPreview } from 'react-native-android-widget';
// import CounterWidget from "../components/widgets/counterWidget";
import HelloWidget from "../components/widgets/helloWidget";

export default function AndroidWidget() {
    return (
        <View style={styles.container}>
            <Text>HAI</Text>

            {/* <WidgetPreview
                renderWidget={() => <CounterWidget count={0} />}
                width={320}
                height={200}
            /> */}

            <WidgetPreview
                renderWidget={() => <HelloWidget />}
                width={320}
                height={200}
            />

        </View>
    );

}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'   
    }
});