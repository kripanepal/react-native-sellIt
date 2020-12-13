import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'

const key = 'authToken'
const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken)
    } catch (error) {
        console.log('Error storing the token')
    }
}

const getToken = async () => {
    try {
        const token = await SecureStore.getItemAsync(key)
        return token

    } catch (error) {
        console.log('Error getting the token')
    }
}
const deleteToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key)

    } catch (error) {
        console.log('Error removing the token')
    }
}

const getUser = async () => {
    const token = await getToken()
    if (!token) return null
    return (jwtDecode(token))

}

export default { deleteToken, storeToken, getUser, getToken }

