import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function ItemSeparator(props) {
    return (
        <View style={styles.separator}>

        </View>
    );
}

const styles = StyleSheet.create({
    separator: {
        width: '100%', height: 3,
        backgroundColor: colors.light
    }
})
export default ItemSeparator;