import React, { useEffect } from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import GoogleButton from '../components/buttons/GoogleButton';
import FacebookButton from '../components/buttons/FacebookButton';
import AppleButton from '../components/buttons/AppleButton';
import EmailButton from '../components/buttons/EmailButton';
import { Paragraph, Subtitle, Title } from '../components/typograph/texts';
import { app, auth } from '../services/firebase/config';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

type InitialScreenProps = {
    navigation: NavigationProp<any>;
};

const InitialScreen = ({ navigation }: InitialScreenProps): JSX.Element => {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: 'AIzaSyAyb1vlupF6Q3XUxivmcOT3HfOVwmhjjJs'
        })
    }, [])
  
    const signInWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { idToken } = await GoogleSignin.signIn();

            const googleCredential = app.auth.GoogleAuthProvider.credential(idToken);
            await app.auth().signInWithCredential(googleCredential)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('O login foi cancelado');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('O login já está em progresso');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Os Play Services não estão disponíveis');
            } else {
                console.error(error.message);
            }
        }
    }

    function handleLoginPress() {
        navigation.navigate('Login');
    }

    const googleIcon: ImageSourcePropType = require('../../assets/icons/google.png')
    const facebookIcon: ImageSourcePropType = require('../../assets/icons/facebook.png')
    const appleIcon: ImageSourcePropType = require('../../assets/icons/apple.png')
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
                        onPress={() => { }}
                    />
                    <FacebookButton
                        title="Continue with Facebook"
                        onPress={() => { }}
                        icon={facebookIcon}
                    />
                    <AppleButton
                        title="Sign in with Apple"
                        onPress={() => { }}
                        icon={appleIcon}
                    />
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
