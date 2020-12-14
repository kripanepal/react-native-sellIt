import { useEffect } from 'react';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'
import expoPushToken from '../api/expoPushToken';



function useNotification() {

    useEffect(() => {
        registerForPushNotofications()
        Notifications.addListener(notification => console.log(notification))
    }, [])

    const registerForPushNotofications = async () => {

        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            if (!permission.granted) return
            const token = await Notifications.getExpoPushTokenAsync()
            expoPushToken.register(token.data)
        } catch (error) {
            console.log(error)
        }

    }

};


export default useNotification; 