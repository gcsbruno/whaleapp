import React from 'react';
import { NavigationProp, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, SafeAreaView, Image, Text, StatusBar } from 'react-native';
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
                    <Text style={styles.text}>Imagem</Text>
                </View>
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
        fontSize: 24,
        fontWeight: 'bold',
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
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default DashboardScreen