import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

function AppTextInput({ icon, width = "100%", ...other }) {
    return (
        <View style={[styles.container, { width }]}>
            { icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium} />}
            <TextInput style={styles.text}{...other} />
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        marginVertical: 10,
        padding: 15,
        alignItems: 'center'
    },
    text: {
        flex: 1, paddingLeft: 10
    }

})
export default AppTextInput;