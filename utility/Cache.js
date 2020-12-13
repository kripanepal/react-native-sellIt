import AsyncStorage from '@react-native-async-storage/async-storage'





const set = async (key, value) => {
    try {
        const item = { value, timeStamp: Date.now() };

        await AsyncStorage.setItem(key, JSON.stringify(item))

    } catch (error) {
        console.log(error)
    }
};



const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        const item = JSON.parse(value)

        if (!item) return null

        return item.value


    } catch (error) {
        console.log(error)
    }
};


export default { set, get }; 