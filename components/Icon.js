import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function Icon({ name, size = 40, backgroundColor = 'black', color = 'white' }) {

    return (
        <View style={{
            width: size,
            height: size,
            backgroundColor,
            borderRadius: size / 2,
            justifyContent: 'center',
            alignItems: 'center'

        }}>
            <MaterialCommunityIcons name={name} color={color} size={size / 2} />
        </View>
    );
}






export default Icon;