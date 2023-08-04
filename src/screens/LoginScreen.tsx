import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { Title } from '../components/typograph/texts';
import { View, StyleSheet, ActivityIndicator, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Image } from 'react-native-elements';

type LoginScreenProps = {
    navigation: NavigationProp<any>;
};


const LoginScreen = ({ navigation }: LoginScreenProps): JSX.Element => {

    const whaleUrl = "../../assets/icons/whale.svg"

    return (
        <SafeAreaView style={{
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        }}>
            <ScrollView style={{ marginHorizontal: 20, }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}></View>
                <Text>
                    WHALE
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logoImage: {
        aspectRatio: 1,
        width: '100%',
        flex: 1
    }
})

export default LoginScreen;

