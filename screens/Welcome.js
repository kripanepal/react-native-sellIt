import React from 'react';
import { Image, View, StyleSheet, StatusBar, Text } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function Welcome() {

    return (
        <View style={styles.main}>
            <Image style={styles.background} blurRadius={1} source={{
                uri: 'https://picsum.photos/1000/999',
                width: '100%', height: '100%'
            }} />

            <View style={styles.content}>
                <Image style={styles.logo} resizeMode={"contain"} source={require('../assets/icon.png')} />
                <Text style={styles.tagLine}>Sell it!</Text>

            </View>
            <View style={styles.buttons}>
                <AppButton title={'Login'} color='primary' />
                <AppButton title={'Register'} color='secondary' />


            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    main:
    {
        flex: 1,
        alignItems: 'center'
    },

    background:
    {
        position: 'absolute'
    },
    content:
    {
        marginTop: StatusBar.currentHeight + 50,
        alignItems: 'center'

    },
    logo:
    {
        width: 100, height: 100
    },
    tagLine:
    {
        fontSize: 25,
        paddingVertical: 20,
        marginTop: 20,
        fontWeight: "bold",
        color: colors.white
    },

    buttons:
    {
        flex: 1,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 20
    }

})

export default Welcome;