import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function AppText({ children, style, ...other }) {
    return (
        <Text style={[styles.text, style]} {...other}>
            {children}
        </Text>
    );
}
const styles = StyleSheet.create({
    text:
    {
        fontSize: 20
    }
})

export default AppText;