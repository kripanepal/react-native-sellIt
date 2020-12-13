import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
function NavigationIcon({ name, size, color }) {
    return (
        <MaterialCommunityIcons name={name} size={size} color={color} />

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

})

export default NavigationIcon; 