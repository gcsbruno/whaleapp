import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Button from '../components/buttons/Button';

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

                <Text>
                    Faça Login
                </Text>

                <TextInput>
                    E-mail
                </TextInput>
                <TextInput>
                    Senha:
                </TextInput>

                <Button
                    title="Fazer Login"
                    onPress={() => { }}
                    type='cta'
                />

                <Text>
                    Não tem uma conta ainda?
                </Text>

                <TouchableOpacity>
                    <Text>
                        Cadastre-se
                    </Text>
                </TouchableOpacity>

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

