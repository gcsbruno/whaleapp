import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import GoogleButton from '../components/buttons/GoogleButton';
import FacebookButton from '../components/buttons/FacebookButton';
import AppleButton from '../components/buttons/AppleButton';
import EmailButton from '../components/buttons/EmailButton';
import { Paragraph, Subtitle, Title } from '../components/typograph/texts';
import * as AppleAuthentication from 'expo-apple-authentication'

type InitialScreenProps = {
    navigation: NavigationProp<any>;
};

const InitialScreen = ({ navigation }: InitialScreenProps) => {

    function handleLoginPress() {
        navigation.navigate('Tutorial');
    }

    const handleSignIn = async () => {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
            });
            const credentialState = await AppleAuthentication.getCredentialStateAsync(credential.user);

            if (credentialState === AppleAuthentication.AppleAuthenticationCredentialState.AUTHORIZED) {
                navigation.navigate('Tutorial', { credential })
                console.log(credential.email)
            }
        } catch (e) {
            if (e.code === 'ERR_REQUEST_CANCELED') {
                console.log(e)
            }
        }
    }

    const googleIcon: ImageSourcePropType = require('../../assets/icons/google.png')
    const facebookIcon: ImageSourcePropType = require('../../assets/icons/facebook.png')
    const mailIcon: ImageSourcePropType = require('../../assets/icons/mail.png')

    return (
        <ImageBackground
            source={require('../../assets/images/initialBackground.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <Title>Bem-vindo(a) ao Whale</Title>
                <Paragraph>
                    Nós ajudamos você a centralizar os dados e valores de sua viagem em um só lugar.
                </Paragraph>
                <View style={styles.authbuttons}>
                    <Subtitle>Vamos começar?</Subtitle>
                    <GoogleButton
                        icon={googleIcon}
                        title="Sign in with Google"
                        onPress={handleLoginPress}
                    />
                    <FacebookButton
                        title="Continue with Facebook"
                        onPress={() => { }}
                        icon={facebookIcon}
                    />
                    <AppleButton
                        onPress={handleSignIn} />
                    <EmailButton
                        title="Continue com o e-mail"
                        onPress={() => { }}
                        icon={mailIcon}
                    />

                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={handleLoginPress}>
                        <Subtitle >Já tem uma conta? Faça Login</Subtitle>
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    authbuttons: {
        marginTop: 32
    },
    footer: {
        marginTop: 24
    }
});

export default InitialScreen;
