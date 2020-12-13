import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Alert, TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function ImageInput({ givenUri, onChange }) {

    useEffect(() => {
        askPermission();
    }, [])

    const askPermission = async () => {
        const result = await ImagePicker.requestCameraRollPermissionsAsync();
        !result.granted && alert("Enable permissions")

    }

    const getImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.cancelled) { onChange(result.uri) }
        } catch (error) {
            console.log(error)
        }
    }


    const handleTouch = () => {
        if (!givenUri) {
            getImage()
        }
        else {

            Alert.alert("Delete this image?", "Are you sure you want to delete", [
                {
                    text: "No",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Delete", onPress: () => onChange(null)
                }
            ])
        }


    }

    return (

        <TouchableWithoutFeedback onPress={handleTouch}>
            <View style={styles.container} >
                {!givenUri && <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />}
                {givenUri && <Image source={{ uri: givenUri }} style={styles.image} />}

            </View>
        </TouchableWithoutFeedback>

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100, width: 100,
        overflow: 'hidden'
    },
    image: {
        width: '100%', height: '100%'
    }


})

export default ImageInput;