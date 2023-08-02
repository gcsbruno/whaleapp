import React from 'react';
import { ImageBackground, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import GoogleButton from '../components/buttons/GoogleButton';
import FacebookButton from '../components/buttons/FacebookButton';
import AppleButton from '../components/buttons/AppleButton';
import EmailButton from '../components/buttons/EmailButton';
import { Paragraph, Subtitle, Title } from '../components/typograph/texts';
import Icon from 'react-native-vector-icons/FontAwesome'

type InitialScreenProps = {
    navigation: NavigationProp<any>;
};

const InitialScreen = ({ navigation }: InitialScreenProps): JSX.Element => {
    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    return (
        <ImageBackground
            source={require('../../assets/images/initialBackground.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <Title >Bem-vindo(a) ao Whale</Title>
                <Paragraph>
                    Nós ajudamos você a centralizar os dados e valores de sua viagem em um só lugar.
                </Paragraph>
                <View style={styles.authbuttons}>

                    <Subtitle>Vamos começar?</Subtitle>
                    <GoogleButton
                        title="Sign in with Google"
                        onPress={() => { }}
                        icon={<Icon name='google' size={30} />}
                    />
                    <FacebookButton
                        title="Continue with Facebook"
                        onPress={() => { }}
                        icon={<Icon name='facebook' size={30} color={900} />}
                    />
                    <AppleButton
                        title="Sign in with Apple"
                        onPress={() => { }}
                        icon={<Icon name='apple' size={30} color={900} />}
                    />
                    <EmailButton
                        title="Continue com o e-mail"
                        onPress={() => { }}
                        icon={<Icon name='mail' size={30} color={900} />}
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
