import React from 'react';
import { StyleSheet, View, } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import Constants from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo'
function OffLineMessage() {
    const netInfo = useNetInfo()
    if (netInfo.type != 'unknown' && netInfo.isInternetReachable === false)
        return (
            <View style={styles.container} >
                <AppText >No Internet Connection</AppText>

            </View>

        );

    return null;
};
const styles = StyleSheet.create({
    container: {

        backgroundColor: colors.primary,
        height: 30,
        alignItems: 'center',
        width: "100%",
        justifyContent: 'center',
        top: Constants.statusBarHeight,
        zIndex: 1,
        position: 'absolute',
        top: Constants.statusBarHeight,
        elevation: (Platform.OS === 'android') ? 1 : 0
    },

})

export default OffLineMessage; 