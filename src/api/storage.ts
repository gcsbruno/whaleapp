import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken =async (token) => {
    try {
        await AsyncStorage.setItem('token', token);
    } catch (error) {
        console.log('error', error)
    }
};

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        return token;
    } catch (error) {
        console.log('error', error)
    }
}