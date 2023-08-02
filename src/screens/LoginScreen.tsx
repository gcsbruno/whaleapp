import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { Title } from '../components/typograph/texts';

type LoginScreenProps = {
    navigation: NavigationProp<any>;
};

const LoginScreen = ({ navigation }: LoginScreenProps): JSX.Element => {

    return (
        <Title>
            Tela de login
        </Title>
        )
}

export default LoginScreen;

