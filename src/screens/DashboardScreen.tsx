import React from 'react';
import { NavigationProp, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, SafeAreaView, Image, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { TopMenu } from '../components/menu/TopMenu';
import { Icon } from 'react-native-elements';


type DashboardScreenProps = {
    route: any;
    navigation: NavigationProp<any>;
};

const DashboardScreen = ({ route, navigation }: DashboardScreenProps) => {

    /**   const { userName } = route.params
    
        function verifica() {
            console.log(userName.fullName)
        }
    */

    const whaleLogo = <Image source={require('../../public/images/whale.png')} />
    const categories = ['Passeios', 'Tours', 'Restaurantes', 'Praias']
    const Stack = createStackNavigator();


    return (

        <SafeAreaView style={{
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        }}>

            <View style={styles.container}>
                <View style={styles.menuBar}>
                    <Icon style={styles.icons} color={'#fff'} name='menu' />
                    <View style={styles.titleContainer}>
                        <TopMenu logo={whaleLogo} />
                    </View>
                    <Icon style={styles.icons} color={'#fff'} name='search' />
                    <Icon style={styles.icons} color={'#fff'} name='notifications' />
                </View>
                <View style={styles.mainCard}>
                    <Text style={styles.text}>Comece planejar a sua próxima aventura</Text>
                    <TouchableOpacity style={styles.cardButton}>
                        <Text style={styles.buttonText}>Planejar minha viagem</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.categories}>
                <Text style={styles.exploreText}>Explore</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.buttonsContainer}
                >
                    <TouchableOpacity style={styles.cardButton}>
                        <Text style={styles.buttonText}>Passeios</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardButton}>
                        <Text style={styles.buttonText}>Tours</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardButton}>
                        <Text style={styles.buttonText}>Restaurantes</Text>
                    </TouchableOpacity>
                    {/* Add more Touchable components as needed */}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'left',
        color: '#fff',
        width: '60%',
        marginTop: 50,
        marginLeft: 15
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    menuBar: {
        backgroundColor: '#0038B9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: "100%"
    },
    icons: {
        marginHorizontal: 2
    },
    mainCard: {
        margin: 40,
        padding: 10,
        backgroundColor: '#0038B9',
        width: "80%",
        height: 220,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardButton: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        elevation: 3,
        marginTop: 20,
        marginRight: 100,
        marginLeft: 10
    },
    buttonText: {
        color: '#0038B9',
        fontSize: 16,
    },
    exploreText: {
        fontSize: 24,
        color: '#0038B9',
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    categories: {
        marginHorizontal: 4,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
});

export default DashboardScreen