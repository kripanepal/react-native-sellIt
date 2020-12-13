import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function NavigatorButton({ onPress }) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPress}>
                <MaterialCommunityIcons name={'plus-circle'} color="white" size={30} />
            </TouchableWithoutFeedback>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        backgroundColor: 'red',
        borderRadius: 40,
        bottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 10,

    },

})

export default NavigatorButton; 