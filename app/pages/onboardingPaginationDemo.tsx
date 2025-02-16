import { useState } from "react";
import { View, StyleSheet } from "react-native";
import OnboardingIndicator from "../components/onboardingIndicator";
import { useRouter } from "expo-router";

const data = [...Array(4).keys()];

export default function onboardingPaginationDemo() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const router = useRouter();

    function handlePageChange(index: number): void {
        setSelectedIndex(index);
        console.log(`handlePageChange on index: ${index}`);
    }

    function handleOnFinished(): void {
        router.push('/');
    }

    return (
        <View style={styles.container}>
            <OnboardingIndicator
                data={data}
                onChange={(index) => handlePageChange(index)}
                selectedIndex={selectedIndex}
                onFinished={handleOnFinished}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
