import React from 'react';
import { TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';
import { } from 'react-native-gesture-handler';
import colors from '../config/colors';
import AppText from './AppText';

function PickerItem({ label, onPress }) {

    return (

        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
            <AppText style={styles.text}>{label}</AppText>
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