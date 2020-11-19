import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';

function ErrorMessages({ error, show }) {

    if (!error || !show) return null
    return (
        <AppText style={styles.error}>
            {error}
        </AppText>
    );
}

const styles = StyleSheet.create({
    error:
    {
        color: 'red',
        fontSize: 10
    }
})

export default ErrorMessages;