import React from 'react';
import { TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';
import { } from 'react-native-gesture-handler';
import colors from '../config/colors';
import AppText from './AppText';

function PickerItem({ item, onPress }) {

    return (

        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    container: {

    },
    text: {
        padding: 20,

    }
})
export default PickerItem;