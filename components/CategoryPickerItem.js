import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem({ onPress, item }) {
    return (


        <View style={styles.container} >
            <TouchableOpacity onPress={onPress}>
                <Icon
                    backgroundColor={item.backgroundColor}
                    name={item.icon}
                    size={50}
                />
                <AppText style={styles.label}>{item.label}</AppText>

            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        maxWidth: '33%',

    },
    label:
    {
        marginTop: 5,
        textAlign: 'center'
    }
})
export default CategoryPickerItem;