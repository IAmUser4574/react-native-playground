import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, TextStyle, ViewStyle } from 'react-native';

interface StyledButtonProps {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const StyledButton: React.FC<StyledButtonProps> = ({ text, onPress, style, textStyle }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: '#2471a3',
    } as ViewStyle,
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    } as TextStyle,
});

export default StyledButton;
