import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

function Screen(props) {
    return (
        <View style={[styles.screen, props.style]}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        marginTop: StatusBar.currentHeight,
        flex: 1
    }
})

export default Screen;