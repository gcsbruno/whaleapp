import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native'
import Swiper from 'react-native-swiper'
import LoginScreen from './LoginScreen';



const TutorialScreen = () => {
    const navigation = useNavigation();

    const handleFinishTutorial = () => {
        console.log('next page')
    }


    const newLocal = <Text style={styles.tutorialText}>Passo 1: Descrição da etapa 1</Text>;
    return (
        <View style={styles.container}>
            <Swiper style={styles.swiperContainer}>
                {/* Etapa 1 */}
                <View style={styles.slide}>
                  
                </View>

                {/* Etapa 2 */}
                <View style={styles.slide}>

                    <Text style={styles.tutorialText}>Passo 2: Descrição da etapa 2</Text>
                </View>

                {/* Etapa 3 */}
                <View style={styles.slide}>
                    
                    <Text style={styles.tutorialText}>Passo 3: Descrição da etapa 3</Text>
                </View>

                {/* Etapa 4 */}
                <View style={styles.slide}>
                    
                    <Text style={styles.tutorialText}>Passo 4: Descrição da etapa 4</Text>
                </View>
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    swiperContainer: {
        flex: 1,
        width: Dimensions.get('window').width, // Faz o carrossel ocupar a largura da tela
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '80%',
        height: '50%',
        resizeMode: 'contain',
    },
    tutorialText: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default TutorialScreen;