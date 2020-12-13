import * as Location from 'expo-location'
import { useState, useEffect } from 'react'

const useLocation = () => {
    const [location, setLocation] = useState();
    useEffect(() => {
        getLocation()
    }, [])

    const getLocation = async () => {
        try {
            const { granted } = await Location.requestPermissionsAsync()
            if (!granted) return;
            const results = await Location.getLastKnownPositionAsync()
            const { latitude, longitude } = results.coords
            setLocation({ latitude, longitude })
        } catch (error) {
            console.log(error)
        }
    }

    return location
}

export default useLocation;