import React from 'react';
import { Image, View, StyleSheet, StatusBar, Text } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ViewImage() {

    return (
        <View style={styles.main}>
            <View style={styles.buttons}>

                <MaterialCommunityIcons name='delete' size={50} color='red' />
                <MaterialCommunityIcons name='close' size={50} color='green' />

            </View>
            <Image style={styles.image} source={{
                uri: 'https://picsum.photos/1000/999',
                width: '100%', height: '80%'
            }} />






        </View>
    );
}

const styles = StyleSheet.create({
    main:
    {
        flex: 1,
        alignItems: 'center'
    },


    one:
    {
        width: 50, height: 50, backgroundColor: colors.primary, left: -50
    },
    two:
    {
        width: 50, height: 50, backgroundColor: colors.secondary, right: -50
    },
    image:
    {
        margin: 70
    },

    buttons:
    {
        marginTop: StatusBar.currentHeight,
        width: '00100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 30

    }

})

export default ViewImage;