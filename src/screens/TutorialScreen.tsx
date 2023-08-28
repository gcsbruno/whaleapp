import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { NavigationProp } from '@react-navigation/native';
import Swiper from 'react-native-swiper'
import Button from '../components/buttons/Button';

type TutorialScreenProps = {
    route: any;
    navigation: NavigationProp<any>;
};

const TutorialScreen = ({ route, navigation }: TutorialScreenProps) => {

    const { credential } = route.params;

    const handleFinishTutorial = () => {
        navigation.navigate('Dashboard', { userName: credential.fullName });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/icons/whale.png')} style={styles.logo} />
                <Image source={require('../../public/images/whale.png')} style={styles.logo} />
            </View>
            <Swiper>
                <View style={styles.slide1}>
                    <View style={styles.content}>
                        <Image style={styles.image} source={require('../../public/images/carrousel1.png')} />
                        <Text style={styles.title}> O aplicativo perfeito para planejar sua viagem completa em um único lugar!</Text>
                    </View>
                </View>
                <View style={styles.slide2}>
                    <View style={styles.content}>
                        <Image style={styles.image} source={require('../../public/images/carrousel2.png')} />
                        <Text style={styles.title}> Planeje sua viajem com seus amigos/familiares e separe os gastos </Text>
                    </View>
                </View>
                <View style={styles.slide3}>
                    <View style={styles.content}>
                        <Image style={styles.image} source={require('../../public/images/carrousel3.png')} />
                        <Text style={styles.title}> Tenha as melhores ofertas de hotéis, restaurantes, passeios e muito mais!</Text>
                    </View>
                </View>
                <View style={styles.slide4}>
                    <View style={styles.content}>
                        <Image style={styles.image} source={require('../../public/images/carrousel4.png')} />
                        <Text style={styles.title}> Defina seus gastos e conte com nossas sugestões baseadas no seu perfil.</Text>
                    </View>
                </View>
            </Swiper>
            <Button title='Finalizar' type='cta' onPress={handleFinishTutorial} />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#227BE5'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#227BE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#227BE5'
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#227BE5'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#227BE5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4,
        marginTop: 32,
    },
    logo: {
        marginTop: 24,
        marginHorizontal: 4,
    },
    title: {
        color: '#fff',
        marginLeft: 8,
        fontSize: 18,
    },
    content: {
        alignItems: 'center',
        marginHorizontal: 24,
        marginVertical: 24,
        padding: 24
    },
    image: {
        marginVertical: 32
    }
});

export default TutorialScreen;