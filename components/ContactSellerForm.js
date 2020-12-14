import { Notifications } from 'expo';
import { Alert, Keyboard, StyleSheet, View, } from 'react-native';
import messages from '../api/messages';
import { AppForm, AppFormField, SubmitButton } from './Forms';
import React from 'react';
function ContactSellerForm({ listingsId }) {
    const handleSubmit = async ({ message }, { resetForm }) => {
        Keyboard.dismiss()
        const result = await messages.send(message, listingsId)
        console.log(message, listingsId)
        if (!result.ok) {
            console.log("error", result)
            return Alert.alert("Error", "Could not send the message")
        }

        resetForm()
        Notifications.presentLocalNotificationAsync({
            title: "Awesome",
            body: "Message sent"
        })
    }

    return (
        <AppForm
            initialValues={{ message: '' }}
            onSubmit={handleSubmit}
        >

            <AppFormField
                name='message'
                icon='email'
                autoCapitalize='none'
                autoCorrection={false}
            />

            <SubmitButton title="Send message" />

        </AppForm>
    )

}


export default ContactSellerForm; 